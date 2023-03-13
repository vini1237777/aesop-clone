import { styled } from "@mui/system";
import React from "react";
import { colors } from "../../styles/color";
import { fontSmallest, textEnum } from "../../styles/fontstyles";
import Text from "../Typography/Typography";


const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap:"4rem",
  ...fontSmallest,
  color: colors.offWhite,
    backgroundColor: colors.black,
    height: "auto",
    overflow: "visible",
    padding:"0.75rem 1.25rem 0.5rem",
    width: "100%",
});


const Topbar = ({text,icon}:{text:string,icon:React.ReactNode}) => {
  return (
    <Wrapper>
      <Text label={text} variant={textEnum.xs} sx={{color:colors.offWhite}}/>
     {icon}
    </Wrapper>
  );
}

export default Topbar;
