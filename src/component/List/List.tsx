import { Box } from '@mui/material';
import { ListItem } from '../../classes';
import { textEnum, textTypes } from '../../hooks/useFonts';
import { Icon } from '../../icons/config';
import { IObject } from '../../interface/interface';
import Text from '../Typography/Typography';

const defaultStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
};

const IconTextWrapperStyles = {
  display: "flex",
  gap: "0.1rem",
  alignItems: "center",
};



const List = ({
  itemVariant,
  list,
  sx,
  iconTextRootStyle,
}: {
  itemVariant?: textTypes;
  list: ListItem[];
  sx?: IObject;
  iconTextRootStyle?:IObject;
}) => {
  return (
    <Box sx={{ ...defaultStyles, ...sx }}>
      {list?.map((item: ListItem) => {
        return !item.icon ? (
          <Text
            label={item.value}
            key={item.key}
            variant={item.variant || itemVariant || textEnum.xs5}
            sx={{ ...sx, ...item.sx }}
          />
        ) : (
          <Box sx={{ ...IconTextWrapperStyles }} key={item.key}>
            <Text
              label={item.value}
              variant={item.variant || itemVariant || textEnum.xs5}
              sx={{ ...sx, ...item.sx }}
            />
            <Icon type={item.icon} />
          </Box>
        );
      })}
    </Box>
  );
};

export default List
