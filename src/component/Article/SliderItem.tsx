import { Box } from '@mui/material';
import Text from '../Typography/Typography';
import { textEnum } from '../../styles/fontstyles';
import classes from './index.module.css'

const rootStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  justifyContent: "center",
  alignItems: "center",
  height:"100%",
};

const imageStyle = {
  width: "auto",
  maxWidth: "100%",
  height: "380px",
  margin: "auto auto 0",
  maxHeight: "100%",
  verticalAlign: "bottom"

};

const textStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};


const item= {
    borderBottom: "1px solid rgba(0,0,0,.2)",
  };
 const selecteditem= {
    borderBottom: "1px solid rgba(0,0,0,.6)",
  };

const SliderItem = ({
  imageSrc,
  title,
  description,
  isSelected,
}: {
  imageSrc: string;
  title: string;
  description: string;
  isSelected:boolean;
}) => {
  const selectedStyle = isSelected ? selecteditem : item;
  return (
    <Box component={"article"} sx={{ ...rootStyle }}>
      <img src={imageSrc} alt="" style={{ ...imageStyle }} className={classes.image}/>
      <Box sx={{ ...textStyle }}>
        <Text label={title} variant={textEnum.xs} />
        <Text label={description} variant={textEnum.sm2} />
      </Box>
      <Box sx={{width:'100%',height:"15px", ...selectedStyle }}></Box>
    </Box>
  );
};

export default SliderItem
