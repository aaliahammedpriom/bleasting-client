import React from 'react';

const data = [
    {
        id: 1,
        name: "Phi Phi Islands Tour",
        location: "Off the coast of Phuket",
        description: "Embark on a breathtaking journey to the famous Phi Phi Islands, known for their stunning beaches, crystal-clear waters, and vibrant marine life. This full-day tour includes a speedboat ride, snorkelling opportunities, a visit to the iconic Maya Bay (as seen in 'The Beach'), and a delicious buffet lunch on a secluded beach. Explore the picturesque surroundings and relax in the serene environment, making it a perfect day trip for adventure and relaxation.",
        image: "https://static.wixstatic.com/media/2c0265_8330ed89b8834d5f9f0d9e24d1ce6411~mv2.jpg/v1/fill/w_529,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/istockphoto-1322514695-612x612.jpg",
        bgImage: "https://static.wixstatic.com/media/6f7529_e4f17528debc4f3e90f6a55bb42bc01f~mv2.jpg/v1/fill/w_1041,h_462,al_c,q_85,enc_avif,quality_auto/6f7529_e4f17528debc4f3e90f6a55bb42bc01f~mv2.jpg"
    },
    {
        id: 2,
        name: "Elephant Sanctuary Visit",
        location: "Phuket Elephant Sanctuary, Pa Klok",
        description: "Experience a heartwarming visit to the Phuket Elephant Sanctuary, where rescued elephants are rehabilitated and cared for in a natural environment. This half-day excursion includes an educational tour of the sanctuary, where you will learn about the elephants' histories and the sanctuary's efforts in animal conservation. You'll have the opportunity to observe the elephants up close as they roam freely, bathe, and interact with each other. This ethical excursion is both informative and inspiring.",
        image: "https://static.wixstatic.com/media/2c0265_f053422fd8984ba89ac7557c32093ba2~mv2.jpg/v1/fill/w_529,h_424,al_c,lg_1,q_80,enc_avif,quality_auto/istockphoto-925916796-612x612.jpg",
        bgImage: "https://static.wixstatic.com/media/6f7529_e4f17528debc4f3e90f6a55bb42bc01f~mv2.jpg/v1/fill/w_1041,h_462,al_c,q_85,enc_avif,quality_auto/6f7529_e4f17528debc4f3e90f6a55bb42bc01f~mv2.jpg"
    },
    {
        id: 3,
        name: "Phuket Old Town Walking Tour",
        location: "Phuket Old Town",
        description: "Dive into the rich history and vibrant culture of Phuket Old Town with a guided walking tour. Explore the charming streets lined with Sino-Portuguese architecture, visit historic temples, and browse local markets. The tour also includes a stop at a traditional Thai coffee shop and a taste of local street food. This excursion is perfect for those who want to immerse themselves in the local culture and history of Phuket.",
        image: "https://static.wixstatic.com/media/2c0265_c6ed3175fd3c4fff82cb929811ff2611~mv2.jpg/v1/fill/w_529,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/istockphoto-1404025761-612x612.jpg",
        bgImage: "https://static.wixstatic.com/media/6f7529_e4f17528debc4f3e90f6a55bb42bc01f~mv2.jpg/v1/fill/w_1041,h_462,al_c,q_85,enc_avif,quality_auto/6f7529_e4f17528debc4f3e90f6a55bb42bc01f~mv2.jpg"
    },
    {
        id: 4,
        name: "James Bond Island Canoeing",
        location: "Phang Nga Bay",
        description: "Discover the stunning Phang Nga Bay and the famous James Bond Island, featured in 'The Man with the Golden Gun.' This full-day tour includes a boat ride through the bay's emerald waters, canoeing through hidden lagoons and caves, and exploring the unique limestone karsts. A stop at the island gives you time to take photos and explore the area. The tour also includes a delicious Thai lunch at a floating village. This excursion offers a mix of adventure and scenic beauty.",
        image: "https://static.wixstatic.com/media/2c0265_335ec3bd1d9f4f3b973931c953ad3209~mv2.jpg/v1/fill/w_529,h_428,al_c,lg_1,q_80,enc_avif,quality_auto/istockphoto-1309587827-612x612.jpg",
        bgImage: "https://static.wixstatic.com/media/6f7529_e4f17528debc4f3e90f6a55bb42bc01f~mv2.jpg/v1/fill/w_1041,h_462,al_c,q_85,enc_avif,quality_auto/6f7529_e4f17528debc4f3e90f6a55bb42bc01f~mv2.jpg"
    }
];

const ExcursionsSection1 = () => {
    return (
        <div className="flex flex-col">
            {data.map((item, idx) => {
                const isEven = idx % 2 === 0;

                return (
                    <div
                        key={item.id}
                        style={{
                            backgroundImage: `url(${item.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className=" bg-fixed overflow-hidden"
                    >
                        <div className={`${isEven ? "bg-white/80 text-[#305b62]" : "bg-[#305b62]/80 text-white"}`}>
                            <div className="md:w-[80vw] m-auto flex flex-col md:flex-row p-5 md:p-10 gap-6">
                                {/* Left section */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 font-semibold ">
                                    <h2 className="text-3xl font-bold uppercase">{item.name}</h2>
                                    <h3 className="text-xl font-semibold">Location: {item.location}</h3>
                                    <p className="text-base leading-relaxed">Description: <br></br> {item.description}</p>
                                </div>

                                {/* Right section */}
                                <div className="w-full md:w-1/2 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ExcursionsSection1;
