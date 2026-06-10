import Footer from "./Footer";

const About = () => {
  return (
    <div className="bg-[#f5f1eb] pt-20">
      {/* Hero */}
      <div className="bg-[#ff8400] text-white text-center px-5 py-20 md:py-28">
        <h1 className="text-4xl md:text-3xl font-bold mb-4">About Us</h1>

        <h3 className="text-lg md:text-xl font-medium">
          Your trusted partner in food delivery since 2026
        </h3>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-[#0f172a]">
            Our Story
          </h1>

          <p className="text-base md:text-lg leading-8 text-[#334155]">
            Founded in 2020, Food Delivery started with a simple mission: to
            connect food lovers with their favorite restaurants while ensuring
            quick, reliable delivery service.
          </p>

          <p className="text-[18px] leading-[1.8] mb-5 text-[#334155]">
            What began as a small startup in one city has grown into a
            nationwide service, partnering with thousands of restaurants and
            serving millions of happy customers.
          </p>

          <p className="text-[18px] leading-[1.8] text-[#334155]">
            We believe that great food should be accessible to everyone, and
            we're committed to making every meal a delightful experience.
          </p>
        </div>

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1767785990437-dfe1fe516fe8?w=600&auto=format&fit=crop&q=60"
            alt="Chef"
            className="w-full max-w-[600px] h-[250px] sm:h-[320px] lg:h-[386px] rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Values */}
      <div className="mt-[60px] p-[40px]">
        <h1 className="text-center mb-12 text-4xl md:text-5xl font-bold">
          Our Values
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">

          <div className="bg-white w-full p-8 rounded-3xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <i className="ri-group-line text-[40px] text-[#ff7a18]"></i>
            <h3 className="font-semibold text-[22px] mt-4 mb-2">
              Customer First
            </h3>
            <p>We prioritize your satisfaction above everything else</p>
          </div>

          <div className="bg-white w-full p-8 rounded-3xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <i className="ri-award-line text-[40px] text-[#ff7a18]"></i>
            <h3 className="font-semibold text-[22px] mt-4 mb-2">
              Quality Food
            </h3>
            <p>Partner with only the best restaurants in your area</p>
          </div>

          <div className="bg-white w-full p-8 rounded-3xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <i className="ri-takeaway-line text-[40px] text-[#ff7a18]"></i>
            <h3 className="font-semibold text-[22px] mt-4 mb-2">
              Fast Delivery
            </h3>
            <p>Hot, fresh food delivered right to your doorstep</p>
          </div>

          <div className="bg-white w-full p-8 rounded-3xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <i className="ri-heart-line text-[40px] text-[#ff7a18]"></i>
            <h3 className="font-semibold text-[22px] mt-4 mb-2">
              Made with Love
            </h3>
            <p>Every meal is prepared with care and passion</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
