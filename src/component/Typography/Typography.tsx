import { Typography } from '@mui/material'
import { IObject } from '../../interface/interface';
import useFonts,{textTypes} from '../../hooks/useFonts';

const Text = ({label,variant,sx,customClass}:{label:string | number,variant?:textTypes,sx?:IObject,customClass?:string}) => {

  const {textStyles,textEnum}=useFonts();
  
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
