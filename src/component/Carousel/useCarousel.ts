import  { useState } from 'react'

const useCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleSlideChange = (buttonType: string) => {
    if (buttonType === "prev") {
      setCurrentSlide((prev) => prev - 1);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return {currentSlide,handleSlideChange}

}

export default useCarousel
