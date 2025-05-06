export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(req.query);
  }
  if (req.method === 'POST') {
    // TODO: handle form data (req.body)
    res.writeHead(302, { Location: '/' });
    return res.end();
  }
  res.status(405).end();
}