import { getSupabaseAdminClient } from '../config/supabase.js';

/**
 * Career repository – Supabase data-access.
 */

/**
 * Insert a new career application.
 * @param {object} data - Validated career payload
 * @returns {Promise<object>}
 */
export async function createApplication(data) {
    const supabase = getSupabaseAdminClient();
    const { data: row, error } = await supabase
        .from('career_applications')
        .insert(data)
        .select()
        .single();
    if (error) throw error;
    return row;
}
