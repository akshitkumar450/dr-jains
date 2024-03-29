import React, { useState } from "react";

function HomeLead() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("Name", formData.Name);
    data.append("Email", formData.Email);
    data.append("Date", formData.Date);
    // your URL.

    const Sheet_Url =
      "https://script.google.com/a/macros/nsut.ac.in/s/AKfycbxuGN3OuW6OqQGIVkpylguUH6gfanAnShwOa_RbEx0smVcKZq8NBrSbx98m_1X7NJdV_Q/exec"
    try {
      await fetch(Sheet_Url, {
        method: "POST",
        body: data,
        // muteHttpExceptions: true,
      });

      setFormData({
        Name: "",
        Email: "",
        Date: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`bg-[#081953] px-10 py-5 lg:mt-20 lg:px-12 lg:py-10`}>
      <div className="text-center lg:text-left mt-5 space-y-5 lg:space-y-0 lg:mt-0 lg:flex justify-center items-center gap-x-5 lg:px-5 w-3/4 mx-auto">
        <div>
          <div className="text-white text-center">
            <h1 className="text-3xl font-semibold capitalize">
              We specialise in you
            </h1>
            <h1 className="text-lg capitalize my-3">
              Whatever be your illness we are there for you. Avail Best
              Homeopathic Treatment which is Scientific , Safe, Effective.
              Expertise and Care since 1981.
            </h1>
          </div>

          <form className="lg:flex w-full space-y-4 lg:space-y-0 gap-x-10">
            <input
              type="text"
              placeholder="Your Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="w-full h-12 px-2 outline-none cursor-pointer rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full h-12 px-2 outline-none cursor-pointer rounded-md"
            />
            {/* calendar */}
            <input
              type="date"
              name="Date"
              value={formData.Date}
              onChange={handleChange}
              className="w-1/2 h-12 px-2 outline-none cursor-pointer rounded-md"
            />
          </form>

          <div className="grid place-items-center mt-5">
            <button
            type="submit"
             onClick={handleSubmit}
              className="text-white rounded-md text-xl px-5 py-2 bg-[#DF7324]"
            >
              Book an appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLead;
