import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Slide,
    Slider,
} from "pure-react-carousel";
import SliderItem from "../../component/Article/SliderItem";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box } from "@mui/material";
import classes from "./carousel.module.css";
import { colors } from "../../styles/color";
import { IObject } from "../../interface/interface";
import "pure-react-carousel/dist/react-carousel.es.css";


const defaultStyle = {
  paddingTop: "9.37rem",
  width: "100%",
  paddingLeft: "80px",
  paddingRight: "80px",
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
}) => {
  const beforeSlideComponentStyle = !isSlideComponent && { height: "8rem" };

  return (
    <Box sx={{ ...defaultStyle, ...sx }}>
      <CarouselProvider
        visibleSlides={visibleSlides || 3}
        totalSlides={totalSlides}
        step={step || 1}
        naturalSlideWidth={naturalSlideWidth || 50}
        naturalSlideHeight={naturalSlideHeight || 55}
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
                    <Slide index={index + 1} key={data?.title}>
                      <SliderItem
                        imageSrc={data.imageSrc || ""}
                        title={data.title || ""}
                        description={data.description}
                        isSelected={currentSlide === index + 1}
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
            >
              <ArrowLeft sx={{ color: colors.offWhite }} />
            </ButtonBack>
          )}
          <ButtonNext
            onClick={() => handleSlideChange("next")}
            className={`${classes.button} ${classes.button_next}`}
          >
            <ArrowRight sx={{ color: colors.offWhite }} fontSize="large" />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </Box>
  );
};

export default Carousel;
