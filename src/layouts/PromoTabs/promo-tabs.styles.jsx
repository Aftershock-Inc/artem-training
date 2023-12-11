import styled from "@emotion/styled"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"

export const Wrapper = styled.div``
export const CustomTab = styled(Tab)`
  color: #d1d1d1;
  &.Mui-selected {
    color: #00ae00;
  }
`
export const CustomTabs = styled(Tabs)`
  .MuiTabs-indicator {
    color: #00ae00;
    background-color: #00ae00;
  }
`

export const Title = styled.h2`
  color: #003400;
  font-size: 44px;
  font-family: "Heebo";
  font-weight: 700;
  line-height: 46px;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
`
//el elemento que tiene la clase  id o sedoclase o estado.
