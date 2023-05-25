import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL
const token = import.meta.env.VITE_SUPABASE_TOKEN

export const supabase = createClient(
  url,
  token
);
