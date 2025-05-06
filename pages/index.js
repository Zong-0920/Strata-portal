import Nav from '../components/Nav';
export default function Home() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Strata Management Portal';
  return (
    <div>
      <Nav />
      <main className="p-8">
        <h1 className="text-3xl font-bold">{siteName}</h1>
        <p className="mt-4">Welcome to the Owners Corporation management dashboard.</p>
      </main>
    </div>
  );
}