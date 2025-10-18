import { AuthIntro } from "../../components/AuthIntro/AuthIntro";
import { Menu } from "../../components/Menu/Menu";
import { UserRegistration } from "../../components/UserRegistration/UserRegistration";

export const AuthPage = () => {
  return (
    <>
      <Menu />
      {/* <AuthIntro /> */}
      <UserRegistration/>
    </>
  );
};
