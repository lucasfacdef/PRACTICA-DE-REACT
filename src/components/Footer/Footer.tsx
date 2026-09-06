import {
  FacebookFilled,
  InstagramFilled,
  TikTokFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-logo">
          STREAMTUC
        </Link>

        <p>
          Tu plataforma de películas y series favoritas.
        </p>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramFilled />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookFilled />
          </a>

          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <TikTokFilled />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <YoutubeFilled />
          </a>
        </div>

        <p className="footer-copy">
          © 2026 StreamTuc. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;