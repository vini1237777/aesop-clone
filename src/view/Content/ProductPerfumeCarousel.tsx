
import {Slide} from "pure-react-carousel";
import { productPerfume, productPerfumeSlider } from '../../config/texts/contentText/contentText';
import SliderArticleItem from "../../component/Article/SliderArticleItem";
import Carousel from "../../component/Carousel/Carousel";
import useCarousel from "../../component/Carousel/useCarousel";


const sliderStyle={
  display:"flex",
  flexDirection:"column",  
}

const ProductPerfumeCarousel = () => {

  const {currentSlide,handleSlideChange}=useCarousel();

  return (
    <Carousel
      BeforeSlideComponent={
        <Slide index={0}>
          <SliderArticleItem
            subTitle={productPerfume.subtitle}
            isSelected={false}
            isSlide={false}
          />
        </Slide>
      }
      sliderStyle={{ ...sliderStyle }}
      visibleSlides={3}
      totalSlides={6}
      slides={productPerfumeSlider}
      handleSlideChange={handleSlideChange}
      currentSlide={currentSlide + 1}
      isSlideComponent={false}
    />
  );
};

export default ProductPerfumeCarousel;

