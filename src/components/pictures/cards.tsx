import { Card, Button } from 'react-bootstrap';


function Cards(props: { picUrl: string }) {
   return (
      <div>
         <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={props.picUrl}></Card.Img>
            <Card.Body>
               <Card.Title>Developers</Card.Title>
               <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis consectetur quos, quas atque vel. </Card.Text>
               <Button variant="primary">About Team</Button>
            </Card.Body>
         </Card>
      </div>
   )
}

export default Cards;