import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>Gatsby Tutorial.</p>
        <StaticImage
          src="../images/icon.png"
          alt="Gatsby Icon"
        />
      </Layout>
    </main>
  )
}

export default IndexPage
