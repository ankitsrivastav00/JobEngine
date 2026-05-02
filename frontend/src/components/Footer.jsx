import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-800">
              Job Portal
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              MERN Stack based job portal project for college.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              This project is for educational purposes only.
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className="flex gap-6 text-sm text-gray-700">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/jobs" className="hover:text-black">Jobs</a>
            <a href="/login" className="hover:text-black">Login</a>
            <a href="/signup" className="hover:text-black">Register</a>
          </div>

          {/* Right Section - Social */}
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/ankit-srivastav-8061b8299" target="_blank" rel="noreferrer">
              <span className="hover:text-blue-600">LinkedIn</span>
            </a>
            <a href="https://github.com/ankitsrivastav00" target="_blank" rel="noreferrer">
              <span className="hover:text-black">GitHub</span>
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
          © 2026 Ankit Srivastav | Academic Project (MERN Stack)
        </div>

      </div>
    </footer>
  );
}

export default Footer;