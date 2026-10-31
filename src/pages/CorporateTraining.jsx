import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  Code2,
  Smartphone,
  BarChart3,
  Shield,
  Search,
  ClipboardCheck,
  Layers,
  PenTool,
  Award,
  Wifi,
  Cloud,
  Pause,
  Play,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import heroVideo from "../assets/images/softcrowd-hero-vid.mp4";
import heroPoster from "../assets/images/why-choose-us.jpg";

const CorporateTraining = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const areas = [
    {
      icon: Code2,
      title: "Development",
      items: ["Java", "Python", ".NET", "PHP", "React", "Node.js", "Full Stack Development"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      items: ["Flutter", "Android", "Cross-platform App Development"],
    },
    {
      icon: BarChart3,
      title: "Data & AI",
      items: ["Data Science", "Data Analytics", "Artificial Intelligence", "Machine Learning"],
    },
    {
      icon: Shield,
      title: "Other Technology Areas",
      items: ["Software Testing", "DevOps", "Cloud Technologies", "Cyber Security", "Digital Marketing"],
    },
  ];

  const whyUs = [
    "Customized training programs",
    "Practical and project-based learning",
    "Industry-relevant technologies",
    "Experienced trainers",
    "Training based on employee skill levels",
    "Online and offline training options",
    "Flexible training schedules",
    "Real-world examples and use cases",
  ];

  const process = [
    { icon: Search, title: "Understand Requirements", desc: "We understand your organization's training needs." },
    { icon: ClipboardCheck, title: "Skill Assessment", desc: "We identify the current skill level of participants." },
    { icon: Layers, title: "Customized Training Plan", desc: "We prepare a training program according to your requirements." },
    { icon: PenTool, title: "Practical Training", desc: "Participants learn through practical sessions and real-world examples." },
    { icon: Award, title: "Assessment & Feedback", desc: "We evaluate learning outcomes and provide feedback." },
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
            Corporate Training
          </div>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Corporate Training Programs for a Future-Ready Workforce
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Upskill your employees with practical, technology-focused training designed around
            your organization's requirements.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
            >
              Request Corporate Training
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">About Corporate Training</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            Training built around your stack, not a generic syllabus
          </h2>
          <p className="mt-6 leading-relaxed text-slate-500">
            Technology is continuously evolving, and organizations need skilled teams to stay
            competitive. Our Corporate Training Programs help organizations improve employee
            skills through practical, customized training. We work with companies to understand
            their requirements and build programs based on their technology stack, business
            objectives, and employee skill levels.
          </p>
        </div>
      </section>

      {/* Training areas */}
      <section className="bg-slate-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Curriculum</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            Our corporate training areas
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                  <area.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{area.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-500">
                  {area.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-400" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-slate-950 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">Why choose us</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-white sm:text-4xl">
            Why choose our corporate training?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Award size={18} className="mt-0.5 shrink-0 text-sky-400" />
                <p className="text-sm text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Process</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            Our training process
          </h2>
          <div className="relative mt-16">
            <div className="absolute left-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-sky-400 to-sky-600 md:left-1/2 md:-translate-x-0.5" />
            {process.map((step, i) => (
              <div
                key={step.title}
                className={`relative mb-12 flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:pr-16" : "md:flex-row-reverse md:pl-16"
                }`}
              >
                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white md:left-1/2 md:-translate-x-1/2">
                  <step.icon size={16} />
                </div>
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-8 py-14 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Want to upskill your team?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/50">
            Let's build a customized training program for your organization.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Request Corporate Training
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CorporateTraining;
