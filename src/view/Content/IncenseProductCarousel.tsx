
import {Slide} from "pure-react-carousel";
import { home, homeSlider } from '../../config/texts/contentText/contentText';
import SliderArticleItem from "../../component/Article/SliderArticleItem";
import Carousel from "../../component/Carousel/Carousel";
import useCarousel from "../../component/Carousel/useCarousel";


const buttonCustomStyle = {
  paddingLeft:"0",
};


const IncenseProductCarousel = () => {

  const {currentSlide,handleSlideChange}=useCarousel();

  return (
    <Carousel
      BeforeSlideComponent={
        <Slide index={0}>
          <SliderArticleItem
            title={home.title}
            description={home.description}
            subTitle={home.subtitle}
            buttonLabel={home.buttonLabel}
            buttonVariant="text"
            buttonCustomStyle={{ ...buttonCustomStyle }}
            isSelected={currentSlide === 0}
          />
        </Slide>
      }
      visibleSlides={3}
      totalSlides={12}
      slides={homeSlider}
      handleSlideChange={handleSlideChange}
      currentSlide={currentSlide}
    />
  );
};

export default IncenseProductCarousel;

