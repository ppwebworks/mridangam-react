import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Beginner Mridangam",
    desc: "Start your journey with the basics of rhythm and technique.",
    path: "/courses/beginner",
  },
  {
    title: "Intermediate Mridangam",
    desc: "Enhance your skills with advanced lessons and practice routines.",
    path: "/courses/intermediate",
  },
  {
    title: "Advanced Mridangam",
    desc: "Master complex talas and performance techniques.",
    path: "/courses/advanced",
  },
];

const Courses = () => (
  <section id="courses" className="w-screen py-4">
    <div className="container mx-auto py-4 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-red-600">
        Our Courses
      </h2>
      <div className="courses-container flex gap-6">
        {/* Beginner Mridangam Card */}
        <div className="card bg-white rounded shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">Beginner Mridangam</h2>
          <p className="mb-4">
            Start your journey with the basics of Mridangam.
          </p>
          <Link to="/courses/BeginnerCourse">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              Click Me
            </button>
          </Link>
        </div>
        {/* Intermediate Mridangam Card */}
        <div className="card bg-white rounded shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">Intermediate Mridangam</h2>
          <p className="mb-4">Take your skills to the next level.</p>
          <Link to="/courses/intermediate">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              Click Me
            </button>
          </Link>
        </div>
        {/* Advanced Mridangam Card */}
        <div className="card bg-white rounded shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">Advanced Mridangam</h2>
          <p className="mb-4">Master advanced techniques and compositions.</p>
          <Link to="/courses/advanced">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              Click Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Courses;
