import React, { FC } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../public/styles/global.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Mint Agancy</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default MyApp;
