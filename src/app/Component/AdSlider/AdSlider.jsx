'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
// import video1 from ''; // Make sure this path is correct

const App = () => {
  const slides = [
    {
      id: 1,
      video: '/video/6912294_Motion_Graphics_Motion_Graphic_3840x2160.mp4',
      title: 'This Weekend 50% Off',
      subtitle: 'Grab the Deal Fast to Buy Extra Discount Shop Now & Unlock Extra Discounts on Selected Items – Hurry, Limited Time!',
      buttonText: 'Hurry Up',
    },
    {
      id: 2,
      video: '/video/0_Black_Friday_Sale_3840x2160.mp4',
      title: 'Black Friday Sale Starts',
      subtitle: 'Super Sale Grab the Deal Fast to Buy Extra Discount Shop Now & Unlock Extra Discounts on Selected Items – Hurry, Limited Time!',
      buttonText: 'Hurry Up',

    },
    {
      id: 3,
      video: '/video/6914061_Motion_Graphics_Motion_Graphic_3840x2160.mp4',
      title: 'Super Sale Offer',
      subtitle: 'Grab the Deal Fast to Buy Extra Discount Shop Now & Unlock Extra Discounts on Selected Items – Hurry, Limited Time!',
      buttonText: 'Hurry Up',

    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
    }

    return () => clearInterval(autoplayRef.current);
  }, [isPaused]); // Only restart interval when paused state changes

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    pauseTemporarily();
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    pauseTemporarily();
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    pauseTemporarily();
  };

  const pauseTemporarily = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div className="py-5" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <div className="container-fluid">
        <motion.div
          className="position-relative bg-white rounded-4 shadow overflow-hidden"
          onMouseEnter={() => { setIsPaused(true); clearInterval(autoplayRef.current); }}
          onMouseLeave={() => setIsPaused(false)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="position-relative" style={{ height: "500px" }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="position-absolute w-100 h-100 d-flex flex-column flex-md-row align-items-center p-4"
              >
                {/* Media (Video or Image) */}
                <motion.div
                  className="col-md-6 d-flex justify-content-center align-items-center p-3"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="rounded-4 shadow border p-2 bg-light">
                    {slides[currentIndex].video ? (
                      <video
                        className="img-fluid rounded-3"
                        style={{ maxHeight: '320px', objectFit: 'cover' }}
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={slides[currentIndex].video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="img-fluid rounded-3"
                        style={{ maxHeight: '320px', objectFit: 'cover' }}
                      />
                    )}
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  className="col-md-6 text-center text-md-start p-4"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                >
                  <h2 className="fw-bold mb-3 " style={{color:"#2c257c"}}>{slides[currentIndex].title}</h2>
                  <p className="text-black lead w-75">{slides[currentIndex].subtitle}</p>
                  <button className="btn btn-outline rounded-pill px-4 py-2 mt-3 fw-bold shadow-sm" style={{color:"#2c257c",border:".2px solid #2c257c"}}>
                    {slides[currentIndex].buttonText}
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="btn btn-light mt-2 rounded-circle shadow position-absolute top-50 start-0 translate-middle-y ms-3"
              aria-label="Previous"
              style={{ width: '48px', height: '48px' }}
            >
              ‹
            </button>
            <button
              onClick={goToNext}
              className="btn btn-light rounded-circle shadow position-absolute top-50 end-0 translate-middle-y me-3"
              aria-label="Next"
              style={{ width: '48px', height: '48px' }}
            >
              ›
            </button>

            {/* Pagination Dots */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-pill border-0 ${index === currentIndex ? 'bg-primary' : 'bg-secondary'}`}
                  style={{
                    width: index === currentIndex ? '20px' : '10px',
                    height: '10px',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
