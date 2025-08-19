-- Check existing RLS policies for contact_messages table
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'contact_messages';

-- Check table permissions
SELECT 
    grantee, 
    table_name, 
    privilege_type 
FROM information_schema.role_table_grants 
WHERE table_schema = 'public' 
    AND table_name = 'contact_messages'
    AND grantee IN ('anon', 'authenticated') 
ORDER BY table_name, grantee;

-- If no policies exist, create INSERT policy for anon users
DO $$
BEGIN
    -- Check if INSERT policy exists for anon users
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contact_messages' 
        AND policyname = 'Allow anon insert'
    ) THEN
        -- Create policy to allow anonymous users to insert messages
        EXECUTE 'CREATE POLICY "Allow anon insert" ON contact_messages FOR INSERT TO anon WITH CHECK (true)';
        RAISE NOTICE 'Created INSERT policy for anon users';
    ELSE
        RAISE NOTICE 'INSERT policy for anon users already exists';
    END IF;
END $$;

-- Grant INSERT permission to anon role if not already granted
DO $$
BEGIN
    -- Grant INSERT permission to anon role
    GRANT INSERT ON contact_messages TO anon;
    RAISE NOTICE 'Granted INSERT permission to anon role';
EXCEPTION
    WHEN duplicate_object THEN
        RAISE NOTICE 'INSERT permission already granted to anon role';
END $$;