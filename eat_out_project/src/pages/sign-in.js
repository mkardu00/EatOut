import SEO from "../components/seo"
import "../styles/sign-in.css"

import SignMeni from "../templates/signeMeni"
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const SignIn = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      
      <button class="btn btn-outline-secondary float-left" onClick={toggle}>PRIJAVA</button>
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

export default SignIn;