// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cards from "./cards.json";

export default function handler(req, res) {
  res.status(200).json(cards);
}

// links.papareact.com/zp1
