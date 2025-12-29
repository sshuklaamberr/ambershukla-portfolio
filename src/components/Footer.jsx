import instagram from "../assets/social/instagram.svg";
import linkedin from "../assets/social/linkedin.svg";
import github from "../assets/social/github.svg";
import leetcode from "../assets/social/leetcode.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0b0b0b] via-[#111111] to-[#0b0b0b]">
      <div className="container mx-auto max-w-6xl px-6 py-10">

        <div className="flex items-center justify-center md:justify-between">

          <div className="hidden md:block w-24" />

          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <div className="flex gap-4 items-center">
            <a href="https://www.instagram.com/shukla_amber_" target="_blank">
              <img src={instagram} alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" />
            </a>

            <a href="https://www.linkedin.com/in/shuklaaamber/" target="_blank">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
            </a>

            <a href="https://github.com/sshuklaamberr" target="_blank">
              <img src={github} alt="GitHub" className="w-6 h-6 hover:opacity-80 transition" />
            </a>

            <a href="https://leetcode.com/" target="_blank">
              <img src={leetcode} alt="LeetCode" className="w-6 h-6 hover:opacity-80 transition" />
            </a>
          </div>

        </div>

        <div className="my-8 border-t border-white/10" />

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved
        </p>

      </div>
    </footer>
  );
};