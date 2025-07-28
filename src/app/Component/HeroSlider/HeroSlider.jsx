'use client';
import Carousel from 'react-bootstrap/Carousel';
import './HeroSlider.css'; // optional for custom styling
import Image from 'next/image';
import slide1 from '../../Images/heroslide1.jpg';
import slide2 from '../../Images/heroslide2.jpg';
import slide3 from '../../Images/heroslide3.jpg';
import slide4 from '../../Images/heroslide4.jpg';
import slide5 from '../../Images/heroslide5.jpg';
import slide6 from '../../Images/heroslide6.jpg';
import slide7 from '../../Images/heroslide7.jpg';
import slide8 from '../../Images/heroslide8.jpg';
import slide9 from '../../Images/heroslide9.jpg';

function HeroSlider() {
  return (
    <Carousel fade interval={3000} pause={false}>
      <Carousel.Item>
        <Image
          src={slide1}
          alt="First slide"
        //   width={1920}
        //   height={600}
          className="d-block w-100 img-fluid"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={slide2}
          alt="Second slide"
         //   width={1920}
        //   height={600}
          className="d-block w-100 img-fluid"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={slide3}
          alt="Third slide"
         //   width={1920}
        //   height={600}
          className="d-block w-100 img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={slide4}
          alt="Third slide"
        //   width={1920}
        //   height={600}
          className="d-block w-100 img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={slide5}
          alt="Third slide"
        //   width={1920}
        //   height={600}
          className="d-block w-100 img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={slide6}
          alt="Third slide"
        //   width={1920}
        //   height={600}
          className="d-block w-100 img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={slide7}
          alt="Third slide"
        //   width={1920}
        //   height={600}
          className="d-block w-100 img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={slide8}
          alt="Third slide"
        //   width={1920}
        //   height={600}
          className="d-block w-100 img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={slide9}
          alt="Third slide"
         //   width={1920}
        //   height={600}
          className="d-block w-100 img-fluid"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;
