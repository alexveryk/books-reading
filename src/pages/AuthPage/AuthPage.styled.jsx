import styled from "styled-components";

export const AuthBgWraper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ bgImage }) =>
    `linear-gradient(rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)), url(${bgImage}) center/cover no-repeat`};

  background-size: cover;
  background-position: center;
`;
