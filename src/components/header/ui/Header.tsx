import { FC } from "react";
import style from "./Header.module.css";
import Logo from "../../../shared/ui/logo/Logo";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <Logo />
    </header>
  );
};

export default Header;
