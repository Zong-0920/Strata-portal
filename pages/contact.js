import Nav from '../components/Nav';
export default function Contact() {
  return (
    <div>
      <Nav />
      <main className="p-8">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <form method="POST" action="/api/contact" className="mt-4">
          <input name="name" placeholder="Your name" className="border p-2 w-full" />
          <textarea name="message" placeholder="Message" className="border p-2 w-full mt-2" />
          <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Send</button>
        </form>
      </main>
    </div>
  );
}