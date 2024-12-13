import { useScreenSize } from "../../hooks/useScreensize";
import MobileHeader from "./mobile";
import DesktopHeader from "./desktop";

const Header = () => {
  const { isMobile } = useScreenSize();
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
