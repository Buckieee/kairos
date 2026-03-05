require('dotenv').config({ path: '../.env' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Missing SUPABASE credentials");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setup() {
    console.log('Checking for contacts table...');
    const { error: checkError } = await supabase.from('contacts').select('id').limit(1);

    if (checkError && checkError.code === '42P01') { // table does not exist
        console.log('Creating contacts table...');
        const { error: createError } = await supabase.rpc('exec_sql', {
            query: `
        CREATE TABLE public.contacts (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          subject TEXT,
          message TEXT,
          phone TEXT,
          source TEXT
        );
        ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
        CREATE POLICY "Allow anonymous inserts" ON public.contacts FOR INSERT TO anon, authenticated WITH CHECK (true);
      `
        });

        // Fallback if rpc fails (Supabase requires dashboard for DDL without a custom RPC function)
        if (createError) {
            console.log('Cannot create table via RPC. Please run this SQL in Supabase dashboard SQL editor:');
            console.log(`
        CREATE TABLE IF NOT EXISTS public.contacts (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          subject TEXT,
          message TEXT,
          phone TEXT,
          source TEXT
        );
        ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.contacts;
        CREATE POLICY "Allow anonymous inserts" ON public.contacts FOR INSERT TO anon, authenticated WITH CHECK (true);
      `);
        } else {
            console.log('Table contacts created successfully.');
        }
    } else {
        console.log('Table contacts already exists.');
    }
}

setup();
