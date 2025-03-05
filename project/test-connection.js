// ES Module version of the test script
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://apuyojoitvsuuuctwoay.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwdXlvam9pdHZzdXV1Y3R3b2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MjIwMzksImV4cCI6MjA1NjQ5ODAzOX0.c3_0bArVc2QaBSd-lhLZYcG3QT3voIbXxOFeU_E3WNI';

async function checkSupabaseConnection() {
  console.log('Checking Supabase connection...');
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  try {
    // First check if the table exists
    console.log('Attempting to query the portfolio_messages table...');
    const { data: tableData, error: tableError } = await supabase
      .from('portfolio_messages')
      .select('*')
      .limit(1);
    
    if (tableError) {
      console.error('Error accessing table:', tableError.message);
      console.log('\nTrying to diagnose the issue:');
      
      // Try to insert a test record to see specific error
      console.log('\nAttempting to insert a test record...');
      const testData = {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message',
        created_at: new Date().toISOString()
      };
      
      const { error: insertError } = await supabase
        .from('portfolio_messages')
        .insert([testData]);
      
      if (insertError) {
        console.error('Insert error details:', insertError.message);
        console.error('Error code:', insertError.code);
        console.error('Error hint:', insertError.hint || 'No hint provided');
        console.error('Error details:', insertError.details || 'No details provided');
      }
    } else {
      console.log('Table exists and is accessible!');
      console.log('Sample data:', tableData);
      
      // Show table structure by examining the first record
      if (tableData && tableData.length > 0) {
        console.log('\nTable structure (based on first record):');
        console.log(Object.keys(tableData[0]));
      } else {
        console.log('\nTable exists but is empty.');
      }
    }
  } catch (err) {
    console.error('Connection error:', err.message);
  }
}

// Run the function and keep the process alive until it completes
checkSupabaseConnection().then(() => {
  console.log('\nDiagnostic check completed.');
}).catch(error => {
  console.error('Error in diagnostic check:', error);
});