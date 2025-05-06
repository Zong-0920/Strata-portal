export const config = { runtime: 'edge' };
export default function handler() {
  const next = new Date();
  next.setDate(next.getDate() + 30);
  return new Response(JSON.stringify({ nextMeeting: next.toDateString() }), { headers: { 'content-type':'application/json' } });
}