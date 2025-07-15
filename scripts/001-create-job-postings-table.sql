CREATE TABLE job_postings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  type TEXT,
  intro TEXT NOT NULL,
  responsibilities TEXT[],
  requirements TEXT[],
  role_overview TEXT,
  compensation TEXT NOT NULL,
  collaboration_plan TEXT[],
  timeline TEXT NOT NULL,
  summary TEXT NOT NULL,
  note TEXT,
  author TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  color TEXT NOT NULL,
  bg_color TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE job_postings ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anonymous users to read job postings
CREATE POLICY "Enable read access for all users" ON job_postings
FOR SELECT USING (TRUE);

-- Create a policy that allows authenticated users to insert job postings
-- You might want to refine this to specific roles later
CREATE POLICY "Enable insert for authenticated users" ON job_postings
FOR INSERT WITH CHECK (auth.role() = 'authenticated');
