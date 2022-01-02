import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import S from "../styles/Home.module.css";
import CandyMachine from '../components/CandyMachine'

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found.");

          // Check to see if the user has already 'whitelisted' the site, if so, connect.
          // Prevents having to prompt user every time they visit.
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "Connected with Public Key:",
            response.publicKey.toString()
          );

          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert("Solana object not found! Get a phantom wallet 👻");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Keys:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const renderNotConnectedContainer = () => (
    <button
      className={[S.ctaButton, S.connectWalletButton].join(" ")}
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  useEffect(() => {
    // Phantom wallet recommends waiting until page has loaded to check for it.
    const onLoad = async () => await checkIfWalletIsConnected();

    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className={S.app}>
      <div className={S.container}>
        <div className={S.headerContainer}>
          <p className={S.header}>🍭 Candy Drop</p>
          <p className={S.subText}>NFT drop machine with fair mint</p>
          {walletAddress ? (
            <p>Connected to: {walletAddress}</p>
          ) : (
            renderNotConnectedContainer()
          )}
        </div>
        {walletAddress && <CandyMachine walletAddress={walletAddress}/>}
        <div className={S.footerContainer}>
          <Image
            alt="Twitter Logo"
            className={S.twitterLogo}
            src={"/img/twitter-logo.svg"}
            width={35}
            height={35}
          />
          <a
            className={S.footerText}
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
