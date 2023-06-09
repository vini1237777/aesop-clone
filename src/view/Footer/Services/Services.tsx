
import { services } from '../footerText/footerText';
import FooterSection from '../FooterSection';

const Services = () => {
  return (
    <FooterSection
      heading={services.heading}
      list={services.items}
    />
  );
}

export default Services
