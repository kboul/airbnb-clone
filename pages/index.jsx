import Head from "next/head";

import { Banner, Footer, Header, Main } from "../components";
import exploreLocationsModel from "../models/exploreLocations";
import cardsModel from "../models/cards";

export default function Home({ cards, exploreLocations }) {
  return (
    <>
      <Head>
        <title>Airnbnb clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Main cards={cards} exploreLocations={exploreLocations} />

      <Footer />
    </>
  );
}

Home.propTypes = { ...exploreLocationsModel, ...cardsModel };

// prefetch this info on the server before painting the page
export async function getStaticProps() {
  const exploreLocationsResponse = await fetch("https://jsonkeeper.com/b/85AF");
  const exploreLocations = await exploreLocationsResponse.json();

  const cardsResponse = await fetch("https://jsonkeeper.com/b/2GMG");
  const cards = await cardsResponse.json();

  return { props: { exploreLocations, cards } };
}
