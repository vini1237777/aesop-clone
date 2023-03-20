
import {Slide} from "pure-react-carousel";
import { productFormulaSlider, skinCare } from './contentText/contentText';
import SliderArticleItem from "../../component/Article/SliderArticleItem";
import Carousel from "../../component/Carousel/Carousel";
import useCarousel from "../../component/Carousel/useCarousel";
import Wrapper from "../../component/Wrapper";
import { useMediaQuery, useTheme } from "@mui/material";

const classes = {
  slider: {
    display: "flex",
    flexDirection: "column",
  },

  wrapper: {
    display: "flex",
    gap: "3rem",
    flexDirection: "column",
  },
  button: {
    paddingLeft: "0",
  },
  titleSubtitle: {
    display: "flex",
    gap: "1.7rem",
    flexDirection: "column",
    width: "100%",
  },
  buttonDescription: {
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
  },
  description: { display: "flex", gap: "3rem", flexDirection: "row" },
};

const SkinCareProductCarousel = () => {

  const {currentSlide,handleSlideChange,visibleSlides}=useCarousel();
 const theme = useTheme();
 const matches640 = useMediaQuery(theme.breakpoints.down(640));
   const matches300 = useMediaQuery(theme.breakpoints.between(0, 440));
    const matches2000 = useMediaQuery(theme.breakpoints.between(1025, 1699));
   const matches711 = useMediaQuery(theme.breakpoints.between(640, 717));


  return matches2000 ? (
    <Wrapper>
      <Carousel
        BeforeSlideComponent={
          <Slide index={0}>
            <SliderArticleItem
              title={skinCare.title}
              description={skinCare.description}
              subTitle={skinCare.subtitle}
              buttonLabel={skinCare.buttonLabel}
              buttonVariant="text"
              buttonCustomStyle={classes.button}
              isSelected={currentSlide === 0}
            />
          </Slide>
        }
        visibleSlides={visibleSlides || 4}
        totalSlides={6}
        slides={productFormulaSlider}
        handleSlideChange={handleSlideChange}
        currentSlide={currentSlide}
      />
    </Wrapper>
  ) : (
    <Wrapper customClasses={classes.wrapper}>
      <>
        <SliderArticleItem
          title={skinCare.title}
          description={skinCare.description}
          subTitle={skinCare.subtitle}
          buttonLabel={skinCare.buttonLabel}
          buttonVariant="text"
          buttonCustomStyle={classes.button}
          isSelected={false}
          isSlide={false}
          sx={
            !matches300
              ? { pl: "80px", pr: "80px" }
              : { pl: "10px", pr: "20px" }
          }
          titleSubtitleWrapper={classes.titleSubtitle}
          buttonDescriptionWrapper={classes.buttonDescription}
          descriptionStyle={classes.description}
        />
        <Carousel
          visibleSlides={visibleSlides || 4}
          totalSlides={5}
          slides={productFormulaSlider}
          handleSlideChange={handleSlideChange}
          currentSlide={currentSlide}
          naturalSlideHeight={
            (!matches2000 && 60) ||
            (matches300 && 100) ||
            (matches640 && 100) ||
            (matches711 && 150)
          }
          sx={matches300 ? { pl: "0", pr: "0" } : { pl: "80px", pr: "80px" }}
          
        />
      </>
    </Wrapper>
  );
};

export default SkinCareProductCarousel;

