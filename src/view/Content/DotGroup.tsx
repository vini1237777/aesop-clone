import { Box } from "@mui/material";

const classes = {
  root: {
    display: "flex",
    flex: 1,
    marginTop: "5px",
    marginBottom: "3px",
    marginLeft: "80px",
    marginRight: "80px",
  },
  item: {
    borderBottom: "1px solid rgba(0,0,0,.2)",
  },
  selecteditem: {
    borderBottom: "1px solid rgba(0,0,0,.6)",
  },
};

const DotGroup = ({
  totalSlides,
  currentSlide,
}: {
  totalSlides: number;
  currentSlide:number;
}) => {
   
    const styles =(i:number)=>{
       return (currentSlide % totalSlides)-1 === i? classes.selecteditem : classes.item
    }; 
  return (
    <Box style={{ ...classes.root }}>
      {[...new Array(totalSlides)].map((_,i) => {
        return (
          <Box sx={{ width: `${100 / totalSlides}%`, ...styles(i) }}></Box>
        );
      })}
    </Box>
  );
};

export default DotGroup
