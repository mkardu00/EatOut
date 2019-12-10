import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.css"
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Pocetna" />
    <div id="pocetnaSlikaDiv">
      <Image></Image>
    </div>
    <div id="rezervirajSvojStolDiv">
      <h1 id="naslov">Rezerviraj svoj stol </h1> 
      <div id="inputBotun">   
        <input id="unos" ></input>
        <Link to={'./split'} className="btn btn-outline-secondary float-right btn-lg">PRONAĐI RESTORAN</Link>
        </div>
      </div>
      
  </Layout>
)



export default IndexPage
