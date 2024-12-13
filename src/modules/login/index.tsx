
import "./index.css";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { username, setUsername, handleLogin } = useAuth();

  return (
    <div className="auth-container">
      <div className="auth">
        <h1 className="auth__title">Login</h1>
        <form onSubmit={handleLogin} className="auth__form">
          <label htmlFor="username" className="auth__label">
            Username
          </label>
          <input
            id="username"
            className="auth__input"
            type="text"
            placeholder="Enter your username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="auth__button">Login</button>
        </form>
      </div>
    </div>
  );
}
