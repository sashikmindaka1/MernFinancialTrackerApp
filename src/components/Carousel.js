import { useState ,useEffect } from "react";
import CarouselImg1 from '../assests/caursel1.png'
import CarouselImg2 from '../assests/caursel2.png'
import CarouselImg3 from '../assests/caursel3.png'


function Carousel() {

  const [correntSlide, setCorrentSlide] = useState(0);

  const slideData = [
    {
     id: 1,
      title: "Track Expenses Instantly",
      description: "Manage your daily income and expenses with real-timanalytics",
      buttonText: "Get Started",
      img:  CarouselImg1
    },
    {
      id: 2,
      title: "Smart Savings Goals",
      description: "Set up smart budget goals and save money foryourfuturedreams",
      buttonText: "Start Saving",
      img: CarouselImg2
    },
    {
      id: 3,
      title: "AI Powered Analytics",
      description: "Get smart insights and monthly predictionspowered byadvancedAI",
      buttonText: "Explore AI",
      img: CarouselImg3
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCorrentSlide((prevSlide) =>
      prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
      );
    }, 400);
    return () => clearInterval(timer);
  }, [slideData.length]);



  return ( 
    <>
   
 
    </>
  )
  
}export default Carousel;