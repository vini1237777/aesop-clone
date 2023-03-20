import Banner from "./Banner/Banner";
import Content from "./Content/Content.index";
import FooterHome from "./Footer/Footer.index";
import NavbarHome from "./NavbarHome/Navbar.index";
import TopbarHome from "./TopbarHome/Topbar.index";
import '../App.css'
import BottomBanner from "./BottomBanner/BottomBanner";
import { useMediaQuery, useTheme } from "@mui/material";

const Home = () => {
 
  const theme=useTheme();

  const matches640=useMediaQuery(theme.breakpoints.up(639))

  return (
    <div className="App">
      <TopbarHome />
      {matches640 && <NavbarHome />}
      <Banner />
      <Content />
      <FooterHome />
      <BottomBanner />
    </div>
  );
};

export default Home;
