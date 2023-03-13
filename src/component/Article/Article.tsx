import { Box } from "@mui/material";
import { IObject } from "../../interface/interface";
import { colors } from "../../styles/color";
import Description from "../Description/Description";

const defaultStyle={
    paddingTop:"9.37rem",
    display:'flex',
    width:"100%",
}

const detailedStyle = {
  width: "33.33%",
};


const bannerColorStyles={
color:colors.offWhite
}


const Article = ({
  imageSrc,
  title,
  subTitle,
  description,
  buttonLabel,
  type='Left',
  sx,
  isBanner=false
}: {
  imageSrc?: string;
  title?: string;
  subTitle?: string;
  description: string;
  buttonLabel?: string;
  type?:'Right' | 'Left';
  sx?:IObject;
  isBanner?:boolean
}) => {
    const immageWrapperStyles={
       [ `padding${type}`]: '8.33%'
    }

     const deatiledWrapperStyles = {
       [`padding${type}`]: "80px",
     };

     const bannerStyles = isBanner && bannerColorStyles;

  return (
    <Box component={"article"} sx={{ ...defaultStyle, ...sx }}>
      {type === "Right" ? (
        <>
          <Box sx={{ width: "66.66%", ...immageWrapperStyles }}>
            <img src={imageSrc} alt={""} />
          </Box>
          <Description
            title={title}
            subTitle={subTitle}
            description={description}
            buttonLabel={buttonLabel}
            sx={{ ...detailedStyle, ...deatiledWrapperStyles }}
          />
        </>
      ) : (
        <>
          <Description
            title={title}
            subTitle={subTitle}
            description={description}
            buttonLabel={buttonLabel}
            sx={{ ...detailedStyle, ...deatiledWrapperStyles }}
            textCommonStyle={{...bannerStyles}}
            buttonCustomStyle={isBanner ? {borderColor:colors.offWhite}:{}}
            isBanner={isBanner}
          />
          <Box sx={{ width: "66.66%", ...immageWrapperStyles }}>
            <img src={imageSrc} alt={""} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Article