import { ArrowForward } from '@mui/icons-material';
import { Box, Button,useTheme } from '@mui/material';
import { textEnum} from '../../hooks/useFonts';
import { IObject } from '../../interface/interface';
import { colors } from '../../styles/color';
import Text from '../Typography/Typography';

const rootDefaultStyles =(theme:any)=> {
return  { 
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.87rem",
}
};

const buttonRootStyles =(theme:any) =>{
 return { paddingBottom: "19px",
  paddingTop: "19px",
  display: "flex",
  flexDirections: "column",
  gap: "1.5rem",
  borderColor: "rgba(51,51,51,.2)",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up(639)]: { width: "300px" },}
};

const Description = ({
  title,
  subTitle,
  description,
  buttonLabel,
  buttonCustomStyle,
  buttonVariant,
  sx=[],
  cutsomButtonTextStyle,
  titleStyle,
  textCommonStyle,
  descriptionStyle=[],
  subTitleStyle,
  buttonDescriptionWrapper=[],
  titleSubtitleWrapper=[],
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
  textCommonStyle?: IObject;
  descriptionStyle?: IObject;
  subTitleStyle?: IObject;
  buttonDescriptionWrapper?: IObject;
  titleSubtitleWrapper?: IObject;
}) => {
  const theme = useTheme();
  return (
    <Box component={"article"} sx={{ ...rootDefaultStyles(theme), ...sx }}>
      <Box sx={{ ...titleSubtitleWrapper }}>
        {title && (
          <Text
            label={title}
            variant={textEnum.xs}
            sx={{  ...titleStyle, ...textCommonStyle }}
          />
        )}
        <Text
          label={subTitle || ""}
          variant={textEnum.lg}
          sx={{ ...textCommonStyle, ...subTitleStyle }}
        />
      </Box>
      <Box sx={{ ...buttonDescriptionWrapper }}>
        <Text
          label={description || ""}
          variant={textEnum.sm3}
          sx={{ ...textCommonStyle, ...descriptionStyle }}
        />
        {buttonLabel && (
          <Button
            variant={buttonVariant || "outlined"}
            sx={{
              textTransform: "none",
              ...buttonRootStyles(theme),
              ...buttonCustomStyle,
            }}
          >
            <Text
              label={buttonLabel || ""}
              variant={textEnum.xs3}
              sx={{
                ...cutsomButtonTextStyle,
                ...textCommonStyle,
              }}
            />
            <ArrowForward
              sx={{
                fontSize: "0.9rem",
                color: colors.black,
                ...textCommonStyle,
              }}
            />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Description
