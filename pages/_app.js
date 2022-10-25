import React from "react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }) {
  return (
  <ThirdwebProvider desiredChainId={activeChainId}>
  <Component {...pageProps} />
  </ThirdwebProvider>
  );
}

export default MyApp
