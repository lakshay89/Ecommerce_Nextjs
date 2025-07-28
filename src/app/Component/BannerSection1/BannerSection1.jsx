import React from 'react';
// import { Image } from 'react-bootstrap';
import Image from 'next/image';
import img1 from '../../Images/b1.jpg';
import img2 from '../../Images/b2.jpg';
import img3 from '../../Images/b3.png';
import img4 from '../../Images/b4.png';
import img5 from '../../Images/b5.png';

export default function BannerSection1() {
  return (
    <div className="container py-4">
      <div className="row mb-3">
        <div className="col-12">
          <h2 style={{color:"white"}}>Watch Out For This</h2>
        </div>
      </div>

      {/* First 2 Banners Side by Side */}
      <div className="row mb-3">
        <div className="col-lg-6 col-md-6 col-12 mb-3 mb-md-0">
          <Image src={img1} className='img-fluid rounded-2' alt="Banner 1" />
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <Image src={img2} className='img-fluid rounded-2' alt="Banner 2" />
        </div>
      </div>

      {/* Next 3 Banners in a Row */}
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 mb-3 mb-md-0">
          <Image src={img3} className='img-fluid' alt="Banner 3" />
        </div>
        <div className="col-lg-4 col-md-4 col-12 mb-3 mb-md-0">
          <Image src={img4} className='img-fluid' alt="Banner 4"/>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <Image src={img5} className='img-fluid' alt="Banner 5" />
        </div>
      </div>
    </div>
  );
}
