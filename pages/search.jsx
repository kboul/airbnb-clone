import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import PropTypes from "prop-types";

import { Footer, Header, SearchMain } from "../components";
import { useStore } from "../hooks";

export async function getServerSideProps() {
  const searchResultsResponse = await fetch("https://jsonkeeper.com/b/C4LN");
  const searchResults = await searchResultsResponse.json();
  return { props: { searchResults } };
}

export default function Search({ searchResults }) {
  const setGlobalState = useStore(
    useCallback(state => state.setGlobalState, [])
  );

  useEffect(() => setGlobalState({ searchResults }), []);

  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;
  const paramsExist = Boolean(location);
  let range;
  if (paramsExist) {
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    range = `${formattedStartDate} - ${formattedEndDate}`;
  }

  const placeholder = `${location} | ${range} | ${numOfGuests}`;

  return (
    <>
      <Header placeholder={placeholder} />

      {paramsExist && (
        <SearchMain
          location={location}
          numOfGuests={numOfGuests}
          range={range}
        />
      )}

      <Footer />
    </>
  );
}

Search.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      img: PropTypes.string,
      location: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      star: PropTypes.number,
      price: PropTypes.string,
      total: PropTypes.string,
      long: PropTypes.number,
      lat: PropTypes.number
    })
  ).isRequired
};
