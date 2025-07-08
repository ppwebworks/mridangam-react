import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white w-screen px-16 py-3 shadow-md flex justify-between items-center">
      <div className="text-3xl text-black font-extrabold text-shadow-lg/30">
        <Link to="/">Mridangam.Academy</Link>
      </div>
      <ul className="flex text-md font-bold space-x-6">
        <li>
          <Link
            to="/"
            className="text-black hover:text-red-600 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
        <Link
            to="/about"
            className="text-black hover:text-red-600 transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className="text-black hover:text-red-600 transition-colors duration-200"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/buy"
            className="text-black hover:text-red-600 transition-colors duration-200"
          >
            Buy
          </Link>
        </li>
        <li>
          <Link
            to="/enrollment"
            className="text-black hover:text-red-600 transition-colors duration-200"
          >
            Enrollment
          </Link>
        </li>
        <li>
        <Link
            to="/contact"
            className="text-black hover:text-red-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
