import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Slide,
    Slider,
} from "pure-react-carousel";
import SliderItem from "../../component/Article/SliderItem";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import classes from "./carousel.module.css";
import { colors } from "../../styles/color";
import { IObject } from "../../interface/interface";
import "pure-react-carousel/dist/react-carousel.es.css";


const defaultStyle =(theme:any) =>{
 return {
   width: "100%",
   paddingLeft: "80px",
   paddingRight: "80px",
 };
};

const Carousel = ({
  sx,
  visibleSlides,
  totalSlides,
  step = 1,
  naturalSlideWidth,
  naturalSlideHeight,
  orientation,
  BeforeSlideComponent,
  AfterSlideComponent,
  slides,
  sliderStyle,
  currentSlide,
  handleSlideChange,
  isSlideComponent = true,
  startSlideIndex,
  sliderItemStyle,
}: {
  sx?: IObject;
  visibleSlides: number;
  totalSlides: number;
  step?: number;
  naturalSlideWidth?: number;
  naturalSlideHeight?: number;
  orientation?: "horizontal" | "vertical" | undefined;
  BeforeSlideComponent?: JSX.Element;
  AfterSlideComponent?: JSX.Element;
  slides: IObject[];
  currentSlide: number;
  handleSlideChange: (type: string) => void;
  sliderStyle?: IObject;
  isSlideComponent?: boolean;
  startSlideIndex?: number;
  sliderItemStyle?: IObject;
}) => {
  const beforeSlideComponentStyle = !isSlideComponent && { height: "8rem" };
  const theme = useTheme();
  const matches1025 = useMediaQuery(theme.breakpoints.up(1025));
  return (
    <Box sx={{ ...defaultStyle(theme), ...sx }}>
      <CarouselProvider
        visibleSlides={visibleSlides || 3}
        totalSlides={totalSlides}
        step={step || 1}
        naturalSlideWidth={naturalSlideWidth || 50}
        naturalSlideHeight={naturalSlideHeight || 70}
        orientation={orientation || "horizontal"}
        className={classes.carouselProvider || ""}
      >
        <div>
          <Slider>
            <Box sx={{ ...sliderStyle }}>
              <Box sx={{ ...beforeSlideComponentStyle }}>
                {BeforeSlideComponent}
              </Box>
              <Box>
                {slides.map((data: any, index: number) => {
                  return (
                    <Slide
                      index={BeforeSlideComponent ? index + 1 : index}
                      key={data?.title}
                    >
                      <SliderItem
                        imageSrc={data.imageSrc || ""}
                        title={data.title || ""}
                        description={data.description}
                        isSelected={
                          currentSlide ===
                          (BeforeSlideComponent ? index + 1 : index)
                        }
                        sx={sliderItemStyle}
                      />
                    </Slide>
                  );
                })}
              </Box>
            </Box>
            {AfterSlideComponent}
          </Slider>
          {currentSlide > 0 && (
            <ButtonBack
              onClick={() => {
                handleSlideChange("prev");
              }}
              className={`${classes.button} ${classes.button_back}`}
              style={
                matches1025
                  ? { width: "70px", height: "70px" }
                  : { width: "60px", height: "60px" }
              }
            >
              <ArrowLeft sx={{ color: colors.offWhite, fontSize: "2rem" }} />
            </ButtonBack>
          )}
          {currentSlide !== totalSlides - visibleSlides && (
            <ButtonNext
              onClick={() => handleSlideChange("next")}
              className={`${classes.button} ${classes.button_next}`}
              style={
                matches1025
                  ? { width: "70px", height: "70px" }
                  : { width: "60px", height: "60px" }
              }
            >
              <ArrowRight sx={{ color: colors.offWhite, fontSize: "2rem" }} />
            </ButtonNext>
          )}
        </div>
      </CarouselProvider>
    </Box>
  );
};

export default Carousel;
