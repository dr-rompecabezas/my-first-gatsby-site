import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>Gatsby Tutorial.</p>
        <StaticImage
          src="../images/img0.jpg"
          alt="Photograph of man at edge of lake with snowy mountain background"
        />
      </Layout>
    </main>
  )
}

export default IndexPage
