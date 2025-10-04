import React from "react";

const FitnessPlanSection2 = () => {
  return (
    <div className="md:flex w-full items-stretch ">
      {/* left section */}
      <div
        className="md:w-1/2 flex flex-col justify-center bg-fixed bg-cover bg-no-repeat "
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/6f7529_c10c8b99c52b4abab5af72a1979b5fc4~mv2.jpg/v1/fill/w_533,h_734,al_c,q_85,enc_avif,quality_auto/6f7529_c10c8b99c52b4abab5af72a1979b5fc4~mv2.jpg')",
        }}
      >
        <div className="max-md:bg-white/80">
          <div className="flex flex-col justify-center h-full text-[#000000] font-bold py-10 px-5 md:px-20">
            <h1 className="text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg uppercase">
              how we build our plans
            </h1>

            <div className="flex flex-col gap-5 py-10">
              <p>
                At Bleasting Body Transformation Retreat, we offer a truly
                unique fitness journey. Our mission is to create highly
                personalised transformation plans, that cater exclusively to your
                specific goals and needs.
              </p>
              <p>
                Our unique methodology combines bespoke training programmes, and
                custom nutrition plans, followed up with precise measurement and
                review processes, ensuring every aspect of your transformation is
                not left to chance.
              </p>
              <p>
                Click the button below to view a sample client pack, showcasing
                our methodology, detailed training and meal plans, and the
                transformative outcomes you can expect. Trust us to guide you on
                your journey to a healthier, happier you.
              </p>

              <div className="flex justify-center">
                <button className="bg-[#000000] text-white md:text-2xl rounded-full px-5 py-2">
                  VIEW SIMPLE CLIENT PLAN
                </button>
              </div>

              <h2 className="text-3xl text-center font-bold uppercase">
                for a complimentary personalised plan, reach out to one of our
                retreat experts today
              </h2>

              <div className="flex justify-center">
                <button className="bg-[#000000] text-white md:text-2xl rounded-full px-5 py-2">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="md:w-1/2 flex">
        <img
          className="w-full object-cover"
          src="https://static.wixstatic.com/media/2c0265_c43ba5b52fa249c29642b9ec95e53987~mv2.jpg/v1/fill/w_676,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c0265_c43ba5b52fa249c29642b9ec95e53987~mv2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default FitnessPlanSection2;
