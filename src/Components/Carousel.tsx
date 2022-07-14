import Carousel from 'react-bootstrap/Carousel';
import start1 from "../Images/SlideShow/Slideshow3.jpeg"
import start2 from "../Images/SlideShow/Slideshow2.jpeg"
import start3 from "../Images/SlideShow/Slideshow1.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    carousel:{
        margin:10,
        marginTop:30,
        marginBottom:30,
    }
})

export default function UncontrolledExample() {
    const style = useStyle();
    return (
    <Carousel className={style.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={start1}
          alt="First slide"
          style={{borderRadius: '40px'}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={start2}
          alt="Second slide"
          style={{borderRadius: '40px'}}
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={start3}
          alt="Third slide"
          style={{borderRadius: '40px'}}
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
