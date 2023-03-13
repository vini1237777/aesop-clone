import { about} from '../../../config/texts/footerText/footerText';
import FooterSection from '../FooterSection';

const About = () => {
  return (
    <FooterSection heading={about.heading} list={about.items} />
  );
}

export default About
