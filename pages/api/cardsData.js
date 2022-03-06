// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cardsData from "./cardsData.json";

export default function getCardsData(req, res) {
  res.status(200).json(cardsData);
}
