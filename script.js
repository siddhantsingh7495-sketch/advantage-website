// =============================================
// SUPABASE CONFIG — Yahan apni details bharo
// =============================================
const SUPABASE_URL = 'https://vyqmeblqccfzzbnwcgzg.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_gP7gb_1aq5MVvSS5OD9a7w_b1KOY5zH';

// =============================================
// Supabase helper — data save karna
// =============================================
async function saveContact(data) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    const err = await response.text();
    throw new Error(err);
  }
  return true;
}

// =============================================
// Contacts fetch karna (admin ke liye)
// =============================================
async function fetchContacts() {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/contacts?order=created_at.desc`, {
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
    }
  });
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
}
