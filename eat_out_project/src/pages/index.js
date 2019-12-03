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
    <div id="rezervirajSvojStolDiv">
      <h1>Rezerviraj svoj stol </h1> 
      <div id="inputBotun">   
        <input id="unos"></input>
        <button id="botun">PRONAĐI<br></br> RESTORAN</button></div>
      </div>
  </Layout>
)



export default IndexPage
