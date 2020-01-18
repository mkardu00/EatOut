import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Meni = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div >
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            INFO
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           MENU
          </NavLink>
          </NavItem>
          <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            KOMENTARI
          </NavLink>
          </NavItem>
           </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <Card body>
                <CardTitle> <div id="ikonice">
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
             <p>
                 <span className="fa fa-star checked"></span>
                 <span className="fa fa-star checked"></span>
                 <span className="fa fa-star checked"></span>
                 <span className="fa fa-star checked"></span>
                 <span className="fa fa-star"></span> 
                 </p>
                 <p><i class="fa fa-phone"></i><b> 021/552453</b></p>
                 <p><i class="fa fa-clock-o"></i><b> 10:00–01:00 </b></p>
                 <p><i class="fa fa-envelope"></i><b> naziv_restorana@gmail.com </b></p>
                 <p><i class="fa fa-map-marker"></i><b> Ruđera Boškovića 32 </b></p>

                  </div></CardTitle>
                <CardText>
                  
                  
                  
                </CardText>
                
               </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
        
            <Col sm="12">
              <Card body>
                <CardTitle></CardTitle>
                <CardText>
                  <Row>
                <Col sm="6">
                  <p>
                    <b>STARTERS</b><br></br>
                    <p>Edamame $8.00</p>
                    <p> Miso Soup $9.00</p>
                    <p> Roasted Shishito Peppers $15.00</p>
                    <p> Organic Field Green Salad $15.00</p>
                    <p> Chopped Salad $20.00</p>
                    <p>Cucumber Sunomono $13.00</p>
                    <p>Crispy Calamari Salad $22.00</p>
                    <p>Lobster Salad $54.00</p>
                    </p>
                 </Col>
                <Col sm="6">
                  <p>
                    <b>MAIN COURSES</b><br></br>
                   <p>"Speakeasy" Steak Tartare
                    Quail Egg, Potato Crisp or Toast Point $40</p>
                    <p>Faroe Island Salmon
                    Lemon-Horseradish Crust, Fingerling Potatoes, Sorrel Cream $37</p>
                    <p>Dover Sole
                    Mashed Cauliflower, Caper, Lemon, Brown Butter, Fine Herbs $41</p>
                    <p>Turbot
                    Cream of Clams, Whipped Potatoes, Chorizo $30</p>
                    <p> Berkshire Pork Chop
                    Braised Red Cabbage, Sweet Potato Purée $45</p>
                    <p>Filet Mignon
                    Pomme Boulangère, Asparagus, Blue Cheese Butter, Red Wine Jus $46</p>
                    </p>
                  </Col>
                </Row>
                <Row>
                <Col sm="6">
                  <p>
                    <br></br>
                    <b>SIDE ORDERS</b><br></br>
                    <p>Creamed Spinach $11</p>
                    <p>French Fries $9</p>
                    <p> Seasonal Mushrooms $10</p>
                    <p> Brussels Sprouts $14</p>
                    <p> Olive Oil Whipped Potatoes $14 </p>
                    <p>Truffle Macaroni and Cheese $17</p>
                    <p>  Pommes Soufflées $17</p>
                    </p>
                  </Col>
                <Col sm="6">
                  <p>
                    <br></br>
                  <b>DESSERTS</b><br></br>
                  <p> Caramelized Apple Tart $12</p>
                  <p>Crème Fraîche Ice Cream $15</p>
                  <p>Tiramisu Cheesecake $16</p>
                  <p>Chocolate Almond Streusel $11</p>
                  <p>Black and White Soufflé $11</p>
                  <p>Vanilla Anglaise, Cookies, Cream Ice Cream $17</p>
                  </p>
                                  </Col>
                </Row>
                </CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
            <Card body>
                <CardTitle>   <p><b>32 </b>
                 <i class="fa fa-comment"></i>
                 </p></CardTitle>
                <CardText>
                
                  <p><i class="fa fa-comment"></i><b> Andrea</b><br></br>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <br></br>
                  Wonderful service and atmosphere. Food was delicious.</p><br></br>
                  <p><i class="fa fa-comment"></i><b> Mark</b><br></br>                
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <br></br>Extraordinary service and great food. 
                  New Year's Eve was very special because of the venue, the service, and the food.</p><br></br>
                  <p><i class="fa fa-comment"></i><b> Chuck</b><br></br>             
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <br></br>The service was wonderful - very friendly waiter and captain</p><br></br>
                  <p><i class="fa fa-comment"></i><b> Lesley</b><br></br>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <br></br>A truly special evening from start to finish. 
                    The ambiance and the service were top notch and the food was excellent.</p><br></br>
                  <p><i class="fa fa-comment"></i><b> Scott</b><br></br>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <br></br>Servers were amazing! Stephen and John were great. Super friendly and attentive.
                       Chicken was a bit dry, but overall great experience</p>

                </CardText>

              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Meni;