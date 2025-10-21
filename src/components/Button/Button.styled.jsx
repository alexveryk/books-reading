import styled from "styled-components";

export const SecondaryButton = styled.button`
  width: 130px;
  height: 40px;
  color: #242a37;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;

  background-color: #ffffff;
  border-radius: none;
  border: 1px solid #000;
`;

export const MainButton = styled.button`
  /* width: 130px; */
  ${({ w }) => w && `width: ${w};`};
  height: 40px;
  color: #fff;
  border: none;

  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;

  background-color: #ff6b08;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  ${({ mb }) => mb && `margin-bottom: ${mb};`}
`;

export const GoogleButton = styled.button`
  color: #707375;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 2.38;
  border: none;
  width: 150px;
  height: 40px;
  background-color: #f5f7fa;

  box-shadow: 0 2px 2px 0 rgba(9, 30, 63, 0.15);
  ${({ mb }) => mb && `margin-bottom: ${mb};`}
`;
