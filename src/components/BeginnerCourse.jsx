import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BeginnerCourse = () => {
  return (
    <section className="py-16 bg-grey">
      <div className="px-16 container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center text-red-600 hover:text-red-800 mb-6"
        >
          {/* Left Arrow SVG */}
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
        <h2 className="text-3xl font-bold mb-6 text-red-600">
          Beginner Mridangam
        </h2>
        <p className="mb-4">
          Start your journey with the basics of rhythm and technique. This
          course is designed for absolute beginners. you can learn it on your
          own pace. This course covers:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Introduction to Mridangam</li>
          <li>Basic strokes and hand positions</li>
          <li>Simple talas and patterns</li>
          <li>Practice routines</li>
        </ul>
        <p>
          By the end of this course, you'll be able to play simple compositions
          and understand the fundamentals of Mridangam.
        </p>
      </div>
    </section>
  );
};

export default BeginnerCourse;
