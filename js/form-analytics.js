/**
 * İletişim Formu Analitik Takibi
 * Form kullanımını ve sorunları izlemek için
 */

class FormAnalytics {
  constructor(formSelector, options = {}) {
    this.form = document.querySelector(formSelector);
    this.options = {
      trackEvents: options.trackEvents !== undefined ? options.trackEvents : true,
      trackFields: options.trackFields !== undefined ? options.trackFields : true,
      trackSubmissions: options.trackSubmissions !== undefined ? options.trackSubmissions : true,
      trackErrors: options.trackErrors !== undefined ? options.trackErrors : true,
      analyticsProvider: options.analyticsProvider || 'ga' // ga, gtag, custom
    };
    
    if (!this.form) return;
    this.init();
  }
  
  init() {
    if (this.options.trackEvents) {
      this.setupEventTracking();
    }
    
    if (this.options.trackSubmissions) {
      this.setupSubmissionTracking();
    }
  }
  
  setupEventTracking() {
    const fields = this.form.querySelectorAll('input, textarea, select');
    
    fields.forEach(field => {
      // Alan fokus takibi
      field.addEventListener('focus', () => {
        this.trackEvent('form_interaction', 'field_focus', field.name);
      });
      
      // Alan değişiklik takibi
      field.addEventListener('change', () => {
        this.trackEvent('form_interaction', 'field_complete', field.name);
      });
      
      // Hata takibi
      field.addEventListener('invalid', () => {
        this.trackEvent('form_error', 'field_validation', field.name);
      });
    });
  }
  
  setupSubmissionTracking() {
    this.form.addEventListener('submit', e => {
      // Form gönderim başlangıcı
      this.trackEvent('form_submission', 'submit_attempt', this.form.id || this.form.name || 'contact_form');
      
      // Form hatalarını yakala
      window.addEventListener('error', event => {
        if (event.target === this.form || this.form.contains(event.target)) {
          this.trackEvent('form_error', 'submission_error', event.message || 'Unknown error');
        }
      }, {once: true});
    });
  }
  
  trackEvent(category, action, label) {
    if (!this.options.trackEvents) return;
    
    try {
      // Analitik sağlayıcısına göre olayı gönder
      switch (this.options.analyticsProvider) {
        case 'ga':
          if (window.ga) {
            window.ga('send', 'event', category, action, label);
          }
          break;
          
        case 'gtag':
          if (window.gtag) {
            window.gtag('event', action, {
              'event_category': category,
              'event_label': label
            });
          }
          break;
          
        case 'custom':
          if (this.options.customTracker && typeof this.options.customTracker === 'function') {
            this.options.customTracker(category, action, label);
          }
          break;
      }
    } catch (error) {
      console.warn('Analitik eventi gönderilirken hata:', error);
    }
  }
  
  // Form tamamlanma oranını hesapla
  getFormCompletionRate() {
    if (!this.form) return 0;
    
    const requiredFields = this.form.querySelectorAll('[required]');
    if (requiredFields.length === 0) return 100;
    
    let completedFields = 0;
    requiredFields.forEach(field => {
      if (field.value.trim() !== '') {
        completedFields++;
      }
    });
    
    return Math.round((completedFields / requiredFields.length) * 100);
  }
}

// Sayfa yüklendiğinde formu izlemeye başla
document.addEventListener('DOMContentLoaded', () => {
  // Analitikleri başlat
  const formAnalytics = new FormAnalytics('#contact-form', {
    trackEvents: true,
    trackSubmissions: true,
    analyticsProvider: 'gtag' // Google Analytics kullanıyorsanız
  });
});
