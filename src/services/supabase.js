import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mfmdsdspmappxqhmurok.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbWRzZHNwbWFwcHhxaG11cm9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1NzQ0MTAsImV4cCI6MjAyODE1MDQxMH0.Jrmu-STSZ6_Mrvr23ZkaxAdjvAWnO1n5RieJLtN0ytk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
