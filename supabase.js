// supabase.js — import this in every page
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL  = 'https://orhoulohczojcjedktdo.supabase.co/rest/v1/'   // ← paste yours
const SUPABASE_KEY  = 'sb_publishable__bXq-qb-TWXYoBuO6Ul-xA_8ZfNxd-q'           // ← paste yours

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
