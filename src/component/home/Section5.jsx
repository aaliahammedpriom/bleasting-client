import React, { useContext } from "react";
import bgPhoto from "../../assets/exercise2.png"
import { Parallax } from "react-parallax";
import { BsChatLeftDots } from "react-icons/bs";
import { AuthContext } from "../../provider/AuthProvider";

const Section5 = () => {
  const { logo}= useContext(AuthContext) 
  return (
    <div>
      <div className="max-md:hidden relative min-h-screen w-full">
        <div className="absolute z-40 min-h-[100vh] w-full  bg-[#212121] rounded-b-[26%]"></div>
        <div className="absolute z-50 min-h-[97vh] w-full bg-[#3b3b3b] rounded-b-[28%]"></div>
        <div className="absolute z-60 min-h-[95vh] w-full  bg-[#d0d0d0] rounded-b-[30%]">
          <Parallax
            className="min-h-[95vh] md:rounded-b-[30%]"
            blur={{ min: 0, max: 0 }}
            bgImage={bgPhoto}
            bgImageAlt="fitness retreat"
            strength={200}
          >
            <div className="absolute z-10 inset-0 min-h-[95vh] bg-white/80">
              {/* top section */}
              <div className="md:w-[50vw] m-auto flex  gap-2 max-sm:justify-between max-sm:px-5 items-center md:text-[34px] font-extrabold text-[#305b62] pt-10">
                <img className="h-[60px] md:h-[80px]  md:w-[70px]" src={logo} alt="" />
                <p>WHATS INNCLUDED</p>
                <img className="h-[60px] md:h-[80px]  md:w-[70px]" src={logo} alt="" />
              </div>
              {/* middle section */}
              <div className="md:w-[70vw] m-auto md:flex gap-5 text-white text-[14px]">
                {/* left section */}
                <div className="md:w-1/2  bg-[#305b62] border rounded-2xl p-5">
                  <ol className="list-disc">
                    <li><b className="font-bold">Airport Transfers:</b> Let us collect and deliver you from the airport.
                    </li>
                    <li><b className="font-bold">Full access pass:</b> Enjoy classes and facilities between the retreat schedule without charge at our partner's famous state-of-the-art facility in Phuket.</li>
                    <li><b className="font-bold">Training & Nutrition Plan:</b> Personalised training and meal plan designed just for you, changed weekly.
                    </li>
                    <li><b className="font-bold">Accommodation:</b> Private deluxe room for the duration of your stay, at a local well-rated resort in Phuket, Thailand.
                    </li>
                    <li><b className="font-bold">Meals:</b> Breakfast, lunch, plus snacks and nutritional drinks are included in the package.
                    </li>
                  </ol>
                </div>
                {/* right section */}
                <div className="md:w-1/2  bg-[#305b62] border rounded-2xl p-5">
                  <ol className=" list-disc ">
                    <li><b className="font-bold">Body Composition Measurements:</b> Track your progress weekly with our fitness experts.</li>
                    <li><b className="font-bold">Personal Training:</b> Benefit from 2 private PT sessions a week.</li>
                    <li><b className="font-bold">Private Muay thai lesson:</b> Benefit from 1 private session per week (1 Hour)</li>
                    <li><b className="font-bold">Rest and Recovery:</b> Benefit from 1 massage & 1  group ice bath/sauna per week.</li>
                    <li><b className="font-bold">Outdoor workouts:</b> Challenge yourself hiking Big Buddha and Black Rock​. Put your cardio to the test on the beautiful Phuket beaches.</li>
                    <li><b className="font-bold">Online Coaching:</b> After the retreat, enjoy a complimentary 4-week online coaching package.</li>
                  </ol>
                </div>
                <div></div>
              </div>
              {/* bottom section */}
              <div className="flex justify-center pt-5">
                <button className=' flex btn md:btn-xl font-bold font-transparent md:text-4xl bg-[#305b62] rounded-full text-white md:p-8 '><p>CHAT TO US</p><p><BsChatLeftDots /></p></button>

              </div>
            </div>

          </Parallax>
        </div>
      </div>
      <Parallax
        className="md:hidden min-h-[95vh] md:rounded-b-[30%]"
        blur={{ min: 0, max: 0 }}
        bgImage={bgPhoto}
        bgImageAlt="fitness retreat"
        strength={200}
      >
        <div className=" bg-white/80">
          <div className="p-5 pt-0">
            {/* top section */}
            <div className="md:w-[50vw] m-auto flex  gap-2 max-sm:justify-between max-sm:px-5 items-center md:text-[34px] font-extrabold text-[#305b62] pt-10">
              <img className="h-[60px] md:h-[80px]  md:w-[70px]" src="https://static.wixstatic.com/media/6f7529_9e10738c869a45dbb26634ca2a9abaad~mv2.png/v1/crop/x_517,y_180,w_554,h_754/fill/w_160,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/prime_revive_logo.png" alt="" />
              <p>WHATS INNCLUDED</p>
              <img className="h-[60px] md:h-[80px]  md:w-[70px]" src="https://static.wixstatic.com/media/6f7529_9e10738c869a45dbb26634ca2a9abaad~mv2.png/v1/crop/x_517,y_180,w_554,h_754/fill/w_160,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/prime_revive_logo.png" alt="" />
            </div>
            {/* middle section */}
            <div className="md:w-[70vw] m-auto md:flex gap-5 text-white text-[14px] py-5">
              {/* left section */}
              <div className="md:w-1/2  bg-[#305b62] border rounded-2xl p-5">
                <ol className="list-disc">
                  <li><b className="font-bold">Airport Transfers:</b> Let us collect and deliver you from the airport.
                  </li>
                  <li><b className="font-bold">Full access pass:</b> Enjoy classes and facilities between the retreat schedule without charge at our partner's famous state-of-the-art facility in Phuket.</li>
                  <li><b className="font-bold">Training & Nutrition Plan:</b> Personalised training and meal plan designed just for you, changed weekly.
                  </li>
                  <li><b className="font-bold">Accommodation:</b> Private deluxe room for the duration of your stay, at a local well-rated resort in Phuket, Thailand.
                  </li>
                  <li><b className="font-bold">Meals:</b> Breakfast, lunch, plus snacks and nutritional drinks are included in the package.
                  </li>
                </ol>
              </div>
              {/* right section */}
              <div className="md:w-1/2  bg-[#305b62] border rounded-2xl p-5">
                <ol className=" list-disc ">
                  <li><b className="font-bold">Body Composition Measurements:</b> Track your progress weekly with our fitness experts.</li>
                  <li><b className="font-bold">Personal Training:</b> Benefit from 2 private PT sessions a week.</li>
                  <li><b className="font-bold">Private Muay thai lesson:</b> Benefit from 1 private session per week (1 Hour)</li>
                  <li><b className="font-bold">Rest and Recovery:</b> Benefit from 1 massage & 1  group ice bath/sauna per week.</li>
                  <li><b className="font-bold">Outdoor workouts:</b> Challenge yourself hiking Big Buddha and Black Rock​. Put your cardio to the test on the beautiful Phuket beaches.</li>
                  <li><b className="font-bold">Online Coaching:</b> After the retreat, enjoy a complimentary 4-week online coaching package.</li>
                </ol>
              </div>
              <div></div>
            </div>
            {/* bottom section */}
            <div className="flex justify-center">
              <button className=' flex btn md:btn-xl font-bold font-transparent md:text-4xl bg-[#305b62] rounded-full text-white md:p-8 '><p>CHAT TO US</p><p><BsChatLeftDots /></p></button>

            </div>
          </div>
        </div>

      </Parallax>
    </div>


  );
};

export default Section5;

