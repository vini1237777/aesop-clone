import { Instagram } from '@mui/icons-material';
import { Box, Divider } from '@mui/material';
import Text from '../../component/Typography/Typography';
import { colors } from '../../styles/color';
import { fontFamily } from '../../styles/fontstyles';
import { socialMediaImages } from '../Content/contentText/contentText';
import { socialMedia } from '../Footer/footerText/footerText';

const textStyle={
    fontSize:"16px",
    color: colors.offWhite,
    fontFamily:fontFamily.suisse_regular,
    padding:"30px 20px 40px 40px",
}


const BottomBanner = () => {
  return (
    <Box sx={{ backgroundColor: colors.black }}>
      <Divider
        sx={{ border: "1px solid #FFFEF2", backgroundColor: colors.black }}
      />
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Text sx={{ ...textStyle }} label={"© Aesop"} />
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem",pr:"20px"}}>
          <Instagram sx={{ color: colors.offWhite }} />
          <img src={socialMediaImages.twitter} />
          <img src={socialMediaImages.linkedin} />
        </Box>
      </Box>
    </Box>
  );
}

export default BottomBanner
