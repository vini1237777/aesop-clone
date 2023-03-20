
import { productPerfume, productPerfumeSlider } from './contentText/contentText';
import Carousel from "../../component/Carousel/Carousel";
import useCarousel from "../../component/Carousel/useCarousel";
import { useMediaQuery, useTheme } from "@mui/material";
import Text from "../../component/Typography/Typography";
import { textEnum } from "../../hooks/useFonts";
import Wrapper from "../../component/Wrapper";




const classes = {
  slider: {
    display: "flex",
    flexDirection: "column",
  },

  wrapperCustomClass: {
    display: "flex",
    gap: "6rem",
    flexDirection: "column",
  },
};

const ProductPerfumeCarousel = () => {

  const {currentSlide,handleSlideChange,visibleSlides}=useCarousel();
 
   const theme = useTheme();
   const matches300 = useMediaQuery(theme.breakpoints.between(0, 440));
  return (
    <Wrapper customClasses={{ ...classes.wrapperCustomClass }}>
      <>
        <Text
          label={productPerfume.subtitle}
          variant={textEnum.lg}
          sx={
            !matches300
              ? { pl: "180px", pr: "80px" }
              : { pl: "20px", pr: "0" }
          }
        />
        <Carousel
          visibleSlides={visibleSlides || 4}
          totalSlides={6}
          slides={productPerfumeSlider}
          handleSlideChange={handleSlideChange}
          currentSlide={currentSlide}
          naturalSlideHeight={ (matches300 && 100) || 70}
          sx={matches300 ? { pl: "0", pr: "0" } : { pl: "80px", pr: "80px" }}
        />
      </>
    </Wrapper>
  );
};

export default ProductPerfumeCarousel;

