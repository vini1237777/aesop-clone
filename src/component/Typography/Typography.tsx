import { Typography } from '@mui/material'
import { textEnum, textStyles, textTypes } from '../../styles/fontstyles';
import { IObject } from '../../interface/interface';


const Text = ({label,variant,sx,customClass}:{label:string | number,variant?:textTypes,sx?:IObject,customClass?:string}) => {
  return (
    <Typography
      sx={{
        color: "#333",
        height: "auto",
        ...textStyles[variant || textEnum.sm],
        ...sx,
      }}
      className={customClass}
    >
      {label}
    </Typography>
  );
}

export default Text
