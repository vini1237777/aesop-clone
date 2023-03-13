import { locationPreferences, } from '../../../config/texts/footerText/footerText';
import FooterSection from '../FooterSection';




const LocationPreference = ({data}:any) => {
  return (
    <FooterSection
      heading={locationPreferences.heading}
      list={locationPreferences.items}
    />
  );
}

export default LocationPreference
