import image_moonmi_logo from '@assets/images/moonmi_logo.png';
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

const translations = {
  zh: {
    nav: {
      services: "服务",
      work: "案例",
      clients: "客户",
      about: "关于",
      contact: "联系我们",
    },
  },
  en: {
    nav: {
      services: "Services",
      work: "Work",
      clients: "Clients",
      about: "About",
      contact: "Contact",
    },
  },
  fr: {
    nav: {
      services: "Services",
      work: "Projets",
      clients: "Clients",
      about: "À propos",
      contact: "Contact",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      work: "Proyectos",
      clients: "Clientes",
      about: "Acerca de",
      contact: "Contacto",
    },
  },
  ar: {
    nav: {
      services: "خدمات",
      work: "أعمال",
      clients: "عملاء",
      about: "معلومات",
      contact: "اتصال",
    },
  },
};

const languageOptions = [
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

// Section background configuration
const sectionBackgrounds: Record<string, "dark" | "light"> = {
  hero: "dark",
  services: "light",
  work: "dark",
  clients: "light",
  about: "dark",
  contact: "dark",
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<
    "zh" | "en" | "fr" | "es" | "ar"
  >("zh");
  const [languageMenuOpen, setLanguageMenuOpen] =
    useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    number | null
  >(null);
  const [activeSection, setActiveSection] =
    useState<string>("hero");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.7)"],
  );

  // Determine if current section has dark background
  const isDarkSection =
    sectionBackgrounds[activeSection] === "dark";

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollTop;
      const viewportHeight = window.innerHeight;

      setScrolled(scrollPosition > 50);
      setHideHeader(scrollPosition > viewportHeight * 0.5);

      // Detect active section based on scroll position
      const sections = [
        "hero",
        "services",
        "work",
        "clients",
        "about",
        "contact",
      ];
      const sectionElements = sections
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      for (const section of sectionElements) {
        if (section) {
          const rect = section.getBoundingClientRect();
          const offset =
            scrollContainer.getBoundingClientRect().top;
          const sectionTop = rect.top - offset;
          const sectionBottom =
            sectionTop + section.offsetHeight;

          // Check if section is in viewport (with some threshold)
          if (
            sectionTop <= viewportHeight / 3 &&
            sectionBottom > viewportHeight / 3
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () =>
      scrollContainer.removeEventListener(
        "scroll",
        handleScroll,
      );
  }, []);

  const toggleLanguage = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    // Wait for component to unmount, then scroll to case studies section
    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleLanguageChange = (
    lang: "zh" | "en" | "fr" | "es" | "ar",
  ) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const currentLanguage = languageOptions.find(
    (opt) => opt.code === language,
  );

  const t = translations[language];

  // Show project detail if selected
  if (selectedProject !== null) {
    return (
      <ProjectDetail
        projectId={selectedProject}
        language={language}
        onClose={handleCloseProject}
      />
    );
  }

  return (
    <div
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      ref={scrollContainerRef}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? "bg-gray-500/30 shadow-sm"
            : "bg-gray-500/10"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <ImageWithFallback
                src={image_moonmi_logo}
                alt={language === "zh" ? "慕鸣" : "Moonmi"}
                className="h-[51px] lg:h-[90px] w-auto object-contain transition-all duration-300"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <a
                href="#services"
                className={`text-sm tracking-wide transition-all relative ${
                  activeSection === "services"
                    ? isDarkSection
                      ? "text-white font-medium"
                      : "text-black font-medium"
                    : isDarkSection
                      ? "text-white/80 hover:text-white"
                      : "text-black/60 hover:text-black"
                }`}
              >
                {t.nav.services}
                {activeSection === "services" && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDarkSection ? "bg-white" : "bg-black"}`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
              <a
                href="#work"
                className={`text-sm tracking-wide transition-all relative ${
                  activeSection === "work"
                    ? isDarkSection
                      ? "text-white font-medium"
                      : "text-black font-medium"
                    : isDarkSection
                      ? "text-white/80 hover:text-white"
                      : "text-black/60 hover:text-black"
                }`}
              >
                {t.nav.work}
                {activeSection === "work" && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDarkSection ? "bg-white" : "bg-black"}`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
              <a
                href="#clients"
                className={`text-sm tracking-wide transition-all relative ${
                  activeSection === "clients"
                    ? isDarkSection
                      ? "text-white font-medium"
                      : "text-black font-medium"
                    : isDarkSection
                      ? "text-white/80 hover:text-white"
                      : "text-black/60 hover:text-black"
                }`}
              >
                {t.nav.clients}
                {activeSection === "clients" && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDarkSection ? "bg-white" : "bg-black"}`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
              <a
                href="#about"
                className={`text-sm tracking-wide transition-all relative ${
                  activeSection === "about"
                    ? isDarkSection
                      ? "text-white font-medium"
                      : "text-black font-medium"
                    : isDarkSection
                      ? "text-white/80 hover:text-white"
                      : "text-black/60 hover:text-black"
                }`}
              >
                {t.nav.about}
                {activeSection === "about" && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDarkSection ? "bg-white" : "bg-black"}`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
              <a
                href="#contact"
                className={`text-sm tracking-wide transition-all relative ${
                  activeSection === "contact"
                    ? isDarkSection
                      ? "text-white font-medium"
                      : "text-black font-medium"
                    : isDarkSection
                      ? "text-white/80 hover:text-white"
                      : "text-black/60 hover:text-black"
                }`}
              >
                {t.nav.contact}
                {activeSection === "contact" && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDarkSection ? "bg-white" : "bg-black"}`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            </div>

            {/* Language Toggle Button - Always visible */}
            <div className="flex items-center gap-4 relative">
              <button
                onClick={() =>
                  setLanguageMenuOpen(!languageMenuOpen)
                }
                className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all text-xs ${
                  isDarkSection
                    ? "border-white/30 text-white hover:bg-white hover:text-black"
                    : "border-black/20 text-black hover:bg-black hover:text-white"
                }`}
              >
                <Globe className="w-3 h-3" />
                <span className="tracking-wide">
                  {currentLanguage
                    ? `${currentLanguage.flag} ${currentLanguage.label}`
                    : "EN"}
                </span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Language Dropdown Menu */}
              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                      y: -10,
                    }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-black/10 overflow-hidden min-w-[180px] z-50"
                  >
                    <div className="py-2">
                      {languageOptions.map((opt, index) => (
                        <button
                          key={opt.code}
                          onClick={() =>
                            handleLanguageChange(
                              opt.code as any,
                            )
                          }
                          className={`w-full text-left px-4 py-3 text-sm transition-all hover:bg-black/5 flex items-center gap-3 ${
                            opt.code === language
                              ? "bg-black/10 text-black"
                              : "text-black/60"
                          }`}
                        >
                          <span className="text-lg">
                            {opt.flag}
                          </span>
                          <span className="tracking-wide">
                            {opt.label}
                          </span>
                          {opt.code === language && (
                            <span className="ml-auto text-xs">
                              ✓
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Menu Button */}
              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className={`lg:hidden p-2 ${isDarkSection ? "text-white" : "text-black"}`}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white/80 backdrop-blur-xl border-t max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base transition-colors ${
                  activeSection === "services"
                    ? "text-black font-medium"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {t.nav.services}
              </a>
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base transition-colors ${
                  activeSection === "work"
                    ? "text-black font-medium"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {t.nav.work}
              </a>
              <a
                href="#clients"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base transition-colors ${
                  activeSection === "clients"
                    ? "text-black font-medium"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {t.nav.clients}
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base transition-colors ${
                  activeSection === "about"
                    ? "text-black font-medium"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base transition-colors ${
                  activeSection === "contact"
                    ? "text-black font-medium"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Main Content - Each section is a snap point */}
      <main>
        <div id="hero" className="snap-start">
          <Hero language={language} />
        </div>
        <div id="services" className="snap-start">
          <Services language={language} />
        </div>
        <div id="work" className="snap-start">
          <CaseStudies
            language={language}
            onProjectClick={handleProjectClick}
          />
        </div>
        <div id="clients" className="snap-start">
          <Clients language={language} />
        </div>
        <div id="about" className="snap-start">
          <About language={language} />
        </div>
        <div id="contact" className="snap-start">
          <Contact language={language} />
        </div>
        <div className="snap-start">
          <Footer language={language} />
        </div>
      </main>
    </div>
  );
}