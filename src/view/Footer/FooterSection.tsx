import Section, { ISection } from "../../component/Section/Section";
import { textEnum } from "../../hooks/useFonts";


const rootStyle={
  gridColumn:"1 span"
}

const textStyles={
  color:'#fff'
}

const FooterSection = (props:ISection) => {
  return (
    <Section
      rootProps={{ component: "section" }}
      {...props}
      rootStyle={{ ...rootStyle }}
      titleVariant={textEnum.sm5}
      listItemVariant={textEnum.xs2}
      listWrapperStyles={textStyles}
      titleStyle={textStyles}

    />
  );
};

export default FooterSection
