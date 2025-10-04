import React from 'react';
const data = [
    {
        "section": "1. Retreat Overview",
        "items": [
            {
                "clause": "1.1",
                "text": "The Retreat is designed to provide a comprehensive body transformation experience through a combination of fitness training, wellness activities, and coaching."
            },
            {
                "clause": "1.2",
                "text": "All accommodation and activities during the Retreat will be arranged and coordinated by us, with outsourcing to third-party vendors."
            }
        ]
    },
    {
        "section": "2. Booking and Payment",
        "items": [
            {
                "clause": "2.1",
                "text": "To secure your spot in the Retreat, a non-refundable deposit of £300 GBP is required at the time of booking."
            },
            {
                "clause": "2.2",
                "text": "Full payment of the remaining balance must be received no later than 21 days prior to the Retreat start date."
            },
            {
                "clause": "2.3",
                "text": "If the full payment is not received within the specified timeframe, we reserve the right to cancel your booking and retain the deposit."
            }
        ]
    },
    {
        "section": "3. Retreat Inclusions",
        "items": [
            {
                "clause": "3.1",
                "text": "The Retreat package includes pre-arranged accommodation, activities, access to fitness and wellness facilities, and prescribed meals as specified in the Retreat itinerary."
            },
            {
                "clause": "3.2",
                "text": "Flights to and from Phuket, Thailand, are not included and must be arranged and paid for separately by each participant."
            },
            {
                "clause": "3.3",
                "text": "Any additional expenses, including meals outside of prescribed ones, transportation outside of planned activities, personal purchases, and other incidental costs, are not covered by the Retreat package and are the responsibility of the participant."
            }
        ]
    },
    {
        "section": "4. Retreat Changes and Cancellations",
        "items": [
            {
                "clause": "4.1",
                "text": "We reserve the right to modify the Retreat itinerary, including accommodation and activities, at our discretion due to unforeseen circumstances or factors beyond our control. We will make reasonable efforts to provide alternative arrangements of comparable quality."
            },
            {
                "clause": "4.2",
                "text": "In the event of a significant change to the Retreat package, we will notify you as soon as possible and discuss any necessary adjustments or refunds."
            },
            {
                "clause": "4.3",
                "text": "In the unlikely event that we must cancel the Retreat, you will receive a full refund of any payments made to us, including the deposit. However, we will not be liable for any additional costs you may have incurred, such as flights or other travel arrangements."
            },
            {
                "clause": "4.4",
                "text": "In the event that the participant would like to cancel the retreat, all refunds are discretionary."
            }
        ]
    },
    {
        "section": "5. Participant Responsibilities",
        "items": [
            {
                "clause": "5.1",
                "text": "You are responsible for ensuring your physical and mental fitness to participate in the Retreat's activities. If you have any health concerns or pre-existing conditions, we recommend consulting with a medical professional before booking."
            },
            {
                "clause": "5.2",
                "text": "You are required to provide accurate and complete information about your health, fitness level, and any special requirements during the booking process. Failure to disclose relevant information may result in your participation being terminated without refund."
            },
            {
                "clause": "5.3",
                "text": "You are responsible for obtaining adequate travel insurance that covers any potential risks, cancellations, or medical emergencies during the Retreat."
            },
            {
                "clause": "5.4",
                "text": "You must comply with all local laws, regulations, and the rules of the accommodation and activity providers during the Retreat."
            }
        ]
    },
    {
        "section": "6. Limitation of Liability",
        "items": [
            {
                "clause": "6.1",
                "text": "We act as coordinators and facilitators of the Retreat and are not liable for any loss, injury, damage, or expenses arising from accidents, delays, illness, theft, or any other incidents that may occur during the Retreat."
            },
            {
                "clause": "6.2",
                "text": "You acknowledge that participation in physical activities and the use of fitness and wellness facilities during the Retreat carries inherent risks. You voluntarily assume all risks associated with such activities and release us from any liability."
            },
            {
                "clause": "6.3",
                "text": "Our liability, if any, for any claims arising out of or in connection with the Retreat shall not exceed the amount paid by you to us for the Retreat package."
            }
        ]
    }
]

const TermsAndConditionsSection1 = () => {
    return (
        <div className="md:w-[70vw] m-auto px-5 md:px-20 py-5">
            <h1 className="text-3xl font-bold mb-4 text-center">TERMS AND CONDITIONS</h1>
            <p className="mb-6">
                Please read the following terms and conditions carefully before purchasing the Bleasting Retreat organised by Bleasting ("we," "us," or "our"). These terms and conditions apply to all participants ("you" or "your") availing the services provided by Bleasting.
            </p>

            <div className="space-y-4">
                {data.map((section, idx) => (
                    <div key={idx} className=" p-4 shadow-xs">
                        <div className=" font-semibold text-lg">
                            {section.section}
                        </div>
                        {section.items.map((item, i) => (
                                <p key={i}>
                                    <span className="font-bold">{item.clause}: </span>
                                    {item.text}
                                </p>
                            ))}
                    </div>
                ))}
            </div>
            <p>By participating in the Bleasting Retreat, you agree to comply with these terms and conditions. If you do not agree with any part of these terms and conditions, please do not proceed with purchasing the Retreat.</p>
        </div>
    );
};

export default TermsAndConditionsSection1;
