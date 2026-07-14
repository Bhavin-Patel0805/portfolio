import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 px-5 md:px-16 lg:px-24 min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Personal Info */}
          <div
            className={`p-8 rounded-3xl backdrop-blur-lg border transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-xl ${
              darkMode
                ? "bg-slate-800/50 border-slate-700"
                : "bg-white/70 border-gray-300"
            }`}
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Personal Information
            </h3>

          <div className="overflow-x-auto">
  <table className="w-full max-w-lg border border-gray-300 rounded-lg overflow-hidden">
    <tbody>
      <tr className="border-b">
        <td className="font-semibold p-3">Name</td>
        <td className="p-3">Patel Bhavin N.</td>
      </tr>

      <tr className="border-b">
        <td className="font-semibold p-3">DOB</td>
        <td className="p-3">08 May 2004</td>
      </tr>

      <tr className="border-b">
        <td className="font-semibold p-3">Email</td>
        <td className="p-3 break-all">
          patelbhavin852004@gmail.com
        </td>
      </tr>

      <tr>
        <td className="font-semibold p-3">Phone</td>
        <td className="p-3">+91 7041082070</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>

          {/* Education */}
          {/* <div
            className={`p-8 rounded-3xl backdrop-blur-lg border transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-xl ${
              darkMode
                ? "bg-slate-800/50 border-slate-700"
                : "bg-white/70 border-gray-300"
            }`}
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Education
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-4">
                <p className="text-cyan-400 font-bold">2019</p>
                <h4 className="font-semibold">
                  Secondary School Certificate
                </h4>
                <p className="text-gray-400">
                  The Radiant International School
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-4">
                <p className="text-cyan-400 font-bold">2021</p>
                <h4 className="font-semibold">
                  Higher Secondary Certificate
                </h4>
                <p className="text-gray-400">
                  Lokmanya Vidhyalaya Secondary School
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-4">
                <p className="text-cyan-400 font-bold">2024</p>
                <h4 className="font-semibold">
                  Bachelor of Computer Application (BCA)
                </h4>
                <p className="text-gray-400">
                  C.B. Patel Computer College
                </p>
              </div>
            </div>
          </div> */}

          <div
  className={`p-8 rounded-3xl backdrop-blur-lg border transition-all duration-500 ${
    darkMode
      ? "bg-slate-800/50 border-slate-700"
      : "bg-white/70 border-gray-300"
  }`}
>
  <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
    Education
  </h3>

  <div className="space-y-6 group">
    
    {/* SSC */}
    <div
      className={`border-l-4 border-cyan-400 pl-4 rounded-lg p-3 cursor-pointer
      transition-all duration-300
      hover:scale-105 hover:-translate-y-1
      group-hover:blur-sm hover:!blur-none
      ${
        darkMode
          ? "hover:bg-slate-700/50"
          : "hover:bg-cyan-50"
      }`}
    >
      <p className="text-cyan-400 font-bold">2019</p>
      <h4 className="font-semibold">
        Secondary School Certificate
      </h4>
      <p className="text-gray-400">
        The Radiant International School
      </p>
    </div>

    {/* HSC */}
    <div
      className={`border-l-4 border-cyan-400 pl-4 rounded-lg p-3 cursor-pointer
      transition-all duration-300
      hover:scale-105 hover:-translate-y-1
      group-hover:blur-sm hover:!blur-none
      ${
        darkMode
          ? "hover:bg-slate-700/50"
          : "hover:bg-cyan-50"
      }`}
    >
      <p className="text-cyan-400 font-bold">2021</p>
      <h4 className="font-semibold">
        Higher Secondary Certificate
      </h4>
      <p className="text-gray-400">
        Lokmanya Vidhyalaya Secondary School
      </p>
    </div>

    {/* BCA */}
    <div
      className={`border-l-4 border-cyan-400 pl-4 rounded-lg p-3 cursor-pointer
      transition-all duration-300
      hover:scale-105 hover:-translate-y-1
      group-hover:blur-sm hover:!blur-none
      ${
        darkMode
          ? "hover:bg-slate-700/50"
          : "hover:bg-cyan-50"
      }`}
    >
      <p className="text-cyan-400 font-bold">2024</p>
      <h4 className="font-semibold">
        Bachelor of Computer Application (BCA)
      </h4>
      <p className="text-gray-400">
        C.B. Patel Computer College
      </p>
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;