<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Lütfen formu eksiksiz doldurun ve tekrar deneyin.";
        exit;
    }
    
    $recipient = "your-email@example.com"; // Kendi e-posta adresinizi buraya yazın
    $subject = "İletişim Formundan Yeni Mesaj: $name";
    $email_content = "İsim: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mesaj:\n$message\n";
    
    $headers = "From: $name <$email>";
    
    if (mail($recipient, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Teşekkürler! Mesajınız gönderildi.";
    } else {
        http_response_code(500);
        echo "Mesajınız gönderilirken bir hata oluştu.";
    }
} else {
    http_response_code(403);
    echo "Form gönderiminde bir sorun oluştu.";
}
?>
