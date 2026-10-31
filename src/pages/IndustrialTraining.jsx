import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Code2,
  Layers,
  BarChart3,
  Sparkles,
  ShieldCheck,
  Megaphone,
  CheckCircle2,
  Users,
  GraduationCap,
  Award,
  Pause,
  Play,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import heroVideo from "../assets/images/softcrowd-hero-vid.mp4";
import heroPoster from "../assets/images/why-choose-us.jpg";

const IndustrialTraining = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const learn = [
    "Industry-relevant technologies",
    "Real-world project development",
    "Development tools and workflows",
    "Version control and collaboration",
    "Coding standards and best practices",
    "Debugging and problem solving",
    "Project documentation",
    "Professional communication",
    "Teamwork and workplace practices",
  ];

  const tracks = [
    { icon: Globe, title: "Web Development", desc: "HTML, CSS, JavaScript, React, Node.js, PHP and more." },
    { icon: Smartphone, title: "Mobile App Development", desc: "Flutter and other mobile technologies." },
    { icon: Code2, title: "Java Development", desc: "Core and enterprise Java application development." },
    { icon: Layers, title: "Python & Full Stack Development", desc: "End-to-end application development with Python." },
    { icon: BarChart3, title: "Data Science & Analytics", desc: "Working with real data pipelines and dashboards." },
    { icon: Sparkles, title: "AI & Machine Learning", desc: "Practical model building and applied ML projects." },
    { icon: ShieldCheck, title: "Software Testing", desc: "Manual and automated testing practices." },
    { icon: Megaphone, title: "Digital Marketing & SEO", desc: "Campaign strategy, SEO, and analytics." },
  ];

  const benefits = [
    "Practical hands-on training",
    "Live project experience",
    "Industry exposure",
    "Mentor guidance",
    "Team-based learning",
    "Technical skill development",
    "Professional environment",
    "Completion certificate",
    "Career guidance",
  ];

  const whoCanJoin = [
    "Polytechnic students",
    "Engineering students",
    "Computer Science students",
    "IT students",
    "BCA / MCA students",
    "Students looking for practical IT experience",
  ];

  return (
    <>
      <section className="relative h-[75vh] min-h-[560px] w-full overflow-hidden bg-slate-900">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay muted loop playsInline poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/50" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pt-24 lg:px-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-6 bg-sky-500" />
            Industrial Training
          </div>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Industrial Training for Real-World IT Experience
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Bridge the gap between academic learning and industry requirements with practical,
            project-based IT training.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
            >
              Enquire Now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <button
          onClick={togglePlay}
          aria-label={playing ? 'Pause video' : 'Play video'}
          className="absolute bottom-8 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 lg:right-8"
        >
          {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>
      </section>

      {/* About */}
      <section className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">About Industrial Training</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            Academic knowledge is the foundation. This is the practice.
          </h2>
          <p className="mt-6 leading-relaxed text-slate-500">
            Our Industrial Training Programs are designed to help students understand how IT
            companies actually work. Students get exposure to development processes, modern
            technologies, project environments, teamwork, and professional practices. The focus
            isn't only on learning technology — it's on applying that knowledge to practical
            projects.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3">
          {learn.map((item) => (
            <div key={item} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-4">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-sky-500" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tracks */}
      <section className="bg-slate-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Tracks</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            Technology tracks
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((t) => (
              <div key={t.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                  <t.icon size={20} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + who can join */}
      <section className="bg-slate-950 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">Benefits</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white">
              Program benefits
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2.5">
                  <Award size={16} className="shrink-0 text-sky-400" />
                  <span className="text-sm text-white/70">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">Eligibility</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white">
              Who can join?
            </h2>
            <div className="mt-8 space-y-3">
              {whoCanJoin.map((w) => (
                <div key={w} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                  <GraduationCap size={16} className="shrink-0 text-sky-400" />
                  <span className="text-sm text-white/70">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 rounded-3xl bg-slate-50 p-10 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
              <Users size={22} />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Turn classroom knowledge into industry skills</p>
              <p className="text-sm text-slate-500">Join our Industrial Training Program and gain practical experience.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Enquire About Industrial Training
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default IndustrialTraining;
