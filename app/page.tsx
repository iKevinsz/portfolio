"use client";

import { useState } from "react";
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
  Gamepad2,
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
  X,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  CalendarClock,
  Search,
  Check,
  ThumbsUp,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  LayoutDashboard,
  ShoppingBag,
  UtensilsCrossed,
  FileText,
  Settings,
  Filter,
  List,
  Grid,
  Pencil,
  Trash2,
  Plus,
  Play,
  GraduationCap,
  Briefcase, // <--- NOVOS ÍCONES IMPORTADOS
} from "lucide-react";

// --- TEXTOS E TRADUÇÕES ---
const translations = {
  pt: {
    nav: {
      projetos: "Projetos",
      stack: "Stack",
      sobre: "Sobre",
      contato: "Contato",
    },
    hero: {
      status: "Disponível para projetos",
      role: "Desenvolvedor",
      role2: "Full Stack",
      subtitle: "& Desenvolvedor de IA",
      desc: (
        <>
          Eu construo aplicações web modernas e escaláveis. Especialista em
          <strong className="text-slate-100"> Next.js</strong>,
          <strong className="text-slate-100"> Integrações com IA</strong> e
          otimização de{" "}
          <strong className="text-slate-100">Sistemas de Gestão</strong>.
        </>
      ),
      cta: "Vamos conversar",
    },
    stack: "Tecnologias que domino",
    projects: {
      title: "Projetos em Destaque",
      subtitle:
        "Uma seleção de soluções que desenvolvi recentemente, focando em performance e inteligência artificial.",
      p1: {
        title: "Dashboard Financeiro & AI",
        desc: "Sistema financeiro completo com um 'Consultor IA' (Gemini) integrado que analisa o fluxo de caixa do usuário e sugere economias em tempo real.",
      },
      p2: {
        title: "Gestão (ERP)",
        desc: "Modernização de interfaces de PDV. Criação de fluxos de cadastro, relatórios fiscais e design responsivo focado na experiência mobile do lojista.",
      },
      p3: {
        title: "Sistema de Feedback",
        desc: "Plataforma onde usuários enviam sugestões e votam em melhorias. Utiliza Server Actions para máxima velocidade e segurança nas requisições.",
      },
    },
    about: {
      title: "Quem é o Kevin?",
      desc: "Desenvolvedor focado em resultados reais. Com base acadêmica sólida e vivência de mercado, acredito que código bom é aquele que resolve problemas e escala com eficiência. Quando não estou entregando features, estou recarregando a bateria nos jogos.",
      h1: {
        title: "Formado na FATEC",
        desc: "Base sólida em Análise e Desenvolvimento de Sistemas. Foco em engenharia de software e boas práticas.",
      },
      h2: {
        title: "Software House",
        desc: "Atualmente trabalho em uma Software House, que fornece automacão comercial para mais de 15mil clientes.",
      },
      h3: {
        title: "Gamer & Estrategista",
        desc: "Nas horas vagas, o foco continua. Analiso metas, otimizo estratégias e busco o high elo.",
      },
    },
    footer: {
      title: "Vamos construir algo incrível?",
      desc: "Estou disponível para novos projetos, freelas ou apenas para trocar uma ideia sobre tecnologia.",
      copy: "Desenvolvido com Next.js & Tailwind.",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      stack: "Stack",
      about: "About",
      contact: "Contact",
    },
    hero: {
      status: "Available for projects",
      role: "Full Stack",
      role2: "Developer",
      subtitle: "& AI Enthusiast",
      desc: (
        <>
          I build modern and scalable web applications. Specialist in
          <strong className="text-slate-100"> Next.js</strong>,
          <strong className="text-slate-100"> AI Integrations</strong> and
          optimizing{" "}
          <strong className="text-slate-100">Management Systems</strong>.
        </>
      ),
      cta: "Let's talk",
    },
    stack: "Technologies I master",
    projects: {
      title: "Featured Projects",
      subtitle:
        "A selection of solutions I recently developed, focusing on performance and artificial intelligence.",
      p1: {
        title: "Finance Dashboard & AI",
        desc: "Complete financial system with an integrated 'AI Consultant' (Gemini) that analyzes user cash flow and suggests savings in real-time.",
      },
      p2: {
        title: "Web Management (ERP)",
        desc: "Modernization of POS interfaces. Creation of registration flows, fiscal reports, and responsive design focused on the merchant's mobile experience.",
      },
      p3: {
        title: "Feedback System",
        desc: "Platform where users submit suggestions and vote on improvements. Uses Server Actions for maximum speed and request security.",
      },
    },
    about: {
      title: "Who is Kevin?",
      desc: "Developer focused on real results. With a solid academic background and market experience, I believe good code is code that solves problems and scales efficiently. When I'm not shipping features, I'm recharging my batteries gaming.",
      h1: {
        title: "FATEC Graduate",
        desc: "Solid foundation in Analysis and Systems Development. Focus on software engineering and best practices.",
      },
      h2: {
        title: "Software House",
        desc: "Currently working in the industry, developing complex solutions, dealing with real deadlines and demanding clients.",
      },
      h3: {
        title: "Gamer & Strategist",
        desc: "In my free time, the focus remains. I analyze metas, optimize strategies, and chase high elo.",
      },
    },
    footer: {
      title: "Let's build something amazing?",
      desc: "I'm available for new projects, freelance work, or just to chat about technology.",
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
      {/* --- CSS ANIMATIONS (MATRIX & GLOW) --- */}
      <style jsx global>{`
        @keyframes matrix-fall {
          0% {
            top: -20%;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            top: 120%;
            opacity: 0;
          }
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
        /* Grid Background Pattern */
        .bg-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
        }
      `}</style>

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
        {/* 1. Cyber Grid (Malha de fundo) */}
        <div className="absolute inset-0 bg-grid z-0" />

        {/* 2. Máscara Radial (Vignette) para suavizar as bordas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-0" />

        {/* 3. Blobs de Luz (Coloridos e animados) */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />

        {/* 4. CHUVA DE CÓDIGO (Matrix Neon) */}
        <div className="absolute inset-0 z-0 opacity-40">
          {Array.from({ length: 25 }).map((_, i) => {
            const randomLeft = Math.random() * 100;
            const randomDuration = Math.random() * 10 + 8;
            const randomDelay = Math.random() * -20;
            const randomSize = Math.random() * 8 + 10;
            const isPurple = Math.random() > 0.7;

            return (
              <div
                key={i}
                className="code-rain"
                style={{
                  left: `${randomLeft}%`,
                  animationDuration: `${randomDuration}s`,
                  animationDelay: `${randomDelay}s`,
                  fontSize: `${randomSize}px`,
                  color: isPurple ? "#a855f7" : "#0ea5e9",
                  textShadow: isPurple
                    ? "0 0 8px rgba(168, 85, 247, 0.4)"
                    : "0 0 8px rgba(14, 165, 233, 0.4)",
                  opacity: Math.random() * 0.5 + 0.1,
                }}
              >
                {"01 AF 3C /> fn const var if else return 01 FF 00"}
              </div>
            );
          })}
        </div>
      </div>

      {/* --- MODAL DEMO --- */}
      {activeDemo && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-[#0F0F0F] w-full max-w-6xl h-[85vh] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Header do Modal */}
            <div className="h-14 border-b border-white/10 flex justify-between items-center px-6 bg-[#151515]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors" />
              </div>
              <span className="text-xs font-mono text-slate-500 tracking-wider">
                LIVE PREVIEW • READ ONLY MODE
              </span>
              <button
                onClick={() => setActiveDemo(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
            {/* Conteúdo da Demo */}
            <div className="flex-1 overflow-hidden relative bg-[#F8FAFC]">
              {activeDemo}
            </div>
          </div>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-default">
            Kevin Fiorelo
          </span>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
              {/* @ts-ignore */}
              <NavLink href="#projetos">{t.nav.projetos}</NavLink>
              {/* @ts-ignore */}
              <NavLink href="#stack">{t.nav.stack}</NavLink>
              {/* @ts-ignore */}
              <NavLink href="#sobre">{t.nav.sobre}</NavLink>
              {/* @ts-ignore */}
              <NavLink href="#contato">{t.nav.contato}</NavLink>
            </div>

            {/* SWITCH DE IDIOMA */}
            <button
              onClick={toggleLang}
              className="relative w-14 h-7 bg-white/10 rounded-full border border-white/10 flex items-center transition-all hover:border-white/20 focus:outline-none cursor-pointer"
              aria-label="Toggle Language"
            >
              <div
                className={`absolute w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-[8px] font-black text-white ${
                  lang === "en" ? "translate-x-8" : "translate-x-1"
                }`}
              >
                {lang === "en" ? "EN" : "PT"}
              </div>
              <div className="w-full flex justify-between px-2 text-[8px] font-bold text-slate-500 select-none">
                <span>PT</span>
                <span>EN</span>
              </div>
            </button>

            <Link
              href="#contato"
              className="md:hidden p-2 text-white cursor-pointer"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 hover:bg-blue-500/20 transition-colors cursor-default backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t.hero.status}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            {t.hero.role} <br className="md:hidden" /> {t.hero.role2} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {t.hero.subtitle}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="flex justify-center pt-4">
            <Link
              href="https://github.com/iKevinsz"
              target="_blank"
              className="px-10 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-white/10"
            >
              <Github size={20} />
              <span>Ver meu GitHub</span>
              <ChevronRight
                size={18}
                strokeWidth={3}
                className="text-slate-400"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section
        id="stack"
        className="py-12 border-y border-white/5 bg-white/[0.02] relative z-10 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-10">
            {t.stack}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <TechItem icon={<Code2 />} label="Next.js 15" color="text-white" />
            <TechItem
              icon={<LayoutTemplate />}
              label="Tailwind"
              color="text-cyan-400"
            />
            <TechItem
              icon={<Database />}
              label="Prisma ORM"
              color="text-teal-400"
            />
            <TechItem
              icon={<Bot />}
              label="Gemini AI"
              color="text-purple-400"
            />
            <TechItem
              icon={<Terminal />}
              label="TypeScript"
              color="text-blue-500"
            />
            <TechItem icon={<Cpu />} label="Node.js" color="text-green-500" />
          </div>
        </div>
      </section>

      {/* --- PROJETOS --- */}
      <section id="projetos" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.projects.title}
              </h2>
              <p className="text-slate-400 max-w-lg">{t.projects.subtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title={t.projects.p1.title}
              desc={t.projects.p1.desc}
              tags={["Next.js 15", "Server Actions", "Recharts"]}
              color="blue"
              hasDemo={true}
              onDemoClick={() => setActiveDemo(<FinanceiroDemo />)}
            />

            <ProjectCard
              title={t.projects.p2.title}
              desc={t.projects.p2.desc}
              tags={["React", "UX/UI Mobile", "Sistemas"]}
              color="purple"
              hasDemo={true}
              onDemoClick={() => setActiveDemo(<GestaoDemo />)}
            />

            <ProjectCard
              title={t.projects.p3.title}
              desc={t.projects.p3.desc}
              tags={["Prisma", "SQL", "Votação"]}
              color="emerald"
              hasDemo={true}
              onDemoClick={() => setActiveDemo(<FeedbackDemo />)}
            />
          </div>
        </div>
      </section>

      {/* --- SOBRE (PERSONAL) - ATUALIZADO --- */}
      <section
        id="sobre"
        className="py-32 px-6 bg-white/[0.02] border-y border-white/5 relative z-10 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* COLUNA DA FOTO */}
            <div className="relative shrink-0 group">
              {/* Moldura da Imagem */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl z-10 relative group-hover:border-blue-500/30 transition-all duration-500">
                <img
                  src="https://github.com/iKevinsz.png"
                  alt="Foto de Kevin Rodrigo"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>
              {/* Efeito de Brilho atrás da foto */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl -z-10 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* COLUNA DO TEXTO */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.about.title}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {t.about.desc}
              </p>
              {/* Botões Sociais Pequenos */}
              <div className="flex gap-4 justify-center md:justify-start opacity-50 hover:opacity-100 transition-opacity">
                <a
                  href="https://github.com/iKevinsz"
                  target="_blank"
                  className="hover:text-white cursor-pointer"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/kevin-rodrigo-000632209/"
                  target="_blank"
                  className="hover:text-blue-400 cursor-pointer"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Hobby Cards ATUALIZADOS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
            <HobbyCard
              icon={<GraduationCap size={32} className="text-blue-400" />} // Ícone Acadêmico
              title={t.about.h1.title}
              desc={t.about.h1.desc}
            />
            <HobbyCard
              icon={<Briefcase size={32} className="text-purple-400" />} // Ícone Trabalho
              title={t.about.h2.title}
              desc={t.about.h2.desc}
            />
            <HobbyCard
              icon={<Gamepad2 size={32} className="text-emerald-400" />} // Ícone Gamer
              title={t.about.h3.title}
              desc={t.about.h3.desc}
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTATO --- */}
      <footer id="contato" className="py-20 bg-[#050505] relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t.footer.title}
          </h2>
          <p className="text-slate-400 mb-10">{t.footer.desc}</p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <SocialBtn
              href="https://github.com/iKevinsz"
              icon={<Github size={20} />}
              label="GitHub"
            />
            <SocialBtn
              href="https://linkedin.com/in/kevin-rodrigo-000632209/"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
            <SocialBtn
              href="https://instagram.com/kev1n_x/"
              icon={<Instagram size={20} />}
              label="Instagram"
            />
            <SocialBtn
              href="mailto:fioreelokevin@gmail.com"
              icon={<Mail size={20} />}
              label="Email"
            />
          </div>

          <div className="pt-8 border-t border-white/10 text-slate-600 text-sm">
            © {new Date().getFullYear()} Kevin Rodrigo. {t.footer.copy}
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- SUBCOMPONENTES ---

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="hover:text-white hover:scale-105 transition-all cursor-pointer"
    >
      {children}
    </Link>
  );
}

function TechItem({
  icon,
  label,
  color,
}: {
  icon: any;
  label: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 group cursor-default">
      <div
        className={`p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/20 group-hover:bg-white/10 transition-all ${color} group-hover:scale-110 shadow-lg`}
      >
        {icon}
      </div>
      <span className="font-bold text-slate-400 group-hover:text-white text-sm transition-colors">
        {label}
      </span>
    </div>
  );
}

function ProjectCard({ title, desc, tags, color, onDemoClick, hasDemo }: any) {
  const colors: any = {
    blue: "hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
    purple:
      "hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
    emerald:
      "hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
  };

  return (
    <div
      className={`bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 transition-all duration-500 group flex flex-col h-full ${colors[color]} cursor-default`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-xl bg-white/5 text-white border border-white/5 group-hover:scale-110 transition-transform">
          <Code2 size={24} />
        </div>
        {hasDemo && (
          <button
            onClick={onDemoClick}
            className="relative group/btn flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="Executar Demo"
          >
            <Play size={20} className="fill-white ml-0.5" />
            <span className="absolute -inset-1 rounded-full bg-blue-500/30 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity animate-pulse"></span>
          </button>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/5 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function HobbyCard({ icon, title, desc }: any) {
  return (
    <div className="bg-[#0F0F0F] p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all group cursor-default">
      <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="font-bold text-white mb-3 text-lg">{title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function SocialBtn({ href, icon, label }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 hover:scale-105 transition-all font-medium text-sm cursor-pointer"
      aria-label={label}
    >
      {icon} {label}
    </a>
  );
}

// --- DEMO COMPONENTS (MOCKS INTERATIVOS) ---

// 1. MOCK FINANCEIRO
function FinanceiroDemo() {
  const [mesAtivo, setMesAtivo] = useState<number | null>(null);

  const dadosGrafico = [
    { mes: "JAN", entrada: 65, saida: 40 },
    { mes: "FEV", entrada: 85, saida: 75 },
    { mes: "MAR", entrada: 55, saida: 60 },
    { mes: "ABR", entrada: 45, saida: 70 },
    { mes: "MAI", entrada: 45, saida: 35 },
    { mes: "JUN", entrada: 45, saida: 35 },
    { mes: "JUL", entrada: 45, saida: 35 },
    { mes: "AGO", entrada: 45, saida: 35 },
    { mes: "SET", entrada: 45, saida: 35 },
    { mes: "OUT", entrada: 45, saida: 35 },
    { mes: "NOV", entrada: 45, saida: 25 },
    { mes: "DEZ", entrada: 45, saida: 25 },
  ];

  return (
    <div className="min-h-full bg-[#F8FAFC] p-4 md:p-8 font-sans text-slate-900 flex flex-col">
      {/* Header Section */}
      <header className="flex flex-col xl:flex-row justify-between items-end gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-gray-500 cursor-default">
              <CalendarClock size={14} className="text-blue-600" />
              PLANEJAMENTO 2026
            </div>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight flex items-center gap-3 cursor-default">
            Visão Financeira
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full xl:w-auto">
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm min-w-[200px] cursor-default">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Entradas
              </span>
              <div className="p-1.5 bg-emerald-50 rounded-full text-emerald-500">
                <ArrowUpRight size={16} />
              </div>
            </div>
            <div className="text-2xl font-black text-slate-800">
              R$ 26.745,93
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm min-w-[200px] cursor-default">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Saídas
              </span>
              <div className="p-1.5 bg-rose-50 rounded-full text-rose-500">
                <ArrowDownRight size={16} />
              </div>
            </div>
            <div className="text-2xl font-black text-slate-800">
              R$ 23.534,92
            </div>
          </div>

          <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800 shadow-xl min-w-[200px] text-white cursor-default">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                Saldo
              </span>
              <div className="p-1.5 bg-white/10 rounded-full">
                <Wallet size={16} />
              </div>
            </div>
            <div className="text-2xl font-black">R$ 3.211,01</div>
          </div>
        </div>
      </header>

      {/* Área dos Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Gráfico de Barras */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-[350px] cursor-default">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">Fluxo de Caixa Anual</h3>
            <div className="flex gap-3 text-[10px] font-bold uppercase">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>{" "}
                Receita
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div> Despesa
              </div>
            </div>
          </div>

          {/* Container das Barras */}
          <div className="flex items-end justify-between h-full gap-2 pt-4 pb-2">
            {dadosGrafico.map((d, i) => (
              <div
                key={d.mes}
                onClick={() => setMesAtivo(mesAtivo === i ? null : i)}
                className={`flex flex-col items-center gap-2 w-full h-full justify-end cursor-pointer group transition-all duration-300 ${
                  mesAtivo !== null && mesAtivo !== i
                    ? "opacity-30 grayscale"
                    : ""
                }`}
              >
                <div className="flex items-end gap-1 h-full w-full justify-center">
                  {/* Barra Verde */}
                  <div
                    style={{ height: `${d.entrada}%` }}
                    className="w-1.5 md:w-3 bg-emerald-500 rounded-t-md transition-all duration-500 group-hover:bg-emerald-400"
                  ></div>
                  {/* Barra Vermelha */}
                  <div
                    style={{ height: `${d.saida}%` }}
                    className="w-1.5 md:w-3 bg-rose-500 rounded-t-md transition-all duration-500 group-hover:bg-rose-400"
                  ></div>
                </div>
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400">
                  {d.mes}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfico de Rosca (Donut Chart) */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center relative h-[350px] cursor-default">
          <h3 className="font-bold text-slate-800 self-start mb-6">
            Maiores Despesas
          </h3>

          {/* Círculo SVG robusto */}
          <div className="relative w-48 h-48">
            <svg
              viewBox="0 0 100 100"
              className="transform -rotate-90 w-full h-full"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#f1f5f9"
                strokeWidth="12"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#10b981"
                strokeWidth="12"
                strokeDasharray="172 251"
                strokeDashoffset="0"
                className="transition-all duration-1000 ease-out"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#f43f5e"
                strokeWidth="12"
                strokeDasharray="110 251"
                strokeDashoffset="-175"
                className="transition-all duration-1000 ease-out"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#3b82f6"
                strokeWidth="12"
                strokeDasharray="30 251"
                strokeDashoffset="-288"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                TOTAL
              </span>
            </div>
          </div>

          {/* Legenda */}
          <div className="w-full mt-8 space-y-3 px-2">
            <div className="flex justify-between text-xs items-center border-b border-slate-50 pb-2">
              <span className="flex items-center gap-2 font-bold text-slate-600">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>{" "}
                Despesas Fixas
              </span>
              <span className="font-bold text-slate-800">R$ 12.750,10</span>
            </div>
            <div className="flex justify-between text-xs items-center border-b border-slate-50 pb-2">
              <span className="flex items-center gap-2 font-bold text-slate-600">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>{" "}
                Cartão Crédito
              </span>
              <span className="font-bold text-slate-800">R$ 8.399,38</span>
            </div>
            <div className="flex justify-between text-xs items-center">
              <span className="flex items-center gap-2 font-bold text-slate-600">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>{" "}
                Diversos
              </span>
              <span className="font-bold text-slate-800">R$ 1.394,28</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabela Fixa */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex-1 cursor-default">
        <div className="overflow-x-auto custom-scrollbar h-full">
          <table className="w-full text-sm min-w-[800px]">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200">
                <th className="p-4 pl-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest sticky left-0 bg-slate-50 z-10 w-64">
                  Categoria
                </th>
                {dadosGrafico.slice(0, 6).map((d) => (
                  <th
                    key={d.mes}
                    className="p-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest w-28"
                  >
                    {d.mes}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="group hover:bg-slate-50 transition-colors">
                <td className="p-0 border-r border-slate-100 relative sticky left-0 bg-white group-hover:bg-slate-50">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"></div>
                  <div className="p-4 pl-6 font-bold text-slate-700">
                    Salário Mensal
                  </div>
                </td>
                {dadosGrafico.slice(0, 6).map((_, i) => (
                  <td
                    key={i}
                    className="p-4 text-center font-bold text-xs text-emerald-600 bg-emerald-50/10 border-r border-slate-50"
                  >
                    R$ 4.500,00
                  </td>
                ))}
              </tr>
              <tr className="group hover:bg-slate-50 transition-colors">
                <td className="p-0 border-r border-slate-100 relative sticky left-0 bg-white group-hover:bg-slate-50">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-500"></div>
                  <div className="p-4 pl-6 font-bold text-slate-700">
                    Aluguel
                  </div>
                </td>
                {dadosGrafico.slice(0, 6).map((_, i) => (
                  <td
                    key={i}
                    className="p-4 text-center font-bold text-xs text-rose-500 bg-rose-50/10 border-r border-slate-50"
                  >
                    - R$ 1.800,00
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 2. MOCK GESTAO
function GestaoDemo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "COCA ZERO - LATA",
      categoria: "BEBIDAS",
      preco: 6.0,
      imagem: "bg-red-100 text-red-600",
      icon: "🥤",
      status: "ATIVO",
    },
    {
      id: 2,
      nome: "COCA-COLA LATA",
      categoria: "BEBIDAS",
      preco: 6.0,
      imagem: "bg-red-600 text-white",
      icon: "🥤",
      status: "ATIVO",
    },
    {
      id: 3,
      nome: "GUARANÁ ANTARCTICA",
      categoria: "BEBIDAS",
      preco: 15.0,
      imagem: "bg-green-100 text-green-700",
      icon: "🥤",
      status: "ATIVO",
    },
    {
      id: 4,
      nome: "PIZZA 4 QUEIJOS",
      categoria: "PIZZAS",
      preco: 50.0,
      imagem: "bg-orange-100 text-orange-600",
      icon: "🍕",
      status: "ATIVO",
    },
    {
      id: 5,
      nome: "PIZZA CALABRESA",
      categoria: "PIZZAS",
      preco: 30.0,
      imagem: "bg-orange-50 text-orange-500",
      icon: "🍕",
      status: "ATIVO",
      tag: "VARIAÇÕES",
    },
  ]);

  const filteredProducts = produtos.filter(
    (p) =>
      p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (confirm("Deseja excluir este produto da demonstração?")) {
      setProdutos((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleAdd = () => {
    const novo = {
      id: Date.now(),
      nome: "NOVO PRODUTO DEMO",
      categoria: "GERAL",
      preco: 10.0,
      imagem: "bg-slate-200 text-slate-500",
      icon: "📦",
      status: "INATIVO",
    };
    setProdutos([novo, ...produtos]);
  };

  return (
    <div className="flex h-full bg-[#F3F4F6] font-sans text-slate-600 overflow-hidden">
      {/* Sidebar (Menu Lateral) */}
      <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-8 shadow-sm z-10 hidden md:flex cursor-default">
        <div className="p-3 bg-blue-900 text-white rounded-xl mb-4">
          <LayoutDashboard size={24} />
        </div>
        <div className="flex flex-col gap-6 w-full items-center">
          <div className="p-3 text-slate-400 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors">
            <UtensilsCrossed size={24} />
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 border-l-4 border-blue-600 w-full flex justify-center cursor-pointer">
            <ShoppingBag size={24} />
          </div>
          <div className="p-3 text-slate-400 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors">
            <FileText size={24} />
          </div>
          <div className="p-3 text-slate-400 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors">
            <Settings size={24} />
          </div>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header & Toolbar */}
        <header className="bg-white border-b border-slate-200 p-6 md:p-8 pb-6 shadow-sm z-10">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 cursor-default">
                Catálogo de Produtos
              </h2>
              <p className="text-sm text-slate-500 cursor-default">
                Gerencie preços, variações e estoque.
              </p>
            </div>
            <button
              onClick={handleAdd}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-100 cursor-pointer"
            >
              <Plus size={18} /> Novo Produto
            </button>
          </div>

          {/* Barra de Filtros */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Buscar por nome ou categoria..."
                className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50 cursor-pointer">
                <Filter size={16} /> Todos
              </button>
              <div className="border border-slate-200 rounded-lg flex overflow-hidden">
                <button className="p-2.5 bg-blue-50 text-blue-600 cursor-pointer">
                  <List size={18} />
                </button>
                <button className="p-2.5 bg-white text-slate-400 hover:bg-slate-50 cursor-pointer">
                  <Grid size={18} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Lista de Produtos */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-3 bg-[#F8F9FA]">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-slate-400 cursor-default">
              Nenhum produto encontrado.
            </div>
          ) : (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 hover:border-blue-300 transition-all group cursor-default"
              >
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <div
                    className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center shrink-0 ${p.imagem} relative overflow-hidden`}
                  >
                    <span className="text-2xl">{p.icon}</span>
                    <div className="absolute bottom-0 w-full bg-black/20 text-[8px] text-white text-center font-bold py-0.5 uppercase">
                      {p.categoria}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm md:text-base">
                      {p.nome}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          p.status === "ATIVO"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {p.status}
                      </span>
                      {p.tag && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                          {p.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Preço
                    </p>
                    <p className="text-lg font-black text-slate-800">
                      {p.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="p-2 border border-slate-200 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                      title="Editar"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="p-2 border border-slate-200 rounded-lg text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                      title="Excluir"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// 3. MOCK FEEDBACK
function FeedbackDemo() {
  const [activeTab, setActiveTab] = useState("votacao");
  const [sugestoes, setSugestoes] = useState([
    {
      id: 1,
      data: "04/01/2026",
      titulo: "Integração com Balança Toledo",
      resumo:
        "Precisamos da homologação com a balança Toledo Prix 4. Atualmente só funciona com a Filizola...",
      modulo: "PDV",
      tipo: "MELHORIA",
      votos: 8,
      votado: false,
      status: "votacao",
    },
    {
      id: 2,
      data: "05/01/2026",
      titulo: "Modo Noturno (Dark Mode)",
      resumo:
        "Implementar tema escuro no aplicativo do garçom. Em ambientes de balada ou restaurantes com luz baixa...",
      modulo: "Aplicativo Garçom",
      tipo: "IMPORTANTE",
      votos: 45,
      votado: false,
      status: "votacao",
    },
    {
      id: 3,
      data: "07/01/2026",
      titulo: "Adicionar atalho PIX no PDV",
      resumo:
        "Seria muito útil ter um botão de atalho direto para pagamento via PIX na tela principal de vendas...",
      modulo: "PDV",
      tipo: "MELHORIA",
      votos: 12,
      votado: true,
      status: "votacao",
    },
    {
      id: 4,
      data: "20/12/2025",
      titulo: "Relatório de Curva ABC",
      resumo: "Desenvolvimento do relatório de produtos mais vendidos...",
      modulo: "Gestão",
      tipo: "NOVA FUNÇÃO",
      votos: 120,
      votado: false,
      status: "desenvolvimento",
    },
  ]);

  const handleVote = (id: number) => {
    setSugestoes((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          return {
            ...s,
            votos: s.votado ? s.votos - 1 : s.votos + 1,
            votado: !s.votado,
          };
        }
        return s;
      })
    );
  };

  const listaFiltrada = sugestoes.filter((s) => s.status === activeTab);

  return (
    <div className="flex flex-col h-full bg-[#F3F6F9] font-sans text-slate-600 overflow-hidden p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2 cursor-default">
          <span className="p-1 border-2 border-blue-900 rounded-full">
            <Sparkles size={16} />
          </span>
          Sistema / Sugestões
        </h2>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 ml-9 cursor-default">
          Central de Melhorias e Feedback
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center gap-2 cursor-pointer">
          <div className="bg-white/20 p-0.5 rounded-full">
            <Plus size={14} />
          </div>
          Cadastrar Nova Ideia
        </button>

        <div className="relative w-full md:w-96">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Pesquisar sugestões..."
            className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-200 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-slate-200 mb-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab("votacao")}
          className={`pb-4 text-sm font-bold flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === "votacao"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <Sparkles size={16} /> Em Votação
        </button>
        <button
          onClick={() => setActiveTab("desenvolvimento")}
          className={`pb-4 text-sm font-bold flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === "desenvolvimento"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <MessageSquare size={16} /> Em Desenvolvimento
        </button>
        <button className="pb-4 text-sm font-bold flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors whitespace-nowrap cursor-pointer">
          <CheckCircle2 size={16} /> Concluídas
        </button>
      </div>

      {/* Lista (Tabela Clean) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex-1 overflow-y-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-400 font-bold text-[10px] uppercase tracking-widest border-b border-slate-100">
            <tr>
              <th className="px-6 py-5 w-32">Data</th>
              <th className="px-6 py-5 w-1/4">Título da Sugestão</th>
              <th className="px-6 py-5">Resumo</th>
              <th className="px-6 py-5 w-40">Módulo</th>
              <th className="px-6 py-5 w-32">Tipo</th>
              <th className="px-6 py-5 text-center w-24">Votos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {listaFiltrada.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="p-10 text-center text-slate-400 cursor-default"
                >
                  Nenhuma sugestão encontrada nesta aba.
                </td>
              </tr>
            ) : (
              listaFiltrada.map((s) => (
                <tr
                  key={s.id}
                  className="hover:bg-slate-50 transition-colors group cursor-default"
                >
                  <td className="px-6 py-5 text-slate-400 font-bold text-xs">
                    {s.data}
                  </td>
                  <td className="px-6 py-5 font-bold text-slate-700 text-base">
                    {s.titulo}
                  </td>
                  <td
                    className="px-6 py-5 text-slate-500 text-xs leading-relaxed max-w-xs truncate"
                    title={s.resumo}
                  >
                    {s.resumo}
                  </td>
                  <td className="px-6 py-5 text-slate-500 font-medium">
                    {s.modulo}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                        s.tipo === "IMPORTANTE"
                          ? "bg-orange-50 text-orange-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {s.tipo}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button
                      onClick={() => handleVote(s.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all active:scale-95 cursor-pointer ${
                        s.votado
                          ? "bg-blue-900 text-white border-blue-900"
                          : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                      }`}
                    >
                      {s.votado ? <Check size={14} /> : <ThumbsUp size={14} />}
                      <span className="font-bold text-xs">{s.votos}</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
