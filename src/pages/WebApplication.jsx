import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  Code2,
  Megaphone,
  MessageSquareText,
  Smartphone,
  Users,
  Search,
  Sparkles,
  Shield,
  Layers,
  Zap,
  Settings,
  Wallet,
  Phone,
  Mail,
  MapPin,
  Pause,
  Play,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Replace with your actual video file
import heroVideo from "../assets/images/softcrowd-hero-vid.mp4";
import heroPoster from "../assets/images/why-choose-us.jpg";

const WebApplication = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  // Advantages data
  const advantages = [
    {
      icon: Search,
      title: "Search-engine friendly by design",
      desc: "Personalised elements and high SEO compatibility help custom websites rank higher on search results pages.",
    },
    {
      icon: Megaphone,
      title: "A real boost to your marketing",
      desc: "A custom build gives your online marketing efforts a meaningfully stronger foundation to work from.",
    },
    {
      icon: Settings,
      title: "Complete control, always",
      desc: "You own the site outright — add, remove, or modify content whenever your business needs change.",
    },
    {
      icon: Layers,
      title: "Built for today's market",
      desc: "Custom websites are built to meet the current demands of your market, not a generic template's.",
    },
    {
      icon: Wallet,
      title: "Reasonably priced",
      desc: "The total cost of bespoke web development stays reasonably low relative to what you get.",
    },
  ];

  // Why choose us data
  const whyChooseUs = [
    {
      icon: Zap,
      title: "Current, tested technology",
      desc: "Our developers stay up to date on the latest tools and techniques, with a thorough grasp of reinforced structures.",
    },
    {
      icon: Settings,
      title: "Proven, agile methods",
      desc: "We use agile, proven methods for large-scale web applications so delivery stays predictable.",
    },
    {
      icon: Sparkles,
      title: "Beneficial features, real polish",
      desc: "We combine the most useful features with strong visuals — an application that gives you an edge and helps you grow.",
    },
    {
      icon: Shield,
      title: "Fast, scalable, compliant",
      desc: "We build web applications that are fast, scalable, adaptable, and compliant from the start.",
    },
  ];

  return (
    <>
      {/* ===== HERO WITH VIDEO BACKGROUND ===== */}
      <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-slate-900">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pb-16 pt-25 lg:px-6 lg:pb-20">
          {/* Badge - CORRECTED: "CUSTOM WEB APPLICATION DEVELOPMENT" */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-6 bg-sky-500" />
            CUSTOM WEB APPLICATION DEVELOPMENT
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] text-slate-50 sm:text-6xl lg:text-7xl">
            Web applications built{' '}
            <br className="hidden sm:block" />
            <span className="text-sky-400">around how your business</span>
            <br className="hidden sm:block" />
            <span className="text-sky-400">actually works</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            SoftCrowd Technologies is a Nashik-based team of web application developers who stay current with the latest 
            tools and market demands, so what we ship holds up as your business grows.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900 hover:shadow-2xl hover:shadow-sky-500/30"
            >
              Contact Us Now
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:7447478744"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900"
            >
              <Phone size={16} /> +91 74474 44874
            </a>
          </div>
        </div>

        {/* Video Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label={playing ? 'Pause video' : 'Play video'}
          className="absolute bottom-8 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:right-8"
        >
          {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/30 lg:flex">
          <span className="tracking-[0.2em]">SCROLL</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ===== INTRO STATEMENT ===== */}
      <section className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-2xl font-medium leading-snug text-slate-900 sm:text-3xl">
            "Solutions that are productive, engaging, and dependable for the commercial goals you desire."
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-500">
            We've built web applications across e-commerce, finance, entertainment, education, and more. Our{' '}
            <Link to="/hire-web-and-mobile-app-developers" className="font-medium text-sky-600 hover:underline">
              developers
            </Link>{' '}
            bring deep, hands-on experience to every project — so whatever your business needs, the solution is built 
            to fit it, not the other way around.
          </p>
        </div>
      </section>

      {/* ===== WHY A WEBSITE / WHY CUSTOM ===== */}
      <section className="bg-slate-50 px-4 py-20 lg:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-soft transition hover:shadow-xl sm:p-10">
            <Search className="text-sky-500" size={28} />
            <h2 className="mt-5 font-serif text-2xl font-semibold text-slate-900">
              Your website is your digital storefront
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Every business's web presence matters — a website is unquestionably your company's digital platform. 
              Without one, you can't compete. If you haven't already, now's the time to get your business online.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-soft transition hover:shadow-xl sm:p-10">
            <Sparkles className="text-sky-500" size={28} />
            <h2 className="mt-5 font-serif text-2xl font-semibold text-slate-900">
              Distinguish yourself from the competition
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              A custom site needs a genuine "wow" factor — eye-catching visuals that capture visitors right away. 
              Design isn't everything, but it matters: your site also needs to be functional, user-friendly, and 
              unmistakably your brand.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICE CARDS (4 pillars) ===== */}
      <section className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">what we deliver</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Comprehensive web application <br />
            <span className="text-sky-400">development services</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* card 1: Custom Web Application */}
            <div className="group rounded-3xl bg-slate-50 p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <Code2 size={26} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">Custom Web Application</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Full-cycle CRM/ERP, business websites, and custom web apps built around how your business actually works.
              </p>
              <Link to="/digital-marketing-solution-provider" className="mt-6 flex items-center gap-1 text-sm font-medium text-sky-500">
                Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* card 2: Digital Marketing */}
            <div className="group rounded-3xl bg-slate-50 p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <Megaphone size={26} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">Digital Marketing</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                SEO, content, and digital campaigns that put your products in front of the people looking for them.
              </p>
              <Link to="/bulk-sms-and-email-marketing" className="mt-6 flex items-center gap-1 text-sm font-medium text-sky-500">
                Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* card 3: Bulk SMS & Email */}
            <div className="group rounded-3xl bg-slate-50 p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <MessageSquareText size={26} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">Bulk SMS & Email</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Reach thousands instantly with targeted bulk SMS and email campaigns built for reliable delivery.
              </p>
              <Link to="/bulk-sms-and-email-marketing" className="mt-6 flex items-center gap-1 text-sm font-medium text-sky-500">
                Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* card 4: Hire Developers */}
            <div className="group rounded-3xl bg-slate-50 p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <Users size={26} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">Hire Developers</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Bring dedicated web and mobile developers onto your project on demand, backed by our full engineering team.
              </p>
              <Link to="/hire-web-and-mobile-app-developers" className="mt-6 flex items-center gap-1 text-sm font-medium text-sky-500">
                Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="bg-slate-50 px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">benefits</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            The advantages of custom <br />
            <span className="text-sky-400">web development</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                  <item.icon size={22} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-slate-950 px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">why softcrowd</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Why choose us for <br />
            <span className="text-sky-400">web app services</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-slate-950 p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-sky-400">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-white/40">
            Because of this, we have a thorough grasp of your business's needs — and we design for website engagement, 
            not just website launch.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-white px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-100 px-8 py-14 text-center sm:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            we're accessible at all hours
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            For genuine real-time answers,{' '}
            <br className="hidden sm:block" />
            <span className="text-sky-400">at the most comprehensive rate</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Contact Us Now
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:softcrowdtech@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50"
            >
              <Mail size={15} /> softcrowdtech@gmail.com
            </a>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin size={15} /> 2nd Floor, Kaveri Sankul, Wakilwadi Corner, Ashok Stambh, Nashik – 422001
          </p>
        </div>
      </section>
    </>
  );
};

export default WebApplication;