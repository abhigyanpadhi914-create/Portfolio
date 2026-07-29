import React from 'react';
import CardSwap, { Card } from './ui/CardSwap';

export const CardSwapSection: React.FC = () => {
  return (
    <section 
      id="skills"
      className="relative w-full pt-8 md:pt-12 pb-3 sm:pb-4 px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between overflow-hidden border-t-2 border-black/10 gap-10 lg:gap-16 max-w-[1500px] mx-auto"
      style={{
        backgroundImage: "url('./assets/paper-texture.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat"
      }}
    >
      {/* Left Column: Heading & Character */}
      <div className="text-left max-w-xl select-none z-10 lg:w-5/12 flex flex-col justify-between self-stretch">
        <div>
          <div className="inline-block px-4 py-1.5 mb-4 rounded-md bg-black text-white text-xs font-mono font-black tracking-widest uppercase shadow-[3px_3px_0px_#000000]">
            [ 01 // TECHNICAL DOSSIER ]
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight uppercase leading-none mb-4">
            Skills & Projects
          </h2>
          <p className="text-sm sm:text-base text-black/80 font-bold leading-relaxed mb-6">
            Interactive card stack cycling through embedded engineering skills, hardware projects, and achievements.
          </p>
        </div>

        {/* Character Illustration & Comic Speech Bubble */}
        <div className="relative -mt-4 sm:-mt-6 md:-mt-8 self-start flex flex-col items-start z-10">
          <div className="relative mb-2.5 px-3.5 py-1.5 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_#000000] text-black font-mono font-black text-xs sm:text-sm select-none">
            Heyy! 👋
            <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black" />
            <div className="absolute -bottom-[5px] left-[25px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white" />
          </div>

          <div className="w-32 sm:w-36 md:w-40 lg:w-44 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
            <img 
              src="/character.png" 
              alt="Abhigyan Character" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Column: CardSwap Container */}
      <div className="relative w-full max-w-[620px] h-[560px] sm:h-[580px] flex items-center justify-center lg:justify-end z-10 lg:w-7/12">
        {/* Click Tip Pill */}
        <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap px-4 sm:px-5 py-1.5 sm:py-2 rounded-2xl bg-[#f4efe6]/90 backdrop-blur-sm border-2 border-black shadow-[4px_4px_0px_#000000] text-black font-mono font-bold text-xs sm:text-sm flex items-center gap-2 select-none">
          <span>💡</span> Click any card in the stack to bring it upfront.
        </div>

        <CardSwap
          width={520}
          height={500}
          cardDistance={50}
          verticalDistance={60}
          delay={4500}
          pauseOnHover={true}
          skewAmount={4}
          easing="elastic"
        >
          {/* Card 1: Tech Skills */}
          <Card className="p-7 md:p-9 flex flex-col gap-5 border-[3.5px] border-black bg-white shadow-[10px_10px_0px_#000000] text-black">
            <div className="flex items-center justify-between border-b-2 border-black pb-3.5">
              <h3 className="text-2xl md:text-3xl font-black text-black tracking-wide uppercase flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-black border-2 border-black" />
                Tech Skills
              </h3>
              <span className="text-xs font-mono font-black bg-black text-white px-3 py-1 rounded-md uppercase tracking-wider">
                CARD 01 / 03
              </span>
            </div>

            <div className="flex flex-col gap-4 text-xs sm:text-sm">
              <div className="border-b border-black/20 pb-3">
                <h4 className="font-mono font-black text-black uppercase tracking-wider text-xs md:text-sm mb-1">
                  Hardware & Embedded
                </h4>
                <p className="text-black font-semibold leading-relaxed">
                  ESP32 • Arduino • Raspberry Pi • Embedded C/C++ • Microcontrollers • I2C • SPI • UART • Sensors & Actuators
                </p>
              </div>

              <div className="border-b border-black/20 pb-3">
                <h4 className="font-mono font-black text-black uppercase tracking-wider text-xs md:text-sm mb-1">
                  PCB & CAD
                </h4>
                <p className="text-black font-semibold leading-relaxed">
                  KiCad • Fusion 360 • EasyEDA • Circuit Design • PCB Layout • 3D Modeling
                </p>
              </div>

              <div className="border-b border-black/20 pb-3">
                <h4 className="font-mono font-black text-black uppercase tracking-wider text-xs md:text-sm mb-1">
                  Computer Vision
                </h4>
                <p className="text-black font-semibold leading-relaxed">
                  OpenCV • MediaPipe • Image Processing • Hand Tracking
                </p>
              </div>

              <div className="border-b border-black/20 pb-3">
                <h4 className="font-mono font-black text-black uppercase tracking-wider text-xs md:text-sm mb-1">
                  Development
                </h4>
                <p className="text-black font-semibold leading-relaxed">
                  React • Next.js • TypeScript • Firebase • Git • GitHub • PlatformIO • Antigravity
                </p>
              </div>

              <div>
                <h4 className="font-mono font-black text-black uppercase tracking-wider text-xs md:text-sm mb-1">
                  Simulation & Prototyping
                </h4>
                <p className="text-black font-semibold leading-relaxed">
                  TinkerCAD • Wokwi • LTspice • Proteus
                </p>
              </div>
            </div>
          </Card>

          {/* Card 2: Projects */}
          <Card className="p-7 md:p-9 flex flex-col gap-4 border-[3.5px] border-black bg-white shadow-[10px_10px_0px_#000000] text-black">
            <div className="flex items-center justify-between border-b-2 border-black pb-3.5">
              <h3 className="text-2xl md:text-3xl font-black text-black tracking-wide uppercase flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-black border-2 border-black" />
                Projects
              </h3>
              <span className="text-xs font-mono font-black bg-black text-white px-3 py-1 rounded-md uppercase tracking-wider">
                CARD 02 / 03
              </span>
            </div>

            <div className="flex flex-col gap-3.5 text-xs sm:text-sm">
              <div className="border-b border-black/20 pb-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-black text-base">TARS</h4>
                  <span className="text-[11px] font-mono font-bold bg-black/10 text-black px-2 py-0.5 rounded border border-black/20">AI Companion</span>
                </div>
                <p className="text-black/90 font-medium text-xs leading-relaxed mt-1">
                  ESP32 & Raspberry Pi Zero 2W desktop robot with OLED animations, camera integration, and servo-driven expressions.
                </p>
              </div>

              <div className="border-b border-black/20 pb-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-black text-base">SOS Bracelet</h4>
                  <span className="text-[11px] font-mono font-bold bg-black/10 text-black px-2 py-0.5 rounded border border-black/20">Samsung SFT 2026</span>
                </div>
                <p className="text-black/90 font-medium text-xs leading-relaxed mt-1">
                  Wearable emergency women's safety device developed for Samsung Solve for Tomorrow 2026.
                </p>
              </div>

              <div className="border-b border-black/20 pb-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-black text-base">ROCKY (Project Hail Mary)</h4>
                  <span className="text-[11px] font-mono font-bold bg-black/10 text-black px-2 py-0.5 rounded border border-black/20">Quadruped Robot</span>
                </div>
                <p className="text-black/90 font-medium text-xs leading-relaxed mt-1">
                  2-DOF quadruped robot designed for affordable legged locomotion.
                </p>
              </div>

              <div className="border-b border-black/20 pb-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-black text-base">XY Plotter / CNC Machine</h4>
                  <span className="text-[11px] font-mono font-bold bg-black/10 text-black px-2 py-0.5 rounded border border-black/20">Motion Control</span>
                </div>
                <p className="text-black/90 font-medium text-xs leading-relaxed mt-1">
                  Arduino-based CNC machine using GRBL, CNC Shield V3, and NEMA17 stepper motors.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-black text-base">Hand Gesture Virtual Board</h4>
                  <span className="text-[11px] font-mono font-bold bg-black/10 text-black px-2 py-0.5 rounded border border-black/20">OpenCV & MediaPipe</span>
                </div>
                <p className="text-black/90 font-medium text-xs leading-relaxed mt-1">
                  Virtual drawing application using OpenCV and MediaPipe for real-time hand tracking.
                </p>
              </div>
            </div>
          </Card>

          {/* Card 3: Achievements */}
          <Card className="p-7 md:p-9 flex flex-col gap-5 border-[3.5px] border-black bg-white shadow-[10px_10px_0px_#000000] text-black">
            <div className="flex items-center justify-between border-b-2 border-black pb-3.5">
              <h3 className="text-2xl md:text-3xl font-black text-black tracking-wide uppercase flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-black border-2 border-black" />
                Achievements
              </h3>
              <span className="text-xs font-mono font-black bg-black text-white px-3 py-1 rounded-md uppercase tracking-wider">
                CARD 03 / 03
              </span>
            </div>

            <div className="flex flex-col gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_#000000]">
                <span className="text-[11px] font-mono font-black text-black uppercase tracking-wider block mb-0.5">
                  2026 // GLOBAL INNOVATION
                </span>
                <h4 className="font-black text-black text-base md:text-lg mb-1">
                  Samsung Solve for Tomorrow 2026
                </h4>
                <p className="text-black/90 font-semibold text-xs leading-relaxed">
                  Developed the SOS Bracelet, a wearable emergency safety solution.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_#000000]">
                <span className="text-[11px] font-mono font-black text-black uppercase tracking-wider block mb-0.5">
                  HACKATHON // TOP 13 FINALIST
                </span>
                <h4 className="font-black text-black text-base md:text-lg mb-1">
                  Vibe2Vision International Hackathon
                </h4>
                <p className="text-black/90 font-semibold text-xs leading-relaxed">
                  Top 13 Finalist with SafeSphere, a smart women's safety platform.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_#000000]">
                <span className="text-[11px] font-mono font-black text-black uppercase tracking-wider block mb-0.5">
                  COMPETITION // 3RD PLACE
                </span>
                <h4 className="font-black text-black text-base md:text-lg mb-1">
                  RESONANCE – Model Testing Competition
                </h4>
                <p className="text-black/90 font-semibold text-xs leading-relaxed">
                  3rd Place for engineering model design and testing.
                </p>
              </div>
            </div>
          </Card>
        </CardSwap>
      </div>
    </section>
  );
};

export default CardSwapSection;
