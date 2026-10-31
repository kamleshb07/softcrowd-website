import React, { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Layers,
  Star,
  Globe,
  Target,
  Eye,
  Heart,
  ChevronRight,
  Play,
  Pause,
  Calendar,
  MapPin,
} from "lucide-react";

// Replace with your actual video asset if you have one
import aboutHeroVideo from "../assets/images/softcrowd-hero-vid.mp4";

/* --------------------------------- Real content, pulled from softcrowdtechnologies.com/about-us/ --------------------------------- */

const HERO_IMAGE =
  "https://softcrowdtechnologies.com/wp-content/uploads/2026/03/PANO_20241011_185746.jpg-scaled.jpeg";
const OFFICE_IMAGE_1 =
  "https://softcrowdtechnologies.com/wp-content/uploads/2026/03/IMG_20241011_185921.jpg-1024x771.jpeg";
const OFFICE_IMAGE_2 =
  "https://softcrowdtechnologies.com/wp-content/uploads/2026/03/IMG_20241011_185704.jpg-scaled.jpeg";

const STATS = [
  { label: "Happy Clients", value: 80 },
  { label: "Projects Designed", value: 85 },
  { label: "Projects Done", value: 99 },
];

/* --------------------------------- Helpers --------------------------------- */

// Counts a numeric value up from 0 once the element scrolls into view.
const useCountUp = (target, { duration = 1400 } = {}) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { ref, display: Math.round(value).toLocaleString() };
};

/* --------------------------------- Hero --------------------------------- */

const AboutHero = () => {
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

  return (
    <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-slate-900">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_IMAGE}
      >
        <source src={aboutHeroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-3 pb-16 pt-24 lg:px-5 lg:pb-20">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          <span className="h-px w-6 bg-sky-500" />
          About SoftCrowd Technologies
        </div>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] text-slate-50 sm:text-6xl lg:text-7xl">
          Exclusive Agency For <br />
          <span className="text-sky-400">Technology Solutions</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          SoftCrowd Technologies is a custom web design and development company
          in Nashik, India, and a worldwide leader in providing digital
          solutions — Web Designing, Digital Marketing, Website Development
          and Software Development.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/contact-us"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-sky-500 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white hover:text-slate-900 hover:shadow-2xl hover:shadow-sky-500/30"
          >
            Work With Us
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="/custom-web-application-development-services"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900"
          >
            Explore Services
            <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
          {[
            { icon: Calendar, label: "Est. 2017", sub: "April 2nd, Nashik" },
            { icon: MapPin, label: "Nashik, India", sub: "Serving worldwide" },
          ].map((item) => (
            <div key={item.label} className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 transition-all group-hover:scale-110 group-hover:bg-sky-500/30">
                <item.icon size={18} className="text-sky-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="text-xs text-white/40">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-8 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:right-8"
      >
        {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
      </button>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/30 lg:flex">
        <span className="tracking-[0.2em]">SCROLL</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

/* --------------------------------- Intro: office photo + agency description --------------------------------- */

const AgencyIntro = () => (
  <section className="bg-white px-3 py-20 lg:px-5 lg:py-24">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={OFFICE_IMAGE_1}
          alt="SoftCrowd Technologies office in Nashik"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h2 className="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
          Exclusive Agency For Technology Solutions
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
          <p>
            <a href="https://softcrowdtechnologies.com/" className="text-sky-500 hover:underline">
              SoftCrowd Technologies
            </a>{" "}
            is a custom web design and development company in Nashik, India,
            and a worldwide leader in providing digital solutions. Our team of
            experts has years of experience and has worked on a wide variety
            of projects. We're based in Nashik, Maharashtra, and specialize in
            Web Designing, Digital Marketing, Website Development & Software
            Development.
          </p>
          <p>
            We provide professional, full-cycle services — CRM/ERP Solutions,
            Web Development, Business Website Designing, Mobile Application
            Development, Website Redesign, Website Maintenance, SEO Services,
            Custom Software Development,{" "}
            <a
              href="https://softcrowdtechnologies.com/custom-web-application-development-services/"
              className="text-sky-500 hover:underline"
            >
              Web Application Development
            </a>
            , and E-Commerce Solutions. We build for companies of every size,
            from big corporations to small startups, using technologies like
            PHP, Angular and NodeJS.
          </p>
          <p>
            We're committed to providing robust infrastructure on
            industry-standard platforms for your mission-critical information
            systems.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* --------------------------------- Core Pillars --------------------------------- */

const CorePillars = () => {
  const pillars = [
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Our staff is capable of handling both simple and complex tasks. They have a lot of experience working with creative design and clean, attractive components. Our crew creates simple and effective websites that offer information in a pleasant and interesting way.",
    },
    {
      icon: Layers,
      title: "Process Oriented",
      description:
        "We use a methodical technique for all of our work, which aids in the timely completion of tasks. We want the best performance for a long time, and we use cutting-edge technology to do it.",
    },
    {
      icon: Star,
      title: "Customer First",
      description:
        "We enjoy what we do and we exist because of our clients' unending trust in us. SoftCrowd Technologies strives to create a team of professionals that can provide solutions to businesses' obstacles and hurdles.",
    },
  ];

  return (
    <section className="bg-slate-50 px-3 py-20 lg:px-5 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-transform duration-300 group-hover:scale-110">
                <pillar.icon size={26} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-500">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --------------------------------- Company description + second office photo --------------------------------- */

const CompanyDescription = () => (
  <section className="bg-white px-3 py-20 lg:px-5 lg:py-24">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
      <div>
        <h2 className="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
          A custom web design and development company
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
          <p>
            SoftCrowd Technologies is a worldwide leader in providing a wide
            range of digital solutions for businesses, having pioneered the
            sector on the global platform. We provide expert, unique,
            customized and scalable web hosting, domain registration, web
            design and development, as well as mobile app development and
            digital marketing in Nashik, India.
          </p>
          <p>
            Our competent, tech-savvy experts bring extensive expertise across
            a wide range of online solutions, specifically tailored to the
            demands of our clients, developed to the best possible standards.
          </p>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl">
        <img
          src={OFFICE_IMAGE_2}
          alt="Inside the SoftCrowd Technologies office"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);

/* --------------------------------- Mission / Vision / Values tabs --------------------------------- */

const MissionVisionValues = () => {
  const tabs = [
    {
      icon: Target,
      title: "Objective",
      description:
        "Our objective is to build long-term beneficial partnerships with our clients. To accomplish this, we constantly improve as a company and each member of our staff strives for excellence — leveraging your brand's reputation, trust and passion with creative design & development to build market-defining, high-quality solutions that offer value and a competitive advantage worldwide.",
    },
    {
      icon: Eye,
      title: "Perception",
      description:
        "We believe in creating emotional connections with our clients, and we wholeheartedly believe in the success of the companies we collaborate with. We offer a variety of IT services through a competent, committed staff that uses cutting-edge technology to maintain stability and growth, while contributing to the IT sector by providing the most appropriate solution possible to all.",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "Commitment, loyalty, teamwork, a passion for excellence, continuous learning, and staying customer-centric — these values guide every project we take on.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 px-3 py-20 lg:px-5 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
          What drives us forward
        </h2>
      </div>

      <div className="mx-auto mt-12 flex max-w-3xl justify-center gap-2">
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            onClick={() => setActive(i)}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
              active === i
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-500 hover:text-slate-900"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-300">
          {React.createElement(tabs[active].icon, {
            size: 26,
            strokeWidth: 1.25,
            className: "text-slate-900",
          })}
        </div>
        <p className="mt-6 leading-relaxed text-slate-600">
          {tabs[active].description}
        </p>
      </div>
    </section>
  );
};

/* --------------------------------- Our story --------------------------------- */

const OurStory = () => (
  <section className="relative overflow-hidden bg-slate-950 px-3 py-20 lg:px-5 lg:py-24">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
    </div>

    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
        Changes for better, since 2017
      </h2>
      <p className="mt-6 leading-relaxed text-white/60">
        SoftCrowd Technologies was established on April 2nd, 2017, to fulfill
        our clients' expectations in one of the most active industries around
        — IT is a field where new tools and methods arrive at a rapid pace.
        That mismatch is exactly why we invest in training our team through
        custom-made courses, staying current on the most recent and emerging
        technologies. SoftCrowd is a worldwide professional services firm
        offering a comprehensive range of services and solutions in strategy,
        training, technology, and operations.
      </p>
    </div>
  </section>
);

/* --------------------------------- Dedicated team / stats --------------------------------- */

const DedicatedTeam = () => (
  <section className="bg-slate-50 px-3 py-20 lg:px-5 lg:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
        Our Best
      </p>
      <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
        Dedicated Team
      </h2>
      <p className="mt-6 leading-relaxed text-slate-600">
        From web design and development to web hosting and web application
        development, as well as SEO and digital marketing services, our
        dedicated team offers high-quality professional solutions. SoftCrowd
        Technologies' team has led development solutions for five-plus years,
        working out of Nashik.
      </p>
    </div>

    <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-3">
      {STATS.map((stat) => {
        const { ref, display } = useCountUp(stat.value);
        return (
          <div key={stat.label} ref={ref} className="text-center">
            <div className="font-serif text-5xl font-semibold text-sky-500">
              {display}
              <span>+</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
          </div>
        );
      })}
    </div>
  </section>
);

/* --------------------------------- Page --------------------------------- */

const AboutPage = () => (
  <main>
    <AboutHero />
    <AgencyIntro />
    <CorePillars />
    <CompanyDescription />
    <MissionVisionValues />
    <OurStory />
    <DedicatedTeam />
  </main>
);

export default AboutPage;