import React from "react";
import { Link } from "react-router-dom";

const AdvancedCourse = () => (
  <section className="w-screen min-h-screen px-16 py-16 bg-grey">
    <div className="px-4 w-full">
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
        Advanced Mridangam
      </h2>
      <p className="mb-4">
        Master complex talas and performance techniques. This This course includes master level accompaniment and Tanni Avartanam of different varieities. course is for
        advanced students aiming for mastery:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Advanced improvisation</li>
        <li>Rare talas and compositions</li>
        <li>Concert performance skills</li>
        <li>Accompaniment techniques</li>
      </ul>
      <p>
        By the end of this course, you'll be ready to perform at a professional
        level and accompany other musicians.
      </p>
    </div>
  </section>
);

export default AdvancedCourse;
