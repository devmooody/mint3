import React, { FC } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Mint Agancy</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
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
