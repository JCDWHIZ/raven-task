import { useState } from "react";
import { fetchGitHub } from "../services/login";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const githubData = await fetchGitHub(username);
    localStorage.profile = JSON.stringify(githubData);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("profile");
    navigate("/auth/login");
  };

  return {
    username,
    setUsername,
    handleLogin,
    handleLogout,
  };
};
