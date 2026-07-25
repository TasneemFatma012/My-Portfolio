import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social-container">

      <a
        href="https://github.com/your-username"
        target="_blank"
        className="icon github"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        className="icon linkedin"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:yourmail@gmail.com"
        className="icon mail"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}