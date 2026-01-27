// =====================
// SUPABASE CONFIG
// =====================
const SUPABASE_URL = "https://defnfoffergmmdxqqxuo.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZm5mb2ZmZXJnbW1keHFxeHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0Mzk2NTgsImV4cCI6MjA4NTAxNTY1OH0.E9g23aPuvRQ4j_luwRMqqQFixqncLxrNxDBish4Qv_s";

// =====================
// SESSION-BASED VIEW COUNTER (Per Page)
// =====================
const PAGE_SESSION_KEY = "debatesylhetbd_page_" + window.location.pathname;

if (!sessionStorage.getItem(PAGE_SESSION_KEY)) {
  sessionStorage.setItem(PAGE_SESSION_KEY, "yes");

  // Get current view count
  fetch(`${SUPABASE_URL}/rest/v1/views?id=eq.1`, {
    headers: { 
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  })
  .then(res => res.json())
  .then(data => {
    if (!data || data.length === 0) return;

    const currentCount = data[0].count || 0;

    // Update views
    fetch(`${SUPABASE_URL}/rest/v1/views?id=eq.1`, {
      method: "PATCH",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({ count: currentCount + 1 })
    });
  });
}

// =====================
// SEARCH TRACKING (AUTO, NO ENTER OR BUTTON)
// =====================
const searchInput = document.getElementById("search");

if (searchInput) {
  let typingTimer;
  const typingDelay = 1000; // 1 second after user stops typing

  searchInput.addEventListener("input", function(){
    clearTimeout(typingTimer);
    if (searchInput.value.trim() === "") return;

    typingTimer = setTimeout(() => {
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

      // Optional: clear input after tracking
      // searchInput.value = "";
    }, typingDelay);
  });
}
