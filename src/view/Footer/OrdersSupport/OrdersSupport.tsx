import { orderAndSupport } from '../../../config/texts/footerText/footerText';
import FooterSection from '../FooterSection';

const OrdersSupport = () => {
  return (
    <FooterSection
      heading={orderAndSupport.heading}
      list={orderAndSupport.items}
    />
  );
}

export default OrdersSupport
