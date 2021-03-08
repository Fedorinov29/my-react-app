import React from 'react';
import { Container, FormGroup, FormLabel, Form, FormControl, FormText, FormCheck, Button } from 'react-bootstrap';



function Footer() {
   return (
      <>
         <Container className="col-md-6" >
            <h1 className="mt-5 text-center">Contact Us</h1>
            <Form>

               <FormGroup controlId="formBasicEmail">
                  <FormLabel>Email address</FormLabel>
                  <FormControl type="email" placeholder="Enter email" />
                  <FormText>
                     We'll never share your emailwith anyone else
                  </FormText>
               </FormGroup>

               <FormGroup controlId="formBasicPassword">
                  <FormLabel>Example textarea</FormLabel>
                  <FormControl as="textarea" />
               </FormGroup>

               <FormGroup controlId="formBasicCheckbox">
                  <FormCheck type="checkbox" label="Check me out" />
               </FormGroup>

               <Button variant="primary" type="submit" className="mb-4">Submit</Button>

            </Form>
         </Container>
      </>
   )
}

export default Footer;