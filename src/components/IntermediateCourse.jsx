import React from "react";
import { Link, useNavigate } from "react-router-dom";

const IntermediateCourse = () => (
  <section className="w-screen px-16 py-16">
    <div className="container mx-auto px-4 w-full">
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
        Intermediate Mridangam
      </h2>
      <p className="mb-4">
        Enhance your skills with advanced lessons and practice routines. This
        course is for those who have mastered the basics and want to progress
        further:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Advanced strokes and techniques</li>
        <li>Complex talas and variations</li>
        <li>Improvisation basics</li>
        <li>Performance preparation</li>
      </ul>
      <p>
        By the end of this course, you'll be able to perform intermediate-level
        pieces and improvise simple solos.
      </p>
    </div>
  </section>
);

export default IntermediateCourse;
