import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  Code2,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Megaphone,
  Hammer,
  Globe,
  Users,
  Layers,
  PenTool,
  MessageSquareText,
  Award,
  GraduationCap,
  Pause,
  Play,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import heroVideo from "../assets/images/softcrowd-hero-vid.mp4";
import heroPoster from "../assets/images/why-choose-us.jpg";

const Internship = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const domains = [
    {
      icon: Code2,
      title: "Software Development",
      items: ["Web Development", "React", "Node.js", "Java", "Python", "PHP", "Full Stack Development"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      items: ["Flutter", "Mobile App Development"],
    },
    {
      icon: Sparkles,
      title: "AI & Data",
      items: ["Artificial Intelligence", "Machine Learning", "Data Science", "Data Analytics"],
    },
    {
      icon: ShieldCheck,
      title: "Other Domains",
      items: ["Software Testing", "Digital Marketing", "SEO"],
    },
  ];

  const whatYouGet = [
    { icon: Hammer, title: "Hands-on Experience", desc: "Work on practical projects instead of only learning theory." },
    { icon: Globe, title: "Industry Exposure", desc: "Understand how IT teams work and how projects are developed." },
    { icon: Users, title: "Mentorship", desc: "Learn from experienced professionals and get guidance throughout." },
    { icon: Layers, title: "Project Experience", desc: "Build practical projects that strengthen your portfolio." },
    { icon: MessageSquareText, title: "Professional Skills", desc: "Improve communication, teamwork, and problem-solving." },
    { icon: Award, title: "Certificate", desc: "Receive an internship completion certificate." },
  ];

  const journey = ["Learn", "Practice", "Build", "Review", "Improve", "Complete"];

  const whoCanApply = [
    "Engineering students",
    "Polytechnic students",
    "BCA / MCA students",
    "Computer Science students",
    "IT students",
    "Fresh graduates",
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
            Internship
          </div>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Start Your IT Career With a Practical Internship
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Gain hands-on experience, work on real projects, and learn how technology is used in
            the industry.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
            >
              Apply for Internship
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">About Internship</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            The first step from classroom to career
          </h2>
          <p className="mt-6 leading-relaxed text-slate-500">
            An internship is the first step toward understanding the difference between academic
            learning and professional work. Our IT Internship Programs give students and fresh
            graduates the opportunity to work in a professional environment and gain practical
            experience in their chosen technology — by working on real projects, solving real
            problems, collaborating with teams, and following industry development practices.
          </p>
        </div>
      </section>

      {/* Domains */}
      <section className="bg-slate-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Domains</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            Internship domains
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {domains.map((d) => (
              <div key={d.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                  <d.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{d.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-500">
                  {d.items.map((i) => (
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

      {/* What you get */}
      <section className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">What you get</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            What you'll get
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatYouGet.map((item) => (
              <div key={item.title} className="rounded-3xl bg-slate-50 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-slate-950 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">Journey</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Your internship journey
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-6">
            {journey.map((step, i) => (
              <React.Fragment key={step}>
                <div className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white">
                  {step}
                </div>
                {i < journey.length - 1 && (
                  <ArrowRight size={16} className="text-sky-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Who can apply + CTA */}
      <section className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Eligibility</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            Who can apply?
          </h2>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
            {whoCanApply.map((w) => (
              <div key={w} className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-4 py-3">
                <GraduationCap size={16} className="shrink-0 text-sky-500" />
                <span className="text-sm text-slate-600">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-8 py-14 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ready to get industry experience?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/50">
            Start your internship journey and take your first step toward an IT career.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Apply for Internship
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Internship;
