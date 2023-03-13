import { ArrowForward } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { IObject } from '../../interface/interface';
import { colors } from '../../styles/color';
import {  textEnum } from '../../styles/fontstyles';
import Text from '../Typography/Typography';

const rootDefaultStyles={
display:"flex",
flexDirection:"column",
alignItems: "flex-start",
gap:"30px",
}

const buttonRootStyles = {
  paddingBottom: "19px",
  paddingTop: "19px",
  paddingRight: "23px",
  paddingLeft: "23px",
  display: "flex",
  flexDirections: "column",
  gap: "1.5rem",
  borderColor: 'rgba(51,51,51,.2)'
};

const Description = ({
  title,
  subTitle,
  description,
  buttonLabel,
  buttonCustomStyle,
  buttonVariant,
  sx = [],
  cutsomButtonTextStyle,
  titleStyle,
  isSlide = true,
  textCommonStyle,
  isBanner = false,
}: {
  title?: string;
  subTitle?: string;
  description?: string;
  buttonLabel?: string;
  buttonCustomStyle?: IObject;
  buttonVariant?: any;
  sx?: IObject;
  cutsomButtonTextStyle?: IObject;
  titleStyle?: IObject;
  isSlide?: boolean;
  textCommonStyle?: IObject;
  isBanner?:boolean;
}) => {
  return (
    <Box component={"article"} sx={{ ...rootDefaultStyles, ...sx }}>
      {title && (
        <Text
          label={title}
          variant={textEnum.xs}
          sx={{ marginBottom: "-10px", ...titleStyle, ...textCommonStyle }}
        />
      )}
      <Text
        label={subTitle || ""}
        variant={isBanner ?  textEnum.xl :textEnum.lg}
        sx={{ ...textCommonStyle }}
      />
      <Text
        label={description || ""}
        variant={textEnum.sm3}
        sx={{ ...textCommonStyle }}
      />
      {buttonLabel && (
        <Button
          variant={buttonVariant || "outlined"}
          sx={{
            textTransform: "none",
            ...buttonRootStyles,
            ...buttonCustomStyle,
          }}
          size="large"
        >
          <Text
            label={buttonLabel || ""}
            variant={textEnum.xs}
            sx={{
              paddingRight: "55px",
              ...cutsomButtonTextStyle,
              ...textCommonStyle,
            }}
          />
          <ArrowForward
            sx={{ fontSize: "0.9rem", color: colors.black, ...textCommonStyle }}
          />
        </Button>
      )}
    </Box>
  );
};

export default Description
