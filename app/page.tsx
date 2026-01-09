"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Code2,
  Database,
  Bot,
  LayoutTemplate,
  ChevronRight,
  Terminal,
  X,
  Play,
  GraduationCap,
  Briefcase,
  Palette,
  Monitor,
  Users,
  Eye,
  Image as ImageIcon,
  FileCode2,
  Triangle,
  GitBranch,
  Brush,
  Figma,
} from "lucide-react";

// --- DADOS DA STACK ---
const TECH_STACK = [
  { name: "HTML5", icon: <FileCode2 />, color: "text-orange-500", bg: "group-hover:bg-orange-500/10" },
  { name: "CSS3", icon: <Palette />, color: "text-blue-500", bg: "group-hover:bg-blue-500/10" },
  { name: "JavaScript", icon: <Code2 />, color: "text-yellow-400", bg: "group-hover:bg-yellow-400/10" },
  { name: "TypeScript", icon: <Terminal />, color: "text-blue-400", bg: "group-hover:bg-blue-400/10" },
  { name: "React", icon: <Code2 />, color: "text-cyan-400", bg: "group-hover:bg-cyan-400/10" },
  { name: "Next.js", icon: <Code2 />, color: "text-white", bg: "group-hover:bg-white/10" },
  { name: "Python", icon: <FileCode2 />, color: "text-yellow-300", bg: "group-hover:bg-yellow-300/10" },
  { name: "Tailwind", icon: <LayoutTemplate />, color: "text-cyan-300", bg: "group-hover:bg-cyan-300/10" },
  { name: "Figma", icon: <Figma />, color: "text-pink-500", bg: "group-hover:bg-pink-500/10" },
  { name: "PostgreSQL", icon: <Database />, color: "text-blue-300", bg: "group-hover:bg-blue-300/10" },
  { name: "Vercel", icon: <Triangle />, color: "text-white", bg: "group-hover:bg-white/10" },
  { name: "MUI", icon: <Brush />, color: "text-blue-500", bg: "group-hover:bg-blue-500/10" },
  { name: "Git", icon: <GitBranch />, color: "text-orange-400", bg: "group-hover:bg-orange-400/10" },
];

// --- TEXTOS ---
const translations = {
  pt: {
    nav: { sobre: "Sobre", projetos: "Projetos", stack: "Stack", contato: "Contato" },
    hero: {
      status: "Disponível para projetos",
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
      cta: "Vamos conversar",
    },
    stack: "Tecnologias que domino",
    about: {
      title: "Sobre mim",
      experience: { title: "Experiência", desc: "Desenvolvedor front-end com experiência em criação de interfaces modernas e responsivas. Especializado em React e seu ecossistema, sempre buscando as melhores práticas e novas tecnologias." },
      hardSkills: { title: "Habilidades Técnicas", list: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Python", "Tailwind", "Figma", "PostgreSQL", "Vercel", "MUI", "Git"] },
      softSkills: { title: "Habilidades Interpessoais", desc: "Comunicação eficaz, trabalho em equipe, resolução de problemas, adaptabilidade e aprendizado contínuo." },
      education: { title: "Formação Acadêmica", items: [{ year: "2021 - 2024", course: "Análise e Desenvolvimento de Sistemas", school: "FATEC Guaratinguetá" }] }
    },
    projects: {
      title: "Interfaces em Destaque",
      subtitle: "Uma seleção de projetos onde foquei na experiência do usuário, interatividade e design responsivo.",
      // REORDENADO: Luniére agora é o destaque principal
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
      hardSkills: { title: "Technical Skills (Hard Skills)", list: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Python", "Tailwind", "MUI", "Git"] },
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

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* --- GLOBAL STYLES --- */}
      <style jsx global>{`
        @keyframes matrix-fall {
          0% { top: -20%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 120%; opacity: 0; }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-grid z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-0" />
        {/* MATRIX RAIN */}
        <div className="absolute inset-0 z-0 opacity-40">
          {Array.from({ length: 25 }).map((_, i) => {
            const randomLeft = Math.random() * 100;
            const randomDuration = Math.random() * 10 + 8;
            const isPurple = Math.random() > 0.7;
            return (
              <div
                key={i}
                className="code-rain"
                style={{
                  left: `${randomLeft}%`,
                  animationDuration: `${randomDuration}s`,
                  fontSize: `${Math.random() * 8 + 10}px`,
                  color: isPurple ? "#a855f7" : "#0ea5e9",
                  textShadow: isPurple ? "0 0 8px rgba(168, 85, 247, 0.4)" : "0 0 8px rgba(14, 165, 233, 0.4)",
                  opacity: Math.random() * 0.5 + 0.1,
                }}
              >
                {"<div /> const UI = () => {} style={{}}"}
              </div>
            );
          })}
        </div>
      </div>

      {/* --- MODAL DE IMAGEM --- */}
      {activeDemo && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-[#0F0F0F] w-full max-w-6xl h-[85vh] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-300 relative">
            <div className="h-14 border-b border-white/10 flex justify-between items-center px-6 bg-[#151515] z-20">
              <div className="flex gap-2 items-center text-slate-400 text-xs font-mono">
                 <ImageIcon size={14} /> <span>PROJECT PREVIEW</span>
              </div>
              <button onClick={() => setActiveDemo(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white cursor-pointer"><X size={18} /></button>
            </div>
            <div className="flex-1 overflow-hidden relative bg-[#050505] flex items-center justify-center p-4">{activeDemo}</div>
          </div>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-default">
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_-3px_rgba(168,85,247,0.4)] transition-all duration-300">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
               <img src="/icon.png" alt="Logo K" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Kevin Fiorelo</span>
          </div>
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
            <button onClick={toggleLang} className="relative w-20 h-9 bg-white/5 rounded-full border border-white/10 flex items-center p-1 hover:border-white/30 hover:bg-white/10 active:scale-95 shadow-inner">
              <div className={`absolute w-8 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center text-[10px] font-black text-white ${lang === "en" ? "translate-x-10" : "translate-x-0"}`}></div>
              <div className="w-full flex justify-between px-2.5 text-[10px] font-bold select-none z-10">
                <span className={`transition-colors ${lang === 'pt' ? 'text-white' : 'text-slate-500'}`}>PT</span>
                <span className={`transition-colors ${lang === 'en' ? 'text-white' : 'text-slate-500'}`}>EN</span>
              </div>
            </button>
            <Link href="#contato" className="md:hidden p-2 text-white cursor-pointer"><Mail size={20} /></Link>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 hover:bg-blue-500/20 cursor-default backdrop-blur-sm">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
            {t.hero.status}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            {t.hero.role} <br className="md:hidden" /> {t.hero.role2} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{t.hero.subtitle}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">{t.hero.desc}</p>
          <div className="flex justify-center pt-4">
            <Link href="https://github.com/iKevinsz" target="_blank" className="px-10 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-white/10">
              <Github size={20} /> <span>{t.hero.githubBtn}</span> <ChevronRight size={18} strokeWidth={3} className="text-slate-400" />
            </Link>
          </div>
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
                  <div className={`p-4 bg-white/5 rounded-2xl border border-white/5 ${tech.bg} transition-colors duration-300`}>
                    <div className={`${tech.color} transform group-hover:scale-110 transition-transform duration-300`}>{tech.icon}</div>
                  </div>
                  <span className="text-xs font-bold text-slate-500 group-hover:text-white transition-colors uppercase tracking-wider">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SOBRE (SPOTLIGHT INTERATIVO) --- */}
      <section id="sobre" className="py-32 px-6 bg-white/[0.02] relative z-10 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-16">
            <SpotlightText>{t.about.title}</SpotlightText>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 flex flex-col items-center">
               <div className="relative group w-64 h-64 md:w-full md:h-auto aspect-square mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform opacity-50 blur-lg"></div>
                 <img src="https://github.com/iKevinsz.png" alt="Kevin Rodrigo Profile" className="rounded-3xl shadow-2xl w-full h-full object-cover border-2 border-white/10 relative z-10 grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-500" />
               </div>
               <div className="flex gap-4">
                  <SocialBtnSimple href="https://github.com/iKevinsz" icon={<Github size={20} />} />
                  <SocialBtnSimple href="https://linkedin.com/in/kevin-rodrigo-000632209/" icon={<Linkedin size={20} />} />
                  <SocialBtnSimple href="https://instagram.com/kev1n_x/" icon={<Instagram size={20} />} />
               </div>
            </div>
            <div className="w-full md:w-2/3 space-y-10">
              <div><h3 className="text-blue-400 font-bold flex items-center gap-2 mb-3"><Code2 size={20} /> {t.about.experience.title}</h3><p className="text-slate-300 leading-relaxed text-lg">{t.about.experience.desc}</p></div>
              <div>
                <h3 className="text-blue-400 font-bold flex items-center gap-2 mb-4"><Monitor size={20} /> {t.about.hardSkills.title}</h3>
                <div className="flex flex-wrap gap-2">{t.about.hardSkills.list.map((skill: string) => (<span key={skill} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium hover:bg-blue-500/20 cursor-default">{skill}</span>))}</div>
              </div>
              <div><h3 className="text-blue-400 font-bold flex items-center gap-2 mb-3"><Users size={20} /> {t.about.softSkills.title}</h3><p className="text-slate-400 leading-relaxed">{t.about.softSkills.desc}</p></div>
              <div>
                <h3 className="text-blue-400 font-bold flex items-center gap-2 mb-6"><GraduationCap size={20} /> {t.about.education.title}</h3>
                <div className="space-y-6 border-l border-white/10 pl-6 ml-2">{t.about.education.items.map((item: any, idx: number) => (<div key={idx} className="relative"><div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-4 border-[#050505]"></div><span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">{item.year}</span><h4 className="text-white font-bold text-lg">{item.course}</h4><p className="text-slate-400 text-sm">{item.school}</p></div>))}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJETOS (SPOTLIGHT INTERATIVO) --- */}
      <section id="projetos" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start mb-16">
             <SpotlightText>{t.projects.title}</SpotlightText>
             <p className="text-slate-400 max-w-lg mt-4">{t.projects.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* LUNIERE - PRIMEIRO CARD, LINK EXTERNO */}
            <ProjectCard 
              title={t.projects.p1.title} 
              desc={t.projects.p1.desc} 
              tags={["Next.js", "Tailwind", "Design"]} 
              color="purple" 
              hasDemo={true} 
              onDemoClick={() => window.open("https://lunieredecor.vercel.app/", "_blank")} 
            />
            {/* FINANCEIRO - SEGUNDO CARD, MODAL */}
            <ProjectCard 
              title={t.projects.p2.title} 
              desc={t.projects.p2.desc} 
              tags={["Next.js", "Recharts", "UI Design"]} 
              color="blue" 
              hasDemo={true} 
              onDemoClick={() => setActiveDemo(<FinanceiroDemo />)} 
            />
            {/* GESTÃO - TERCEIRO CARD, MODAL */}
            <ProjectCard 
              title={t.projects.p3.title} 
              desc={t.projects.p3.desc} 
              tags={["Mobile First", "React", "UX/UI"]} 
              color="emerald" 
              hasDemo={true} 
              onDemoClick={() => setActiveDemo(<GestaoDemo />)} 
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER (CORRIGIDO: Espaço e Corte) --- */}
      <footer id="contato" className="pt-20 pb-24 bg-[#050505] relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <SpotlightText>{t.footer.title}</SpotlightText>
          <p className="text-slate-400 mb-10 mt-6">{t.footer.desc}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-20">
            <SpotlightButton href="https://github.com/iKevinsz" icon={<Github size={20} />} label="GitHub" />
            <SocialBtn href="https://linkedin.com/in/kevin-rodrigo-000632209/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialBtn href="https://instagram.com/kev1n_x/" icon={<Instagram size={20} />} label="Instagram" />
            <SocialBtn href="mailto:fioreelokevin@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
          <div className="pt-8 border-t border-white/10 text-slate-600 text-sm">© {new Date().getFullYear()} Kevin Rodrigo. {t.footer.copy}</div>
        </div>
      </footer>
    </main>
  );
}

// --- SPOTLIGHT TEXT ---
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
      <div className="absolute top-0 left-0 -inset-10 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-2xl rounded-full opacity-0 transition-opacity duration-500 -z-10" style={{ opacity: opacity * 0.6, transform: `translate(${position.x / 10}px, ${position.y / 10}px)` }} />
    </div>
  );
}

// --- SPOTLIGHT BUTTON ---
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

// --- RESTO DOS SUBCOMPONENTES ---

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-white hover:scale-105 transition-all cursor-pointer">
      {children}
    </Link>
  );
}

function ProjectCard({ title, desc, tags, color, onDemoClick, hasDemo }: any) {
  const colors: any = {
    blue: "hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
    purple: "hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
    emerald: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
  };

  return (
    <div className={`bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 transition-all duration-500 group flex flex-col h-full ${colors[color]} cursor-default`}>
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-xl bg-white/5 text-white border border-white/5 group-hover:scale-110 transition-transform"><Code2 size={24} /></div>
        {hasDemo && (<button onClick={onDemoClick} className="relative group/btn flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 cursor-pointer" aria-label="Ver Imagem do Projeto" title="Ver preview do projeto"><Eye size={18} /></button>)}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{desc}</p>
      <div className="flex flex-wrap gap-2 mt-auto">{tags.map((tag: string) => (<span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/5 cursor-default">{tag}</span>))}</div>
    </div>
  );
}

function SocialBtn({ href, icon, label }: any) {
  return (
    <a href={href} target="_blank" className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 hover:scale-105 transition-all font-medium text-sm cursor-pointer" aria-label={label}>{icon} {label}</a>
  );
}

function SocialBtnSimple({ href, icon }: any) {
  return (
    <a href={href} target="_blank" className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer">{icon}</a>
  );
}

const ProjectImageViewer = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <img src={src} alt={alt} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10" />
  </div>
);

function FinanceiroDemo() { return (<ProjectImageViewer src="/dash.png" alt="Preview Dashboard Financeiro" />); }
function GestaoDemo() { return (<ProjectImageViewer src="/ERP.png" alt="Preview Gestão ERP" />); }