import { MENU } from "@/constant/Header";
import Home from "./Home";
import Skill from "./Skill";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Body = ({ setActive }: { setActive: (active: string) => void }) => {
  const renderMenu = (item: { name: string; href: string }) => {
    switch (item.name) {
      case "Home":
        return <Home key={item.name} setActive={() => setActive("Home")} />;
      case "Skill":
        return <Skill key={item.name} setActive={() => setActive("Skill")} />;
      case "Experience":
        return (
          <Experience
            key={item.name}
            setActive={() => setActive("Experience")}
          />
        );
      case "About Me":
        return (
          <AboutMe key={item.name} setActive={() => setActive("About Me")} />
        );
      case "Portfolio":
        return (
          <Portfolio key={item.name} setActive={() => setActive("Portfolio")} />
        );

      default:
        return (
          <Contact key={item.name} setActive={() => setActive("Contact")} />
        );
    }
  };

  return (
    <div className="gap-10 flex flex-col md:gap-0">
      {MENU.map((item) => renderMenu(item))}
    </div>
  );
};

export default Body;
