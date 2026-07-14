import { SiReact, SiTailwindcss, SiHtml5, SiJavascript } from "react-icons/si";
import LogoLoop from "../component/LogoLoop";
import GlassIcons from "../component/GlassIcons";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://html.com" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://javascript.com",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const items = [
  { icon: <SiReact />, color: "blue", label: "React Js" },
  { icon: <SiHtml5 />, color: "orange", label: "HTML" },
  { icon: <SiJavascript />, color: "yellow", label: "JavaScript" },
  { icon: <SiTailwindcss />, color: "cyan", label: "Tailwind CSS" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen px-4 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Skills</h2>

        <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-3"></div>
      </div>

      {/* Glass Icons */}
      <div className="w-full max-w-6xl h-[250px] sm:h-[300px] md:h-[400px] lg:h-[200px] flex items-center justify-center">
        <GlassIcons items={items} className="w-full h-full" colorful={false} />
      </div>

      {/* Logo Loop */}
      <div className="w-full max-w-5xl overflow-hidden relative">
        <div className="h-[100px] sm:h-[120px] md:h-[150px]">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
