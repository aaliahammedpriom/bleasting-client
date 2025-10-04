import React from "react";
import RandomWave from "./RandomWave";
import iframeUrls from "../../assets/intapost.json"; // your JSON array

const Section4 = () => {
  return (
    <div className="relative w-full min-h-[screen] overflow-hidden bg-cover bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/11062b_13eb4134e847475e8dad19ee8b34212c~mv2_d_7062_4713_s_4_2.jpg')",
      }}>
      {/* Semi-transparent overlay */}
      <div className=" bg-white/90">
        {/* Content */}
        <div>
          <div className="bg-[#000000] h-[20px]"></div>
          <RandomWave curves={100} width={1440} height={40} fill="#000000" />

          <div className="flex flex-col md:items-center justify-center gap-6">
            <h4 className="text-xl md:text-[48px] text-center font-bold text-[#000000] tracking-tight">
              OUR RETREAT EXPLAINED
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5  overflow-y-auto  md:w-[80vw]">
              {iframeUrls.map((url, index) => (
                <div key={index} style={{ backgroundColor: "black" }} className="border rounded-2xl ">
                  <div className="h-[80vh] border rounded-2xl" style={{ backgroundColor: "black" }} >
                    <iframe
                      ref={(el) => {
                        // Only works for same-origin URLs
                        if (el && el.contentWindow) {
                          try {
                            el.contentWindow.document.body.style.backgroundColor = "black";
                          } catch (err) {
                            console.warn("Cannot access iframe document (cross-origin).");
                          }
                        }
                      }}
                      src={url}
                      title={`iframe-${index}`}
                      width="100%"
                      height="100%"
                      className="border rounded-2xl "
                      style={{ backgroundColor: "black" }}
                    ></iframe>
                  </div>
                </div>
              ))}

            </div>
          </div>

          <RandomWave curves={100} width={1440} height={40} rotation={true} fill="#000000" />

        </div>
      </div >



    </div >
  );
};

export default Section4;
