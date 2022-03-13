// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import exploreLocations from "./exploreLocations.json";

export default function handler(req, res) {
  res.status(200).json(exploreLocations);
}

// https://jsonkeeper.com/b/4G1G
