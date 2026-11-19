import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#013364]">InterviewIQ</h2>

          <p className="mt-1 text-sm text-gray-500">
            AI-powered interview preparation.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#013364]">
            Home
          </Link>

          <Link to="/companies" className="hover:text-[#013364]">
            Companies
          </Link>

          <Link to="/community" className="hover:text-[#013364]">
            Community
          </Link>

          <Link to="/login" className="hover:text-[#013364]">
            Login
          </Link>
        </div>

        <p className="text-sm text-gray-500">© 2026 InterviewIQ</p>
      </div>
    </footer>
  );
}
