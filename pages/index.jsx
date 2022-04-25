import Head from "next/head";
import { useEffect } from "react";
import PropTypes from "prop-types";

import { Banner, Footer, Header, Main } from "../components";
import { useStore } from "../hooks";

// prefetch this info on the server before painting the page
export async function getStaticProps() {
  const exploreLocationsResponse = await fetch("https://jsonkeeper.com/b/85AF");
  const exploreLocations = await exploreLocationsResponse.json();

  const cardsResponse = await fetch("https://jsonkeeper.com/b/2GMG");
  const cards = await cardsResponse.json();

  return { props: { exploreLocations, cards } };
}

export default function Home({ cards, exploreLocations }) {
  const setGlobalState = useStore(state => state.setGlobalState);

  useEffect(() => {
    setGlobalState({ cards, exploreLocations });
  }, []);

  return (
    <>
      <Head>
        <title>Airnbnb clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Main />

      <Footer />
    </>
  );
}

Home.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      img: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired,
  exploreLocations: PropTypes.arrayOf(
    PropTypes.shape({
      distance: PropTypes.string,
      id: PropTypes.string,
      img: PropTypes.string,
      location: PropTypes.string
    })
  ).isRequired
};
