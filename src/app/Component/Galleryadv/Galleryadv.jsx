import React from 'react'
import Image from 'next/image';
import img1 from '../../Images/d1.png';
import img2 from '../../Images/d2.png';
import img3 from '../../Images/d3.png';
import img4 from '../../Images/d4.png';
import img5 from '../../Images/d5.png';
import img6 from '../../Images/d6.png';
import img7 from '../../Images/d7.jpeg';
import img8 from '../../Images/d9.jpeg';

export default function Galleryadv() {
  return (
    <>
        <div className="container py-4">
            <div className="row mb-3">
                <div className="col-12">
                    <h2 style={{color:"white"}}>Great Deals On Electronics</h2>
                </div>
            </div>
        

        <div className="row">
                <div className="col-lg-3 col-md-3 col-6 mb-3 mb-md-0">
                  <Image src={img1} className='img-fluid rounded-2' alt="Banner 3" />
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3 mb-md-0">
                  <Image src={img2} className='img-fluid rounded-2' alt="Banner 4"/>
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                  <Image src={img3} className='img-fluid rounded-2' alt="Banner 5" />
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                  <Image src={img4} className='img-fluid rounded-2' alt="Banner 5" />
                </div>
        </div>
        <div className="row mt-3">
                <div className="col-lg-3 col-md-3 col-6 mb-3 mb-md-0">
                  <Image src={img5} className='img-fluid rounded-2' alt="Banner 3" />
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3 mb-md-0">
                  <Image src={img6} className='img-fluid rounded-2' alt="Banner 4"/>
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                  <Image src={img7} className='img-fluid rounded-2' alt="Banner 5" />
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                  <Image src={img8} className='img-fluid rounded-2' alt="Banner 5" />
                </div>
        </div>


        </div>
    </>
)
}
