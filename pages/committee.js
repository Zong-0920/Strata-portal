import Nav from '../components/Nav';
export default function Committee() {
  return (
    <div>
      <Nav />
      <main className="p-8">
        <h1 className="text-2xl font-semibold">Committee Members</h1>
        {/* TODO: List Chair, Treasurer, Secretary */}
      </main>
    </div>
  );
}