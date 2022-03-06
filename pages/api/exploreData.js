// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import exploreData from "./exploreData.json";

export default function getExploreData(req, res) {
  res.status(200).json(exploreData);
}
