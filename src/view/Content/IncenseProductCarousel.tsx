
import {Slide} from "pure-react-carousel";
import { home, homeSlider } from './contentText/contentText';
import SliderArticleItem from "../../component/Article/SliderArticleItem";
import Carousel from "../../component/Carousel/Carousel";
import useCarousel from "../../component/Carousel/useCarousel";
import Wrapper from "../../component/Wrapper";
import { useMediaQuery, useTheme } from "@mui/material";



const classes = {
  slider: {
    display: "flex",
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
    width: "50%",
  },
  buttonDescription: {
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
  },
  description: { display: "flex", gap: "4rem", flexDirection: "row" },
};


const IncenseProductCarousel = () => {
  
  const {currentSlide,handleSlideChange,visibleSlides}=useCarousel();

   const theme = useTheme();
   const matches640 = useMediaQuery(theme.breakpoints.down(640));
   const matches300 = useMediaQuery(theme.breakpoints.between(0,440));
   const matches711 = useMediaQuery(theme.breakpoints.between(640, 717));
   const matches2000 = useMediaQuery(theme.breakpoints.between(1025, 1699));

  return matches2000? (
    <Wrapper>
      <Carousel
        BeforeSlideComponent={
          <Slide index={0}>
            <SliderArticleItem
              title={home.title}
              description={home.description}
              subTitle={home.subtitle}
              buttonLabel={home.buttonLabel}
              buttonVariant="text"
              buttonCustomStyle={classes.button}
              isSelected={currentSlide === 0}
            />
          </Slide>
        }
        visibleSlides={visibleSlides || 4}
        totalSlides={12}
        slides={homeSlider}
        handleSlideChange={handleSlideChange}
        currentSlide={currentSlide}
      />
    </Wrapper>
  ) : (
    <Wrapper customClasses={{ ...classes.wrapper }}>
      <>
        <SliderArticleItem
          title={home.title}
          description={home.description}
          subTitle={home.subtitle}
          buttonLabel={home.buttonLabel}
          buttonVariant="text"
          buttonCustomStyle={classes.button}
          isSelected={false}
          sx={
            !matches300
              ? { pl: "80px", pr: "80px" }
              : { pl: "10px", pr: "20px" }
          }
          isSlide={false}
          titleSubtitleWrapper={classes.titleSubtitle}
          buttonDescriptionWrapper={classes.buttonDescription}
          descriptionStyle={classes.description}
        />
        <Carousel
          visibleSlides={visibleSlides || 4}
          totalSlides={11}
          slides={homeSlider}
          handleSlideChange={handleSlideChange}
          currentSlide={currentSlide}
          naturalSlideHeight={
            (!matches2000 && 60) ||
            
            (matches640 && 120) ||
            (matches711 && 150)
          }
          sx={matches300 ? { pl: "0", pr: "0" } : { pl: "80px", pr: "80px" }}
        />
      </>
    </Wrapper>
  );
};

 

export default IncenseProductCarousel;

