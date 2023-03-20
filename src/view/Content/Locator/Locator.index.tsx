import { Box, useMediaQuery, useTheme } from "@mui/material";
import Description from "../../../component/Description/Description";
import Wrapper from "../../../component/Wrapper";
import { IObject } from "../../../interface/interface";
import { fontFamily } from "../../../styles/fontstyles";
import LocatorCarousel from "./LocatorCarousel";


const styles = (type: string,isVertical:boolean,theme: any) => {
  const descriptionStyles: any = {};
  
    descriptionStyles.pl = "20px";
    descriptionStyles.pr = "20px";
    descriptionStyles[theme.breakpoints.up(639)] = isVertical ? {pl:"125px"}:{ pl: '90px'};
  return {
    root: {
      display: "flex",
      width: "100%",
      flexDirection: isVertical ? "column" : "row",
      gap: isVertical ? "0" : "2.8rem",
    },

    descriptionWrapper: {
      width: isVertical ? "100%" : "33%",
      ...descriptionStyles,
    },

    image: {
      width: "100%",
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
};

const LocatorArticle = ({
  title,
  subTitle,
  description,
  buttonLabel,
  type = "Left",
  sx,
}: {
  imageSrc: IObject;
  title?: string;
  subTitle?: string;
  description: string;
  buttonLabel?: string;
  type?: "Right" | "Left";
  sx?: IObject;
}) => {
  const theme = useTheme();
 const matches1025=useMediaQuery(theme.breakpoints.down(1025))
  const classes = styles(type,matches1025, theme);

  return (
    <Wrapper customClasses={{ ...classes.root, ...sx }}>
      <>
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
           <LocatorCarousel/>
          </Box>
        )}
      </>
    </Wrapper>
  );
};

export default LocatorArticle;
