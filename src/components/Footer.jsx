const Footer = () =>{
    return(
        <div className="footer">
        <div className="footer-container">
          <div className="brand-line">
            <h3>Food Delivery</h3>
            <p>Delivering happiness, one meal at a time</p>
            <p className="brand-desc">
              We connect food lovers with their favorite restaurants, ensuring
              fast delivery and unforgettable taste experiences across the
              country.
            </p>
          </div>
          <div className="address">
            <h3>India</h3>
            <p>fooddelivery@gmail.com</p>
            <p>+91-9087231427</p>
            <p>Wz 932/h, Basai Darapur</p>
          </div>

          <div className="social-link">
            <h3>Give suggestion</h3>
            <textarea
              name="suggestion"
              placeholder="Give suggestion..."
              rows={4}
              cols={40}
            ></textarea>
            <div className="social">
              <a href="https://www.facebook.com/">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://www.x.com/">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Food Delivery. All rights reserved.</p>
          <p className="owner">
            Made with ❤️ by <span>Kush Bhardwaj</span>
          </p>
        </div>
      </div>
    )
}


export default Footer;