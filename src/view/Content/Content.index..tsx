import Article from '../../component/Article/Article';
import { appreciationToken, Athenaeum, fragnance, locator } from '../../config/texts/contentText/contentText';
import HomeCarousel from './IncenseProductCarousel';
import SkinCareProductCarousel from './SkinCareProductCarousel';
import ProductPerfumeCarousel from './ProductPerfumeCarousel';

const Content = () => {
  return (
    <>
      <HomeCarousel />
      <Article
        subTitle={fragnance.subtitle}
        description={fragnance.description}
        buttonLabel={fragnance.buttonLabel}
        imageSrc={fragnance.imageSrc}
        type={"Right"}
      />
      <ProductPerfumeCarousel/>
      <Article
        title={Athenaeum.title}
        subTitle={Athenaeum.subtitle}
        description={Athenaeum.description}
        buttonLabel={Athenaeum.buttonLabel}
        imageSrc={Athenaeum.imageSrc}
      />
      <SkinCareProductCarousel/>
      <Article
        title={appreciationToken.title}
        subTitle={appreciationToken.subtitle}
        description={appreciationToken.description}
        buttonLabel={appreciationToken.buttonLabel}
        imageSrc={appreciationToken.imageSrc}
        type={"Right"}
      />
      <Article
        subTitle={locator.subtitle}
        description={locator.description}
        buttonLabel={locator.buttonLabel}
        imageSrc={locator.imageSrc}
      />
      
    </>
  );
}

export default Content
