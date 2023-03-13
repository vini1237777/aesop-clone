import { Box,  InputBase} from "@mui/material";
import Divider from "../../../component/Divider/Divider";
import Text from "../../../component/Typography/Typography";
import { colors } from "../../../styles/color";
import { textEnum } from "../../../styles/fontstyles";
import classes from  './subscription.module.css'

const textStyles = {
  color: colors.offWhite,
  lineHeight: "inherit",
  fontSize: "0.78rem",
  marginTop: "10px"
};

const titleStyles = {
  color: colors.offWhite,
};


const Subscription = () => {
  return (
    <Box sx={{ gridColumn: "2 span" }}>
      <Text label={"Subscription"} variant={textEnum.sm2} sx={titleStyles} />
      <Divider />
      <InputBase
        sx={{ border: "1px solid white",color:"white" }}
        placeholder={"      Enter Email"}
        fullWidth
        size="small"
        classes={{ input: classes.root }}
      />
      <Text
        label={'Enter Email to subscribe'}
        variant={textEnum.xs2}
        sx={textStyles}
      />
    </Box>
  );
};

export default Subscription;
