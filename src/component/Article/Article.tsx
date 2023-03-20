import { Box, useMediaQuery, useTheme } from "@mui/material";
import { productPerfume } from "../../view/Content/contentText/contentText";
import { IObject } from "../../interface/interface";
import { colors } from "../../styles/color";
import Description from "../Description/Description";
import Wrapper from "../Wrapper";
import { fontFamily } from "../../styles/fontstyles";



const styles=(type:string,isVertical:boolean,theme:any)=>{
  const descriptionStyles:any={};
  if (!isVertical){
      descriptionStyles[`padding${type}`]=  "5rem"
  } else {
    descriptionStyles.pl=  "20px" 
    descriptionStyles.pr=  "20px" 
    descriptionStyles[theme.breakpoints.up(639)]={ pl:  "16.5%" ,
    pr:  "16.5%" }
  }
return {
  root: {
    display: "flex",
    width: "100%",
    flexDirection: isVertical ? "column" : "row",
    gap: isVertical ? "1.87rem" : "0",
  },

  descriptionWrapper: {
    width: isVertical ? "100%" : "33.3%",
    ...descriptionStyles,
  },

  banner: {
    color: colors.offWhite,
  },
  image: {
    width: isVertical ? "100%" : "66.6%",
    // height:"14.5rem",
    [`padding${type}`]: "1.25rem",
    [theme.breakpoints.up(649)]: { [`padding${type}`]: "12.5%" },
    [theme.breakpoints.up(1019)]: { [`padding${type}`]: "8.33%" },
  },

  subtitle: {
    fontSize: "25px",
    [theme.breakpoints.up(639)]: { fontSize: "30px" },
  },
  description: {
    fontSize: "16px",
    lineHeight: 1.7,
    fontWeight: 400,
    fontFamily: fontFamily.suisse_regular,
    marginBottom: "30px",
  },
  title: {
    marginBottom: "20px",
  },
  button: {
    fontSize: "14px",
    lineHeight: 1.7,
    fontWeight: 400,
    fontFamily: fontFamily.suisse_medium,
  },
};
}



const Article = ({
  imageSrc,
  title,
  subTitle,
  description,
  buttonLabel,
  type = "Left",
  sx,
}: {
  imageSrc:  IObject;
  title?: string;
  subTitle?: string;
  description: string;
  buttonLabel?: string;
  type?: "Right" | "Left";
  sx?: IObject;
}) => {
  const theme = useTheme();
  const matches1019 = useMediaQuery(theme.breakpoints.down(1019));
  const matches280 = useMediaQuery(theme.breakpoints.between(280,639));
  const matches640 = useMediaQuery(theme.breakpoints.between(640,1024));
  const matches1025 = useMediaQuery(theme.breakpoints.up(1025));
  
  let img= matches280 ? imageSrc?.small : matches640? imageSrc?.medium : matches1025? imageSrc.large : imageSrc.def

  const classes = styles(type, matches1019, theme);

  return (
    <Wrapper customClasses={{ ...classes.root, ...sx }}>
      <>
        {type === "Right" && (
          <Box sx={classes.image}>
            <img src={img} alt={""} />
          </Box>
        )}
        <Description
          title={title}
          subTitle={subTitle}
          description={description}
          buttonLabel={buttonLabel}
          sx={classes.descriptionWrapper}
          subTitleStyle={classes.subtitle}
          descriptionStyle={classes.description}
          cutsomButtonTextStyle={classes.button}
          titleStyle={classes.title}
        />
        
        {type === "Left" && (
          <Box sx={classes.image}>
            <img src={img} alt={""} />
          </Box>
        )}
      </>
    </Wrapper>
  );
};

export default Article