import React from 'react';
const faqs = [
    {
        "question": "What is the duration of the Bleasting body transformation retreat?",
        "answer": "It's up to you! Generally, our customers stay anywhere between 2-12 weeks."
    },
    {
        "question": "Where is the fitness retreat located?",
        "answer": "The retreat is located on the beautiful island of Phuket, Thailand. The specific location and address of accommodation and activities will be given upon registration."
    },
    {
        "question": "What is included in the retreat package?",
        "answer": "The retreat package includes all accommodations, activities, and 2 meals per day for the duration of the event. You can expect comfortable lodging, access to fitness facilities, guided workouts, nutritional meals, wellness workshops, and various outdoor activities."
    },
    {
        "question": "Are flights included in the retreat package?",
        "answer": "No, flights are not included. Participants are responsible for arranging their own transportation to and from Phuket, Thailand."
    },
    {
        "question": "What type of accommodations can I expect?",
        "answer": "You can expect comfortable lodging with access to fitness facilities and wellness workshops."
    },
    {
        "question": "Are there any specific fitness requirements to attend the retreat?",
        "answer": "Absolutely! Professional trainers and instructors will provide guidance and support throughout your fitness journey, with one-on-one consultations, group coaching, and educational workshops."
    },
    {
        "question": "Is the retreat suitable for vegetarians/vegans?",
        "answer": "Yes, the retreat can accommodate vegetarians and vegans."
    },
    {
        "question": "What types of activities and workouts are included?",
        "answer": "The retreat includes guided workouts, wellness workshops, and various outdoor activities designed to support body transformation."
    },
    {
        "question": "Can I receive personalized guidance during the retreat?",
        "answer": "Yes! Professional trainers and instructors provide one-on-one consultations and group coaching to enhance your fitness journey."
    },
    {
        "question": "Is there free time during the retreat?",
        "answer": "Yes, there will be scheduled free time to relax or explore the area."
    },
    {
        "question": "What is the cancellation policy?",
        "answer": "The cancellation policy may vary. Specific details will be provided during registration. Please review the terms and conditions related to cancellations, refunds, and rescheduling before confirming your participation."
    },
    {
        "question": "What should I pack for the retreat?",
        "answer": "It is recommended to pack comfortable workout attire, swimwear, sunscreen, a hat, athletic shoes, a reusable water bottle, personal toiletries, and any necessary medications."
    },
    {
        "question": "Is there Wi-Fi available at the retreat location?",
        "answer": "Yes, Wi-Fi is available at the retreat location."
    }
]


const ContactSection3 = () => {
    return (
        <div className='text-[#dfcaa5] p-5 md:p-10'>
            <h1 className='font-bold text-center text-3xl'>FAQ'S</h1>
            {faqs.map((faq, idx) => (
                <div key={idx} className="md:w-[50vw] m-auto collapse collapse-plus border-b border-b-[#dfcaa5]  ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold max-sm:text-sm uppercase">{faq.question}</div>
                    <div className="collapse-content text-xs">{faq.answer}</div>
                </div>
            ))}
        </div>
    );
};

export default ContactSection3;