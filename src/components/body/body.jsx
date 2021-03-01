import React from 'react';
import { Card, CardDeck, Container, Button } from 'react-bootstrap';




function Body() {
   return (
      <>
         <Container>
            <h2 className="text-center m-4">Our team</h2>
            <CardDeck>
               <Card>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/716281/pexels-photo-716281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                  <Card.Body>
                     <Card.Title>Developers</Card.Title>
                     <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis consectetur quos. Blanditiis totam perferendis ratione quae animi nisi facilis harum odit laudantium repellendus deleniti eligendi officiis, quas atque vel. </Card.Text>
                     <Button variant="primary">About Team</Button>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                  <Card.Body>
                     <Card.Title>Meetings</Card.Title>
                     <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis consectetur quos. Blanditiis totam perferendis ratione quae animi nisi facilis harum odit laudantium repellendus deleniti eligendi officiis, quas atque vel. </Card.Text>
                     <Button variant="primary">About Team</Button>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                  <Card.Body>
                     <Card.Title>Solvings task</Card.Title>
                     <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis consectetur quos. Blanditiis totam perferendis ratione quae animi nisi facilis harum odit laudantium repellendus deleniti eligendi officiis, quas atque vel. </Card.Text>
                     <Button variant="primary">About Team</Button>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                  <Card.Body>
                     <Card.Title>Deadline</Card.Title>
                     <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis consectetur quos. Blanditiis totam perferendis ratione quae animi nisi facilis harum odit laudantium repellendus deleniti eligendi officiis, quas atque vel. </Card.Text>
                     <Button variant="primary">About Team</Button>
                  </Card.Body>
               </Card>
            </CardDeck>
         </Container>
      </>
   )
}

export default Body;