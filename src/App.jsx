import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Courses from "./components/courses";
import Buy from "./components/Buy";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Enrollment from "./components/enrollment";
import BeginnerCourse from "./components/BeginnerCourse";
import IntermediateCourse from "./components/IntermediateCourse";
import AdvancedCourse from "./components/AdvancedCourse";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="w-full min-h-screen mx-auto px-0 ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Courses />
                <Buy />
                <Enrollment />
                <Contact />
              </>
            }
          />

          <Route path="/courses/BeginnerCourse" element={<BeginnerCourse />} />
          <Route path="/courses/intermediate" element={<IntermediateCourse />}/>
          <Route path="/courses/advanced" element={<AdvancedCourse />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
