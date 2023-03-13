
import {Slide} from "pure-react-carousel";
import { productFormulaSlider, skinCare } from '../../config/texts/contentText/contentText';
import SliderArticleItem from "../../component/Article/SliderArticleItem";
import Carousel from "../../component/Carousel/Carousel";
import useCarousel from "../../component/Carousel/useCarousel";


const buttonCustomStyle = {
  paddingLeft:"0",
};



const SkinCareProductCarousel = () => {

  const {currentSlide,handleSlideChange}=useCarousel();

  return (
    <Carousel
      BeforeSlideComponent={
        <Slide index={0}>
          <SliderArticleItem
            title={skinCare.title}
            description={skinCare.description}
            subTitle={skinCare.subtitle}
            buttonLabel={skinCare.buttonLabel}
            buttonVariant="text"
            buttonCustomStyle={{ ...buttonCustomStyle }}
            isSelected={currentSlide === 0}
          />
        </Slide>
      }
      visibleSlides={3}
      totalSlides={6}
      slides={productFormulaSlider}
      handleSlideChange={handleSlideChange}
      currentSlide={currentSlide}
    />
  );
};

export default SkinCareProductCarousel;

