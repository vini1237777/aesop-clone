import Article from '../../component/Article/Article';
import { appreciationToken, Athenaeum, fragnance, locator } from './contentText/contentText';
import HomeCarousel from './IncenseProductCarousel';
import SkinCareProductCarousel from './SkinCareProductCarousel';
import ProductPerfumeCarousel from './ProductPerfumeCarousel';
import LocatorArticle from './Locator/Locator.index';

const Content = () => {
  return (
    <div style={{width:"100%"}}>
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
      <LocatorArticle
        subTitle={locator.subtitle}
        description={locator.description}
        buttonLabel={locator.buttonLabel}
        imageSrc={locator.imageSrc}
        type='Left'
      />
      
    </div>
  );
}

export default Content
