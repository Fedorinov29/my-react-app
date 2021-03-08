import React from 'react';
import { CardDeck, Container, Media } from 'react-bootstrap';
import Cards from '../pictures/cards'



function Body() {
   //@ts-ignore
   const picArray = ['../../assets/images/1.jpg', '../../assets/images/2.jpg', '../../assets/images/3.jpg', '../../assets/images/4.jpg'];
   return (
      <>
         <Container>
            <h2 className="text-center">New holidays event</h2>
            <Media>
               <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://images.pexels.com/photos/6102430/pexels-photo-6102430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Generic placeholder"
               />
               <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                     ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                     tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                     Donec lacinia congue felis in faucibus.
                  </p>

                  <Media>
                     <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="https://images.pexels.com/photos/6102430/pexels-photo-6102430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Generic placeholder"
                     />
                     <Media.Body>
                        <h5>Media Heading</h5>
                        <p>
                           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                           scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
                           vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                           vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                     </Media.Body>
                  </Media>
               </Media.Body>
            </Media>
            <h2 className="text-center m-4">Our team</h2>
            <CardDeck>
               <Cards />
               <Cards />
               <Cards />
               <Cards />
            </CardDeck>
         </Container>
      </>
   )
}

export default Body;