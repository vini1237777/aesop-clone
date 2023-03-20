
import { socialMedia } from '../footerText/footerText';
import FooterSection from '../FooterSection';

const SocialMedia = () => {
  return (
    <FooterSection
      heading={socialMedia.heading}
      list={socialMedia.items}
    />
  );
}

export default SocialMedia
