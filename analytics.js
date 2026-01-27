// =====================
// SUPABASE CONFIG
// =====================
const SUPABASE_URL = "https://defnfoffergmmdxqqxuo.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZm5mb2ZmZXJnbW1keHFxeHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0Mzk2NTgsImV4cCI6MjA4NTAxNTY1OH0.E9g23aPuvRQ4j_luwRMqqQFixqncLxrNxDBish4Qv_s";

// =====================
// SESSION-BASED VIEW COUNTER
// =====================
const SESSION_KEY = "debatesylhetbd_session_counted";

// যদি এই সেশনে আগে ভিউ হয়নি
if (!sessionStorage.getItem(SESSION_KEY)) {
  // মার্ক করি
  sessionStorage.setItem(SESSION_KEY, "yes");

  // Supabase থেকে views row আনি
  fetch(`${SUPABASE_URL}/rest/v1/views?id=eq.1`, {
    headers: { 
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  })
  .then(res => res.json())
  .then(data => {
    if (!data || data.length === 0) return;

    const current = data[0].count || 0;

    // +1 update
    fetch(`${SUPABASE_URL}/rest/v1/views?id=eq.1`, {
      method: "PATCH",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({ count: current + 1 })
    });
  });
}

// =====================
// SEARCH TRACKING
// =====================
const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("keydown", function(e){
    if (e.key === "Enter" && searchInput.value.trim() !== "") {

      fetch(`${SUPABASE_URL}/rest/v1/searches`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          keyword: searchInput.value.trim(),
          page: window.location.pathname,
          created_at: new Date().toISOString()
        })
      });

      // Optional: clear input
      searchInput.value = "";
    }
  });
}
