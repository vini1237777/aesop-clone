import { orderAndSupport } from '../footerText/footerText';
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
