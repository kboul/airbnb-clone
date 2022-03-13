// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import exploreLocations from "./exploreLocations.json";

export default function getexploreLocations(req, res) {
  res.status(200).json(exploreLocations);
}
