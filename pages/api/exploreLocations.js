// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import exploreLocations from "./exploreLocations.json";

export default function handler(req, res) {
  res.status(200).json(exploreLocations);
}

// links.papareact.com/isz
