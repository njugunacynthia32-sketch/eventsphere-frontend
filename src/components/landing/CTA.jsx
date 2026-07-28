import { Link } from "react-router-dom";
import "../../styles/css/CTA.css";

function CTA() {
  return (
    <section className="cta">
      <h2>Start Planning Your Beautiful Moments Today</h2>

      <p>
        Join thousands of users organizing their lives with EventSphere.
      </p>

      <Link to="/register" className="cta-btn">
        Create Free Account
      </Link>
    </section>
  );
}

export default CTA;