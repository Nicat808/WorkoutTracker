import ThemeSwitcher from "../../Global/ThemeSwitcher/ThemeSwitcher";
import Quote from "./Quote";

const Header = () => {
  return (
    <header>
      <Quote say="die tryin." />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
