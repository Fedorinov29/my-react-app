import { CardDeck, Container } from 'react-bootstrap';
import Cards from '../pictures/cards'



function Body() {
   const picArray = ['https://picsum.photos/330/300', 'https://picsum.photos/280/300', 'https://picsum.photos/350/300', 'https://picsum.photos/250/300'];
   return (
      <div>
         <Container>
            <h2 className="text-center m-4">Our team</h2>
            <CardDeck>
               {picArray.map((picUrl) => <Cards picUrl={picUrl} />)}
            </CardDeck>
         </Container>
      </div>
   )
}

export default Body;