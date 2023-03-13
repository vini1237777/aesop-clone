import { Box } from "@mui/material";
import { ListItem } from "../../classes";
import { IObject } from "../../interface/interface";
import { textEnum, textTypes } from "../../styles/fontstyles";
import Divider from "../Divider/Divider";
import List from "../List/List";
import Text from "../Typography/Typography";



const defaultStyles = {
  gridColumn: "1 span",
};

export interface ISection {
  list: ListItem[];
  heading: string;
  titleVariant?: textTypes;
  listItemVariant?: textTypes;
  listWrapperStyles?: IObject;
  titleClassName?: string;
  titleStyle?: IObject;
  rootStyle?: IObject;
  rootProps?:IObject
}

const Section = ({
  list,
  heading,
  titleVariant,
  listItemVariant,
  listWrapperStyles,
  titleClassName,
  titleStyle,
  rootStyle = [],
  rootProps
}:
  ISection
) => {
  return (
    <Box sx={{ ...defaultStyles, ...rootStyle }} {...rootProps}>
      <Text
        label={heading}
        variant={titleVariant || textEnum.sm}
        sx={titleStyle}
      />
      <Divider />
      <List list={list} itemVariant={listItemVariant} sx={listWrapperStyles} />
    </Box>
  );
};

export default Section;
