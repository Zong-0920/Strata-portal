export const config = { runtime: 'edge' };
export default async function handler() {
  return new Response(JSON.stringify({ admin: 10000, capital: 5000 }), { headers: { 'content-type':'application/json' } });
}