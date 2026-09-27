import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://psesdfksylummuuzkuod.supabase.co'
const SUPABASE_KEY = 'sb_publishable_UDJiIbFppKoF6LklNjsuGQ_16bkJEvB'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
