import styled from "styled-components";

export const UserRegistartionWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 40px;
    background-color: #fff;
  }
`;

export const Label = styled.label`
  display: block;
  color: #fff;

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    color: #898f9f;
    font-weight: 500;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-family: Montserrat;
  font-size: 14px;
  height: 42px;
  border: none;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 20px;

  &::placeholder {
    color: #a6abb9;
    font-size: 14px;
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    background: #f5f7fa;
    box-shadow: 0 1px 2px 0 rgba(29, 29, 27, 0.15) inset;
  }
`;

export const RequiredMark = styled.span`
  color: #f25137;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
`;

export const AlreadyWithUs = styled.p`
  margin-bottom: 44px;
`;

export const AlreadyWithUsText = styled.span`
  color: #898f9f;

  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  margin-inline: 4px;
`;

export const ToLoginPageButton = styled.span`
  color: #ff6b08;
  font-family: Montserrat;
  font-size: 13px;

  font-weight: 500;

  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
`;

export const TabletRegistration = styled.div``;

export const SubTitle = styled.div`
  padding: 64px;
  background: #fff;
`;
