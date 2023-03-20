import { ArrowForward } from "@mui/icons-material";
import { Box,  InputBase, useTheme} from "@mui/material";
import Text from "../../../component/Typography/Typography";
import { textEnum } from "../../../hooks/useFonts";
import { colors } from "../../../styles/color";
import { subscriptionText } from "../footerText/footerText";

const textStyles = {
  color: colors.offWhite,
  lineHeight: "inherit",
  // fontSize: "0.78rem",
  marginTop: "10px",
};

const inputStyles = {
  accentColor: colors.black,
  outline: "1px solid #FFFEF2",
  alignSelf: "flex-start",
  marginTop: "14px",
};

const wrapperStyle=(theme:any)=>{
return {
  gridColumn: "1/3",
  [theme.breakpoints.between(639,1023)]: {
    gridColumn: "1/4",
  },
};
}

const Subscription = () => {
  const theme=useTheme();
  return (
    <Box sx={wrapperStyle(theme) }>
      <InputBase
        sx={{
          border: "1px solid white",
          color: colors.offWhite,
          padding: "1px 2px 1px 10px",
        }}
        placeholder={"Email Address"}
        fullWidth
        size="small"
        endAdornment={<ArrowForward sx={{ fontSize: "1rem" }} />}
      />
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6px",
        }}
      >
        <input type={"checkbox"} style={{ ...inputStyles }} checked={true} onChange={()=>{}}/>
        <Text
          label={subscriptionText.text}
          variant={textEnum.xs2}
          sx={textStyles}
        />
      </Box>
    </Box>
  );
};

export default Subscription;
