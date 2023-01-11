import './App.css'
import avatar from './assets/images/ilkokul.jpeg'
import avatar1 from './assets/images/ortaokul.jpeg'

import {Header, Footer, Container,HeaderMiddel,HeaderFooter } from './Components/index';
 
const App = () => {
  return (
    <>
      <Header />
        
        <Container >
          
          <HeaderMiddel />
          
          
          <HeaderFooter name="Ilk okul" img={avatar} id="Toplama" text="1.sinif" />
          <hr/>
          <HeaderFooter name="Orta okul" img={avatar1} id="Doğal Sayılar" text="5.sinif" />
          <Footer />

        </Container>
         
      
    </>
  )
}

export default App
