import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Mridangam Academy!");
    setForm({ name: "", email: "", whatsapp: "", message: "" });
  };

  return (
    <section id="contact" className="w-screen py-4">
      <div className="container mx-auto py-10 px-4 max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded shadow py-10 px-16 space-y-4 shadow-lg shadow-black"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Contact Us
          </h2>
          <input
            className="w-full border border-black-600 rounded px-3 py-2"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border border-black-600 rounded px-3 py-2"
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border border-black-600 rounded px-3 py-2"
            type="text"
            name="whatsapp"
            placeholder="Your WhatsApp Number"
            value={form.whatsapp}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full border border-black-600 rounded px-3 py-2"
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-white text-black px-3 py-1 rounded font-bold text-lg border border-black transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
