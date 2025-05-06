import Nav from '../components/Nav';
export default function Home() {
  return (
    <div>
      <Nav />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Strata Management Portal</h1>
        <p className="mt-4">Welcome to the Owners Corporation management dashboard.</p>
      </main>
    </div>
  );
}