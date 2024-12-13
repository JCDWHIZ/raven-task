import Header from "../../components/header";
import CryptoBar from "../../components/crypto-card";
import Content from "../../components/content";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("profile");

    if (!user) {
      navigate("/auth/login", { replace: true });
      return;
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>Loading</span>
      </div>
    );
  }

  return (
    <main>
      <Header />
      <CryptoBar />
      <Content />
    </main>
  );
}
