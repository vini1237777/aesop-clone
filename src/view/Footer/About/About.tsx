import { about} from '../footerText/footerText';
import FooterSection from '../FooterSection';

const About = () => {
  return (
    <FooterSection heading={about.heading} list={about.items} />
  );
}

export default About
