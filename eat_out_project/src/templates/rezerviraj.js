import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignMeni from "../templates/signeMeni"
import SEO from "../components/seo"

const Rezerviraj = (props) => {
  const {
   
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
    <Button className="rez" color="secondary" onClick={toggle}>REZERVIRAJ</Button>
    <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <SEO title="Prijava" />
          <div id="pozadina">
          <h3 style={{textAlign:`center`}}>PRIJAVA<br></br><br></br></h3>
      
        
         <SignMeni></SignMeni>
       
       
     
    
    </div>
      </ModalBody>
      <ModalFooter>
     
      </ModalFooter>
    </Modal>
  </div>
  );
}

export default Rezerviraj;