import { createClient } from '@supabase/supabase-js';
import config from './env.js';

/**
 * Supabase admin client (service-role key).
 * Lazily created, cached on first call.
 */
let adminClient = null;

export function getSupabaseAdminClient() {
    if (!adminClient) {
        adminClient = createClient(config.supabaseUrl, config.supabaseServiceRoleKey, {
            auth: { autoRefreshToken: false, persistSession: false },
        });
    }
    return adminClient;
}

/**
 * Supabase anon client (public key).
 * Returns null if SUPABASE_ANON_KEY is not set.
 */
let anonClient = null;

export function getSupabaseAnonClient() {
    if (!config.supabaseAnonKey) return null;

    if (!anonClient) {
        anonClient = createClient(config.supabaseUrl, config.supabaseAnonKey);
    }
    return anonClient;
}
