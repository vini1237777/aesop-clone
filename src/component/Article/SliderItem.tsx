import { Box, useMediaQuery, useTheme } from '@mui/material';
import { textEnum } from '../../hooks/useFonts';
import { IObject } from '../../interface/interface';
import Text from '../Typography/Typography';
import classes from './index.module.css'

const rootStyle =(theme:any)=> {
 return { display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  justifyContent: "flex-end",
  alignItems: "center",
  minHeight: "100%",
  maxHeight: "auto",
  height: "100%",
};}

const imageStyle = (theme: any) => {
  return {
    overflow: "auto",
    [theme.breakpoints.up(640, 1699)]: { height: "380px" },
  };
 
};

const textStyle =(theme:any)=> {
 return {
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   [theme.breakpoints.between(640, 712)]: {
     height:"100px"
   },
  
 };
};


const item = {
  borderBottom: "1px solid rgba(0,0,0,.2)",
};
 const selecteditem = {
   borderBottom: "1px solid rgba(0,0,0,.6)",
 };

const SliderItem = ({
  imageSrc,
  title,
  description,
  isSelected,
  sx
}: {
  imageSrc: any;
  title: string;
  description: string;
  isSelected:boolean;
  sx?:IObject
}) => {
  const selectedStyle = isSelected ? selecteditem : item;
  const theme = useTheme();
  const matches280 = useMediaQuery(theme.breakpoints.between(280, 639));
  const matches640 = useMediaQuery(theme.breakpoints.between(640, 1024));
  const matches1025 = useMediaQuery(theme.breakpoints.up(1025));
  
  let img = matches280
    ? imageSrc.small
    : matches640
    ? imageSrc.medium
    : matches1025
    ? imageSrc.large
    : imageSrc.def

  return (
    <Box component={"article"} sx={{ ...rootStyle(theme), ...sx }}>
      <Box>
        <img
          src={img}
          alt=""
          className={classes.image}
          style={imageStyle(theme)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box sx={{ ...textStyle(theme) }}>
          <Text label={title} variant={textEnum.sliderItemTitle} />
          <Text label={description} variant={textEnum.xs4} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          ...selectedStyle,
        }}
      ></Box>
    </Box>
  );
};

export default SliderItem
