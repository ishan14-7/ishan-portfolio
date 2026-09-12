"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, FileText, Briefcase, GraduationCap, Award, Send, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground pb-20">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="font-bold text-lg cursor-pointer"
          >
            Ishan Gupta
          </motion.div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <motion.a whileHover={{ y: -2 }} href="#about" className="hover:text-primary transition-colors">About</motion.a>
            <motion.a whileHover={{ y: -2 }} href="#experience" className="hover:text-primary transition-colors">Experience</motion.a>
            <motion.a whileHover={{ y: -2 }} href="#projects" className="hover:text-primary transition-colors">Projects</motion.a>
            <motion.a whileHover={{ y: -2 }} href="#contact" className="hover:text-primary transition-colors">Contact</motion.a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-8 space-y-24 pt-16">
        
        {/* Hero Section */}
        <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-start md:gap-16 lg:gap-32 pt-8 md:pt-16">
          <div className="space-y-6 flex-1 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Hi, I'm <span className="text-primary">Ishan Gupta</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Managing Data @ BuildCores | IT Student
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-lg mx-auto md:mx-0 text-muted-foreground"
            >
              Hi, I am an Information Technology student currently trying my hands on with high end custom PCs and consumer electronics. My work consists of understanding anything and everything about this market.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#contact">
                  <Button className="group">
                    <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Contact Me
                  </Button>
                </a>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="mailto:ishangupta14.7@gmail.com">
                  <Button variant="outline" className="group">
                    <Send className="mr-2 h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Email Me
                  </Button>
                </a>
              </motion.div>
              
              <div className="flex items-center gap-4 ml-4">
                <motion.a 
                  whileHover={{ scale: 1.2, rotate: 5 }} 
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/ishan1407" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaGithub className="h-7 w-7" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, rotate: -5 }} 
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/ishan1407/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaLinkedin className="h-7 w-7" />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 relative"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative z-10">
              <Avatar className="h-56 w-56 border-4 border-primary/20 shadow-2xl">
                <AvatarImage src="/profile.jpg" alt="Ishan Gupta" className="object-cover" />
                <AvatarFallback>IG</AvatarFallback>
              </Avatar>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-6 scroll-mt-20">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I am an Information Technology student currently trying my hands on with high end custom PCs and consumer electronics. My work consists of understanding anything and everything about this market.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a student, I am eager to explore new domains, be it software, hardware or amalgamation of both. I strongly believe in learning in public, sharing my journey of newbie student to someone credible in the industry.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["React", "Next.js", "Tailwind CSS", "Product Strategy", "Market Research", "Hardware", "Consumer Electronics", "Data Management"].map((skill) => (
                  <motion.div key={skill} whileHover={{ scale: 1.1, y: -2 }}>
                    <Badge variant="secondary" className="text-sm px-3 py-1 cursor-default">{skill}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="space-y-12 scroll-mt-20">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" /> Experience
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Database Associate", company: "BuildCores", date: "Aug 2025 - Present", location: "New York City Metropolitan Area", desc: "Managing data and technical information for custom PC components." },
                { title: "Social Media Manager", company: "Empress Computers", date: "Apr 2024 - Nov 2025", location: "Lucknow, UP", desc: "Managed social media presence and created engaging content for PC components and electronics." },
                { title: "Content Writer", company: "Spinfluence Media", date: "Jan 2025 - Sep 2025", location: "Lucknow, UP", desc: "Wrote engaging content focused on social media management and tech domains." }
              ].map((job, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="flex flex-col h-full border-muted hover:border-primary/50 transition-colors shadow-sm hover:shadow-md cursor-default">
                    <CardHeader>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">{job.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-xs text-muted-foreground mb-3">{job.date} &middot; {job.location}</p>
                      <p className="text-sm leading-relaxed">{job.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" /> Education
                </h2>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
              </div>
              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="border-l-2 border-primary/50 pl-4 py-1">
                  <h3 className="font-semibold text-lg">KIET Group of Institutions</h3>
                  <p className="text-muted-foreground text-sm font-medium">Bachelor of Technology - BTech, Information Technology</p>
                  <p className="text-xs text-muted-foreground mt-1">Aug 2024 - Aug 2028</p>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="border-l-2 border-muted pl-4 py-1">
                  <h3 className="font-semibold text-lg">City Montessori School</h3>
                  <p className="text-xs text-muted-foreground mt-1">Apr 2016 - Apr 2022</p>
                </motion.div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" /> Certifications
                </h2>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
              </div>
              <div className="space-y-6">
                {[
                  "AWS Certified Cloud Practitioner",
                  "AWS Certified AI Practitioner",
                  "AWS Certified CloudOps Engineer – Associate"
                ].map((cert, idx) => (
                  <motion.div key={idx} whileHover={{ x: 5 }} className="border-l-2 border-primary pl-4 py-1">
                    <h3 className="font-medium">{cert}</h3>
                    <p className="text-xs text-muted-foreground mt-1">Amazon Web Services (AWS)</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          
          <BentoGrid className="max-w-4xl mx-auto">
            <BentoGridItem
              title="Deploy AI F1"
              description="An AI-driven project showcasing modern web deployment and intelligent features."
              className="md:col-span-2 relative overflow-hidden"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative overflow-hidden">
                   <img src="/project-1.png" alt="Deploy AI F1 Preview" className="absolute inset-0 w-full h-full object-cover object-top group-hover/bento:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/10 group-hover/bento:bg-transparent transition-colors duration-500"></div>
                </div>
              }
              icon={
                <a href="https://deploy-ai-f1-ishan14-7s-projects.vercel.app/" target="_blank" rel="noreferrer" className="inline-block mt-4">
                  <Button variant="default" size="sm" className="group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Visit Project
                  </Button>
                </a>
              }
            />
            <BentoGridItem
              title="KYA — Know Your Agent"
              description="A platform designed to understand and interact with intelligent agents efficiently."
              className="md:col-span-1"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative overflow-hidden">
                   <img src="/project-2.png" alt="KYA Preview" className="absolute inset-0 w-full h-full object-cover object-top group-hover/bento:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/10 group-hover/bento:bg-transparent transition-colors duration-500"></div>
                </div>
              }
              icon={
                <a href="https://kyaa.vercel.app/#/home" target="_blank" rel="noreferrer" className="inline-block mt-4">
                  <Button variant="default" size="sm" className="group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Visit Project
                  </Button>
                </a>
              }
            />
          </BentoGrid>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8 scroll-mt-20 max-w-2xl mx-auto pt-10">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          </div>
          <p className="text-muted-foreground text-center">
            Have a project in mind or just want to say hi? Feel free to reach out to me at <a href="mailto:ishangupta14.7@gmail.com" className="text-primary hover:underline font-medium">ishangupta14.7@gmail.com</a>.
          </p>
        </section>
        
      </main>
      
      {/* Footer */}
      <footer className="mt-24 border-t py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ishan Gupta. All rights reserved.</p>
        <p className="mt-1 flex items-center justify-center gap-1">
          Built with Next.js, Shadcn UI, and <a href="https://tweakcn.com" target="_blank" rel="noreferrer" className="underline hover:text-primary transition-colors font-medium">Tweakcn</a>
        </p>
      </footer>
    </div>
  );
}
