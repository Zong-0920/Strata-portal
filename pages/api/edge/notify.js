export const config = { runtime: 'edge' };
export default async function handler() {
  return new Response(JSON.stringify({ status: 'Notifications sent' }), { headers: { 'content-type':'application/json' } });
}