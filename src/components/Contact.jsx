import Footer from "./footer";

const Contact = () => {
  return (
    <div className="container-contact">
      <div className="heading">
        <h1>Contact Us</h1>
        <h3>We'd love to hear from you. Get in touch with us!</h3>
      </div>
      <div className="main">
        <div className="get-in-touch">
          <h3>Get In Touch</h3>
          <p>
            Have questions? We're here to help. Reach out to us through any of
            these channels.
          </p>
          <div id="details">
            <div className="details-icon">
              <i className="ri-phone-line"></i>
              <div className="details-content">
              <h3>Phone</h3>
              <p>+91 1800-123-4567</p>
              <p>+91 1800-123-4568</p>
              </div>
            </div>
            <div className="details-icon">
              <i className="ri-mail-line"></i>
              <div className="details-content">
              <h3>Email</h3>
              <p>support@fooddelivery.com</p>
              <p>info@fooddelivery.com</p>
              </div>
            </div>
            <div className="details-icon">
              <i className="ri-map-pin-line"></i>
              <div className="details-content">
              <h3>Address</h3>
              <p>123 Food Street, Culinary District</p>
              <p>Mumbai, Maharashtra 400001</p>
              </div>
            </div>
            <div className="details-icon">
              <i className="ri-timer-line"></i>
              <div className="details-content">
              <h3>Working Hours</h3>
              <p>Monday - Sunday</p>
              <p>24/7 Service Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="message-container">
          <h2>Send us a Message</h2>

          <form className="message-form">
            <div className="row">
              <div className="input-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name..." required/>
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email..." required/>
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help you?" required/>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Tell us more about your inquiry..."required></textarea>
            </div>

            <button type="submit">
              <i className="ri-send-plane-line"></i> Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
