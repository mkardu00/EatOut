import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, 
    CardText, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import classnames from 'classnames';
import "../styles/restoran.css"
import { Link } from 'gatsby'

const SignMeni = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Postojeći korisnik
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Novi korisnik
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <Card  id ="cardPrijave">
                <CardTitle></CardTitle>
                <CardText>  
                     <Form>
                     <div id="noviKorisnik">
              <div id="botunCentar">
             <a href={'https://www.facebook.com'} className="btn btn-outline-primary float-center" target="_blank" rel="noopener noreferrer">PRIJAVA PUTEM FACEBOOKA</a>
           
              </div>
              <br></br>
              <br></br>
              <div id="botunCentar">
              
              <a href={'https://plus.google.com'} className="btn btn-outline-secondary float-center" target="_blank" rel="noopener noreferrer">PRIJAVA PUTEM GOOGLEA</a>
              </div>
              <br></br>
              <br></br>
              <p style={{ textAlign:"center"}}>ili</p>
              </div>
              <br></br>
              <div id="botunCentar">
              <Col sm="9">
                     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                     
            
                     <Input type="email" name="email" id="exampleEmail" placeholder="E-mail ili korisničko ime" />
           </FormGroup>
          <br></br>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            
           
            <Input type="password" name="password" id="examplePassword" placeholder="Tvoja lozinka" />
          </FormGroup>
          <br></br>
          <div id="botunCentar">
           <Link to={'./sign-in'} className="btn btn-outline-secondary float-left">REGISTRACIJA</Link>
           </div>
           <br></br>
           <br></br>
           <br></br>
           </Col>
           </div>
           
         

                         
             
            </Form></CardText>
                
              </Card>
            
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Card  id ="cardPrijave">
                <CardTitle></CardTitle>
                <CardText>  


                     <Form>
                     <div id="noviKorisnik">
              <div id="botunCentar">
             <a href={'https://www.facebook.com'} className="btn btn-outline-primary float-center" target="_blank" rel="noopener noreferrer">REGISTRACIJA PUTEM FACEBOOKA</a>
           
              </div>
              <br></br>
              <br></br>
              <div id="botunCentar">
              
              <a href={'https://plus.google.com'} className="btn btn-outline-secondary float-center" target="_blank" rel="noopener noreferrer">REGISTRACIJA PUTEM GOOGLEA</a>
              </div>
              <br></br>
              <br></br>
              <p style={{ textAlign:"center"}}>ili</p>
              </div>
              <br></br>
              <div id="botunCentar">
              <Col sm="9">
                     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                     
            
                     <Input type="email" name="email" id="exampleEmail" placeholder="Tvoj e-mail" />
           </FormGroup>
          <br></br>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            
           
            <Input type="password" name="password" id="examplePassword" placeholder="Tvoja lozinka" />
          </FormGroup>
          <br></br>
          <FormGroup><Input type="text" name="name" id="exampleCity" placeholder="Željeno korisničko ime"/>
          </FormGroup>
          <br></br>
          
          <div id="botunCentar">
           <Link to={'./sign-in'} className="btn btn-outline-secondary float-left">PRIJAVA</Link>
           </div>
           <br></br>
           <br></br>
           <br></br>
           </Col>
           </div>
           
         

                         
             
            </Form></CardText>
                
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default SignMeni;