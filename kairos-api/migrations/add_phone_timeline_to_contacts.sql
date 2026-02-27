-- Migration: Add phone and timeline columns to contacts table
-- Run this in the Supabase SQL editor

ALTER TABLE public.contacts
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS timeline TEXT;

-- Optional: Add a comment for documentation
COMMENT ON COLUMN public.contacts.phone IS 'Contact phone number (optional)';
COMMENT ON COLUMN public.contacts.timeline IS 'Project timeline preference (e.g. ASAP, 1-2 weeks, etc.)';
