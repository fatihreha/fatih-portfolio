/**
 * Portfolio İletişim Formu İşlemleri
 */

class ContactFormManager {
  constructor(formSelector, options = {}) {
    // Form elementini seç
    this.form = document.querySelector(formSelector);
    if (!this.form) {
      console.error(`Form bulunamadı: ${formSelector}`);
      return;
    }
    
    // Varsayılan ayarlar
    this.settings = {
      endpoint: options.endpoint || '/api/contact',
      recaptchaSiteKey: options.recaptchaSiteKey || '',
      redirectUrl: options.redirectUrl || '',
      statusMessageSelector: options.statusMessageSelector || '.form-status',
      debugMode: options.debugMode || false
    };
    
    // Durum mesajı elementi
    this.statusElement = document.querySelector(this.settings.statusMessageSelector);
    
    // Event listener'ları ekle
    this.setupEventListeners();
    
    if (this.settings.debugMode) {
      console.log('İletişim formu başlatıldı', this.settings);
    }
  }
  
  // Event listener'ları ayarla
  setupEventListeners() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    
    // Input alanlarında gerçek zamanlı validasyon
    this.form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
  }
  
  // Alan validasyonu
  validateField(field) {
    const name = field.getAttribute('name');
    const value = field.value.trim();
    
    let error = '';
    
    switch(name) {
      case 'name':
        if (value.length < 2) {
          error = 'İsim en az 2 karakter olmalıdır';
        }
        break;
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = 'Geçerli bir e-posta adresi girin';
        }
        break;
        
      case 'message':
        if (value.length < 10) {
          error = 'Mesaj en az 10 karakter olmalıdır';
        }
        break;
    }
    
    // Hata varsa göster
    if (error) {
      this.showFieldError(field, error);
      return false;
    }
    
    this.clearError(field);
    return true;
  }
  
  // Alan için hata gösterme
  showFieldError(field, message) {
    // Önceki hata mesajını temizle
    this.clearError(field);
    
    // Hata mesajı elementi oluştur
    const errorElement = document.createElement('div');
    errorElement.classList.add('form-error');
    errorElement.textContent = message;
    
    // Hata mesajını form grubuna ekle
    const formGroup = field.closest('.form-group') || field.parentNode;
    formGroup.appendChild(errorElement);
    
    // Hata sınıfını ekle
    field.classList.add('is-invalid');
  }
  
  // Hata temizleme
  clearError(field) {
    const formGroup = field.closest('.form-group') || field.parentNode;
    const errorElement = formGroup.querySelector('.form-error');
    
    if (errorElement) {
      errorElement.remove();
    }
    
    field.classList.remove('is-invalid');
  }
  
  // Form submit işlemi
  async handleSubmit(event) {
    event.preventDefault();
    
    // Form verilerini doğrula
    let isValid = true;
    this.form.querySelectorAll('input, textarea').forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    if (!isValid) {
      this.showStatus('Lütfen formdaki hataları düzeltin', 'error');
      return;
    }
    
    // Gönderiliyor durumunu göster
    this.showStatus('Mesajınız gönderiliyor...', 'info');
    this.form.classList.add('is-submitting');
    
    // Form verilerini topla
    const formData = new FormData(this.form);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    
    try {
      // ReCaptcha kontrolü ekleyin (opsiyonel)
      if (this.settings.recaptchaSiteKey) {
        data.recaptchaToken = await this.executeReCaptcha();
      }
      
      // API'ye gönder
      const response = await this.sendFormData(data);
      
      if (response.success) {
        // Başarılı
        this.showStatus('Mesajınız gönderildi. Teşekkür ederiz!', 'success');
        this.form.reset();
        
        // Yönlendirme varsa
        if (this.settings.redirectUrl) {
          setTimeout(() => {
            window.location.href = this.settings.redirectUrl;
          }, 2000);
        }
      } else {
        // API hata mesajı
        this.showStatus(`Hata: ${response.message || 'Bir sorun oluştu.'}`, 'error');
      }
    } catch (error) {
      // Bağlantı hatası
      this.showStatus(`Gönderim hatası: ${error.message}`, 'error');
      if (this.settings.debugMode) {
        console.error('Form gönderim hatası:', error);
      }
    } finally {
      // Gönderiliyor durumunu kaldır
      this.form.classList.remove('is-submitting');
    }
  }
  
  // Form verilerini API'ye gönderme
  async sendFormData(data) {
    try {
      const response = await fetch(this.settings.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      // JSON yanıtı al
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || `HTTP hata: ${response.status}`);
      }
      
      return result;
    } catch (error) {
      // Bağlantı hatası tespit et
      if (error.name === 'TypeError' && error.message.includes('NetworkError')) {
        throw new Error('Ağ bağlantı hatası. İnternet bağlantınızı kontrol edin.');
      }
      
      // CORS hata tespiti
      if (error.name === 'TypeError' && error.message.includes('CORS')) {
        throw new Error('CORS hatası. Sunucu yapılandırması kontrol edilmeli.');
      }
      
      throw error;
    }
  }
  
  // ReCaptcha kullanımı (opsiyonel)
  executeReCaptcha() {
    return new Promise((resolve, reject) => {
      if (window.grecaptcha && this.settings.recaptchaSiteKey) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(this.settings.recaptchaSiteKey, {action: 'contact'})
            .then(token => resolve(token))
            .catch(err => reject(err));
        });
      } else {
        resolve('');
      }
    });
  }
  
  // Durum mesajı gösterme
  showStatus(message, type = 'info') {
    if (!this.statusElement) {
      // Eğer durum elementi yoksa oluştur
      this.statusElement = document.createElement('div');
      this.statusElement.classList.add('form-status');
      this.form.parentNode.insertBefore(this.statusElement, this.form.nextSibling);
    }
    
    // Önceki sınıfları temizle
    this.statusElement.classList.remove('success', 'error', 'info');
    
    // Yeni sınıf ve mesaj ekle
    this.statusElement.classList.add(type);
    this.statusElement.textContent = message;
    this.statusElement.setAttribute('role', 'alert');
    
    // Ekranı mesaja doğru kaydır
    this.statusElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', () => {
  // İletişim formunu başlat
  const contactForm = new ContactFormManager('#contact-form', {
    endpoint: '/api/send-message.php', // API endpoint'iniz
    debugMode: false, // Production'da false yapın
    statusMessageSelector: '#form-status' // Durum mesajı gösterilecek element
  });
});
