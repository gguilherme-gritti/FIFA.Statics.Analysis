import styled from "styled-components";
import { Card } from "@mui/material";

const mulish = (props) => props.theme.fonts.mulish;

export const Panel = styled(Card)``;

export const Main = styled.div`
  .MuiButton-root {
    width: 100%;
    margin: 2.5px;
    font-family: ${mulish};
    font-weight: bolder;
    font-size: 0.875rem;

    height: 100%;
    .MuiIcon-root {
      font-family: "Material Icons" !important;
    }
  }
`;
export const Team = styled.div`
  display: flex;
`;
export const HomeContainer = styled.div`
  width: 100%;
  margin-top: 4vh;
  margin-bottom: 10vh;

  ${Panel} {
    min-width: 100%;
    height: 100%;

    img {
      max-height: 220px;
    }

    ${Team} {
      .MuiCardMedia-media {
        width: 48%;
      }
    }

    .MuiTypography-root {
      min-height: 50px;
    }
  }
`;
