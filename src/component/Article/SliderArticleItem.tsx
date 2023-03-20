import { Box, useMediaQuery, useTheme } from "@mui/material";
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
};



const SliderArticleItem = ({
  title,
  subTitle,
  description,
  buttonLabel,
  sx,
  buttonVariant,
  buttonCustomStyle,
  isSelected,
  isSlide = true,
  titleSubtitleWrapper,
  buttonDescriptionWrapper,
  descriptionStyle,
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
  isSlide?: boolean;
  titleSubtitleWrapper?: IObject;
  buttonDescriptionWrapper?: IObject;
  descriptionStyle?: IObject;
}) => {
  const selectedStyle = isSelected ? selecteditem : item;
  const theme=useTheme();
  const matches640 = useMediaQuery(theme.breakpoints.between(640,1025));
  
  return (
    <Box sx={{ ...rootStyle, ...sx }}>
      <Description
        title={title}
        subTitle={subTitle}
        description={description}
        buttonLabel={buttonLabel}
        buttonVariant={buttonVariant}
        buttonCustomStyle={buttonCustomStyle}
        cutsomButtonTextStyle={cutsomButtonTextStyle}
        titleSubtitleWrapper={!matches640 ? titleSubtitleWrapper:{}}
        buttonDescriptionWrapper={!matches640 ?buttonDescriptionWrapper:{}}
        sx={matches640 ?descriptionStyle:{}}
        // sx={!matches640?}
      />
      {isSlide && (
        <Box sx={{ width: "100%", ...selectedStyle }}></Box>
      )}
    </Box>
  );
};

export default SliderArticleItem;
