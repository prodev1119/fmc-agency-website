CREATE TABLE IF NOT EXISTS job_postings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  type TEXT,
  intro TEXT NOT NULL,
  responsibilities TEXT, -- Changed from TEXT[] to TEXT
  requirements TEXT,    -- Changed from TEXT[] to TEXT
  role_overview TEXT,
  compensation TEXT NOT NULL,
  collaboration_plan TEXT, -- Changed from TEXT[] to TEXT
  timeline TEXT NOT NULL,
  summary TEXT,
  note TEXT,
  author TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  color TEXT NOT NULL,
  bg_color TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Optional: Add RLS policies if you plan to manage access
-- For now, we'll assume full access via service_role_key in Server Actions
-- You might want to enable RLS and define policies later for client-side access.
