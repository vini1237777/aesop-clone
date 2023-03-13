import { ListItem } from "../../../classes";
import { iconTypesEnum } from "../../../icons/config";


export const orderAndSupport = {
  heading: "Orders and support",
  items: [
    new ListItem(1, "Contact us"),
    new ListItem(2, "FAQs", iconTypesEnum.upArrow,undefined,undefined),
    new ListItem(3, "Shipping", iconTypesEnum.upArrow),
    new ListItem(4, "Returns", iconTypesEnum.upArrow),
    new ListItem(5, "Order history"),
    new ListItem(6, "Terms and conditions"),
  ],
};



export const services = {
  heading: "Services",
  items: [
    new ListItem(1, "Live assistance"),
    new ListItem(2, "Corporate gifts"),
    new ListItem(3, "Facial appointments"),
    new ListItem(4, "Click and Collect"),
    new ListItem(5, "Video consultation"),
  ],
};

export const about = {
  heading: "About",
  items: [
    new ListItem(1, "Our story"),
    new ListItem(2, "Foundation"),
    new ListItem(3, "Careers"),
    new ListItem(4, "Privacy policy"),
    new ListItem(5, "Accessibility"),
    new ListItem(6, "Cookie Policy"),
  ],
};
export const socialMedia = {
  heading: "Social media",
  items: [
    new ListItem(1, "Instagram"),
    new ListItem(2, "Twitter"),
    new ListItem(3, "LinkedIn"),
    new ListItem(4, "WeChat"),
    new ListItem(5, "Weibo"),
  ],
};


export const locationPreferences = {
  heading: "Location preferences",
  items: [
    new ListItem(1, "Shipping"),
    new ListItem(2, "Hong Kong SAR, China", undefined, undefined, {
      textDecoration: "underline #fff",
      paddingBottom: "10px",
    }),
    new ListItem(3, "Language"),
    new ListItem(4, "English", undefined, undefined, { marginBottom: "-10px" }),
    new ListItem(5, "繁體中文", undefined, undefined, {
      marginBottom: "-10px",
    }),
    new ListItem(6, "简体中文"),
  ],
};


export const subscriptionText = {
    heading:"Email Address",
  text: "Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy ",
};

export const sustainability = {
  heading:"Sustainability",
  text: "All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more",
};