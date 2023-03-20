import { locatorContent } from "../contentText/contentText";
import Carousel from "../../../component/Carousel/Carousel";
import useCarousel from "../../../component/Carousel/useCarousel";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const classes = {
  slider: {
    display: "flex",
    flexDirection: "column",
  },

  wrapper: {
    display: "flex",
    gap: "3rem",
    flexDirection: "row",
  },
  button: {
    paddingLeft: "0",
  },
  titleSubtitle: {
    display: "flex",
    gap: "1.7rem",
    flexDirection: "column",
    width: "50%",
  },
  buttonDescription: {
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
  },
  description: { display: "flex", gap: "4rem", flexDirection: "row" },
};

const LocatorCarousel = () => {
  const { currentSlide, handleSlideChange } = useCarousel();

  const theme = useTheme();
  const matches1700 = useMediaQuery(theme.breakpoints.between(1025, 2000));
  const matches640 = useMediaQuery(theme.breakpoints.down(640));
  const matches711 = useMediaQuery(theme.breakpoints.between(640, 717));

  return matches1700 ? (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <>
        <Carousel
          visibleSlides={1}
          totalSlides={3}
          slides={locatorContent}
          handleSlideChange={handleSlideChange}
          currentSlide={currentSlide}
          naturalSlideHeight={30}
          sx={{ pl: "0", pr: "0" }}
        />
      </>
    </Box>
  ) : (
    <Box sx={{ ...classes.wrapper }}>
      <Carousel
        visibleSlides={1}
        totalSlides={3}
        slides={locatorContent}
        handleSlideChange={handleSlideChange}
        currentSlide={currentSlide}
        naturalSlideHeight={(matches640 && 100) || (matches711 && 70) || 55}
        naturalSlideWidth={80}
        sx={{ pl: "0", pr: "0" }}
      />
    </Box>
  );
};

export default LocatorCarousel;
