-- Create a new table for contact form submissions
CREATE TABLE IF NOT EXISTS public.portfolio_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.portfolio_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON public.portfolio_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow the owner to read their own submissions
CREATE POLICY "Allow owner to read own submissions" ON public.portfolio_messages
  FOR SELECT
  TO authenticated
  USING (auth.uid() = auth.uid());

-- Comment on table
COMMENT ON TABLE public.portfolio_messages IS 'Stores contact form submissions from the portfolio website';