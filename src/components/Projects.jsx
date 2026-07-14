import React from "react";
import { ExternalLink } from "lucide-react";
import { GiThumbUp } from "react-icons/gi";
import todo from '../assets/NotesApp.png'
import { GrGithub } from "react-icons/gr";
import ecomm from '../assets/HomePage.png' 

const projects = [
  {
    id: 1,
    title: "Todo App (Notes App)",
    description:
      "Task management application with CRUD operations.",
    image:todo,
    github: "https://github.com/Bhavin-Patel0805/Notes-App",
    live: "https://adorable-tanuki-e04dbb.netlify.app/",
  },
  {
    id: 2,
    title: "E-Commerce",
    description:
      "Online Watch Store With Add to Cart(CRUD)",
    image:ecomm,
    github: "https://github.com/Bhavin-Patel0805/online-watch-store",
    live: "https://starlit-banoffee-b2e4e5.netlify.app/",
  },
  {
    id: 3,
    title: "🧠 Online Quiz System",
    description:
      "A modern, responsive quiz application built with React.js, Tailwind CSS, and Framer Motion.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    github: "https://github.com/Bhavin-Patel0805/online-quiz-system",
    live: "https://online-quiz-system-azure.vercel.app/",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-12 lg:px-20 py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Some of my recent work and personal projects.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                  >
                    <GrGithub size={18} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;