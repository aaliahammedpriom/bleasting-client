import React, { useState } from "react";

const ContactFormGrid = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thanks for submitting!");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="w-full flex justify-center bg-[#305b62] ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md  p-2 md:p-8  text-white"
      >
        <h2 className="text-2xl font-bold mb-6 ">Contact Us</h2>

        {/* First & Last Name */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
              placeholder="Enter first name"
              maxLength="100"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
              placeholder="Enter last name"
              maxLength="100"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
            placeholder="Enter your email"
            required
            maxLength="250"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block mb-1 text-sm">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border-b border-white bg-transparent py-2 text-white focus:outline-none placeholder-white placeholder-opacity-70"
            placeholder="Your message..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 py-2 bg-white text-[#305b62] font-bold rounded-lg hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactFormGrid;
