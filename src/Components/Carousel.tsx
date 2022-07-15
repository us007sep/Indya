import Carousel from 'react-bootstrap/Carousel';
import start1 from "../Images/SlideShow/Slideshow3.jpeg"
import start2 from "../Images/SlideShow/Slideshow2.jpeg"
import start3 from "../Images/SlideShow/Slideshow1.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
    carousel:{
        margin:10,
        marginTop:30,
        marginBottom:30,
    }
})

export default function Carousel_() {
    const hist = useNavigate();
    const style = useStyle();
    return (
    <Carousel className={style.carousel}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={start1}
          alt="First slide"
          style={{borderRadius: '40px'}}
          onClick={()=>hist("/Lehngas&Sarees")}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={start2}
          alt="Second slide"
          style={{borderRadius: '40px'}}
          onClick={()=>hist("/Kurtis")}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={start3}
          alt="Third slide"
          style={{borderRadius: '40px'}}
        />
      </Carousel.Item>
    </Carousel>
  );
}
