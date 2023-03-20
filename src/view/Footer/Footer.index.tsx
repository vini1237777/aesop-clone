import { Box, useMediaQuery, useTheme} from '@mui/material';
import Divider from '../../component/Divider/Divider';
import { colors } from '../../styles/color';
import About from './About/About';
import LocationPreference from './LocationPreference/LocationPreference';
import OrdersSupport from './OrdersSupport/OrdersSupport';
import Services from './Services/Services';
import SocialMedia from './SocialMedia/SocialMedia';
import Subscription from './Subscription/Subscription';
import Sustainability from './Sustainability/Sustainability';


const footerStyle=(theme:any)=>{
 return {
   display: "grid",
   gridColumnGap: "1.25rem",
   gridRowGap: "1.25rem",
   gridTemplateColumns: "repeat(2,1fr)",
   gridTemplateRows: "auto",
   padding: "1.97rem 1.12rem",
   backgroundColor: colors.black,
   color: colors.offWhite,
   width: "100%",
   marginTop: "4rem",
   [theme.breakpoints.between(639, 1023)]: {
     gridTemplateColumns: "repeat(3,1fr)",
     gridColumnGap: "35px",
     gridRowGap: "35px",
     padding: "40px 34px",
   },
   [theme.breakpoints.up(1023)]: {
     gridTemplateColumns: "repeat(5,1fr)",
     gridColumnGap: "40px",
     gridRowGap: "40px",
     padding: "50px 40px",
   },
 };
}

// grid-column-gap: 40px;
//     grid-row-gap: 40px;
//     -ms-grid-columns: (1fr)[5];
//     grid-template-columns: repeat(5,1fr);
//     -ms-grid-rows: auto 1fr;
//     grid-template-rows: auto 1fr;
//     padding: 50px 40px;


// grid-column-gap: 35px;
//     grid-row-gap: 35px;
//     -ms-grid-columns: (1fr)[3];
//     grid-template-columns: repeat(3,1fr);
//     -ms-grid-rows: auto 1fr;
//     grid-template-rows: auto 1fr;
//     padding: 40px 34px;


    // display: grid;
    // grid-column-gap: 20px;
    // grid-row-gap: 20px;
    // -ms-grid-columns: (1fr)[2];
    // grid-template-columns: repeat(2,1fr);
    // -ms-grid-rows: auto 1fr;
    // grid-template-rows: auto 1fr;
    // padding: 35px 20px;


const FooterHome = () => {

  const theme = useTheme();
  const matches1024 = useMediaQuery(theme.breakpoints.down(1024));

  return (
  
      <Box component={"section"} sx={{ ...footerStyle(theme) }}>
        <Subscription />
        <OrdersSupport />
        <Services />
        <LocationPreference />
        <Sustainability />
        <About />
        {!matches1024 &&<SocialMedia />}
      </Box>
  
  );
}

export default FooterHome
