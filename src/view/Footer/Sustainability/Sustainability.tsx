import { Box, useTheme } from '@mui/material';
import Divider from '../../../component/Divider/Divider';
import Text from '../../../component/Typography/Typography';
import { sustainability } from '../footerText/footerText';
import { colors } from '../../../styles/color';
import { textEnum } from '../../../styles/fontstyles';

const textStyles={
    color:colors.offWhite,
    lineHeight:"inherit",
    // fontSize:"0.78rem"
}

const titleStyles = {
  color: colors.offWhite,
};

const wrapperStyle = (theme: any) => {
  return {
    gridColumn: "1 span",
    [theme.breakpoints.up( 1023)]: {
      gridColumn: "2 span",
    },
  };
};

const Sustainability = () => {

  const theme =useTheme();
  return (
    <Box sx={wrapperStyle(theme)}>
      <Text
        label={sustainability.heading}
        variant={textEnum.sm2}
        sx={titleStyles}
      />
      <Divider />
      <Text
        label={sustainability.text}
        variant={textEnum.xs2}
        sx={textStyles}
      />
    </Box>
  );
}

export default Sustainability
