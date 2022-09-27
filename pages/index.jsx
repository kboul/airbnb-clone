import Head from "next/head";
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import { Banner, Footer, Header, Main } from "../components";
import { useStore } from "../hooks";
import exploreLocationsData from "./api/exploreLocations.json";
import cardsData from "./api/cards.json";

// prefetch this info on the server before painting the page
export async function getStaticProps() {
  // const exploreLocationsResponse = await fetch(
  //   "https://links.papareact.com/pyp"
  // );
  // const exploreLocations = await exploreLocationsResponse.json();

  // const cardsResponse = await fetch("https://links.papareact.com/zp1");
  // const cards = await cardsResponse.json();

  return {
    props: { exploreLocations: exploreLocationsData, cards: cardsData }
  };
}

export default function Home({ cards, exploreLocations }) {
  const setGlobalState = useStore(
    useCallback(state => state.setGlobalState, [])
  );

  useEffect(() => setGlobalState({ cards, exploreLocations }), []);

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
