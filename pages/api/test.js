import { runMiddleware } from '../../lib/utils';
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  if (req.method === 'GET') {
    res.status(200).json({ text: 'Test' });
  } else {
    // Handle any other HTTP method
  }
}
