import { styled } from '@mui/system';
import { colors } from '../../styles/color';
import { fontSmallest, textEnum } from '../../styles/fontstyles';
import Text from '../Typography/Typography';

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ...fontSmallest,
  color: colors.black,
  width: "100%",
  height: "calc(5rem - 0.06rem)",
  fontWeight: 600,
});

const HeadingWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.19rem",
    paddingRight: "2.5rem",

});

const MainHeadingWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.19rem",
  paddingLeft: "2.5rem",
});


const Navbar = ({
  navbarHeadingsMain,
  navbarHeadings,
}: {
  navbarHeadingsMain: { key: number; heading: string }[];
  navbarHeadings: { key: number; heading: string }[];
}) => {
  return (
    <Wrapper>
      <MainHeadingWrapper>
        {navbarHeadingsMain.map((data) => {
          return <Text key={data.key} label={data.heading} sx={{color:colors.black}} variant={textEnum.sm4}/>;
        })}
      </MainHeadingWrapper>
      <HeadingWrapper>
        {navbarHeadings.map((data) => {
          return <Text key={data.key} label={data.heading}  sx={{color:colors.black}} variant={textEnum.sm4}/>;
        })}
      </HeadingWrapper>
    </Wrapper>
  );
};

export default Navbar
