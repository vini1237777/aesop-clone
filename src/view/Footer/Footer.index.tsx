import { Box } from '@mui/material';
import { colors } from '../../styles/color';
import About from './About/About';
import LocationPreference from './LocationPreference/LocationPreference';
import OrdersSupport from './OrdersSupport/OrdersSupport';
import Services from './Services/Services';
import SocialMedia from './SocialMedia/SocialMedia';
import Subscription from './Subscription/Subscription';
import Sustainability from './Sustainability/Sustainability';


const footerStyle={
 display:"grid",
 gridColumnGap: "2.5rem",
 gridRowGap: "2.5rem",
 gridTemplateColumns: 'repeat(5,1fr)',
 gridTemplateRows: 'auto',
 padding: '3.1rem 2.5rem',
 backgroundColor: colors.black,
 color:colors.offWhite,
 width:"100%",
 marginTop:"4rem"
}


const FooterHome = () => {
  return (
    <Box component={"section"} sx={{ ...footerStyle }}>
      <Subscription />
      <OrdersSupport />
      <Services />
      <LocationPreference />
      <Sustainability />
      <About />
      <SocialMedia />
    </Box>
  );
}

export default FooterHome
