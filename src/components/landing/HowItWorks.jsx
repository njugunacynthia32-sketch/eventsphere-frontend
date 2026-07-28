import "../../styles/css/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-title">
        <h2>How EventSphere Works</h2>
        <p>Planning your life has never been this simple.</p>
      </div>

      <div className="steps">

        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Create an Account</h3>
          <p>Sign up securely and personalize your planner in minutes.</p>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Add Your Events</h3>
          <p>Create birthdays, meetings, travel plans, fitness sessions and more.</p>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Stay Organized</h3>
          <p>Receive reminders and enjoy a clear overview of your upcoming events.</p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;