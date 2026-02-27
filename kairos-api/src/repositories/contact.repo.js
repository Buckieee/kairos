import { getSupabaseAdminClient } from '../config/supabase.js';

/**
 * Contact repository – Supabase data-access.
 */

/**
 * Insert a new contact-form submission.
 * @param {object} data - Validated contact payload
 * @returns {Promise<object>}
 */
export async function createContact(data) {
    const supabase = getSupabaseAdminClient();
    const { data: row, error } = await supabase
        .from('contacts')
        .insert(data)
        .select()
        .single();
    if (error) throw error;
    return row;
}

