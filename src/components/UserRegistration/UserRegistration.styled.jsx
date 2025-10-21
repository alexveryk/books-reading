import styled from "styled-components";

export const UserRegistartionWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  color: #fff;

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border: none;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 20px;
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
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;
