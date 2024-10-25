// createClient creates a connection between the application and the Supabase backend
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// API key which allows access to Supabase features like fetching and storing
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Create supabase client by passing in URL and key; will be used to access files
export const supabase = createClient(supabaseUrl, supabaseAnonKey);