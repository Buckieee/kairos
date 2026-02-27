import { getSupabaseAdminClient } from '../config/supabase.js';

/**
 * Leads repository – Supabase data-access stubs.
 */

/**
 * Insert a new lead record.
 * @param {object} data - Validated lead payload
 * @returns {Promise<object>}
 */
export async function createLead(data) {
    const supabase = getSupabaseAdminClient();
    // TODO: implement actual insert
    // const { data: row, error } = await supabase.from('leads').insert(data).select().single();
    // if (error) throw error;
    // return row;
    void supabase; // reference client to prevent unused import warnings
    return { id: 'placeholder', ...data, createdAt: new Date().toISOString() };
}
