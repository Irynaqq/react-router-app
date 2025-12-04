import { useNavigate } from "react-router";
import lunaImg from "../assets/404.png";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img src={lunaImg} alt="404" style={styles.image} />

        <h1 style={styles.title}>Схоже, собачка не може знайти цю сторінку 🐾</h1>

        <button style={styles.button} onClick={() => navigate("/")}>
          Повернутись додому
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#6da2c5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    textAlign: "center",
  },
  image: {
    width: "330px",
    maxWidth: "90%",
    marginBottom: "20px",
  },
  title: {
    fontSize: "32px",
    color: "white",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    color: "#e6eef7",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 22px",
    backgroundColor: "white",
    color: "#2d4f70",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "0.25s",
  },
};

export default NotFound;
