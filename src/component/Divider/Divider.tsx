import { styled } from '@mui/system';
import { IObject } from '../../interface/interface';



const Wrapper = styled("div")({
  borderBottom: "1px solid #fffef2",
  marginBottom: "1rem",
  marginTop: "1rem",
  width:"100%"
});



const Divider = ({sx}:{sx?:IObject}) => {
  return (
   <Wrapper style={{...sx}}></Wrapper>
  )
}

export default Divider
