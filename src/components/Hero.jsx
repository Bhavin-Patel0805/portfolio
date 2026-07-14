import { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import DownloadButton from "../Pages/DownloadButton";
import { useTheme } from "../context/ThemeContext";

const firstLine = "Hi, I'm";
const secondLine = "Patel Bhavin";
const thirdLine = "Web Developer";

const Hero = () => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");

  useEffect(() => {
    let i = 0;
    let j = 0;
    let k = 0;

    const startTyping = () => {
      i = 0;
      j = 0;
      k = 0;

      setLine1("");
      setLine2("");
      setLine3("");

      typeLine1();
    };

    const typeLine1 = () => {
      if (i <= firstLine.length) {
        setLine1(firstLine.slice(0, i));
        i++;
        setTimeout(typeLine1, 100);
      } else {
        typeLine2();
      }
    };

    const typeLine2 = () => {
      if (j <= secondLine.length) {
        setLine2(secondLine.slice(0, j));
        j++;
        setTimeout(typeLine2, 100);
      } else {
        typeLine3();
      }
    };

    const typeLine3 = () => {
      if (k <= thirdLine.length) {
        setLine3(thirdLine.slice(0, k));
        k++;
        setTimeout(typeLine3, 100);
      } else {
        setTimeout(() => {
          i = firstLine.length;
          j = secondLine.length;
          k = thirdLine.length;
          eraseLine3();
        }, 2000);
      }
    };

    const eraseLine3 = () => {
      if (k >= 0) {
        setLine3(thirdLine.slice(0, k));
        k--;
        setTimeout(eraseLine3, 50);
      } else {
        eraseLine2();
      }
    };

    const eraseLine2 = () => {
      if (j >= 0) {
        setLine2(secondLine.slice(0, j));
        j--;
        setTimeout(eraseLine2, 50);
      } else {
        eraseLine1();
      }
    };

    const eraseLine1 = () => {
      if (i >= 0) {
        setLine1(firstLine.slice(0, i));
        i--;
        setTimeout(eraseLine1, 50);
      } else {
        setTimeout(startTyping, 500);
      }
    };
    startTyping();
  }, []);

  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? "bg-black" : "bg-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="animate-fadeIn">
          <div className={`h-50 ${darkMode ? "text-white" : "text-black"}`}>
            <h3 className="text-2xl font-semibold mb-2">{line1}</h3>

            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {line2}
            </h1>

            <h2
              className={`text-4xl font-bold mt-4 ${darkMode ? "text-white" : "text-black"}`}
            >
              {line3}
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>
          </div>
          <p
            className={`mt-8 max-w-lg leading-8${darkMode ? "text-gray-500" : "text-black"}`}
          >
            I build responsive modern web applications using React.js, Tailwind
            CSS and JavaScript with beautiful UI and smooth animations.
          </p>

          <div className="flex gap-5 mt-10">
            <div className="hover:scale-105 duration-300">
              <DownloadButton />
            </div>

            <a
              href="#Contact"
              className="px-8 py-3 rounded-xl border-2 border-cyan-400 text-cyan-400
            hover:bg-cyan-400 hover:text-black duration-300 shadow-lg shadow-cyan-500/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
