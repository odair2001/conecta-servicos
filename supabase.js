// supabase.js
window.supabaseUrl = "https://vvdhaxtqelnjpwrgtlod.supabase.co";
window.supabaseKey = "sb_publishable_UTbX94YYQlpbrYsep9gi2Q_L36njeA-";

const { createClient } = window.supabase;
window.supabaseClient = createClient(window.supabaseUrl, window.supabaseKey);
