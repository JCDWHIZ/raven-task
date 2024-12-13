import "./index.css";
import logo from "../../../assets/logo.svg";
import barIcon from "../../../assets/line.svg";
import menu from "../../../assets/menu.svg";
import useHeader from "../../../hooks/useHeader";
import { useAuth } from "../../../hooks/useAuth";

export default function MobileHeader() {
  const { click, handleClick } = useHeader();
  const { handleLogout } = useAuth();
  const avatar = JSON.parse(localStorage.profile);

  return (
    <header className="mobile-header">
      <div className="mobile-header-container">
        <div className="mobile-header_logo">
          <img src={logo} alt="Logo" className="mobile-header__logo-image" />
        </div>
        <div className="mobile-header__actions">
          <img src={avatar.avatar_url} alt="User" />
          <img src={barIcon} alt="Divider" />
          <img src={menu} alt="Menu" onClick={handleClick} />
        </div>
      </div>
      <nav
        className={
          click
            ? "mobile-header__nav mobile-header__nav--active"
            : "mobile-header__nav"
        }
      >
        <ul className="mobile-header__nav-list">
          <li className="mobile-header__nav-item">
            <a href="#">Exchange</a>
          </li>
          <li className="mobile-header__nav-item">
            <a href="#">Wallets</a>
          </li>
          <li className="mobile-header__nav-item">
            <a href="#">Roqqu Hub</a>
          </li>
          <li className="mobile-header__nav-item">
            <a href="#" onClick={handleLogout}>
              Log out
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
