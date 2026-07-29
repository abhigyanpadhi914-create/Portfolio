import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <footer 
      className="contact-section section-container text-black border-t-2 border-black/10" 
      id="contact"
      style={{
        backgroundImage: "url('./assets/paper-texture.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat"
      }}
    >
      <div className="contact-container max-w-7xl mx-auto px-6 sm:px-12 pt-4 sm:pt-5 pb-2 sm:pb-3">
        <div className="inline-block px-3 py-1 mb-3 rounded-md bg-black text-white text-[10px] font-mono font-black tracking-widest uppercase shadow-[2px_2px_0px_#000000]">
          [ 02 // GET IN TOUCH ]
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight uppercase leading-none mb-4">
          Contact
        </h3>
        <div className="contact-flex flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">
          <div className="contact-box flex flex-col">
            <h4 className="text-xs font-mono font-black uppercase text-black/60 tracking-wider mb-2">Email</h4>
            <p className="text-lg sm:text-xl font-bold mb-0">
              <a 
                href="mailto:abhigyanpadhi914@gmail.com" 
                data-cursor="disable" 
                className="hover:underline text-black font-extrabold"
              >
                abhigyanpadhi914@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box flex flex-col gap-1 items-start">
            <h4 className="text-xs font-mono font-black uppercase text-black/60 tracking-wider mb-1">Social</h4>
            <a
              href="https://github.com/abhigyanpadhi914-create"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social text-base sm:text-lg font-black inline-flex items-center gap-1.5 w-fit border-b border-black/20 py-0.5 text-black hover:border-black transition-colors"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/abhigyan-padhi-75a340386"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social text-base sm:text-lg font-black inline-flex items-center gap-1.5 w-fit border-b border-black/20 py-0.5 text-black hover:border-black transition-colors"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/_abhi.execrashed?igsh=MWdqd3d4enhrN2N1eg=="
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social text-base sm:text-lg font-black inline-flex items-center gap-1.5 w-fit border-b border-black/20 py-0.5 text-black hover:border-black transition-colors"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box flex flex-col justify-start gap-3">
            <h2 className="text-lg sm:text-xl font-black text-black leading-tight">
              Designed & Developed <br /> by <span className="underline decoration-2">Abhigyan Padhi</span>
            </h2>
            <h5 className="text-xs sm:text-sm font-mono font-bold text-black/60 flex items-center gap-1.5 mt-2">
              <MdCopyright /> {new Date().getFullYear()} Abhigyan Padhi. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
