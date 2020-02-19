import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col} from "reactstrap"
import "../styles/split.css"
import { graphql, StaticQuery } from "gatsby"
import Restoran from "../components/Restoran"
import { Breadcrumb, BreadcrumbItem, CustomInput,Form,FormGroup,Label, Input,InputGroupAddon, InputGroup,Button} from 'reactstrap';

class Split extends React.Component {
  state = {
    inputText: ''
  }

  handleInput = (e) => {
    this.setState({inputText: e.target.value});
  }

  render() {
    return (
      <Layout>
        <SEO title="Split" />
        <br></br>
        <div id="grad">  
            <h1>RESTORANI U SPLITU</h1>
        </div>    
        <div className="bread"> 
            <Breadcrumb>
            <BreadcrumbItem><a className="aaa" href="/">Početna</a></BreadcrumbItem>
            <BreadcrumbItem active>Restorani u Splitu</BreadcrumbItem>
          </Breadcrumb>
            </div>
        <br></br>
        <Row>     
        <Col md="2" id="Split" style={{backgroundColor:'white'}}>
            <div style={{ paddingLeft:'7%'}} >
            <Form>
              <FormGroup >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div className="search"> 
               
                  <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <Button disabled>
                        <i class="fa fa-search"></i>
                      </Button>
                      </InputGroupAddon>
                    <Input
                      onChange={this.handleInput}
                      value={this.state.inputText}
                      placeholder="pretraži"
                    >
                    
                    </Input>
                    
                  
                   
                  </InputGroup>
                </div>
              </FormGroup>
            
          <FormGroup>
            <br></br>
            <Label for="exampleCheckbox">KUHINJA</Label>
            <div>
              <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Azijska" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Mediteranska" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Meksička" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Talijanska" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Američka" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Kineska" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Tajlandska" />
            </div>
            <br></br>
          </FormGroup>
          <FormGroup>
          <Label for="exampleCheckbox">OCJENA</Label><br></br>
          
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star "></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
          </FormGroup>
          </Form>
            </div>  
            </Col>
          <Col md="10" id="Split" style={{backgroundColor:'white'}}>
            <StaticQuery
              query={blogQuery1}
              render={data => {
                return (
                  <div class="card-columns" >  
                    {data.allMarkdownRemark.edges.map(({ node }) => {
                      if (this.state.inputText !== '') {
                        let inputText = this.state.inputText
                        let restaurantTitle = node.frontmatter.title
                        if (restaurantTitle.toLowerCase().includes(inputText.toLowerCase())) {
                          return (
                            <Restoran
                              key={node.id}
                              title={node.frontmatter.title}  
                              slug={node.fields.slug}
                              body={node.excerpt}
                              fluid={node.frontmatter.image.childImageSharp.fluid}
                              tags={node.frontmatter.tags}
                              type={node.frontmatter.type}
                            />
                          )} else {return null}
                      } else {
                        return (
                          <Restoran
                            key={node.id}
                            title={node.frontmatter.title}  
                            slug={node.fields.slug}
                            body={node.excerpt}
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                            tags={node.frontmatter.tags}
                            type={node.frontmatter.type}
                          />
                      )}
                    })}
                  </div>
                )
              }}
            />
          </Col> 
          
        </Row>
      </Layout>
  )}}
const blogQuery1 = graphql`
  query blogQuery1{
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "restoranST"}}}){
    edges{
      node{
        id
        frontmatter{
          title
          tags
          type
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }    
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
  }
`

export default Split
