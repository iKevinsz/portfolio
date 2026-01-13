"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Code2,
  ChevronRight,
  X,
  GraduationCap,
  Monitor,
  Users,
  Eye,
  Image as ImageIcon,
} from "lucide-react";

// --- ÍCONES DE MARCAS  ---
const BrandIcons = {
  HTML: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.332 3.71-2.953.8-2.955-.8-.192-2.19H5.877l.4 4.542 5.673 1.573 5.717-1.583.742-8.312H8.531z"/>
    </svg>
  ),
  CSS: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.332 3.71-2.953.8-2.955-.8-.192-2.19H5.877l.4 4.542 5.673 1.573 5.717-1.583.742-8.312H8.531z"/>
    </svg>
  ),
  JS: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.958-.425 1.279-1.82 2.23-3.085 2.14-1.05-.075-1.785-.56-2.285-1.265l1.73-1.135c.205.375.45.61.765.65.655.085 1.015-.415 1.025-1.305.01-.865 0-1.725 0-2.585v-5.263z"/>
    </svg>
  ),
  TS: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM11.52 13.766c0-1.22.612-1.794 1.93-2.182 1.181-.365 1.383-.655 1.383-1.082 0-.616-.487-.9-1.472-.9-.985 0-1.46.33-1.636 1.123l-1.9-.536c.465-1.87 1.838-2.392 3.636-2.392 2.28 0 3.334.98 3.334 2.656 0 1.547-.84 2.115-2.203 2.507-1.103.32-1.298.63-1.298 1.086 0 .565.483.844 1.487.844.975 0 1.62-.358 1.87-1.099l1.83.606c-.524 1.77-1.874 2.302-3.7 2.302-2.158 0-3.195-1.023-3.195-2.933zM7.525 21H5.43v-8.473H2.816v-1.808h7.32v1.808H7.525V21z"/>
    </svg>
  ),
  React: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="12" cy="12" r="2" />
      <ellipse rx="10" ry="4.5" cx="12" cy="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Next: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.61 18.61A10 10 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.45-.31-2.83-.87-4.08zM12 4c1.65 0 3.19.5 4.49 1.36L8 16.32V7.5a.5.5 0 0 1 1 0v6.18l6.45-8.43A8 8 0 0 0 12 4zm-1.5 13.5l3.82-5.01V16a.5.5 0 0 1-1 0v-2.3l-2.82 3.8Z" />
    </svg>
  ),
  // Tailwind - Path Corrigido (Ondas)
  Tailwind: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 .913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8 -1.2 1.6-2.6 2.2-4.2 1.8 -.913-.228-1.565-.89-2.288-1.624 C16.337 6.182 14.976 4.8 12.001 4.8z M6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 .913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8 -1.2 1.6-2.6 2.2-4.2 1.8 -.913-.228-1.565-.89-2.288-1.624 C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  // Figma - Path Corrigido (Círculos e Gota)
  Figma: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M15 6a3 3 0 11-6 0 3 3 0 016 0z M9 6a3 3 0 11-6 0 3 3 0 016 0z M9 12a3 3 0 11-6 0 3 3 0 016 0z M9 18a3 3 0 110 6 3 3 0 010-6z"/>
    </svg>
  ),
  Postgre: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.2c5.413 0 9.8 4.387 9.8 9.8 0 5.413-4.387 9.8-9.8 9.8-5.413 0-9.8-4.387-9.8-9.8 0-5.413 4.387-9.8 9.8-9.8zm4.336 4.364c-.655-.178-1.53-.18-2.008-.103-1.07.172-1.688.752-1.928 1.503-.103.32-.142.66-.142 1.002 0 1.258.423 1.95 1.026 2.375.295.207.632.327 1.015.34.394.015.82-.102 1.25-.333v-1.15h-1.066v-.93h2.152v2.96c-.66.526-1.46.8-2.285.764-.78-.035-1.492-.378-1.986-1.003-.523-.663-.762-1.644-.66-2.693.12-1.222.658-2.23 1.523-2.822.863-.593 2.05-.724 3.033-.377l.076-1.533z"/>
    </svg>
  ),
  Vercel: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  ),
  MUI: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M0 2.475v10.39l3 1.733V7.61l9 5.198 9-5.199v6.988l3-1.733V2.475L12 7.674 0 2.475zm0 13.858v5.199l9 5.199v-5.199l-9-5.199zm12 0v5.199l9 5.199v-5.199l-9-5.199z"/>
    </svg>
  ),
  Git: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.652 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.33-.42-1.984L12.48 8.64c-.65.252-1.432.123-1.97-.416-.272-.271-.439-.623-.49-1.002L7.205 10.03v5.857c.605.152 1.107.613 1.326 1.182.08.209.119.428.113.646.035 1.055-.785 1.943-1.836 1.984C5.756 23.74 4.873 22.92 4.838 21.865c-.006-.219.033-.438.113-.646.219-.568.721-1.03 1.326-1.182V9.12l-5.37 5.37c-.603.604-.603 1.582 0 2.188l10.48 10.48c.604.604 1.582.604 2.188 0l10.48-10.48c.604-.604.604-1.582 0-2.188z"/>
    </svg>
  ),
};

// --- DADOS DA STACK (COM NOVOS ÍCONES E CORES) ---
const TECH_STACK = [
  { name: "HTML5", icon: <BrandIcons.HTML width={24} height={24} />, color: "text-orange-500", bg: "group-hover:bg-orange-500/10" },
  { name: "CSS3", icon: <BrandIcons.CSS width={24} height={24} />, color: "text-blue-500", bg: "group-hover:bg-blue-500/10" },
  { name: "JavaScript", icon: <BrandIcons.JS width={24} height={24} />, color: "text-yellow-400", bg: "group-hover:bg-yellow-400/10" },
  { name: "TypeScript", icon: <BrandIcons.TS width={24} height={24} />, color: "text-blue-400", bg: "group-hover:bg-blue-400/10" },
  { name: "React", icon: <BrandIcons.React width={24} height={24} />, color: "text-cyan-400", bg: "group-hover:bg-cyan-400/10" },
  { name: "Next.js", icon: <BrandIcons.Next width={24} height={24} />, color: "text-white", bg: "group-hover:bg-white/10" },
  { name: "Tailwind", icon: <BrandIcons.Tailwind width={24} height={24} />, color: "text-cyan-300", bg: "group-hover:bg-cyan-300/10" },
  { name: "Figma", icon: <BrandIcons.Figma width={24} height={24} />, color: "text-pink-500", bg: "group-hover:bg-pink-500/10" },
  { name: "PostgreSQL", icon: <BrandIcons.Postgre width={24} height={24} />, color: "text-blue-300", bg: "group-hover:bg-blue-300/10" },
  { name: "Vercel", icon: <BrandIcons.Vercel width={24} height={24} />, color: "text-white", bg: "group-hover:bg-white/10" },
  { name: "MUI", icon: <BrandIcons.MUI width={24} height={24} />, color: "text-blue-500", bg: "group-hover:bg-blue-500/10" },
  { name: "Git", icon: <BrandIcons.Git width={24} height={24} />, color: "text-orange-400", bg: "group-hover:bg-orange-400/10" },
];

// --- TEXTOS ---
const translations = {
  pt: {
    nav: { sobre: "Sobre", projetos: "Projetos", stack: "Stack", contato: "Contato" },
    hero: {
      status: "Disponível para projetos",
      rolePrefix: "Eu sou",
      role: "Desenvolvedor",
      role2: "Front End",
      subtitle: "& Especialista em React",
      githubBtn: "Ver meu GitHub",
      desc: (
        <>
          Focado em criar <strong className="text-slate-100">Interfaces de Alta Fidelidade</strong> e experiências fluidas. 
          Especialista em <strong className="text-slate-100">Next.js</strong>, 
          <strong className="text-slate-100"> Tailwind CSS</strong> e 
          <strong className="text-slate-100"> UX/UI Design</strong>.
        </>
      ),
    },
    stack: "Tecnologias que domino",
    about: {
      title: "Sobre mim",
      experience: { title: "Experiência", desc: "Desenvolvedor front-end com experiência em criação de interfaces modernas e responsivas. Especializado em React e seu ecossistema, sempre buscando as melhores práticas e novas tecnologias." },
      hardSkills: { title: "Habilidades Técnicas", list: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Figma", "PostgreSQL", "Vercel", "MUI", "Git"] },
      softSkills: { title: "Habilidades Interpessoais", desc: "Comunicação eficaz, trabalho em equipe, resolução de problemas, adaptabilidade e aprendizado contínuo." },
      education: { title: "Formação Acadêmica", items: [{ year: "2021 - 2024", course: "Análise e Desenvolvimento de Sistemas", school: "FATEC Guaratinguetá" }] }
    },
    projects: {
      title: "Interfaces em Destaque",
      subtitle: "Uma seleção de projetos onde foquei na experiência do usuário, interatividade e design responsivo.",
      p1: { 
        title: "Luniére Balões & Decoração", 
        desc: "Portfólio elegante e minimalista com foco visual. Carousel automático, animações suaves e design clean para destacar as fotos do cliente." 
      },
      p2: { 
        title: "Dashboard Financeiro & AI", 
        desc: "Interface de dados rica e interativa. Gráficos animados, tabelas dinâmicas e uma integração visual limpa com o Consultor IA (Gemini)." 
      },
      p3: { 
        title: "Gestão Web (ERP)", 
        desc: "Foco total em UX Mobile. Criação de fluxos de cadastro intuitivos e relatórios visuais para facilitar a vida do lojista no celular." 
      },
    },
    footer: {
      title: "Vamos construir algo incrível?",
      desc: "Estou disponível para criar interfaces modernas, landing pages ou refatorar seu front-end.",
      copy: "Desenvolvido com Next.js & Tailwind.",
    },
  },
  en: {
    nav: { sobre: "About", projetos: "Projects", stack: "Stack", contato: "Contact" },
    hero: {
      status: "Available for projects",
      role: "Front End",
      role2: "Developer",
      subtitle: "& React Specialist",
      githubBtn: "Check out my GitHub",
      desc: (
        <>
          Focused on building <strong className="text-slate-100">High Fidelity Interfaces</strong> and fluid experiences. 
          Specialist in <strong className="text-slate-100">Next.js</strong>, 
          <strong className="text-slate-100"> Tailwind CSS</strong> and 
          <strong className="text-slate-100"> UX/UI Design</strong>.
        </>
      ),
      cta: "Let's talk",
    },
    stack: "Technologies I master",
    about: {
      title: "About Me",
      experience: { title: "Experience", desc: "Front-end developer experienced in creating modern and responsive interfaces. Specialized in React and its ecosystem, always seeking best practices and new technologies." },
      hardSkills: { title: "Technical Skills (Hard Skills)", list: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "MUI", "Git"] },
      softSkills: { title: "Interpersonal Skills (Soft Skills)", desc: "Effective communication, teamwork, problem-solving, adaptability, and continuous learning." },
      education: { title: "Academic Education", items: [{ year: "2021 - 2024", course: "Systems Analysis and Development", school: "FATEC Guaratinguetá" }] }
    },
    projects: {
      title: "Featured Interfaces",
      subtitle: "A selection of projects where I focused on user experience, interactivity, and responsive design.",
      p1: { 
        title: "Luniére Balões & Decoração", 
        desc: "Elegant and minimalist portfolio focused on visuals. Automatic carousel, smooth animations, and clean design to highlight client photos." 
      },
      p2: { 
        title: "Finance Dashboard & AI", 
        desc: "Rich and interactive data interface. Animated charts, dynamic tables, and a clean visual integration with the AI Consultant (Gemini)." 
      },
      p3: { 
        title: "Web Management (ERP)", 
        desc: "Total focus on Mobile UX. Creation of intuitive registration flows and visual reports to make the merchant's life easier on mobile." 
      },
    },
    footer: {
      title: "Let's build something amazing?",
      desc: "I'm available to create modern interfaces, landing pages, or refactor your front-end.",
      copy: "Built with Next.js & Tailwind.",
    },
  },
};

type Language = "pt" | "en";

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("pt");
  const [activeDemo, setActiveDemo] = useState<React.ReactNode | null>(null);
  const t = translations[lang];
  const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  // --- MOUSE FOLLOWER EFFECT ---
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: any) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  // --- ESC KEY TO CLOSE MODAL ---
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDemo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative"
    >
      {/* --- GLOBAL STYLES --- */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes matrix-fall {
          0% { top: -20%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 120%; opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .code-rain {
          position: fixed;
          font-family: "Courier New", monospace;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          animation: matrix-fall linear infinite;
          writing-mode: vertical-rl;
          text-orientation: upright;
          white-space: nowrap;
          z-index: 0; 
        }
        .bg-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- MOUSE GLOW BACKGROUND --- */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300 lg:absolute"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-grid z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-0" />
        
        {/* --- MATRIX RAIN --- */}
        <div className="absolute inset-0 z-0 opacity-40"> 
          {Array.from({ length: 48 }).map((_, i) => { 
            const randomLeft = Math.random() * 100;
            const randomDuration = Math.random() * 5 + 3;
            const isPurple = Math.random() > 0.5;
            const color = isPurple ? "#a855f7" : "#3b82f6";
            return (
              <div
                key={i}
                className="code-rain"
                style={{
                  left: `${randomLeft}%`,
                  animationDuration: `${randomDuration}s`,
                  fontSize: `${Math.random() * 10 + 10}px`,
                  color: color,
                  opacity: Math.random() * 0.5 + 0.3,
                  filter: `blur(${Math.random() * 2}px)`,
                }}
              >
                 {Math.random() > 0.5 ? "<div> const UI = () => {} </div>" : "function render() { return <Component /> }"}
              </div>
            );
          })}
        </div>
      </div>

      {/* --- MODAL DE IMAGEM (LIGHTBOX MELHORADO) --- */}
      <AnimatePresence>
        {activeDemo && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            // Backdrop mais escuro e com blur
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl cursor-zoom-out"
            onClick={() => setActiveDemo(null)}
          >
            {/* Botão de Fechar Flutuante */}
            <button 
              onClick={() => setActiveDemo(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            {/* Container da Imagem (Sem cortes) */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Clique na imagem não fecha
            >
              {activeDemo}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NAVBAR --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* LOGO COM SCROLL TO TOP */}
          <Link 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_-3px_rgba(168,85,247,0.4)] transition-all duration-300">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
               <img src="/icon.png" alt="K" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">Kevin Fiorelo</span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
              {/* @ts-ignore */}
              <NavLink href="#stack">{t.nav.stack}</NavLink>
              {/* @ts-ignore */}
              <NavLink href="#sobre">{t.nav.sobre}</NavLink>
              {/* @ts-ignore */}
              <NavLink href="#projetos">{t.nav.projetos}</NavLink>
              {/* @ts-ignore */}
              <NavLink href="#contato">{t.nav.contato}</NavLink>
            </div>
            <button onClick={toggleLang} className="relative w-20 h-9 bg-white/5 rounded-full border border-white/10 flex items-center p-1 hover:border-white/30 hover:bg-white/10 active:scale-95 shadow-inner transition-colors">
              <div className={`absolute w-8 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center text-[10px] font-black text-white ${lang === "en" ? "translate-x-10" : "translate-x-0"}`}></div>
              <div className="w-full flex justify-between px-2.5 text-[10px] font-bold select-none z-10">
                <span className={`transition-colors ${lang === 'pt' ? 'text-white' : 'text-slate-500'}`}>PT</span>
                <span className={`transition-colors ${lang === 'en' ? 'text-white' : 'text-slate-500'}`}>EN</span>
              </div>
            </button>
            <Link href="#contato" className="md:hidden p-2 text-white cursor-pointer"><Mail size={20} /></Link>
          </div>
        </div>
      </motion.nav>

      {/* --- HERO --- */}
      <section className="relative z-10 pt-40 pb-20 px-6 min-h-[90vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 hover:bg-blue-500/20 cursor-default backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
            {t.hero.status}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
          >
            {t.hero.role}{" "} 
            <br className="md:hidden" /> 
            
            <span className="text-white">
               <TypewriterText text={t.hero.role2} delay={500} />
            </span>
            
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
              {t.hero.subtitle}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center pt-4"
          >
            <Link href="https://github.com/iKevinsz" target="_blank" className="px-10 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-white/10 group">
              <Github size={20} /> <span>{t.hero.githubBtn}</span> 
              <motion.div 
                animate={{ x: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronRight size={18} strokeWidth={3} className="text-slate-400 group-hover:text-slate-600" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section id="stack" className="py-16 border-y border-white/5 bg-white/[0.02] relative z-10 backdrop-blur-sm overflow-hidden">
        <div className="max-w-full mx-auto">
          <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">{t.stack}</p>
          <div className="relative flex w-full">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>
            <div className="flex gap-8 animate-scroll w-max hover:[animation-play-state:paused]">
              {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-3 min-w-[120px] group cursor-default">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-4 bg-white/5 rounded-2xl border border-white/5 ${tech.bg} transition-colors duration-300`}
                  >
                    <div className={`${tech.color}`}>{tech.icon}</div>
                  </motion.div>
                  <span className="text-xs font-bold text-slate-500 group-hover:text-white transition-colors uppercase tracking-wider">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SOBRE (SCROLL REVEAL) --- */}
      <RevealSection id="sobre" className="py-32 px-6 bg-white/[0.02] relative z-10 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-16">
            <SpotlightText>{t.about.title}</SpotlightText>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 flex flex-col items-center">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="relative group w-64 h-64 md:w-full md:h-auto aspect-square mb-6"
               >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform opacity-50 blur-lg"></div>
                 <img src="https://github.com/iKevinsz.png" alt="Profile" className="rounded-3xl shadow-2xl w-full h-full object-cover border-2 border-white/10 relative z-10 grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-500" />
               </motion.div>
               <div className="flex gap-4">
                  <SocialBtnSimple href="https://github.com/iKevinsz" icon={<Github size={20} />} />
                  <SocialBtnSimple href="https://linkedin.com/in/kevin-rodrigo-000632209/" icon={<Linkedin size={20} />} />
                  <SocialBtnSimple href="https://instagram.com/kev1n_x/" icon={<Instagram size={20} />} />
               </div>
            </div>
            <div className="w-full md:w-2/3 space-y-10">
              <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                <h3 className="text-blue-400 font-bold flex items-center gap-2 mb-3"><Code2 size={20} /> {t.about.experience.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{t.about.experience.desc}</p>
              </motion.div>
              
              <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <h3 className="text-blue-400 font-bold flex items-center gap-2 mb-4"><Monitor size={20} /> {t.about.hardSkills.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.about.hardSkills.list.map((skill: string, i: number) => (
                    <motion.span 
                      key={skill} 
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                 <h3 className="text-blue-400 font-bold flex items-center gap-2 mb-3"><Users size={20} /> {t.about.softSkills.title}</h3>
                 <p className="text-slate-400 leading-relaxed">{t.about.softSkills.desc}</p>
              </motion.div>

              <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                <h3 className="text-blue-400 font-bold flex items-center gap-2 mb-6"><GraduationCap size={20} /> {t.about.education.title}</h3>
                <div className="space-y-6 border-l border-white/10 pl-6 ml-2">
                  {t.about.education.items.map((item: any, idx: number) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-4 border-[#050505]"></div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">{item.year}</span>
                      <h4 className="text-white font-bold text-lg">{item.course}</h4>
                      <p className="text-slate-400 text-sm">{item.school}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* --- PROJETOS (SPOTLIGHT CARDS COM BORDA CORRIGIDA) --- */}
      <RevealSection id="projetos" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start mb-16">
              <SpotlightText>{t.projects.title}</SpotlightText>
              <p className="text-slate-400 max-w-lg mt-4">{t.projects.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotlightCard 
              title={t.projects.p1.title} 
              desc={t.projects.p1.desc} 
              tags={["Next.js", "Tailwind", "Design"]} 
              color="purple" 
              hasDemo={true} 
              onDemoClick={() => window.open("https://lunieredecor.vercel.app/", "_blank")} 
            />
            <SpotlightCard 
              title={t.projects.p2.title} 
              desc={t.projects.p2.desc} 
              tags={["Next.js", "Recharts", "UI Design"]} 
              color="blue" 
              hasDemo={true} 
              onDemoClick={() => setActiveDemo(<FinanceiroDemo />)} 
            />
            <SpotlightCard 
              title={t.projects.p3.title} 
              desc={t.projects.p3.desc} 
              tags={["Mobile First", "React", "UX/UI"]} 
              color="emerald" 
              hasDemo={true} 
              onDemoClick={() => setActiveDemo(<GestaoDemo />)} 
            />
          </div>
        </div>
      </RevealSection>

      {/* --- FOOTER --- */}
      <footer id="contato" className="pt-20 pb-24 bg-[#050505] relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <SpotlightText>{t.footer.title}</SpotlightText>
          <p className="text-slate-400 mb-10 mt-6">{t.footer.desc}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-20">
            <SpotlightButton href="https://github.com/iKevinsz" icon={<Github size={20} />} label="GitHub" />
            <SpotlightButton href="https://linkedin.com/in/kevin-rodrigo-000632209/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SpotlightButton href="https://instagram.com/kev1n_x/" icon={<Instagram size={20} />} label="Instagram" />
            <SpotlightButton href="mailto:fioreelokevin@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
          <div className="pt-8 border-t border-white/10 text-slate-600 text-sm">© {new Date().getFullYear()} Kevin Rodrigo. {t.footer.copy}</div>
        </div>
      </footer>
    </main>
  );
}

// --- TYPEWRITER COMPONENT ---
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [charIndex, setCharIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartTyping(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;
    setCharIndex(0);
    const intervalId = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= text.length) {
          clearInterval(intervalId);
          return prev;
        }
        return prev + 1;
      });
    }, 100); 
    return () => clearInterval(intervalId);
  }, [text, startTyping]);

  return (
    <span className="inline-block min-w-[1ch]"> 
      {text.slice(0, charIndex)}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[0.8em] bg-blue-500 ml-1 align-middle"
      />
    </span>
  );
}

// --- REVEAL SECTION COMPONENT ---
function RevealSection({ children, className, id }: any) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// --- SPOTLIGHT CARD V3 (CORRIGIDO: COM ALTURA E BORDA NEON) ---
function SpotlightCard({ title, desc, tags, color, onDemoClick, hasDemo }: any) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const colors: any = {
    blue: "#3b82f6",
    purple: "#a855f7",
    emerald: "#10b981",
  };
  const themeColor = colors[color];

  return (
    // relative e h-full para manter o tamanho no grid
    <div 
      className="group relative h-full rounded-3xl bg-[#0F0F0F] overflow-hidden flex flex-col"
      onMouseMove={handleMouseMove}
    >
      
      {/* Camada da Borda (Absoluta atrás do conteúdo) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute inset-[-100%] animate-spin-slow"
          style={{
            background: `conic-gradient(from 0deg, transparent 0 340deg, ${themeColor} 360deg)`
          }}
        />
      </div>

      {/* Conteúdo (Relative + Margem de 1px para revelar a borda + flex-1 para preencher altura) */}
      <div className="relative flex-1 m-[1px] bg-[#0F0F0F] rounded-[23px] p-8 flex flex-col border border-white/10 group-hover:border-transparent transition-colors z-10">
        
        {/* Spotlight Interno */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[23px] opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                ${themeColor}15,
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-20 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className={`p-3 rounded-xl bg-white/5 text-white border border-white/5 group-hover:scale-110 transition-transform shadow-lg ${color === 'blue' ? 'group-hover:shadow-blue-500/20' : color === 'purple' ? 'group-hover:shadow-purple-500/20' : 'group-hover:shadow-emerald-500/20'}`}>
              <Code2 size={24} />
            </div>
            {hasDemo && (
              <button 
                onClick={onDemoClick} 
                className="relative flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <Eye size={18} />
              </button>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-slate-300 transition-colors">
            {desc}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag: string) => (
              <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/5 cursor-default group-hover:border-white/10 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SPOTLIGHT TEXT & BUTTON ---
function SpotlightText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => setOpacity(0);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block cursor-default ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 tracking-tighter relative z-10 opacity-50 transition-opacity duration-500 py-2 leading-tight">{children}</h2>
      <h2 
        className="absolute top-0 left-0 w-full text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 tracking-tighter z-20 pointer-events-none transition-opacity duration-200 py-2 leading-tight"
        style={{ opacity: opacity, maskImage: `radial-gradient(150px circle at ${position.x}px ${position.y}px, black, transparent)`, WebkitMaskImage: `radial-gradient(150px circle at ${position.x}px ${position.y}px, black, transparent)` }}
      >
        {children}
      </h2>
    </div>
  );
}

function SpotlightButton({ href, icon, label }: any) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => setOpacity(0);

  return (
    <a
      href={href}
      target="_blank"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm cursor-pointer group overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-0 transition-colors group-hover:bg-white/10"></div>
      <div
        className="absolute inset-0 z-10 transition-opacity duration-200 rounded-full"
        style={{
          opacity: opacity,
          background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.4), transparent)`,
        }}
      ></div>
      <span className="relative z-20 flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors">
        {icon} {label}
      </span>
    </a>
  );
}

// --- UTILS ---
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-white hover:scale-105 transition-all cursor-pointer">
      {children}
    </Link>
  );
}

function SocialBtnSimple({ href, icon }: any) {
  return (
    <motion.a 
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      href={href} 
      target="_blank" 
      className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer"
    >
      {icon}
    </motion.a>
  );
}

const ProjectImageViewer = ({ src, alt }: { src: string; alt: string }) => (
  // Visualizador Simples dentro do Lightbox (A imagem expande sozinha lá)
  <img src={src} alt={alt} className="w-full h-full object-contain" />
);

function FinanceiroDemo() { return (<ProjectImageViewer src="/dash.png" alt="Preview Dashboard Financeiro" />); }
function GestaoDemo() { return (<ProjectImageViewer src="/ERP.png" alt="Preview Gestão ERP" />); }