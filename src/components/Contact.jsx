import { useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Contact2, Contact2Icon, MapPin, MapPinPen } from "lucide-react";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f9np5wl", "template_y0bde4d", form.current, {
        publicKey: "n2eokXOVZTlxV0Nb_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email Send Successfully!");

          setName("");
          setSub("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };



  const { DarkMode } = useTheme();
  return (
    <>
      <section
        id="Contact"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Let's Build Something Amazing</h2>

          <p className="text-gray-400 mt-5">
            Open to internships, freelance work, and collaborations.
          </p>

          <button className="bg-cyan-500 px-8 py-4 rounded-xl mt-8">
            <a href="#form">Get In Touch</a>
          </button>
        </div>

        <div className="mt-16 w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-6 rounded-3xl backdrop-blur-lg bg-white/10 border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-500">
                <MapPin size={28} />
              </div>

              <h3 className="text-xl font-semibold mt-5">Address</h3>

              <p className="text-gray-400 mt-2">
                Tekara Faliyu, Veluk, Olpad, Surat
              </p>
            </div>

            <div className="group p-6 rounded-3xl backdrop-blur-lg bg-white/10 border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-500">
                <Contact2 size={28} />
              </div>

              <h3 className="text-xl font-semibold mt-5">Contact</h3>

              <p className="text-gray-400 mt-2">+91 7041082070</p>
            </div>

            <div className="group p-6 rounded-3xl backdrop-blur-lg bg-white/10 border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-500">
                <MdEmail size={28} />
              </div>

              <h3 className="text-xl font-semibold mt-5">Email</h3>

              <p className="text-gray-400 mt-2 break-all">
                patelbhavin852004@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-lg mx-auto p-8 md:p-10 rounded-3xl 
backdrop-blur-xl bg-white/10 border border-white/20
shadow-[0_8px_32px_rgba(0,0,0,0.2)] mt-5"
        >
          <h2 className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Me
          </h2>

          <p className="text-gray-400 text-center mb-8">
            Enter your details below for inquiry
          </p>

          <form id="form" onSubmit={sendEmail} ref={form} className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-600
        focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
        outline-none transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-600
        focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
        outline-none transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                name="title"
                value={sub}
                onChange={(e) => setSub(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-600
        focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
        outline-none transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-600
        focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
        outline-none transition-all duration-300 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold
      bg-gradient-to-r from-cyan-500 to-blue-600
      hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30
      transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
