import styled from "styled-components";
import checkIcon from "../../assets/check.svg";

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
  position: relative;
  padding-left: 20px;

  color: #898f9f;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 5px;
    width: 8px;
    height: 8px;
    /* transform: translateY(-50%); */
    /* background: url(${checkIcon}) no-repeat center / contain; */
    background-image: url("data:image/svg+xml,%3csvg%20width='4'%20height='8'%20viewBox='0%200%204%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.91561%203.78047L0.489905%200.0904667C0.377666%20-0.0303609%200.195949%20-0.0301578%200.0838976%200.0910917C-0.0280667%200.212326%20-0.0277773%200.408716%200.0844763%200.529637L3.30627%204.00001L0.0843605%207.47038C-0.0278786%207.59131%20-0.028168%207.78758%200.0837818%207.90883C0.139952%207.96961%200.213539%208%200.287126%208C0.360525%208%200.433822%207.96981%200.489891%207.90945L3.91561%204.21954C3.96967%204.16145%204%204.08239%204%204.00001C4%203.91764%203.96958%203.83867%203.91561%203.78047Z'%20fill='%23FF6B08'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 40px;
`;
