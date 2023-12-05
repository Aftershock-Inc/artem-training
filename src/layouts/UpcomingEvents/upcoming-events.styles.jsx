import styled from "@emotion/styled"
import PromoCard from "../../components/promo-card/promo-card.component"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
export const Wrapper = styled(SectionWrapper)`
  padding-top: 2.25rem;
  width: 100%;
`

export const Title = styled.h2`
  color: var(--brand-primary-80, #00ae00);
  font-family: Soe;
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4.5rem; /* 163.636% */
  letter-spacing: 0.055rem;
`

export const StyledCard = styled(PromoCard)`
  .title {
    // Event title
    color: #15372c;
    font-size: 24px;
    font-family: "Tiempos Headline";
    font-weight: 500;
    line-height: 36px;
    word-wrap: break-word;
    padding-top: 0rem;
  }
  .description {
    color: #5f5f5f;
    padding-bottom: 1rem;
    font-size: 16px;
    font-family: "Heebo";
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
  }
  .link {
    color: #15372c;
    font-size: 12px;
    font-family: "Heebo";
    font-weight: 700;
    text-transform: uppercase;
    line-height: 12px;
    letter-spacing: 1.2px;
    word-wrap: break-word;
  }
`
