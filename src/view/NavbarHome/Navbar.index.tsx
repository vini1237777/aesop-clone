import Navbar from '../../component/Navbar/Navbar.index';
import { navbarHeadings, navbarHeadingsMain } from '../../config/headings/navbarheadings';

const NavbarHome = () => {
  return (
   <Navbar navbarHeadings={navbarHeadings} navbarHeadingsMain={navbarHeadingsMain}/>
  )
}

export default NavbarHome
