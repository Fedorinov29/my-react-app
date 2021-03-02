import React from 'react'
import { Card, Button } from 'react-bootstrap';



function Cards() {
   return (
      <>
         <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/716281/pexels-photo-716281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
            <Card.Body>
               <Card.Title>Developers</Card.Title>
               <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis consectetur quos, quas atque vel. </Card.Text>
               <Button variant="primary">About Team</Button>
            </Card.Body>
         </Card>
      </>
   )
}

export default Cards;