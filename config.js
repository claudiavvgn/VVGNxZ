// Supabase connection for the Sauce Collab Hub.
// The anon (public) key is safe to publish: the database's row-level security decides what each signed-in person can see.
// NEVER put the service_role key here.
window.HUB_CONFIG = {
  url: "https://vdzpabpizueolfkvazgx.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkenBhYnBpenVlb2xma3Zhemd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0MjQyMDgsImV4cCI6MjEwNzAwMDIwOH0.vP7zyhiFpbwh_TpYSQwNWf-omI3lalG66p241iYgfs0"
};
