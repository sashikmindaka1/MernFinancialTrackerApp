import { useState ,useEffect } from "react";
import CarouselImg1 from '../assests/caursel1.png'
import CarouselImg2 from '../assests/caursel2.png'
import CarouselImg3 from '../assests/caursel3.png'
import './Carousel.css';


function Carousel() {

  const [correntSlide, setCorrentSlide] = useState(0);

  const slideData = [

    { id: 1, img: CarouselImg1 },
    { id: 2, img: CarouselImg2 },
    { id: 3, img: CarouselImg3 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCorrentSlide((prevSlide) =>
      prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);



  return ( 
    <>
    <section className="hero-carousel">
      <div className="slide-wrapper">
      

        
          <div className="single-slide">
            <div className="slide-image">
              <img src={slideData[correntSlide].img} alt="carousel status" />
            </div>
          </div>    
      </div>

    </section >
      
   
 
    </>
  )
  
}export default Carousel;