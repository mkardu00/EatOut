import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Pocetna" />
    <div id="pocetnaSlikaDiv">
      <Image></Image>
    </div>
    <div style={{ maxWidth: `960px`, marginBottom: `1.45rem`, color:"black" }}>
      <h1>Rezerviraj svoj stol </h1> 
      <button class="primary-button">PRONAĐI RESTORAN</button>
    </div>
  </Layout>
)



export default IndexPage
