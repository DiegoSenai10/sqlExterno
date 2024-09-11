// supabaseClient.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vkveetdhffejfndpxzop.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrdmVldGRoZmZlamZuZHB4em9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMTc0MjksImV4cCI6MjAzODY5MzQyOX0.szNcigJgIHtNuWQX3p8AepnnjJEcTCahL5dmXzmmj5U';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});
