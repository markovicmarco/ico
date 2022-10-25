import {
  useAddress,
  useDisconnect,
  useMetamask,
  useTokenDrop,
} from "@thirdweb-dev/react";
import truncateAddress from "../lib/truncateAddress.js";
import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/Home.module.css'
import ClaimForm from '../components/claim'

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const tokenDrop = useTokenDrop("0x612e62488A2d36018ec7539a6a8BcfFC412B5eD6");

  return (
    <div className={styles.container}>
      <Head>
        <title>ICO Initial Coin Offering</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar style={{ color: 'white', borderBottom: '1px solid #252729' }}>
      <Container>
        <Navbar.Brand href="./" style={{ color: 'inherit' }}>
        <img
              src="/roadmap.svg"
              width="150"
              height="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        {address ? (
          <Navbar.Text onClick={disconnectWallet} style={{ color: 'white', background: '#74a5ff', border: '1px solid #252729', padding: '0.5rem', borderRadius: '5px 30px 30px 7.5px' }}>
            {truncateAddress(address)}
          </Navbar.Text>
           ) : (
            <Navbar.Text onClick={connectWithMetamask} style={{ color: '#74a5ff', background: 'black', border: '1px solid #252729', padding: '0.5rem', borderRadius: '5px 30px 30px 7.5px' }}>
            CONNECT WALLET
          </Navbar.Text>
            )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      <main className={styles.main}>
        <h1 className={styles.title}>
        Initial Coin Offering, Mint, <br></br>Collect, and Earn!
        </h1>
        <p>
        Get started by configuring polygon network, metamask, and token wallet.
        </p>
        <div className={styles.grid}>
          <a href="https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/" className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          >
            <h2>Blockchain &rarr;</h2>
            <p>Configure Polygon Network URL on Metamask.</p>
          </a>

          <a href="https://help.matcha.xyz/en/articles/4313369-why-don-t-i-see-the-token-i-just-bought-in-my-metamask-wallet" className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          >
            <h2>MetaMask &rarr;</h2>
            <p>Add Token to Metamask Wallet registry as a custom token!</p>
          </a>

          <a
            href="https://polygonscan.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>PolygonScan &rarr;</h2>
            <p>Manually verify a token you have claimed is in your wallet.</p>
          </a>

          <a
            href="https://docs.uniswap.org/protocol/V2/guides/smart-contract-integration/providing-liquidity"
            className={styles.card} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Liquidity &rarr;</h2>
            <p>
              Earn Uniswap passive income, safely add liquidity to a pool.
            </p>
          </a>
        </div>

        <p className={styles.description}>
        Accumulate blockchain power through<br></br> assets, games, and collectibles  
        </p>

        <ClaimForm tokenDrop={tokenDrop} />

      </main>

      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="https://twitter.com/izzzy_xyz" target="_blank"
          rel="noopener noreferrer">
          <img
              src="/twitter.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://izzzy.xyz/roadmap" target="_blank"
          rel="noopener noreferrer">
          <img
              src="/roadmap.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://polygonscan.com/token/0x612e62488A2d36018ec7539a6a8BcfFC412B5eD6" target="_blank"
          rel="noopener noreferrer">
          <img
              src="/polygonscan.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://izzzy.xyz/discord" target="_blank"
          rel="noopener noreferrer">
          <img
              src="/discord.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <footer className={styles.footer}>
        <a
          href="https://izzzy.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Izzzy
        </a>
      </footer>
    </div>
  )
}
