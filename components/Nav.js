import Link from 'next/link';
export default function Nav() {
  return (
    <nav className="p-4 bg-gray-100">
      <Link href="/">Home</Link> | 
      <Link href="/owners">Owners</Link> | 
      <Link href="/funds">Funds</Link> | 
      <Link href="/committee">Committee</Link> | 
      <Link href="/documents">Documents</Link> | 
      <Link href="/meetings">Meetings</Link>
    </nav>
  );
}