$(document).ready(function() {
    // Form submit olayını dinle
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        
        // Form verilerini al
        const name = $('input[name=name]').val();
        const email = $('input[name=email]').val();
        const message = $('textarea[name=message]').val();
        
        // Form doğrulama
        if (!name || !email || !message) {
            $('#form-message-error').html('Lütfen tüm alanları doldurun.').fadeIn();
            $('#form-message-success').fadeOut();
            return;
        }
        
        // Form gönderimi öncesi butonu devre dışı bırak ve yükleniyor mesajı göster
        $('#submit-button').prop('disabled', true).html('Gönderiliyor...');
        
        // Supabase ile veri gönderimi
        async function sendMessage() {
            try {
                const { data, error } = await supabaseClient
                    .from('contact_messages')
                    .insert([
                        { name: name, email: email, message: message }
                    ]);
                
                if (error) throw error;
                
                // Başarılı mesajını göster
                $('#form-message-success').html('Mesajınız başarıyla gönderildi. Teşekkürler!').fadeIn();
                $('#form-message-error').fadeOut();
                
                // Formu temizle
                $('#contactForm').trigger("reset");
            } catch (error) {
                console.error('Error:', error);
                // Hata mesajını göster
                $('#form-message-error').html('Mesaj gönderilirken bir hata oluştu: ' + error.message).fadeIn();
                $('#form-message-success').fadeOut();
            } finally {
                // İşlem tamamlandığında butonu tekrar aktif et
                $('#submit-button').prop('disabled', false).html('Mesaj Gönder');
            }
        }
        
        sendMessage();
    });
});
