// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cards from "./cards.json";

export default function getCards(req, res) {
  res.status(200).json(cards);
}
