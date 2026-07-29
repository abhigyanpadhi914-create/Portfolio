import { RobotHero } from "./ui/robot-hero";

const Landing = () => {
  return (
    <div id="landingDiv">
      <RobotHero 
        backgroundText="ROBOTICS"
        navItemsLeft={[
          { label: 'TECH SKILLS', href: '#skills' },
          { label: 'PROJECTS', href: '#projects' },
          { label: 'CONTACT', href: '#contact' },
        ]}
        contactText="abhigyanpadhi914@gmail.com"
        contactHref="mailto:abhigyanpadhi914@gmail.com"
        ctaText="Connect"
        onCtaClick={() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default Landing;
