// Supabase yapılandırması
const SUPABASE_URL = 'https://apuyojoitvsuuuctwoay.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwdXlvam9pdHZzdXV1Y3R3b2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MjIwMzksImV4cCI6MjA1NjQ5ODAzOX0.c3_0bArVc2QaBSd-lhLZYcG3QT3voIbXxOFeU_E3WNI';

// Supabase client'ı oluştur
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
