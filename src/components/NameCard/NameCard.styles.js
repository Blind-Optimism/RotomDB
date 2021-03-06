import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { typeColor } from "../../themes";

export const NameCard = styled(Card)`
  && {
    width: 100%;
    height: 3rem;
    display: flex;
    background-color: black;
  }
`;

export const SpriteIdBg = styled.div`
  position: relative;
  z-index: 0;
  width: 40%;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  ${({ accent }) => {
    const css =
      accent.length > 1
        ? `
      animation: 3s ease-in infinite alternate typeColors;
      
      animation-name: typeColors;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;

      @keyframes typeColors {
        from {
          background-color: ${typeColor[accent[0]]};
        }
        to {
          background-color: ${typeColor[accent[1]]};
        }
      }
    `
        : `
      background-color: ${typeColor[accent[0]]}
    `;
    return css;
  }}
`;

export const SpriteImgContainer = styled.span`
  && {
    position: absolute;
    height: 3rem;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      /* position: relative;
      top: -34px; */
      max-height: 80px;
      max-width: 80px;
      ${({ id }) => {
        if (id < 650) {
          return "padding: 1rem;";
        }
      }}
    }
  }
`;

export const IdTypography = styled(Typography)`
  && {
    color: white;
  }
`;

export const NameTypography = styled(IdTypography)`
  && {
    margin: auto 0;
  }
`;
