import React, { useState } from "react";
import { Link } from "react-router-dom";

const Enrollment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    course: "",
    whatsapp: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Reset city if country changes
    if (name === "country") {
      setForm({ ...form, country: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Thank you for enrolling! We will contact you soon.");
        setForm({
          name: "",
          email: "",
          country: "",
          city: "",
          course: "",
          whatsapp: "",
          age: "",
          gender: "",
        });
      } else {
        const data = await response.json();
        alert("Error: " + (data.error || "Could not submit form"));
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  return (
    <section id="enrollment" className="w-screen min-h-full py-4 bg-grey">
      <div className="flex justify-center h-full gap-12 w-full mx-auto px-16 py-10 px-4">
        <div
          className="container mx-auto px-4 max-w-sm bg-white rounded shadow 
        py-10 px-16 space-y-4 shadow-lg shadow-black"
        >
          {" "}
        </div>
        <div className="container mx-auto px-4 max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded shadow py-6 px-10 space-y-4 shadow-lg shadow-black"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-black">
              Enrollment Form
            </h2>
            <input
              className="w-full border border-black-600 rounded px-3 py-1"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full border border-black-600 rounded px-3 py-1"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full border border-black-600 rounded px-3 py-1"
              type="text"
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              required
            />
            <input
              className="w-full border border-black-600 rounded px-3 py-1"
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              required
            />
            <input
              className="w-full border border-black-600 rounded px-3 py-1"
              type="tel"
              name="whatsapp"
              placeholder="Your WhatsApp Number"
              value={form.whatsapp}
              onChange={handleChange}
              required
              pattern="^\+?\d{7,15}$"
            />
            <select
              className="w-full border border-black-600 rounded px-3 py-1"
              name="course"
              value={form.course}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Course
              </option>
              <option value="Beginner Mridangam">Beginner Mridangam</option>
              <option value="Intermediate Mridangam">
                Intermediate Mridangam
              </option>
              <option value="Advanced Mridangam">Advanced Mridangam</option>
            </select>
            <input
              className="w-full border border-black-600 rounded px-3 py-1"
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              required
              min="1"
            />
            <select
              className="w-full border border-black-600 rounded px-3 py-1"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
            <button
              type="submit"
              className="bg-white text-black px-3 py-1 rounded font-bold text-lg border border-black transition-colors duration-200 hover:bg-black hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Right Side Div */}
      </div>
    </section>
  );
};

export default Enrollment;
