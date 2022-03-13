import { useRouter } from "next/router";
import { format } from "date-fns";

import { Footer, Header, SearchMain } from "../components";

export default function Search() {
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
