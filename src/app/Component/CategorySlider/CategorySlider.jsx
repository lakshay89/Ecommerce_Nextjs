'use client';
import Carousel from 'react-bootstrap/Carousel';
import '../CategorySlider/CategorySlider.css'
import Image from 'next/image';
import slide1 from '../../Images/a1.png';
import slide2 from '../../Images/a2.png';
import slide3 from '../../Images/a3.png';
import slide4 from '../../Images/a4.png';
import slide5 from '../../Images/a5.png';
import slide6 from '../../Images/a6.png';
import slide7 from '../../Images/a7.png';
import slide8 from '../../Images/a8.png';
import slide9 from '../../Images/a9.png';
import slide10 from '../../Images/a10.png';
import slide11 from '../../Images/a4.png';
import slide12 from '../../Images/a5.png';
import slide13 from '../../Images/a6.png';
import slide14 from '../../Images/a7.png';
import slide15 from '../../Images/a8.png';
import slide16 from '../../Images/a9.png';
// import slide17 from '../Images/a10.png';


const slides = [ slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14, slide15, slide16 ];

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
export default function CategorySlider() {

    const groupedSlides = chunkArray(slides, 8); // 8 images per slide
  return (
    <>
    <div className="container category-slider-wrapper">
    <Carousel fade interval={5000} pause={false} className="d-flex flex-wrap align-items-center pt-5 pb-1 justify-content-center">
      {groupedSlides.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="multi-image-slide1 py-3">
            {group.map((img, i) => (
              <div key={i} className="image-wrapper1">
                <Image
                  src={img}
                  alt={`Slide ${index * 8 + i + 1}`}
                  
                  className="hero-img1"
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    
    </>
)
}
