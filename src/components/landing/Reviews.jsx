import "../../styles/css/Reviews.css";

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="section-title">
        <h2>Loved by Our Users</h2>
        <p>See what EventSphere users have to say.</p>
      </div>

      <div className="reviews-grid">
        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p>
            "EventSphere has completely changed how I organize my life. It's
            simple, beautiful and easy to use!"
          </p>
          <h4>— Sarah M.</h4>
        </div>

        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p>
            "I never miss birthdays or meetings anymore. The reminders are
            amazing!"
          </p>
          <h4>— Brian K.</h4>
        </div>

        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p>
            "Beautiful interface, easy navigation and everything I need in one
            planner."
          </p>
          <h4>— Diana W.</h4>
        </div>
      </div>
    </section>
  );
}

export default Reviews;