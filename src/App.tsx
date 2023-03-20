import './App.css';
import SliderArticleItem from './component/Article/SliderArticleItem';
import Description from './component/Description/Description';
import { home } from './view/Content/contentText/contentText';
import Home from './view/Home.index';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <SliderArticleItem
        title={home.title}
        description={home.description}
        subTitle={home.subtitle}
        buttonLabel={home.buttonLabel}
        buttonVariant="text"
        buttonCustomStyle={{ ...buttonCustomStyle }}
        isSelected={false}
      /> */}
      {/* <Description
        title={home.title}
        subTitle={home.subtitle}
        description={home.description}
        buttonLabel={home.buttonLabel}
      /> */}
    </div>
  );
}

export default App;
