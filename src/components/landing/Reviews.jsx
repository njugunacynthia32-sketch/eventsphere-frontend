import "../../styles/css/Reviews.css";

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="section-title">
        <h2>User Reviews</h2>
        <p>Feedback from our users will appear here.</p>
      </div>

      <div className="reviews-grid">
        <div className="review-card">
          <h3>No Reviews Yet 🌸</h3>

          <p>
            EventSphere is a newly developed event planning application.
            User reviews will appear here once people begin using the platform.
          </p>

          <p>
            Be among the first to experience EventSphere and share your
            feedback in the future!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;