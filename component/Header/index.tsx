import { MENU } from "@/constant/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = ({ active, isDetail = false }: { active: string; isDetail?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`px-5 md:px-20 py-6 text-black font-bold sticky top-0 bg-white z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/assets/icons/logo.png"
            alt="logo"
            height={40}
            width={40}
            className="rounded-full"
          />
          <div className="font-bold text-xl ">septianscp</div>
        </div>

        {/* Desktop Menu - Hide if detail */}
        {!isDetail && (
          <div className="hidden md:flex gap-8">
            {MENU.map((item) => (
              <div
                key={item.name}
                className={`font-semibold text-xl leading-6 cursor-pointer ${
                  active === item.name ? "text-gray-600" : ""
                }`}
                onClick={() => handleScrollTo(item.name)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}

        {/* Resume Button - Desktop - Hide if detail */}
        {!isDetail && (
          <button
            style={{ width: 153, height: 56 }}
            className="hidden md:flex items-center cursor-pointer gap-2 bg-black text-white text-xl px-5 py-4 rounded font-semibold"
            onClick={() => window.open("/septian-frontend-2026.pdf", "_blank")}
          >
            <div>Resume</div>
            <Image
              src="/assets/icons/download.svg"
              alt="ic-download"
              height={20}
              width={20}
            />
          </button>
        )}

        {/* Back Button - Show ONLY if detail */}
        {isDetail && (
          <button
            onClick={() => router.back()}
            className="flex items-center cursor-pointer gap-2 bg-black text-white text-xl px-5 py-3 rounded font-semibold"
          >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <div>Back</div>
          </button>
        )}

        {/* Mobile Menu Button - Hide if detail */}
        {!isDetail && (
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && !isDetail && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 md:hidden text-black transition-all duration-300">
          {MENU.map((item) => (
            <div
              key={item.name}
              className="font-semibold text-xl cursor-pointer"
              onClick={() => handleScrollTo(item.name)}
            >
              {item.name}
            </div>
          ))}
          <button
          onClick={() => window.open("/septian-frontend-2026.pdf", "_blank")}
            className="flex items-center cursor-pointer gap-2 bg-black text-white text-xl px-5 py-3 rounded font-semibold"
          >
            <div>Resume</div>
            <Image
              src="/assets/icons/download.svg"
              alt="ic-download"
              height={20}
              width={20}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
