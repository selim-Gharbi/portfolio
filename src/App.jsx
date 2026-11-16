import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Menu, X, Code2, Layers3, Smartphone, Database, Globe2, Download,
  ExternalLink, BriefcaseBusiness, GraduationCap, Sparkles
} from "lucide-react";

const profile = {
  name: "Selim Gharbi",
  email: "gharbi.selim@esprit.tn",
  phone: "+216 21 750 679",
  github: "https://github.com/selim-Gharbi",
  linkedin: "https://linkedin.com/in/gharbi-selim",
};

const copy = {
  en: {
    nav: ["About", "Skills", "Experience", "Projects", "Contact"],
    available: "OPEN TO PFE OPPORTUNITIES · 2027",
    role: "Software Engineering Student",
    intro: "I build thoughtful digital experiences — from robust backend systems to elegant user interfaces.",
    ctaProjects: "Explore my work",
    ctaContact: "Let's talk",
    scroll: "Scroll to discover",
    aboutTag: "A little about me",
    aboutTitle: "Engineering ideas into",
    aboutAccent: "useful experiences.",
    aboutText: "I'm a fifth-year Software Engineering student at ESPRIT in Tunisia, passionate about full-stack development, microservices architecture, mobile applications and artificial intelligence. I enjoy turning complex problems into clear, reliable products and continuously learning new technologies.",
    facts: [["Based in", "Tunisia"], ["Education", "ESPRIT · Software Engineering"], ["Looking for", "PFE internship · 2027"]],
    skillsTag: "What I work with",
    skillsTitle: "My technical toolkit",
    skillsText: "A versatile stack for building complete products, from interface to infrastructure.",
    skillGroups: [
      { title: "Languages", items: ["Java", "JavaScript", "C", "C++", "C#", "PHP", "Dart", "SQL"] },
      { title: "Frameworks & Web", items: ["Spring Boot", "Spring Cloud", "Angular", "React", "Node.js", "Flutter", "HTML5", "CSS3"] },
      { title: "Architecture & Tools", items: ["Microservices", "REST APIs", "Eureka", "API Gateway", "MySQL", "Git & GitHub", "Docker", "CI/CD"] },
      { title: "Other areas", items: ["Machine Learning", "Qt / Qt Designer", "SDL", "Arduino", "Responsive UI"] },
    ],
    experienceTag: "Where I've contributed",
    experienceTitle: "Experience & education",
    experience: [
      { date: "Jun 2026 — Aug 2026", title: "Software Engineering Intern", org: "Art Beaubois", desc: "Contributed to a full-stack platform for custom furniture manufacturing using a microservices architecture. Worked on Spring Boot services, Angular interfaces, REST API integration and independent MySQL databases.", tech: ["Java 17", "Spring Boot", "Spring Cloud", "Angular", "MySQL", "Eureka"] },
      { date: "Feb 2026 — May 2026", title: "Full-Stack Project", org: "Pedia-Nephro", desc: "Developed a healthcare management platform with Spring Boot and Angular, contributing to Machine Learning and DevOps components.", tech: ["Java", "Spring Boot", "Angular", "Machine Learning", "DevOps"] },
      { date: "Sep 2024 — Dec 2025", title: "Mobile Application", org: "AppFood", desc: "Designed and developed a cross-platform mobile application, building responsive interfaces, navigation and core features.", tech: ["Flutter", "Dart"] },
      { date: "Oct 2025 — Nov 2025", title: "Web Collaboration Platform", org: "CollabTask — ETAP", desc: "Built frontend and backend features for a team task-management platform, including task creation, organization, tracking and collaboration.", tech: ["React", "Node.js"] },
    ],
    education: "Education",
    degree: "Engineering Degree in Computer Science · Software Engineering",
    school: "ESPRIT — École Supérieure Privée d'Ingénierie et de Technologies",
    expected: "Expected graduation: 2027",
    projectsTag: "Selected work",
    projectsTitle: "Projects that",
    projectsAccent: "bring ideas to life.",
    projectsText: "A selection of academic and personal projects. More details and source code can be added as repositories become public.",
    projects: [
      { name: "Art Beaubois", type: "Full-stack · Microservices", desc: "A custom-furniture platform with catalogue, product customization and quote request workflows.", stack: ["Spring Boot", "Spring Cloud", "Angular", "MySQL"], icon: "layers" },
      { name: "Pedia-Nephro", type: "Healthcare platform", desc: "A healthcare management platform combining web development, a Machine Learning component and DevOps practices.", stack: ["Spring Boot", "Angular", "ML", "DevOps"], icon: "globe" },
      { name: "Digital Wallet", type: "Mobile · FinTech", desc: "A mobile digital-wallet application focused on wallet management and transaction features.", stack: ["Flutter", "Dart"], icon: "phone" },
      { name: "CollabTask", type: "Web · Collaboration", desc: "A collaborative task-management platform for teams, developed in the context of ETAP.", stack: ["React", "Node.js"], icon: "code" },
      { name: "AppFood", type: "Mobile application", desc: "A cross-platform application with responsive screens, navigation and core user features.", stack: ["Flutter", "Dart"], icon: "phone" },
      { name: "Argciol & 2D Game", type: "Desktop & Game Development", desc: "A Qt desktop application and a 2D game built with C and SDL, applying modular design and interactive gameplay logic.", stack: ["C++", "Qt", "C", "SDL"], icon: "code" },
    ],
    contactTag: "Have a project in mind?",
    contactTitle: "Let's build something",
    contactAccent: "meaningful.",
    contactText: "I'm currently looking for a PFE internship for 2027. If you'd like to discuss an opportunity, a project or simply connect, my inbox is open.",
    emailMe: "Email me",
    footer: "Designed & built with care by Selim Gharbi.",
    backTop: "Back to top",
    cv: "Download CV",
  },
  fr: {
    nav: ["À propos", "Compétences", "Expérience", "Projets", "Contact"],
    available: "À LA RECHERCHE D'UN PFE · 2027",
    role: "Étudiant en génie logiciel",
    intro: "Je conçois des expériences numériques soignées, des systèmes backend robustes aux interfaces élégantes.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    scroll: "Défiler pour découvrir",
    aboutTag: "À propos de moi",
    aboutTitle: "Transformer les idées en",
    aboutAccent: "expériences utiles.",
    aboutText: "Je suis étudiant en cinquième année de génie logiciel à ESPRIT en Tunisie. Je m'intéresse au développement full-stack, aux architectures microservices, aux applications mobiles et à l'intelligence artificielle. J'aime transformer des problèmes complexes en produits fiables et continuer à apprendre.",
    facts: [["Localisation", "Tunisie"], ["Formation", "ESPRIT · Génie logiciel"], ["Recherche", "Stage PFE · 2027"]],
    skillsTag: "Mon environnement technique",
    skillsTitle: "Mes compétences techniques",
    skillsText: "Une stack polyvalente pour concevoir des produits complets, de l'interface à l'infrastructure.",
    skillGroups: [
      { title: "Langages", items: ["Java", "JavaScript", "C", "C++", "C#", "PHP", "Dart", "SQL"] },
      { title: "Frameworks & Web", items: ["Spring Boot", "Spring Cloud", "Angular", "React", "Node.js", "Flutter", "HTML5", "CSS3"] },
      { title: "Architecture & Outils", items: ["Microservices", "API REST", "Eureka", "API Gateway", "MySQL", "Git & GitHub", "Docker", "CI/CD"] },
      { title: "Autres domaines", items: ["Machine Learning", "Qt / Qt Designer", "SDL", "Arduino", "Interfaces responsive"] },
    ],
    experienceTag: "Mon parcours",
    experienceTitle: "Expérience & formation",
    experience: [
      { date: "Juin 2026 — Août 2026", title: "Stage ingénieur logiciel", org: "Art Beaubois", desc: "Contribution à une plateforme full-stack de fabrication de meubles sur mesure basée sur une architecture microservices. Développement de services Spring Boot, interfaces Angular, intégration API REST et bases MySQL indépendantes.", tech: ["Java 17", "Spring Boot", "Spring Cloud", "Angular", "MySQL", "Eureka"] },
      { date: "Fév. 2026 — Mai 2026", title: "Projet full-stack", org: "Pedia-Nephro", desc: "Développement d'une plateforme de gestion de santé avec Spring Boot et Angular, avec participation aux volets Machine Learning et DevOps.", tech: ["Java", "Spring Boot", "Angular", "Machine Learning", "DevOps"] },
      { date: "Sept. 2024 — Déc. 2025", title: "Application mobile", org: "AppFood", desc: "Conception et développement d'une application mobile multiplateforme : interfaces responsives, navigation et fonctionnalités principales.", tech: ["Flutter", "Dart"] },
      { date: "Oct. 2025 — Nov. 2025", title: "Plateforme web collaborative", org: "CollabTask — ETAP", desc: "Développement de fonctionnalités frontend et backend d'une plateforme de gestion de tâches en équipe : création, organisation, suivi et collaboration.", tech: ["React", "Node.js"] },
    ],
    education: "Formation",
    degree: "Diplôme d'ingénieur en informatique · Génie logiciel",
    school: "ESPRIT — École Supérieure Privée d'Ingénierie et de Technologies",
    expected: "Diplôme prévu : 2027",
    projectsTag: "Projets sélectionnés",
    projectsTitle: "Des projets qui",
    projectsAccent: "donnent vie aux idées.",
    projectsText: "Une sélection de projets académiques et personnels. Les liens vers les dépôts pourront être ajoutés lorsque les projets seront publics.",
    projects: [
      { name: "Art Beaubois", type: "Full-stack · Microservices", desc: "Une plateforme de meubles sur mesure avec catalogue, personnalisation des produits et demandes de devis.", stack: ["Spring Boot", "Spring Cloud", "Angular", "MySQL"], icon: "layers" },
      { name: "Pedia-Nephro", type: "Plateforme de santé", desc: "Une plateforme de gestion de santé intégrant développement web, Machine Learning et pratiques DevOps.", stack: ["Spring Boot", "Angular", "ML", "DevOps"], icon: "globe" },
      { name: "Digital Wallet", type: "Mobile · FinTech", desc: "Une application mobile de portefeuille numérique dédiée à la gestion du portefeuille et aux transactions.", stack: ["Flutter", "Dart"], icon: "phone" },
      { name: "CollabTask", type: "Web · Collaboration", desc: "Une plateforme collaborative de gestion des tâches pour les équipes, réalisée dans le contexte d'ETAP.", stack: ["React", "Node.js"], icon: "code" },
      { name: "AppFood", type: "Application mobile", desc: "Une application multiplateforme avec des écrans responsives, une navigation et des fonctionnalités essentielles.", stack: ["Flutter", "Dart"], icon: "phone" },
      { name: "Argciol & Jeu 2D", type: "Desktop & jeu vidéo", desc: "Une application desktop Qt et un jeu 2D développés avec C et SDL, avec conception modulaire et logique interactive.", stack: ["C++", "Qt", "C", "SDL"], icon: "code" },
    ],
    contactTag: "Un projet en tête ?",
    contactTitle: "Construisons quelque chose",
    contactAccent: "qui a du sens.",
    contactText: "Je recherche actuellement un stage PFE pour 2027. Pour échanger sur une opportunité, un projet ou simplement prendre contact, ma boîte mail est ouverte.",
    emailMe: "M'envoyer un email",
    footer: "Conçu et développé avec soin par Selim Gharbi.",
    backTop: "Retour en haut",
    cv: "Télécharger le CV",
  },
};

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function SectionHeading({ tag, title, accent, text }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mb-12 max-w-2xl">
      <p className="section-kicker mb-4">{tag}</p>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">{title} <span className="gold-text">{accent}</span></h2>
      {text && <p className="mt-5 max-w-xl text-sm leading-7 text-stone-400 sm:text-base">{text}</p>}
    </motion.div>
  );
}

function ProjectIcon({ type }) {
  const props = { size: 22, strokeWidth: 1.5 };
  if (type === "layers") return <Layers3 {...props} />;
  if (type === "phone") return <Smartphone {...props} />;
  if (type === "globe") return <Globe2 {...props} />;
  return <Code2 {...props} />;
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const ids = ["about", "skills", "experience", "projects", "contact"];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-stone-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#090909]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="font-display text-lg font-extrabold tracking-tight" onClick={closeMenu}>
            SG<span className="gold-text">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {t.nav.map((label, i) => <a key={label} href={`#${ids[i]}`} className="text-xs font-medium text-stone-400 transition hover:text-gold">{label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-white/10 p-1 text-[11px] font-semibold">
              <button onClick={() => setLang("en")} className={`rounded-full px-3 py-1.5 transition ${lang === "en" ? "bg-gold text-black" : "text-stone-400 hover:text-white"}`}>EN</button>
              <button onClick={() => setLang("fr")} className={`rounded-full px-3 py-1.5 transition ${lang === "fr" ? "bg-gold text-black" : "text-stone-400 hover:text-white"}`}>FR</button>
            </div>
            <a href="#contact" className="hidden rounded-full border border-gold/50 px-4 py-2 text-xs font-semibold text-champagne transition hover:bg-gold hover:text-black sm:inline-flex">{t.ctaContact}</a>
            <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-stone-300 md:hidden">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-white/10 bg-[#0b0b0a] px-6 py-4 md:hidden">{t.nav.map((label, i) => <a key={label} href={`#${ids[i]}`} onClick={closeMenu} className="block py-3 text-sm text-stone-300">{label}</a>)}</nav>}
      </header>

      <main>
        <section id="home" className="relative flex min-h-[760px] items-center pt-24 sm:min-h-[850px]">
          <div className="grid-bg absolute inset-0 opacity-70"/>
          <div className="pointer-events-none absolute -right-48 top-20 h-[580px] w-[580px] rounded-full bg-gold/[0.07] blur-[130px]"/>
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.25fr_.75fr]">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
              <motion.img variants={reveal} src="/Selim.jpg" alt="Selim Gharbi" className="mb-8 h-28 w-28 rounded-full object-cover object-[center_8%] ring-2 ring-gold/35 ring-offset-4 ring-offset-ink"/>
              <motion.div variants={reveal} className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-2 text-[10px] font-bold tracking-[.16em] text-champagne">
                <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_#c9a96e]"/> {t.available}
              </motion.div>
              <motion.p variants={reveal} className="mb-4 text-sm font-medium tracking-wide text-stone-400">{t.role} <span className="text-gold">·</span> Tunisia</motion.p>
              <motion.h1 variants={reveal} className="font-display text-5xl font-extrabold leading-[1.04] tracking-[-.055em] sm:text-7xl lg:text-[88px]">
                Selim<br/><span className="gold-text">Gharbi.</span>
              </motion.h1>
              <motion.p variants={reveal} className="mt-8 max-w-xl text-base leading-8 text-stone-400 sm:text-lg">{t.intro}</motion.p>
              <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-3">
                <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 text-xs font-bold text-black transition hover:bg-champagne">{t.ctaProjects}<ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a>
                <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-xs font-semibold text-stone-200 transition hover:border-gold/60 hover:text-champagne">{t.ctaContact}<ArrowRight size={15}/></a>
                <a href="/selim-gharbi-cv.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/20 px-5 py-3.5 text-xs font-semibold text-champagne transition hover:bg-gold/10"><Download size={14}/>{t.cv}</a>
              </motion.div>
              <motion.div variants={reveal} className="mt-12 flex items-center gap-5 text-stone-500">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-gold"><Github size={19}/></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-gold"><Linkedin size={19}/></a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-gold"><Mail size={19}/></a>
                <span className="h-4 w-px bg-white/15"/>
                <span className="flex items-center gap-2 text-xs"><MapPin size={13}/> Tunisia</span>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: .92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .25 }} className="relative mx-auto hidden w-full max-w-[410px] lg:block">
              <div className="absolute -inset-5 rounded-[2.5rem] border border-gold/15 rotate-6"/>
              <div className="absolute -inset-2 rounded-[2.3rem] border border-white/[0.07] -rotate-3"/>
              <div className="glass relative rounded-[2rem] p-8 shadow-glow">
                <div className="mb-8 flex items-center justify-between">
                  <span className="section-kicker">Developer profile</span>
                  <Sparkles size={17} className="text-gold"/>
                </div>
                <img src="/Selim.jpg" alt="Selim Gharbi" className="mb-8 h-28 w-28 rounded-2xl object-cover object-[center_8%] ring-1 ring-gold/30"/>
                <h3 className="font-display text-2xl font-bold">Selim Gharbi</h3>
                <p className="mt-2 text-sm text-stone-400">Full-Stack Developer</p>
                <div className="my-8 gold-line"/>
                <div className="space-y-4">
                  {[["01", "Backend & Microservices"], ["02", "Modern Web Applications"], ["03", "Mobile Development"]].map(([n, v]) => <div key={n} className="flex items-center gap-4"><span className="font-display text-xs text-gold">{n}</span><span className="text-sm text-stone-300">{v}</span></div>)}
                </div>
                <div className="mt-10 flex items-center justify-between rounded-xl border border-gold/15 bg-black/20 p-4">
                  <span className="text-xs text-stone-400">Next chapter</span><span className="text-xs font-bold text-champagne">PFE · 2027</span>
                </div>
              </div>
            </motion.div>
          </div>
          <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[.2em] text-stone-500 transition hover:text-gold sm:flex">{t.scroll}<ArrowDown size={13}/></a>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
          <SectionHeading tag={t.aboutTag} title={t.aboutTitle} accent={t.aboutAccent}/>
          <div className="grid items-start gap-12 lg:grid-cols-[260px_1fr]">
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative mx-auto w-full max-w-[260px] lg:mx-0">
              <div className="absolute -inset-2 rounded-[1.6rem] border border-gold/20 rotate-3"/>
              <img src="/Selim.jpg" alt="Selim Gharbi" className="relative aspect-[3/4] w-full rounded-[1.4rem] object-cover object-[center_10%] grayscale transition duration-500 hover:grayscale-0"/>
            </motion.div>
            <div>
              <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl text-base leading-8 text-stone-400">{t.aboutText}</motion.p>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {t.facts.map(([label, value]) => <div key={label} className="border-b border-white/[0.08] pb-4"><p className="text-xs text-stone-500">{label}</p><p className="mt-2 text-sm font-medium text-stone-200">{value}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-white/[0.06] bg-[#0d0d0c]">
          <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
            <SectionHeading tag={t.skillsTag} title={t.skillsTitle} accent="" text={t.skillsText}/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.skillGroups.map((group, i) => <motion.div key={group.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .08 }} className="card-border rounded-2xl bg-[#111110] p-6 transition hover:-translate-y-1 hover:border-gold/40">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/[0.09] text-gold">{[<Code2 size={19}/>, <Globe2 size={19}/>, <Database size={19}/>, <Sparkles size={19}/>][i]}</div>
                <h3 className="mb-5 font-display text-sm font-bold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-stone-400">{item}</span>)}</div>
              </motion.div>)}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
          <SectionHeading tag={t.experienceTag} title={t.experienceTitle} accent=""/>
          <div className="grid gap-14 lg:grid-cols-[1fr_.8fr]">
            <div className="relative space-y-8 before:absolute before:bottom-3 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-gold/70 before:to-transparent">
              {t.experience.map((item, i) => <motion.article key={item.org} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative pl-10">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-ink bg-gold shadow-[0_0_0_4px_rgba(201,169,110,.12)]"/>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[.16em] text-gold">{item.date}</p>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-400">{item.org}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-500">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">{item.tech.map(tag => <span key={tag} className="text-[10px] text-stone-400">#{tag.replaceAll(" ", "")}</span>)}</div>
              </motion.article>)}
            </div>
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="h-fit rounded-2xl border border-gold/20 bg-gradient-to-br from-[#17140f] to-[#10100f] p-7 sm:p-8">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold"><GraduationCap size={23}/></div>
              <p className="section-kicker mb-4">{t.education}</p>
              <h3 className="font-display text-xl font-bold leading-snug">{t.degree}</h3>
              <p className="mt-4 text-sm leading-6 text-stone-400">{t.school}</p>
              <div className="mt-8 gold-line"/>
              <p className="mt-5 text-xs font-semibold text-champagne">{t.expected}</p>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="border-y border-white/[0.06] bg-[#0d0d0c]">
          <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
            <SectionHeading tag={t.projectsTag} title={t.projectsTitle} accent={t.projectsAccent} text={t.projectsText}/>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.projects.map((project, i) => <motion.article key={project.name} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: (i % 3) * .07 }} className="group card-border flex min-h-[290px] flex-col rounded-2xl bg-[#111110] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-glow">
                <div className="mb-9 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.07] text-gold"><ProjectIcon type={project.icon}/></div>
                  <span className="text-xs text-stone-600">0{i + 1}</span>
                </div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[.14em] text-gold">{project.type}</p>
                <h3 className="font-display text-xl font-bold">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-stone-500">{project.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.stack.map(tag => <span key={tag} className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-stone-400">{tag}</span>)}</div>
              </motion.article>)}
            </div>
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-7xl px-5 py-32 text-center sm:px-8">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[100px]"/>
          <div className="relative mx-auto max-w-3xl">
            <p className="section-kicker mb-5">{t.contactTag}</p>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">{t.contactTitle}<br/><span className="gold-text">{t.contactAccent}</span></h2>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-stone-400 sm:text-base">{t.contactText}</p>
            <a href={`mailto:${profile.email}`} className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-xs font-bold text-black transition hover:bg-champagne"><Mail size={16}/>{t.emailMe}<ArrowUpRight size={15}/></a>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-stone-500">
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-gold"><Github size={15}/> GitHub <ExternalLink size={11}/></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-gold"><Linkedin size={15}/> LinkedIn <ExternalLink size={11}/></a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-gold"><Mail size={15}/> {profile.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-center sm:flex-row sm:px-8 sm:text-left">
          <a href="#home" className="font-display text-sm font-extrabold">SG<span className="gold-text">.</span></a>
          <p className="text-[11px] text-stone-600">© {new Date().getFullYear()} Selim Gharbi. {t.footer}</p>
          <a href="#home" className="text-[11px] text-stone-500 transition hover:text-gold">{t.backTop} ↑</a>
        </div>
      </footer>
    </div>
  );
}