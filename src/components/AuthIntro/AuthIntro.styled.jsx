import styled from "styled-components";

export const Title = styled.h1`
  color: #242a37;
  font-family: "Abril Fatface";
  font-size: 34px;
  font-weight: 400;
  line-height: 1.12;
  text-align: center;
  margin-bottom: 32px;
`;

export const SubTitle = styled.h2`
  color: #242a37;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.9;
  margin-bottom: 14px;
`;

export const List = styled.ul`
  margin-bottom: 24px;
  &:last-of-type {
    margin-bottom: 60px;
  }
`;

export const ListItem = styled.li`
  color: #898f9f;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;
