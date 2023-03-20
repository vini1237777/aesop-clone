import { useMediaQuery, useTheme } from '@mui/material';
import  { useState } from 'react'

const useCarousel = (startSlideIndex?:number) => {
  const [currentSlide, setCurrentSlide] = useState<number>(startSlideIndex||0);
   const theme = useTheme();
   const matches650 = useMediaQuery(theme.breakpoints.down(639));
   const matches1100 = useMediaQuery(theme.breakpoints.between(640,1100));
   const matches1700 = useMediaQuery(theme.breakpoints.between(1100,1699));
   const visibleSlides=matches650? 1:matches1100?2 : matches1700?3 : 4;
  const handleSlideChange = (buttonType: string) => {
    if (buttonType === "prev") {
      setCurrentSlide((prev) => prev - 1);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return {currentSlide,handleSlideChange,visibleSlides}

}

export default useCarousel;
