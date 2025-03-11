<?php
/**
 * İletişim Formu API - Mesaj Gönderme İşlemi
 * 
 * Bu PHP dosyası, iletişim formundan gelen verileri işler ve
 * e-posta yoluyla ilgili kişiye iletir.
 */

// CORS ayarları (gerekirse)
header("Access-Control-Allow-Origin: *"); // Tüm kaynaklara izin vermek yerine sadece kendi domain'inizi belirtin
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// OPTIONS isteği kontrolü (CORS ön kontrolü için)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Sadece POST isteklerini kabul et
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Sadece POST istekleri desteklenmektedir.']);
    exit;
}

// JSON verilerini al
$json = file_get_contents('php://input');
$data = json_decode($json);

// Veri doğrulama
if (!$data) {
    http_response_code(400); // Bad Request
    echo json_encode(['success' => false, 'message' => 'Geçersiz JSON verisi.']);
    exit;
}

// Zorunlu alanları kontrol et
if (empty($data->name) || empty($data->email) || empty($data->message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ad, e-posta ve mesaj alanları zorunludur.']);
    exit;
}

// Email formatını doğrula
if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Geçerli bir e-posta adresi giriniz.']);
    exit;
}

// Minimum içerik uzunluğunu kontrol et
if (strlen($data->name) < 2) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'İsim en az 2 karakter olmalıdır.']);
    exit;
}

if (strlen($data->message) < 10) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Mesaj en az 10 karakter olmalıdır.']);
    exit;
}

// ------------------------------------------
// Spam kontrolü (örnek)
// ------------------------------------------
$isSuspectedSpam = false;
$spamTriggers = ['casino', 'viagra', 'lottery', 'free money', 'you won'];

foreach ($spamTriggers as $trigger) {
    if (stripos($data->message, $trigger) !== false) {
        $isSuspectedSpam = true;
        break;
    }
}

if ($isSuspectedSpam) {
    // Opsiyonel: Spam şüphesi olduğunda da "başarılı" yanıtı ver
    // ama e-posta gönderme veya veritabanına kaydetme
    sleep(1); // Bot tespiti zorlaştırmak için hafif gecikme
    echo json_encode(['success' => true, 'message' => 'Mesajınız alındı, teşekkürler.']);
    exit;
}

// ------------------------------------------
// E-posta gönderme işlemi
// ------------------------------------------
$to = 'your-email@example.com'; // Kendi e-posta adresinizi yazın
$subject = 'İletişim Formundan Mesaj: ' . htmlspecialchars($data->name);
$headers = [
    'From' => 'website@example.com',
    'Reply-To' => $data->email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/html; charset=UTF-8'
];

// Email içeriği (HTML)
$message = "
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h2 { color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 10px; }
    .details { margin-bottom: 20px; }
    .message-box { background: #f9f9f9; padding: 15px; border-left: 4px solid #2c3e50; }
  </style>
</head>
<body>
  <div class='container'>
    <h2>İletişim Formu Mesajı</h2>
    <div class='details'>
      <p><strong>İsim:</strong> " . htmlspecialchars($data->name) . "</p>
      <p><strong>E-posta:</strong> " . htmlspecialchars($data->email) . "</p>
      <p><strong>Gönderim tarihi:</strong> " . date('d.m.Y H:i:s') . "</p>
    </div>
    <div class='message-box'>
      <p><strong>Mesaj:</strong></p>
      <p>" . nl2br(htmlspecialchars($data->message)) . "</p>
    </div>
  </div>
</body>
</html>
";

// E-posta göndermeyi dene
try {
    $mailSent = mail($to, $subject, $message, implode("\r\n", $headers));
    
    if ($mailSent) {
        // Başarılı yanıt
        echo json_encode(['success' => true, 'message' => 'Mesajınız başarıyla gönderildi.']);
    } else {
        // E-posta gönderilemedi
        http_response_code(500); // Internal Server Error
        echo json_encode(['success' => false, 'message' => 'Mesaj gönderilirken bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz.']);
        
        // Opsiyonel: Hata günlüğüne kaydet
        error_log('E-posta gönderilemedi: ' . json_encode(['name' => $data->name, 'email' => $data->email]));
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.']);
    
    // Hatayı günlüğe kaydet
    error_log('İletişim formu hatası: ' . $e->getMessage());
}
?>
