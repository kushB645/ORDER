import Footer from "./footer";

const About = () => {
  return (
    <div className="container-about">
      <div className="heading">
        <h1>About Us</h1>
        <h3>Your trusted partner in food delivery since 2026</h3>
      </div>
      <div className="story-section">
        <div className="story">
          <h1>Our Story</h1>
          <p>
            Founded in 2020, Food Delivery started with a simple mission: to
            connect food lovers with their favorite restaurants while ensuring
            quick, reliable delivery service.
          </p>

          <p>
            What began as a small startup in one city has grown into a
            nationwide service, partnering with thousands of restaurants and
            serving millions of happy customers.
          </p>

          <p>
            We believe that great food should be accessible to everyone, and
            we're committed to making every meal a delightful experience.
          </p>
        </div>
        <div className="story-img">
          <img src="https://images.unsplash.com/photo-1767785990437-dfe1fe516fe8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNoZWYlMjBjb29raW5nJTIwbGFuZHNjYXBlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D" />
        </div>
      </div>
      <div className="Values">
        <h1>Our Values</h1>
        <div className="value-container">
          <div className="value-card">
            <i className="ri-group-line"></i>
            <h3>Customer First</h3>
            <p>We prioritize your satisfaction above everything else</p>
          </div>
          <div className="value-card">
            <i className="ri-award-line"></i>
            <h3>Quality Food</h3>
            <p>Partner with only the best restaurants in your area</p>
          </div>
          <div className="value-card">
            <i className="ri-takeaway-line"></i>
            <h3>Fast Delivery</h3>
            <p>Hot, fresh food delivered right to your doorstep</p>
          </div>
          <div className="value-card">
            <i className="ri-heart-line"></i>
            <h3>Made with Love</h3>
            <p>Every meal is prepared with care and passion</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
