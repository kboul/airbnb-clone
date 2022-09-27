import searchResults from "./searchResults.json";

export default function handler(req, res) {
  res.status(200).json(searchResults);
}

// links.papareact.com/isz
