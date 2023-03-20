import { useMediaQuery, useTheme } from "@mui/material";
import useCarousel from "../../../component/Carousel/useCarousel";

const useContentSlider = () => {
 const { currentSlide, handleSlideChange, visibleSlides } = useCarousel();
  const theme = useTheme();
  const matches1700 = useMediaQuery(theme.breakpoints.between(1100, 1699));

  const wrapperStyle=matches1700 ? {}: {
    display: "flex",
    gap: "6rem",
    flexDirection: "column",
  }


  return { wrapperStyle };
};

export default useContentSlider;
