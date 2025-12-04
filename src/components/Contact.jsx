import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contacts</h1>
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Contact;
