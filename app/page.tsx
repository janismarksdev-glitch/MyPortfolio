"use client";

import Image from "next/image";
import { useEffect } from "react";

const skills = [
  ["01", "Core stack", "TypeScript · C# / .NET · Python · JavaScript · Advanced types · OOP · Functional programming"],
  ["02", "Architecture & systems", "Clean / Hexagonal architecture · Microservices · DDD · CQRS · Event-driven systems · Scalability"],
  ["03", "Backend & APIs", "Node.js · Express · ASP.NET Core · FastAPI · REST · GraphQL · gRPC · Auth · WebSockets"],
  ["04", "Frontend engineering", "React · Next.js · HTML · CSS · State management · SSR · Responsive UI · Accessibility"],
  ["05", "Data & persistence", "PostgreSQL · MySQL · SQL Server · MongoDB · Redis · SQLite · EF Core · Prisma · Query optimization"],
  ["06", "Cloud & delivery", "Git · Docker · Kubernetes · AWS · Azure · CI/CD · GitHub Actions · Linux · Terraform"],
  ["07", "Quality & security", "Unit / integration / E2E testing · Jest · Vitest · Playwright · xUnit · OWASP · TDD"],
  ["08", "Distributed systems", "Kafka · RabbitMQ · Caching · Load balancing · Observability · Monitoring · Mentoring · Reviews"],
  ["09", "AI & LLM integration", "OpenAI · Anthropic · Gemini · Agents · Tool calling · LangChain · LangGraph · Structured outputs"],
  ["10", "RAG & AI infrastructure", "Embeddings · Vector search · Pinecone · Qdrant · Chroma · Retrieval · Evaluation · Guardrails"],
];

const projects = [
  { n: "01", name: "Dogstudio", type: "Creative digital experience", url: "https://dogstudio.co", stack: "TypeScript / React / Node.js", img: "/projects/dogstudio.png", description: "A highly visual digital experience with expressive motion, design, and interactive storytelling.", color: "peach", shape:"✳", tag:"PLAYFUL BY DESIGN" },
  { n: "02", name: "Rivlux Media", type: "Media & digital platform", url: "https://rivluxmedia.com", stack: "TypeScript / React / Node.js", img: "/projects/rivlux-media.png", description: "A media-focused website with a bold visual identity and dynamic presentation.", color: "lavender", shape:"◌", tag:"DIGITAL PRESENCE" },
  { n: "03", name: "Rive", type: "Interactive design platform", url: "https://rive.app", stack: "TypeScript / React", img: "/projects/rive.png", description: "A product platform built around interactive animation and design tooling.", color: "mint", shape:"✦", tag:"INTERACTION FIRST" },
  { n: "04", name: "Lusion", type: "Immersive web experience", url: "https://lusion.co", stack: "TypeScript / React / Three.js", img: "/projects/lusion.png", description: "An immersive experience combining 3D, interaction, and digital storytelling.", color: "blue", shape:"◎", tag:"IMMERSIVE WEB" },
  { n: "05", name: "SnapSite CM", type: "Web application", url: "https://snapsitecm.com", stack: "TypeScript / C# .NET / Python", img: "/projects/snapsite-cm.png", description: "A full-stack project connecting modern frontend development with backend and Python engineering.", color: "yellow", shape:"↗", tag:"FULL-STACK BUILD" },
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <main className="portfolio">
    <div className="ambient ambient-one" />
    <div className="ambient ambient-two" />
    <nav className="nav">
      <a className="brand" href="#top">janis<span>✳</span></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#expertise">Expertise</a></div>
      <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
    </nav>

    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-blob blob-a" /><div className="hero-blob blob-b" /><div className="hero-blob blob-c" />
      <div className="hero-content">
        <div className="hero-kicker"><span className="status-dot" /> SOFTWARE ENGINEER & AI BUILDER <span className="kicker-year">PORTFOLIO ’26</span></div>
        <h1>Making digital<br/>things feel <span className="hero-highlight">alive<span className="sparkle">✳</span></span><span className="hero-period">.</span></h1>
        <div className="hero-bottom">
          <div className="hero-intro"><span className="hero-avatar">JM</span><div><strong>Janis Marks</strong><p>Senior Software Engineer</p></div></div>
          <p className="hero-description">I build thoughtful products, scalable systems, and AI-powered experiences—where engineering meets imagination.</p>
          <a className="round-link" href="#work">Explore my work <span>↓</span></a>
        </div>
      </div>
      <div className="hero-sticker"><span>FULL STACK</span><b>✳</b><span>AI INTEGRATION</span></div>
      <div className="hero-floating-note note-one">TYPE-SAFE ✦</div>
      <div className="hero-floating-note note-two">IDEAS → REALITY</div>
      <div className="hero-bottom-note"><span>BUILDING WITH CURIOSITY</span><span>AVAILABLE FOR GREAT IDEAS ↗</span></div>
    </section>

    <div className="ticker" aria-label="Technology stack">
      <div className="ticker-track">
        {Array.from({ length: 2 }).map((_, i) => <div className="ticker-group" key={i}>
          <span>TypeScript</span><i>✳</i><span>C# / .NET</span><i>✦</i><span>Python</span><i>✳</i><span>React</span><i>✦</i><span>AI Integration</span><i>✳</i><span>System Design</span><i>✦</i>
        </div>)}
      </div>
    </div>

    <section className="work-section" id="work">
      <div className="section-heading reveal"><div><span className="label-pill">✳ SELECTED WORK</span><h2>Some things I’ve<br/><span>put into the world.</span></h2></div><p>Digital experiences and products<br/>that bring ideas to life.</p></div>
      <div className="project-grid">{projects.map((p,i)=><article className={`project-card ${p.color} ${i===4?"project-wide":""} reveal`} key={p.n} style={{ transitionDelay: `${(i % 2) * 100}ms` }}>
        <div className="project-card-head"><span className="project-index">PROJECT {p.n}</span><span className="project-kind">{p.type}</span></div>
        <div className="project-art"><div className="art-shape">{p.shape}</div><span className="project-tag">{p.tag}</span>
          <a className="project-shot" href={p.url} target="_blank" rel="noreferrer" aria-label={`Visit ${p.name}`}><Image src={p.img} alt={`${p.name} website screenshot`} fill sizes="(max-width: 800px) 100vw, 50vw"/></a>
          <a className="project-arrow" href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`}>↗</a>
        </div>
        <div className="project-details"><div><h3>{p.name}</h3><p>{p.description}</p></div><div className="project-tech"><span>BUILT WITH</span><p>{p.stack}</p><a href={p.url} target="_blank" rel="noreferrer">Visit live site ↗</a></div></div>
      </article>)}</div>
    </section>

    <section className="about-section" id="about">
      <div className="about-left reveal"><span className="label-pill label-dark">✳ A LITTLE ABOUT ME</span><h2>Curious mind.<br/><span>Builder’s heart.</span></h2><div className="about-orbit"><span className="orbit-star">✳</span><span className="orbit-ring" /><span className="orbit-caption">DESIGN × CODE × AI</span><span className="orbit-dot" /></div></div>
      <div className="about-right reveal"><p className="about-lead">I love turning complex problems into simple, reliable, and genuinely useful software.</p><p>My work spans full-stack and backend development, software architecture, APIs, databases, cloud applications, and system integration. I care about clean boundaries, maintainable code, performance, and systems that work in production.</p><p>I’m also bringing AI into practical products—integrating LLMs, RAG, agents, and intelligent services into real-world workflows.</p><div className="values"><span>↗ Thoughtful engineering</span><span>↗ Practical AI</span><span>↗ Reliable delivery</span></div></div>
    </section>

    <section className="expertise-section" id="expertise"><div className="section-heading reveal"><div><span className="label-pill">✳ WHAT I BRING</span><h2>My toolbox is<br/><span>pretty versatile.</span></h2></div><p>Strong foundations, modern stacks,<br/>and a continuous learning mindset.</p></div>
      <div className="skills-grid">{skills.map((s,i)=><div className={`skill-card skill-${i%5} reveal`} key={s[0]} style={{ transitionDelay: `${(i % 4) * 70}ms` }}><span className="skill-num">{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><span className="skill-spark">{["✳","⌘","↗","✦","◉"][i%5]}</span></div>)}</div>
    </section>

    <section className="contact-section" id="contact"><div className="contact-sun">✳</div><div className="contact-orb" /><span className="label-pill label-dark">HAVE A GOOD ONE IN MIND?</span><h2>Let’s make<br/><span>something great.</span></h2><p>Have a product idea, a technical challenge, or a collaboration in mind?<br/>I’d love to hear about it.</p><a className="contact-button" href="mailto:YOUR_EMAIL@example.com">Say hello <span>↗</span></a><div className="contact-footer"><span>JANIS MARKS · SOFTWARE ENGINEER & AI BUILDER</span><span>MADE WITH CURIOSITY, AND A LITTLE ✳</span></div></section>
    <footer className="footer"><a className="brand" href="#top">janis<span>✳</span></a><span>© 2026 · Built with care</span><div><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
  </main>;
}
