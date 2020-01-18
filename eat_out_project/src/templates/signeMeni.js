import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, 
    CardText, Row, Col, Form, FormGroup, Label,Input } from 'reactstrap';
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
            <Card body>
                <CardTitle></CardTitle>
                <CardText>  


                     <Form>
                     <div id="noviKorisnik">
             
             <a href={'https://www.facebook.com'} className="btn btn-outline-primary float-center" target="_blank" rel="noopener noreferrer">REGISTRACIJA PUTEM FACEBOOKA</a>
             <br></br>
              
              <br></br>
              <a href={'https://plus.google.com'} className="btn btn-outline-secondary float-center" target="_blank" rel="noopener noreferrer">REGISTRACIJA PUTEM GOOGLEA</a>
              </div>
              <br></br>
              <p>ili</p>
              <br></br>
                     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                     <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            
            <Input type="email" name="email" id="exampleEmail"/>
           </FormGroup>
          
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Lozinka</Label>
           
             <Input type="password" name="password" id="examplePassword"/>
          </FormGroup>
          <br></br>
           <Link to={'./sign-in'} className="btn btn-outline-secondary float-left">PRIJAVA</Link>
           <br></br>
           <br></br>
           <br></br>
         

                         
             
            </Form></CardText>
                
              </Card>
            
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Card body>
                <CardTitle></CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default SignMeni;