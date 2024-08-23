
import Carousel from 'react-bootstrap/Carousel';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



function Slidding() {



  
  return (
    <Carousel data-bs-theme="dark" style={{marginTop:"-5.2rem"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/c1.jpg"
          alt="First slide"
          height="600px"
        />
        <Carousel.Caption>
          <h1 style={{textAlign:"center"}}>WE ARE <span style={{color:"blue"}}>COMMITED  </span> <span>TO PROVIDE YOU</span> <br /> <span>THE BEST </span>  <span style={{color:"blue"}}>SERVICES!</span></h1>
          <Link to={"/department"}><Button size="large" variant="contained">Book Appointment</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/c2.jpg"
          alt="Second slide"
          height="600px"
        />
        <Carousel.Caption>
        <h1 style={{textAlign:"center"}}>WE ARE <span style={{color:"blue"}}>COMMITED  </span> <span>TO PROVIDE YOU</span> <br /> <span>THE BEST </span>  <span style={{color:"blue"}}>SERVICES!</span></h1>
        <Link to={"/department"}><Button size="large" variant="contained">Book Appointment</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/c3.jpg"
          alt="Third slide"
          height="600px"
        />
        <Carousel.Caption>
          
        <h1 style={{textAlign:"center"}}>WE ARE <span style={{color:"blue"}}>COMMITED  </span> <span>TO PROVIDE YOU</span> <br /> <span>THE BEST </span>  <span style={{color:"blue"}}>SERVICES!</span></h1>
        <Link to={"/department"}><Button size="large" variant="contained">Book Appointment</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/c4.jpg"
          alt="Third slide"
          height="600px"
        />
        <Carousel.Caption>
        <h1 style={{textAlign:"center"}}>WE ARE <span style={{color:"blue"}}>COMMITED  </span> <span>TO PROVIDE YOU</span> <br /> <span>THE BEST </span>  <span style={{color:"blue"}}>SERVICES!</span></h1>
        <Link to={"/department"}>
        <Button size="large" variant="contained"
        
       
        
        >Book Appointment</Button>



      

        

        
        </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidding;












































