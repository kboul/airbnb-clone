import appartments from "./appartments.json";

export default function handler(req, res) {
  res.status(200).json(appartments);
}

// links.papareact.com/isz
