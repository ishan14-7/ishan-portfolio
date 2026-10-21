import Image from "next/image";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CopyEmailButton } from "@/components/copy-email-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn, pressable } from "@/lib/utils";

const EMAIL = "ishangupta14.7@gmail.com";

const profiles = [
  { label: "GitHub", href: "https://github.com/ishan1407", Icon: FaGithub, tilt: "hover:rotate-6" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ishan1407/", Icon: FaLinkedin, tilt: "hover:-rotate-6" },
];

// The send icon takes off toward the top right while the button is hovered.
const sendIcon =
  "transition-transform duration-200 group-hover/button:-translate-y-1 group-hover/button:translate-x-1 motion-reduce:transition-none";

const experience = [
  {
    role: "Database Associate",
    company: "BuildCores",
    dates: "Aug 2025 – Present",
    location: "New York City",
    summary: "Manage the technical data behind custom PC components.",
  },
  {
    role: "Content Writer",
    company: "Spinfluence Media",
    dates: "Jan 2025 – Sep 2025",
    location: "Lucknow",
    summary: "Wrote content on social media and tech.",
  },
  {
    role: "Social Media Manager",
    company: "Empress Computers",
    dates: "Apr 2024 – Nov 2025",
    location: "Lucknow",
    summary: "Ran social media and made content about PC components and electronics.",
  },
];

const education = [
  { school: "KIET Group of Institutions", detail: "B.Tech, Information Technology", dates: "2024 – 2028" },
  { school: "City Montessori School", dates: "2016 – 2022" },
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "AWS Certified AI Practitioner",
  "AWS Certified CloudOps Engineer – Associate",
];

type Project = { name: string; summary: string; image: string; href: string; repo: string; role?: string };

const projects: Project[] = [
  {
    name: "Deploy AI",
    summary: "F1 session explorer. Pick a season, Grand Prix, session and driver, and it loads that session on the circuit map.",
    href: "https://deploy-ai-f1-ishan14-7s-projects.vercel.app/",
    repo: "https://github.com/ishan14-7/deploy-ai-f1",
    image: "/project-deploy-ai.png",
  },
  {
    name: "GraphRCA",
    role: "Frontend design · Collaborator",
    summary: "Root-cause analysis for cross-team failures. Department agents trace an alert through a FalkorDB company graph and come back with the cause, who to call, and a source for every claim.",
    href: "https://axon.aadijain.dev",
    repo: "https://github.com/aadijaiin/GraphRCA",
    image: "/project-graphrca.png",
  },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20">
      <h2 id={`${id}-title`} className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6">
      <header className="sticky top-0 z-10 -mx-6 flex h-14 items-center justify-between bg-background/80 px-6 backdrop-blur">
        <a href="#top" className="font-medium">
          Ishan Gupta
        </a>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-6">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <main id="top" className="space-y-20 pt-14 pb-24 sm:pt-20">
        <section className="animate-in fade-in slide-in-from-bottom-2 duration-500 motion-reduce:animate-none">
          <Image
            src="/profile.jpg"
            alt="Ishan Gupta"
            width={96}
            height={96}
            preload
            className="size-24 rounded-full object-cover"
          />
          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">Ishan Gupta</h1>
          <p className="mt-2 text-muted-foreground">Database Associate at BuildCores · IT student at KIET</p>
          <div className="mt-6 max-w-xl space-y-4 leading-relaxed">
            <p>
              I work with high-end custom PCs, and most of my job is learning everything I can about that
              market.
            </p>
            <p className="text-muted-foreground">
              I&apos;m interested in software, hardware, and the places they overlap, and I&apos;d rather learn in
              public than wait until I feel like an expert.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <a href="#contact" className={cn(buttonVariants({ size: "lg" }), pressable)}>
              <Mail className="group-hover/button:animate-bounce motion-reduce:animate-none" />
              Contact me
            </a>
            <a href={`mailto:${EMAIL}`} className={cn(buttonVariants({ variant: "outline", size: "lg" }), pressable)}>
              <Send className={sendIcon} />
              Email me
            </a>
            <div className="flex items-center gap-4">
              {profiles.map(({ label, href, Icon, tilt }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={cn(
                    "text-muted-foreground transition-[color,scale,rotate] duration-200 hover:scale-120 hover:text-primary active:scale-90 motion-reduce:transition-colors motion-reduce:hover:scale-100 motion-reduce:hover:rotate-0",
                    tilt
                  )}
                >
                  <Icon className="size-6" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <Section id="work" title="Experience">
          <ol className="space-y-8">
            {experience.map((job) => (
              <li key={job.company} className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-6">
                <div>
                  <h3 className="font-medium">
                    {job.role} <span className="text-muted-foreground">· {job.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{job.summary}</p>
                </div>
                <p className="text-sm text-muted-foreground tabular-nums sm:text-right">
                  {job.dates}
                  <span className="block text-xs">{job.location}</span>
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <div className="grid gap-20 sm:grid-cols-2 sm:gap-10">
          <Section id="education" title="Education">
            <ul className="space-y-5">
              {education.map((item) => (
                <li key={item.school}>
                  <h3 className="font-medium">{item.school}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.detail && `${item.detail} · `}
                    <span className="tabular-nums">{item.dates}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="certifications" title="Certifications">
            <ul className="space-y-3 text-sm">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </Section>
        </div>

        <Section id="projects" title="Projects">
          <ul className="grid gap-10 sm:grid-cols-2 sm:gap-6">
            {projects.map((project) => (
              <li key={project.name}>
                <a href={project.href} target="_blank" rel="noreferrer" className="group block">
                  <div className="overflow-hidden rounded-lg border">
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      width={2560}
                      height={1600}
                      sizes="(min-width: 640px) 360px, 100vw"
                      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
                    />
                  </div>
                  <h3 className="mt-4 flex items-center gap-1 font-medium">
                    {project.name}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-[color,translate] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary motion-reduce:transition-none" />
                  </h3>
                  {project.role && <p className="mt-0.5 text-xs text-muted-foreground">{project.role}</p>}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
                >
                  Source code
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-xl leading-relaxed">Email is the best way to reach me.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={`mailto:${EMAIL}`} className={cn(buttonVariants({ size: "lg" }), pressable)}>
              <Send className={sendIcon} />
              Email me
            </a>
            <CopyEmailButton email={EMAIL} />
          </div>
        </Section>
      </main>

      <footer className="border-t py-8 text-sm text-muted-foreground">© {new Date().getFullYear()} Ishan Gupta</footer>
    </div>
  );
}
