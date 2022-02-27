import Head from "next/head";

import { Banner, Header } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airnbnb clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />
    </>
  );
}
