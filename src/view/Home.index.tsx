import Banner from "./Banner/Banner";
import Content from "./Content/Content.index.";
import FooterHome from "./Footer/Footer.index";
import NavbarHome from "./NavbarHome/Navbar.index";
import TopbarHome from "./TopbarHome/Topbar.index";

const Home = () => {
  return (
    <>
      <TopbarHome />
      <NavbarHome />
      <Banner/>
      <Content />
      <FooterHome />
    </>
  );
};

export default Home;
