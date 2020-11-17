import { setCookie, deleteCookie } from '../../utils/cookies';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { event, token, maxAge } = req.body;
    if (event === 'SIGNED_IN')
      setCookie(req, res, { name: 'sb:token', value: token, maxAge });
    if (event === 'SIGNED_OUT') deleteCookie(req, res, 'sb:token');
    res.status(200).json({});
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
