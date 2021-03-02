import React from 'react';
import { Container, FormGroup, FormLabel, Form, FormControl, FormText, FormCheck, Button } from 'react-bootstrap';



function Footer() {
   return (
      <>
         <Container style={{ width: '500px' }} className="bg dark">
            <h1 className="mt-5 text-center">Contact Us</h1>
            <Form>

               <FormGroup controlId="formBasicEmail">
                  <FormLabel>Email address</FormLabel>
                  <FormControl type="email" placeholder="Enter email"></FormControl>
                  <FormText>
                     We'll never share your emailwith anyone else
                  </FormText>
               </FormGroup>

               <FormGroup controlId="formBasicPassword">
                  <FormLabel>Example textarea</FormLabel>
                  <FormControl as="textarea"></FormControl>
               </FormGroup>

               <FormGroup controlId="formBasicCheckbox">
                  <FormCheck type="checkbox" label="Check me out"></FormCheck>
               </FormGroup>

               <Button variant="primary" type="submit">Submit</Button>

            </Form>
         </Container>
      </>
   )
}

export default Footer;