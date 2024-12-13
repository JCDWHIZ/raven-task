import arrowRightIcon from "../../../assets/arrow-right.svg";
import dividerLineIcon from "../../../assets/line.svg";
import logoIcon from "../../../assets/logo.svg";
import signOutIcon from "../../../assets/sign-out.svg";
import { useAuth } from "../../../hooks/useAuth";
import "./index.css";

export default function DesktopHeader() {
  const profile = JSON.parse(localStorage.profile);

  const { handleLogout } = useAuth();

  return (
    <header className="desktop_header">
      <div className="desktop_header__left">
        <div className="desktop_header__logo">
          <img
            src={logoIcon}
            alt="Logo"
            className="desktop_header__logo-image"
          />
        </div>
        <nav className="desktop_header__nav">
          <ul className="desktop_header__nav-list">
            <li className="desktop_header__nav-item">
              <a href="#">Exchange</a>
            </li>
            <li className="desktop_header__nav-item">
              <a href="#">Wallets</a>
            </li>
            <li className="desktop_header__nav-item">
              <a href="#">Roqqu Hub</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="desktop_header__right">
        <div className="desktop_header__profile">
          <img
            src={profile?.avatar_url}
            alt="Profile Avatar"
            className="desktop_header__profile-image"
          />
          <span className="desktop_header__profile-name">{profile?.login}</span>
          <img
            src={arrowRightIcon}
            alt="Arrow Right"
            className="desktop_header__profile-icon"
          />
        </div>
        <div className="desktop_header__divider">
          <img src={dividerLineIcon} alt="Divider Line" />
        </div>
        <div className="desktop_header__logout" onClick={handleLogout}>
          <img
            src={signOutIcon}
            alt="Sign Out"
            className="desktop_header__logout-icon"
          />
        </div>
      </div>
    </header>
  );
}
