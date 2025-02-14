import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import favicon from "../assets/favicon.ico"
import twitter from "../assets/twitter.png"

function getTitle(pathname) {
  switch (pathname) {
    case "/token":
      return "Token"
    case "/about":
      return "About LNS"
    default:
      return "Bitcoin Cash Name Service"
  }
}

export default function Layout({ children, data, location }) {
  return (
    <>
      <Helmet
        meta={[
          {
            name: "description",
            content:
              "Your web3 username, a name for all your cryptocurrency addresses, and decentralised websites.",
          },
          {
            name: "keywords",
            content:
              "LNS, BCH, ENS, Bitcoin Cash, Bitcoin Cash Name Service, .bch domains, blockchain domains, ENS on smartBCH",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:title",
            content: "Bitcoin Cash Name Service",
          },
          {
            property: "og:image",
            content: `https://bch.domains${twitter}`,
          },
        ]}
        title={getTitle(location.pathname)}
        link={[
          { rel: "shortcut icon", type: "image/x-icon", href: `${favicon}` },
        ]}
        script={[
          { src: "https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js" },
        ]}
      />
      <Global
        styles={css`
          html, body, #___gatsby, #gatsby-focus-wrapper {
            height: ${location?.pathname === '/token' ? '100%' : 'initial'};
          }
          body {
            font-family: Overpass;
          }
        `}
      />
      {children}
    </>
  )
}
