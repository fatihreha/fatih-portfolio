-- Enable RLS on contact_messages table if not already enabled
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous users to insert contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated users to insert contact messages" ON contact_messages;

-- Create policy to allow anonymous users to insert contact messages
CREATE POLICY "Allow anonymous users to insert contact messages"
    ON contact_messages
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated users to insert contact messages
CREATE POLICY "Allow authenticated users to insert contact messages"
    ON contact_messages
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Grant necessary permissions to anon and authenticated roles
GRANT INSERT ON contact_messages TO anon;
GRANT INSERT ON contact_messages TO authenticated;

-- Grant usage on the sequence for the id column
GRANT USAGE ON SEQUENCE contact_messages_id_seq TO anon;
GRANT USAGE ON SEQUENCE contact_messages_id_seq TO authenticated;