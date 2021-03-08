import React from 'react'
import { Card, Button } from 'react-bootstrap';


function Cards(props: { picUrl: string }) {
   return (
      <>
         <Card>
            <Card.Img variant="top" src={props.picUrl}></Card.Img>
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