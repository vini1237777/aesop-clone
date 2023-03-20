import { useMediaQuery, useTheme } from '@mui/material';
import Navbar from '../../component/Navbar/Navbar.index';
import { navbarHeadings, navbarHeadingsGeneral, navbarHeadingsMain } from './headings/navbarheadings';

const NavbarHome = () => {
   const theme = useTheme();
   const matches640 = useMediaQuery(theme.breakpoints.between(640, 1025));
  return !matches640 ? (
    <Navbar
      navbarHeadings={navbarHeadings}
      navbarHeadingsMain={navbarHeadingsMain}
    />
  ) : (
    <Navbar
      navbarHeadings={navbarHeadings}
      navbarHeadingsMain={navbarHeadingsGeneral}
    />
  );
}

export default NavbarHome
