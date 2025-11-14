"use client";

import { useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiPython,
  SiGithub,
  SiPostman,
  SiGoland,
  SiLinkedin,
  SiGmail,
} from "react-icons/si";


export default function Home() {

  const skills = [
    { name: "Next.js", icon: <SiNextdotjs size={32} /> },
    { name: "React", icon: <SiReact size={32} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
    { name: "Node.js", icon: <SiNodedotjs size={32} /> },
    { name: "Golang", icon: <SiGoland size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "PHP", icon: <SiPhp size={32} /> },
    { name: "Laravel", icon: <SiLaravel size={32} /> },
    { name: "Python", icon: <SiPython size={32} /> },
    { name: "REST API", icon: <SiPostman size={32} /> },
    { name: "MySQL", icon: <SiMysql size={32} /> },
    { name: "GitHub", icon: <SiGithub size={32} /> },
  ];
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="
  fixed top-4 left-1/2 -translate-x-1/2 
  w-auto px-8 py-3 
  bg-gray-800/60 backdrop-blur-xl 
  rounded-2xl shadow-xl 
  border border-white/10 
  flex items-center gap-6 
  z-50
">
  <a 
    href="#home" 
    className="text-gray-300 hover:text-white transition-all duration-200 font-medium"
  >
    Home
  </a>

  <a 
    href="#about" 
    className="text-gray-300 hover:text-white transition-all duration-200 font-medium"
  >
    About
  </a>

  <a 
    href="#skills" 
    className="text-gray-300 hover:text-white transition-all duration-200 font-medium"
  >
    Skills
  </a>

  <a 
    href="#projects" 
    className="text-gray-300 hover:text-white transition-all duration-200 font-medium"
  >
    Projects
  </a>

  <a 
    href="#contact" 
    className="text-gray-300 hover:text-white transition-all duration-200 font-medium"
  >
    Contact
  </a>
</nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section
  id="home"
  className="h-screen flex flex-col justify-center items-center text-center px-4"
>
  <h1
    className="
      text-5xl md:text-6xl font-extrabold mb-6 leading-tight 
      opacity-0 animate-fade-up animation-delay-200
    "
  >
    Hi, I’m <span className="text-blue-400">Alfindo Oktavian</span> 👋
  </h1>

  <p
    className="
      text-gray-300 text-lg md:text-xl max-w-2xl opacity-0 
      animate-fade-up animation-delay-500
    "
  >
    A Web Developer specializing in Next.js, React, and modern UI.
    Passionate about building fast, clean, and responsive web experiences.
  </p>

  <a
    href="#projects"
    className="
      mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition 
      rounded-full text-white font-medium shadow-lg 
      opacity-0 animate-fade-up animation-delay-800
      hover:shadow-blue-500/30 hover:scale-105
    "
  >
    View Projects
  </a>
</section>


{/* About */}
<section
  id="about"
  className="min-h-screen flex justify-center items-center px-6 md:px-10"
>
  <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-16">

    {/* Left Text */}
    <div className="flex-1 max-w-xl text-center md:text-left">
      <h2
        className="
          text-4xl font-bold mb-6
          opacity-0 animate-fade-up animation-delay-200
        "
      >
        About Me
      </h2>

      <p
        className="
          text-gray-300 text-lg leading-relaxed
          opacity-0 animate-fade-up animation-delay-500
        "
      >
        I'm a passionate web developer who enjoys building modern, high-performance,
        and visually clean websites. I specialize in Next.js, React, TypeScript,
        and TailwindCSS. I love creating interfaces that feel smooth, responsive,
        and user-friendly.
        <br /><br />
        With backend experience in Node.js, Express, and MySQL, I enjoy developing 
        full-stack applications that are not only functional but also scalable and
        easy to maintain.
      </p>
    </div>

    {/* Right Image */}
    <div
      className="
        flex-1 flex justify-center
        opacity-0 animate-fade-up animation-delay-800
      "
    >
      <div className="relative group w-72 h-72 md:w-80 md:h-80">

        {/* Glow */}
        <div
          className="
            absolute inset-0
            bg-blue-500/25 blur-3xl rounded-full
            group-hover:bg-blue-400/30
            transition-all duration-500
          "
        />

        {/* Image */}
        <img
          src="/alfindo1.png"
          alt="Profile"
          className="
            relative z-10
            w-full h-full object-cover
            rounded-full
            shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            ring-2 ring-white/10
            group-hover:scale-105
            transition-all duration-500
          "
        />
      </div>
    </div>

  </div>
</section>



{/* Skills */}
<section
      id="skills"
      className="
        min-h-screen 
        flex flex-col justify-center items-center
        px-6 md:px-20
        text-center
      "
    >
      <h2
        className="
          text-4xl font-bold mb-12
          opacity-0 animate-fade-up animation-delay-200
        "
      >
        Skills
      </h2>

      <div
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4
          gap-6 w-full max-w-4xl
        "
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="
              p-6 bg-gray-800/70 rounded-2xl border border-gray-700 shadow-xl 
              flex flex-col justify-center items-center gap-3
              cursor-pointer select-none
              transition-all duration-300
              hover:scale-110 hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(0,212,255,0.35)]
              backdrop-blur-sm
              opacity-0 animate-fade-up
            "
            style={{ animationDelay: `${300 + index * 100}ms` }}
          >
            <div className="text-cyan-300">{skill.icon}</div>
            <span className="font-medium tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>

    <section
  id="projects"
  className="min-h-screen flex flex-col justify-center px-6 md:px-20"
>
  <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
    Projects
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div
      className="
        group bg-gray-800 rounded-xl border border-gray-700 overflow-hidden 
        shadow-xl hover:shadow-2xl hover:border-gray-500
        transition-all duration-300 hover:-translate-y-1
      "
    >
      <div className="overflow-hidden">
        <img
          src="/djakartalaundry2.png"
          alt="Project 1"
          className="w-full h-40 object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold group-hover:text-white transition">
          Djakarta Laundry
        </h3>
        <p
          className="
            text-gray-400 mt-2 leading-relaxed text-sm
            group-hover:text-gray-300 transition-opacity duration-300
          "
        >
          A modern laundry application with transaction management and order tracking.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="
        group bg-gray-800 rounded-xl border border-gray-700 overflow-hidden 
        shadow-xl hover:shadow-2xl hover:border-gray-500
        transition-all duration-300 hover:-translate-y-1
      "
    >
      <div className="overflow-hidden">
        <img
          src="/todos.png"
          alt="Project 2"
          className="w-full h-40 object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold group-hover:text-white transition">
          Todo List
        </h3>
        <p
          className="
            text-gray-400 mt-2 leading-relaxed text-sm
            group-hover:text-gray-300 transition-opacity duration-300
          "
        >
          A productivity app to manage tasks, with features to add, edit, delete, and mark tasks as complete.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="
        group bg-gray-800 rounded-xl border border-gray-700 overflow-hidden 
        shadow-xl hover:shadow-2xl hover:border-gray-500
        transition-all duration-300 hover:-translate-y-1
      "
    >
      <div className="overflow-hidden">
        <img
          src="/smartparking.png"
          alt="Project 3"
          className="w-full h-40 object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold group-hover:text-white transition">
          Smart Parking Management
        </h3>
        <p
          className="
            text-gray-400 mt-2 leading-relaxed text-sm
            group-hover:text-gray-300 transition-opacity duration-300
          "
        >
          A smart parking management system to track available parking slots, vehicle entry/exit, and generate parking reports.
        </p>
      </div>
    </div>

  </div>
</section>



{/* Contact */}
<section
  id="contact"
  className="min-h-screen flex justify-center items-center px-6 md:px-20 bg-transparent"
>
  <div className="w-full max-w-5xl bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Left Info */}
    <div className="flex flex-col justify-center gap-5">
      <h2 className="text-4xl font-bold opacity-0 animate-fade-up animation-delay-200">
        Contact
      </h2>

      <p className="text-gray-300 leading-relaxed opacity-0 animate-fade-up animation-delay-400">
        Interested in working together or have a project idea? Feel free to reach out — I typically reply within a day.
      </p>

      <div className="flex flex-col gap-4 mt-2 opacity-0 animate-fade-up animation-delay-600">

        {/* Email */}
<a
  href="mailto:alvinajarama@gmail.com"
  className="flex items-center gap-3 text-gray-200 hover:text-white transition"
>
  <svg
    className="w-7 h-7 text-blue-400 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" strokeLinecap="round"/>
    <path d="M21 8.5L12 13 3 8.5" strokeLinecap="round"/>
  </svg>
  <span className="font-medium">alvinajarama@gmail.com</span>
</a>

{/* Location */}
<div className="flex items-center gap-3 text-gray-400">
  <svg
    className="w-6 h-6 text-indigo-300 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
  Ponorogo, Indonesia
</div>

{/* Socials */}
<div className="flex items-center gap-4 mt-2 flex-wrap overflow-visible">
  {/* GitHub */}
  <a
    href="https://github.com/alfindooktavian"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-md hover:bg-white/5 transition flex-shrink-0 flex-grow-0"
  >
    <svg
      className="w-8 h-8 text-gray-200"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.287-1.552 3.293-1.23 3.293-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.813 1.102.813 2.222 0 1.605-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.795 24 17.296 24 12c0-6.63-5.373-12-12-12z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/alfindo-oktavian-ramadhan-186670387"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-md hover:bg-white/5 transition flex-shrink-0 flex-grow-0"
  >
    <svg
      className="w-8 h-8 text-blue-300"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.789-1.75-1.762s.784-1.762 1.75-1.762 1.75.789 1.75 1.762-.784 1.762-1.75 1.762zm13.25 11.268h-3v-5.604c0-1.338-.026-3.065-1.867-3.065-1.868 0-2.154 1.46-2.154 2.969v5.7h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.565 2.838-1.565 3.035 0 3.6 1.998 3.6 4.593v5.605z"/>
    </svg>
  </a>
</div>

      </div>
    </div>

    {/* Right Form */}
    <div className="flex flex-col justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
        
          const nameInput = form.elements.namedItem("name") as HTMLInputElement;
          const emailInput = form.elements.namedItem("email") as HTMLInputElement;
          const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;
        
          const name = nameInput.value.trim();
          const email = emailInput.value.trim();
          const message = messageInput.value.trim();
        
          if (!name || !email || !message) return alert("Please fill all fields.");
        
          const subject = encodeURIComponent(`Portfolio message from ${name}`);
          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
          window.location.href = `mailto:alvinajarama@gmail.com?subject=${subject}&body=${body}`;
        }}
        
        className="grid grid-cols-1 gap-4"
      >
        {/* Inputs */}
        <div className="flex flex-wrap gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your name"
            className="min-w-0 flex-1 bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="min-w-0 flex-1 bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your message"
          rows={6}
          className="w-full bg-gray-900/40 border border-white/10 rounded-lg px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
        <button
  type="submit"
  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
>
  Send Message
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
</button>


          <span className="text-sm text-gray-400">
            Or email:{" "}
            <a href="mailto:alvinajarama@gmail.com" className="text-blue-400 underline">
              alvinajarama@gmail.com
            </a>
          </span>
        </div>
      </form>
    </div>

  </div>
</section>
{/* Footer */}
<footer className="w-full bg-gray-900/80 backdrop-blur-md border-t border-white/10 mt-20">
  <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Copyright */}
    <span className="text-gray-400 text-sm md:text-base">
      © {new Date().getFullYear()} Alfindo Oktavian. All rights reserved.
    </span>

    {/* Social Icons */}
    <div className="flex items-center gap-5">
      {/* GitHub */}
      <a
        href="https://github.com/alfindooktavian"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        <SiGithub size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/alfindo-oktavian-ramadhan-186670387"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
      >
        <SiLinkedin size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:alvinajarama@gmail.com"
        className="text-gray-400 hover:text-red-400 transition-colors duration-300"
      >
        <SiGmail size={24} />
      </a>
    </div>

  </div>
</footer>

    </main>
    
  );
}
