import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="bg-[#f5f1eb] min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-[#ff8400] text-white text-center py-20 px-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>

        <h3 className="text-lg md:text-2xl font-medium">
          We'd love to hear from you. Get in touch with us!
        </h3>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              Get In Touch
            </h2>

            <p className="text-slate-600 mb-8">
              Have questions? We're here to help. Reach out to us through any of
              these channels.
            </p>

            <div className="space-y-8">
              <div className="bg-[#f5f1eb] rounded-2xl p-2 shadow-lg">
                <div className="flex gap-4">
                  <div className="text-3xl text-[#ff8400]">
                    <i className="ri-phone-line"></i>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-slate-600">+91 1800-123-4567</p>
                    <p className="text-slate-600">+91 1800-123-4568</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f1eb] rounded-2xl p-4 shadow-lg">
                <div className="flex gap-4">
                  <div className="text-3xl text-[#ff8400]">
                    <i className="ri-mail-line"></i>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-slate-600">support@quickbite.com</p>
                    <p className="text-slate-600">info@quickbite.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f1eb] rounded-2xl p-2 shadow-lg">
                <div className="flex gap-4">
                  <div className="text-3xl text-[#ff8400]">
                    <i className="ri-map-pin-line"></i>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-slate-600">
                      123 Food Street, Culinary District
                    </p>
                    <p className="text-slate-600">Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f1eb] rounded-2xl p-2 shadow-lg">
                <div className="flex gap-4">
                  <div className="text-3xl text-[#ff8400]">
                    <i className="ri-timer-line"></i>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">Working Hours</h3>
                    <p className="text-slate-600">Monday - Sunday</p>
                    <p className="text-slate-600">24/7 Service Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-medium mb-2">Your Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name..."
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff8400]"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email..."
                    required
                    className=" w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff8400]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">Subject</label>

                <input
                  type="text"
                  placeholder="How can we help you?"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff8400]"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Message</label>

                <textarea
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                  required
                  className=" w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#ff8400] "
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#ff8400] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#e67600] transition flex items-center gap-2"
              >
                <i className="ri-send-plane-line"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
