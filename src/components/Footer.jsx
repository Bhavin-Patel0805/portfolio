import { Heart, Mail } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { DiGithub } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";


const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-700 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Patel Bhavin
            </h2>
            <p className="text-slate-400 mt-2">
              React Developer | Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Bhavin-Patel0805"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <DiGithub  size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/bhavin-patel-08may2004/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <LiaLinkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/ptl_bhavin_85/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <BsInstagram size={20} />
            </a>

          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-400">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#Contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-slate-700 text-center text-slate-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Patel Bhavin. Made with
            <Heart size={16} className="text-red-500 fill-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;