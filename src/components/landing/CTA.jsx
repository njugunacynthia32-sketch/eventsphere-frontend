import { Link } from "react-router-dom";
import "../../styles/css/CTA.css";

function CTA() {
  return (
    <section className="cta">
      <h2>Start Planning Your Beautiful Moments Today</h2>

      <p>
        Have a clean schedule, never miss an event, and enjoy every moment with EventSphere. Sign up now to start planning your life beautifully. 
      </p>

      <Link to="/register" className="cta-btn">
        Create Free Account
      </Link>
    </section>
  );
}

export default CTA;