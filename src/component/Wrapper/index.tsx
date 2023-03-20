import { Box, useTheme } from '@mui/material';
import { IObject } from '../../interface/interface';

const Wrapper = ({
  children,
  customClasses,
}: {
  children: JSX.Element;
  customClasses?:IObject;
}) => {
    const theme=useTheme();
  return (
    <Box
      sx={{
        pt: "9.37rem",
        [theme.breakpoints.down(699)]: {
          pt: "4.5rem",
        },
        [theme.breakpoints.between(700,1099)]: {
          pt: "6.25rem",
        },
        ...customClasses
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper
