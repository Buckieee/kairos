import { getSupabaseAdminClient } from '../config/supabase.js';

/**
 * Newsletter repository – Supabase data-access stubs.
 */

/**
 * Insert a new newsletter subscriber.
 * @param {object} data - Validated newsletter payload
 * @returns {Promise<object>}
 */
export async function createSubscriber(data) {
    const supabase = getSupabaseAdminClient();
    // TODO: implement actual insert
    // const { data: row, error } = await supabase.from('newsletter_subscribers').insert(data).select().single();
    // if (error) throw error;
    // return row;
    void supabase;
    return { id: 'placeholder', ...data, createdAt: new Date().toISOString() };
}
