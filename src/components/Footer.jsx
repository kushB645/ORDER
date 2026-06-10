const Footer = () => {
  return (
    <footer className="bg-[#071330] text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold text-[#ff8400] mb-3">
              Food Delivery
            </h3>

            <p className="font-semibold text-lg mb-5">
              Delivering happiness, one meal at a time
            </p>

            <p className="text-slate-300 leading-8">
              We connect food lovers with their favorite restaurants,
              ensuring fast delivery and unforgettable taste experiences
              across the country.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-5">
              India
            </h3>

            <div className="space-y-3 text-slate-300">
              <p>support@quickbite.com</p>
              <p>+91-9087231427</p>
              <p>Wz 932/h, Basai Darapur</p>
            </div>
          </div>

          {/* Suggestion */}
          <div>
            <h3 className="text-2xl font-bold mb-5">
              Give Suggestion
            </h3>

            <textarea
              name="suggestion"
              placeholder="Give suggestion..."
              rows={4}
              className=" w-full bg-[#1c2948] text-white rounded-xl p-4 outline-none border border-transparent focus:border-[#ff8400] resize-none"
            ></textarea>

            <div className="flex gap-5 mt-6 text-2xl">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff8400] transition"
              >
                <i className="ri-facebook-fill"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff8400] transition"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="https://www.x.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff8400] transition"
              >
                <i className="ri-twitter-x-line"></i>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff8400] transition"
              >
                <i className="ri-youtube-fill"></i>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">
          © 2026 Food Delivery. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;