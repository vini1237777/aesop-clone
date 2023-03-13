import { Box } from "@mui/material";
import { IObject } from "../../interface/interface";
import Description from "../Description/Description";

const cutsomButtonTextStyle = {
  paddingRight: "0",
};

const item = {
  borderBottom: "1px solid rgba(0,0,0,.2)",
};
const selecteditem = {
  borderBottom: "1px solid rgba(0,0,0,.6)",
};

const rootStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100%",
  width: "440px",
};

const textStyle = {
  marginBottom: "-30px",
};

const slideComponentStyle={
  position:"absolute"
}

const SliderArticleItem = ({
  title,
  subTitle,
  description,
  buttonLabel,
  sx,
  buttonVariant,
  buttonCustomStyle,
  isSelected,
  isSlide=true,
}: {
  title?: string;
  subTitle?: string;
  description?: string;
  buttonLabel?: string;
  sx?: IObject;
  buttonVariant?: string;
  buttonCustomStyle?: IObject;
  cutsomButtonTextStyle?: IObject;
  isSelected: boolean;
  isSlide?:boolean;
}) => {
  const selectedStyle = isSelected ? selecteditem : item;
  const wrapperStyle = isSlide ? rootStyle : slideComponentStyle;
  return (
    <Box sx={{ ...wrapperStyle }}>
      <Description
        title={title}
        subTitle={subTitle}
        description={description}
        buttonLabel={buttonLabel}
        buttonVariant={buttonVariant}
        buttonCustomStyle={buttonCustomStyle}
        cutsomButtonTextStyle={cutsomButtonTextStyle}
        titleStyle={textStyle}
        isSlide={isSlide}
      />
      {isSlide && (
        <Box sx={{ width: "100%", height: "15px", ...selectedStyle }}></Box>
      )}
    </Box>
  );
};

export default SliderArticleItem;
