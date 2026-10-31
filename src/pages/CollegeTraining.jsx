import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  Code2,
  Briefcase,
  Presentation,
  GraduationCap,
  CheckCircle2,
  Pause,
  Play,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import heroVideo from "../assets/images/softcrowd-hero-vid.mp4";
import heroPoster from "../assets/images/why-choose-us.jpg";

const CollegeTraining = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const offerings = [
    {
      icon: Code2,
      title: "Technical Training",
      items: [
        "Programming Languages",
        "Web Development",
        "Mobile App Development",
        "Full Stack Development",
        "Python",
        "Java",
        ".NET",
        "Data Science",
        "AI & Machine Learning",
        "Software Testing",
      ],
    },
    {
      icon: Briefcase,
      title: "Career-Oriented Programs",
      items: [
        "IT Career Guidance",
        "Resume Building",
        "Interview Preparation",
        "Communication Skills",
        "Workplace Skills",
        "Industry Readiness",
      ],
    },
    {
      icon: Presentation,
      title: "Practical Programs",
      items: ["Workshops", "Seminars", "Technical Events", "Hands-on Labs", "Project Guidance", "FDP Programs"],
    },
  ];

  const customization = [
    "Student skill levels",
    "Academic curriculum",
    "Technology requirements",
    "Training duration",
    "Batch size",
    "College requirements",
  ];

  const whyPartner = [
    "Industry-experienced trainers",
    "Practical learning approach",
    "Modern technology stack",
    "Customized training",
    "Hands-on projects",
    "Career guidance",
    "Industry exposure",
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
            College Training
          </div>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Industry-Oriented Training Programs for Colleges
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Empowering students with practical technology skills, industry exposure, and
            career-focused learning.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
            >
              Partner With Us
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">About College Training</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            Practical knowledge that complements the curriculum
          </h2>
          <p className="mt-6 leading-relaxed text-slate-500">
            We collaborate with colleges and educational institutions to provide
            industry-oriented technical training programs for students. Our programs are
            designed to complement academic education with practical knowledge and help students
            understand current industry requirements. Training can be customized according to
            the students' academic level, course, technology requirements, and duration.
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-slate-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Programs</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            What we offer
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {offerings.map((o) => (
              <div key={o.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                  <o.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{o.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-500">
                  {o.items.map((i) => (
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

      {/* For colleges + why partner */}
      <section className="bg-slate-950 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">Customization</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white">
              For colleges & institutions
            </h2>
            <p className="mt-4 text-sm text-white/50">We provide customized programs based on:</p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {customization.map((c) => (
                <div key={c} className="flex items-center gap-2.5 rounded-xl bg-white/5 px-4 py-3">
                  <CheckCircle2 size={16} className="shrink-0 text-sky-400" />
                  <span className="text-sm text-white/70">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">Why partner</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white">
              Why partner with us?
            </h2>
            <div className="mt-6 space-y-3">
              {whyPartner.map((w) => (
                <div key={w} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="shrink-0 text-sky-400" />
                  <span className="text-sm text-white/70">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-50 px-8 py-14 text-center sm:px-16">
          <GraduationCap size={40} className="mx-auto text-sky-500" />
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Let's prepare students for the IT industry
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            Partner with us to provide your students with practical and industry-relevant
            technology training.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Partner With Us
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CollegeTraining;
