import styled from "@emotion/styled"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component.jsx"
import CustomImage from "../../components/custom-image/custom-image.component.jsx"
import CustomButton from "../../components/custom-button/custom-button.component.jsx"
import { Container } from "@mui/system"

export const BgImage = styled(CustomBgImage)`
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding-bottom: ${({ theme }) => theme.typography.pxToRem(58)};
  padding-top: ${({ theme }) => theme.typography.pxToRem(58)};
`

export const BgImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

export const GradientBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 113px;
  background: linear-gradient(
    to bottom,
    rgba(223, 220, 221, 0.1),
    rgba(255, 255, 255, 1)
  );
  z-index: 1;
`

export const Wrapper = styled(Container)`
  width: 100%;
  color: yellow;
  position: relative;
  //;
`

export const LeftWrapper = styled.div`
  //display: flex;
  //flex-direction: column;
  //gap: 2rem;
  //padding-bottom: 2rem;

  max-width: 450px;
`

export const MidWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column-reverse;
  padding-top: 20rem;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.2rem;
  top: 0;

  padding-bottom: 113px; // same as the height of GradientBox
  box-sizing: border-box; // to include padding in height calculation
`
export const Button = styled(CustomButton)`
  background-color: Green;
  border-radius: 40px;
  gap: 122px;
  align-items: center;
  align-content: center;
  padding: 1rem 2rem !important;
  align-self: flex-start;
  z-index: 2;
`

export const SoeHelveticaBigText = styled.div`
  -webkit-text-stroke: 2px #00ae00;
  color: #ffffff;
  font-family: "Soe-Regular", Helvetica;
  font-size: 84px;
  font-weight: 400;
  left: 0;
  letter-spacing: 1.69px;
  line-height: 84px;
  position: relative;
`

export const HeeboText = styled.div`
  color: white;
  font-family: "Heebo-Medium", Helvetica;
  font-size: 24px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: 26px;
  top: 0;
  width: 343px;
  color: white;
  position: relative;
  align-self: flex-start;
  margin-top: ${({ theme }) => theme.typography.pxToRem(12)};
  margin-bottom: ${({ theme }) => theme.typography.pxToRem(26)};
`

export const VeteranOwnedImg = styled(CustomImage)`
  display: none; // This will hide the image by default

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: block; // This will display the image on screens larger than the 'md' breakpoint
    width: 100%;
    height: 100%;
    max-height: 87px;
    max-width: 87px;
    img {
      object-fit: contain !important;
    }
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
`

/*export const VectorPalm = styled(CustomImage)`
  width: 100%;
  height: 100%;
  max-width: 587px;
  top: -20px;
  position: absolute;
  img {
    object-fit: contain !important;
  }
`*/

export const VectorPalm = styled(CustomImage)`
  width: 100%;
  height: 100%;
  max-width: 660px;

  img {
    object-fit: contain !important;
  }
  
    position: absolute;
    top: 0;
    right: 0;
  }

  //transform: translateX(-50%);
`
