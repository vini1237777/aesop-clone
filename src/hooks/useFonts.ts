import { useTheme } from "@mui/material";
import { fontFamily, fontLarge, fontMedium, fontSmall, fontSmallest } from "../styles/fontstyles";

export type textTypes =
  | "sm"
  | "md"
  | "lg"
  | "xs"
  | "sm2"
  | "xs2"
  | "sm3"
  | "xl"
  | "sm4"
  | "xs3"
  | "sm5"
  | "sliderItemTitle"
  | "xs4"
  | "xs5" 
 

export enum textEnum {
  sm = "sm",
  md = "md",
  lg = "lg",
  xs = "xs",
  sm2 = "sm2",
  xs2 = "xs2",
  sm3 = "sm3",
  xl = "xl",
  sm4 = "sm4",
  xs3 = "xs3",
  sm5 = "sm5",
  sliderItemTitle = "sliderItemTitle",
  xs4 = "xs4",
  xs5 = "xs5",
}
const useFonts = () => {

  const theme=useTheme();
  const textStyles = {
    //
    sm: {
      fontSize: "1.4rem",
      lineHeight: 1.4,
      fontWeight: 700,
      fontFamily: fontFamily.suisse_regular,
    },
    md: {
      fontSize: "1.6rem",
      lineHeight: 1.7,
      fontWeight: 400,
      fontFamily: fontFamily.suisse_regular,
    },
    //
    lg: {
      fontSize: "1.39rem",
      lineHeight: 1.33,
      fontWeight: 400,
      letterSpacing: "0.025em",
      fontFamily: fontFamily.zapf_humanist,
      [theme.breakpoints.up(699)]: { fontSize: "1.67rem" },
    },
    // //
    xs: {
      fontSize: "0.78rem",
      lineHeight: 1.5,
      fontWeight: 400,
      fontFamily: fontFamily.suisse_medium,
    },
    sliderItemTitle: {
      fontSize: "0.78rem",
      lineHeight: 1.7,
      fontWeight: 400,
      fontFamily: fontFamily.suisse_medium,
    },
    xs4: {
      fontSize: "0.78rem",
      lineHeight: 2.5,
      fontWeight: 400,
      fontFamily: fontFamily.suisse_regular,
    },
    xs5: {
      fontSize: "0.75rem",
      lineHeight: 2.5,
      fontWeight: 400,
      fontFamily: fontFamily.suisse_medium,
    },
    //
    sm2: {
      fontSize: "0.8rem",
      lineHeight: 2,
      fontWeight: 400,
      fontFamily: fontFamily.suisse_regular,
    },
    //
    sm5: {
      fontSize: "0.72rem",
      lineHeight: 2,
      fontWeight: 400,
      fontFamily: fontFamily.suisse_regular,
      [theme.breakpoints.up(699)]: { fontSize: "0.83rem" },
    },
    //
    xs2: {
      fontSize: "0.67rem",
      lineHeight: 2.5,
      fontFamily: fontFamily.suisse_regular,
      [theme.breakpoints.up(699)]: { fontSize: "0.78rem" },
    },
    //
    xs3: {
      fontSize: "0.83rem",
      lineHeight: 1.5,
      fontFamily: fontFamily.suisse_regular,
    },
    //
    sm3: {
      fontSize: "0.78rem",
      lineHeight: 1.5,
    },
    xl: {
      fontSize: "1.9rem",
      lineHeight: 1.33,
      fontWeight: 400,
      letterSpacing: "0.025em",
      fontFamily: fontFamily.zapf_humanist,
    },
   
    //doubt //
    sm4: {
      fontSize: "13.65px",
      fontWeight: "normal",
      fontFamily: fontFamily.suisse_medium,
      [theme.breakpoints.down(700)]: {
        fontSize: "17.6px",
        fontFamily: fontFamily.suisse_regular,
      },
    },
  };
  return { textEnum, textStyles };
};

export default useFonts;
