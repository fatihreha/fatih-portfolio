/**
 * İletişim hata teşhis aracı
 * Bu betik mesaj gönderimi sırasında oluşan hataları teşhis etmenize yardımcı olur.
 */

// Basit ağ bağlantısı testi
async function checkNetworkConnection() {
  try {
    const response = await fetch('https://www.google.com');
    return response.ok ? 'Ağ bağlantısı çalışıyor.' : 'Ağ bağlantısı sorunlu olabilir.';
  } catch (error) {
    return `Ağ bağlantısı hatası: ${error.message}`;
  }
}

// API sunucu durumu kontrolü 
async function checkAPIStatus(apiURL) {
  try {
    const response = await fetch(apiURL, { method: 'OPTIONS' });
    return response.ok ? 'API erişilebilir.' : `API yanıt kodu: ${response.status}`;
  } catch (error) {
    return `API bağlantı hatası: ${error.message}`;
  }
}

// Rate limit kontrolü
function checkRateLimiting(errorMessage) {
  const rateLimitTerms = ['rate limit', 'too many requests', '429'];
  return rateLimitTerms.some(term => errorMessage.toLowerCase().includes(term)) ? 
    'Hız sınırlaması olabilir. Biraz bekleyin ve tekrar deneyin.' : 'Hız sınırlaması gözükmüyor.';
}

// Mesaj gönderme testi
async function testMessageSending(messageEndpoint, testMessage = {name: "Test Kullanıcı", email: "test@example.com", message: "Bu bir test mesajıdır."}) {
  try {
    console.log('Test mesajı gönderiliyor...');
    
    const response = await fetch(messageEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testMessage)
    });
    
    const data = await response.json().catch(() => ({}));
    
    if (response.ok) {
      console.log('✅ Test mesajı başarıyla gönderildi!');
      return { success: true, status: response.status, data };
    } else {
      console.error('❌ Mesaj gönderimi başarısız:', response.status, data);
      return { success: false, status: response.status, error: data };
    }
  } catch (error) {
    console.error('❌ Mesaj gönderimi hatası:', error.message);
    return { success: false, error: error.message };
  }
}

// CORS hatası kontrolü
function checkForCORSIssues(error) {
  const corsErrors = ["cors", "origin", "cross", "access-control"];
  const isCORSError = corsErrors.some(term => error.toLowerCase().includes(term));
  
  if (isCORSError) {
    return 'CORS hatası tespit edildi. API sunucunuzun CORS ayarları doğru yapılandırılmalıdır.';
  }
  return 'CORS hatası tespit edilmedi.';
}

// Form doğrulama simülasyonu
function validateMessageForm(formData) {
  const issues = [];
  
  if (!formData.name || formData.name.length < 2) {
    issues.push('İsim alanı 2 karakterden uzun olmalıdır');
  }
  
  if (!formData.email || !formData.email.includes('@')) {
    issues.push('Geçerli bir email adresi girilmelidir');
  }
  
  if (!formData.message || formData.message.length < 10) {
    issues.push('Mesaj en az 10 karakter olmalıdır');
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
}

// Tüm teşhisleri çalıştır
async function runDiagnostics(apiURL = 'https://api.example.com', messageEndpoint = 'https://api.example.com/messages') {
  console.log('Teşhis başlatılıyor...');
  console.log('------------------------');
  
  // Temel ağ kontrolü
  const networkStatus = await checkNetworkConnection();
  console.log(networkStatus);
  
  // API durumu kontrolü
  const apiStatus = await checkAPIStatus(apiURL);
  console.log(apiStatus);
  
  // Mesaj gönderme testi
  console.log('\nMesaj gönderme testi yapılıyor...');
  const testFormData = {
    name: "Test Kullanıcı", 
    email: "test@example.com", 
    message: "Bu bir test mesajıdır."
  };
  
  // Form validasyonu
  const validation = validateMessageForm(testFormData);
  if (!validation.isValid) {
    console.log('❌ Form validasyon sorunları:');
    validation.issues.forEach(issue => console.log(`- ${issue}`));
  } else {
    console.log('✅ Form validasyonu başarılı');
    
    // Mesaj göndermeyi test et
    const sendResult = await testMessageSending(messageEndpoint, testFormData);
    
    // Hata varsa CORS kontrolü yap
    if (!sendResult.success && sendResult.error) {
      console.log(checkForCORSIssues(sendResult.error));
    }
  }
  
  console.log('\n"Failed to send message" hatası çözüm önerileri:');
  console.log('1. Ağ bağlantınızın aktif olduğundan emin olun');
  console.log('2. İletişim form verilerinizin doğru formatta olduğunu kontrol edin');
  console.log('3. Doğru API endpoint adresini kullandığınızdan emin olun');
  console.log('4. Tarayıcı konsolunda (F12) ağ isteklerini ve hataları kontrol edin');
  console.log('5. Sunucu loglarını kontrol edin (erişiminiz varsa)');
  console.log('6. CORS ayarlarının doğru yapılandırıldığından emin olun');
  console.log('7. API hız limiti (rate limit) aşılmış olabilir, daha sonra tekrar deneyin');
}

// İletişim formunu düzeltmek için kullanılabilecek yardımcı fonksiyon
function debugContactForm(formElement) {
  console.log('İletişim formu hata ayıklama başlatılıyor...');
  
  if (!formElement) {
    console.error('Form elementi bulunamadı!');
    return;
  }
  
  // Form elemanlarını kontrol et
  const inputs = formElement.querySelectorAll('input, textarea');
  console.log(`Form içinde ${inputs.length} giriş alanı bulundu`);
  
  // Form gönderim olayını izle
  formElement.addEventListener('submit', function(e) {
    console.log('Form gönderim olayı tetiklendi');
    const formData = new FormData(formElement);
    const formValues = {};
    
    for(let [key, value] of formData.entries()) {
      formValues[key] = value;
      console.log(`Alan: ${key}, Değer: ${value}`);
    }
    
    const validation = validateMessageForm(formValues);
    if (!validation.isValid) {
      console.warn('Form validasyon hataları:', validation.issues);
    }
  });
  
  console.log('Form izleniyor. Formu gönderdiğinizde detaylı bilgi görüntülenecek.');
}

// API URL ve mesaj endpoint'ini kendi adresinizle değiştirin
// runDiagnostics('https://sizin-api-adresiniz.com', 'https://sizin-api-adresiniz.com/messages');

// İletişim formunuzu hata ayıklamak için aşağıdaki kodu kullanın:
// const contactForm = document.getElementById('contact-form'); // Form ID'nizi buraya yazın
// debugContactForm(contactForm);
