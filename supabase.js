const supabaseUrl = "https://vvdhaxtqelnjpwrgtlod.supabase.co";
const supabaseKey = "sb_publishable_UTbX94YYQlpbrYsep9gi2Q_L36njeA-";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey

);const supabaseUrl = "https://vvdhaxtqelnjpwrgtlod.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2ZGhheHRxZWxuanB3cmd0bG9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2OTkyNTQsImV4cCI6MjA4NzI3NTI1NH0.fJPNdd8VxXNpTEumR4OUv0mwGCZCvhUF3iBhvMA3Vn8"; // use a anon public, não publishable

const { createClient } = window.supabase;

const supabaseClient = createClient(
  supabaseUrl,
  supabaseKey
);
