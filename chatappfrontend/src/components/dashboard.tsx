import {
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { SiViber, SiVk } from "react-icons/si";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="flex items-center justify-between px-10 py-5">
          <div className="flex items-center gap-2 text-2xl font-semibold cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center text-white shadow">
              C
            </div>
            ChatApp
          </div>


          <div className="flex items-center gap-4">
            
            <button className="font-medium text-xl hover:text-teal-600 transition">
              A unified communication experience
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center text-center mt-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight animate-fadeUp">
          Messenger aggregator in the <br />
          <span className="text-teal-600">unified window</span>
        </h1>

        <p className="mt-6 text-gray-500 max-w-xl animate-fadeUp delay-200">
          Stable communication and effective dialogues that help teams respond faster, build trust, and drive sustainable revenue growth while strengthening brand awareness across all channels.
        </p>

        {/* ICONS */}
        <div className="flex gap-5 mt-10 text-2xl">
          <SocialIcon bg="bg-blue-500"><FaTelegramPlane /></SocialIcon>
          <SocialIcon bg="bg-purple-500"><SiViber /></SocialIcon>
          <SocialIcon bg="bg-blue-600"><SiVk /></SocialIcon>
          <SocialIcon bg="bg-green-500"><FaWhatsapp /></SocialIcon>
          <SocialIcon bg="bg-orange-500"><FaEnvelope /></SocialIcon>
          <SocialIcon bg="bg-pink-500"><FaInstagram /></SocialIcon>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <div>
        <div className="flex items-center gap-4 ml-155 mt-20">
            <button className="px-6 py-3 rounded-full text-2xl bg-teal-100 text-teal-700 font-medium hover:bg-teal-200 active:scale-95 transition">
              Join Chat
            </button>
          </div>
      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */



function SocialIcon({ children, bg }: any) {
  return (
    <div
      className={`${bg} text-white p-4 rounded-full shadow-md 
      hover:scale-125 hover:shadow-xl hover:rotate-6 transition-all duration-300`}
    >
      {children}
    </div>
  );
}



