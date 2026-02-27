import { getSupabaseAdminClient } from '../config/supabase.js';

/**
 * Insert a new project request.
 */
export async function createRequest(data) {
    const supabase = getSupabaseAdminClient();
    const { data: row, error } = await supabase
        .from('project_requests')
        .insert(data)
        .select()
        .single();
    if (error) throw error;
    return row;
}
