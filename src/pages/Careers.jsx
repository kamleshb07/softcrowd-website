import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Users,
  Briefcase,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Award,
  Code2,
  Megaphone,
  Smartphone,
  MessageSquareText,
  PenTool,
  Eye,
  Gem,
  Compass,
  Tag,
  Wallet,
  Pause,
  Play,
  Star,
  Sparkles,
  Globe,
  ShieldCheck,
  Headphones,
} from 'lucide-react';

// Replace with your actual video file
import heroVideo from "../assets/images/softcrowd-hero-vid.mp4";
import heroPoster from "../assets/images/why-choose-us.jpg";

const Careers = () => {
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

  // Real job openings — sourced from softcrowdtechnologies.com/careers
  const jobOpenings = [
    {
      title: "Android Developer",
      tag: "1+ Years",
      icon: Smartphone,
      meta: [{ label: "Experience Required", value: "Minimum 1 Year" }],
      sections: [
        {
          heading: "Skills",
          items: [
            "Familiarity with basic design patterns and object-oriented concepts is required.",
            "Knowledge of the Android Software Development Kit (SDK), different versions of Android, and how to deal with various displays is critical.",
            "Understanding of fundamental Android app components and their lifecycle.",
            "Understanding user interface layouts and layout inflation in Android.",
            "You should have a good understanding of Android UI design principles, patterns, and best practices.",
            "Knowledge of the Android open-source ecosystem and other related libraries.",
            "To link Android applications to back-end services, you must be familiar with RESTful APIs.",
            "Familiarity with Firebase and push notifications is required.",
          ],
        },
      ],
    },
    {
      title: "PHP Developer",
      tag: "1+ Years",
      icon: Code2,
      meta: [{ label: "Experience Required", value: "Minimum 1 Year" }],
      intro:
        "We need PHP Developers with real-world expertise in CI / Laravel Framework, REST API and RESTFUL Services who are looking for a new challenge.",
      sections: [
        {
          heading: "Responsibilities and Duties",
          items: [
            "Create and develop web applications using PHP Frameworks like CI / Laravel as a developer.",
            "Create a RESTFUL web service for the mobile app.",
          ],
        },
        {
          heading: "Key Skills",
          items: ["PHP, JavaScript, JQuery, REST, Ajax, CSS, HTML, HTML5, and Bootstrap."],
        },
        {
          heading: "Frameworks",
          items: ["CodeIgniter, Laravel, Angular"],
        },
      ],
    },
    {
      title: "WordPress Developer",
      tag: "2+ Years",
      icon: Globe,
      meta: [
        { label: "Experience Required", value: "2 Years" },
        { label: "Open Positions", value: "2" },
      ],
      sections: [
        {
          heading: "Duties & Skill Sets",
          items: [
            "Creating the website architecture.",
            "WordPress etiquette and standards.",
            "To design bespoke themes that meet client needs from the ground up.",
            "WordPress theme development requires a working knowledge of HTML/CSS, MySQL, AJAX, JavaScript and JQuery. Database structure and hooks are also important topics to be aware of.",
            "Requires experience in enhancing WordPress plugins. Expertise with existing built-in WordPress capabilities is required.",
            "You must have experience customizing existing 3rd party components, modules and plugins.",
            "Examining the performance of a website.",
            "WordPress experience is required, but CMS/framework experience will be considered a bonus.",
            "Assessing and resolving digital problems.",
          ],
        },
      ],
    },
    {
      title: "Receptionist",
      tag: "Fresher (Female Only)",
      icon: Users,
      sections: [
        {
          heading: "Roles and Responsibilities",
          items: [
            "Candidate having good skills in English, Hindi.",
            "Call management.",
            "Maintain records (attendance, movement, and mail).",
          ],
        },
        {
          heading: "Profile of a Good Candidate",
          items: ["Fresher / Experienced", "Send CV on: softcrowdtech@gmail.com"],
        },
      ],
    },
    {
      title: "Java Trainer",
      tag: "3+ Years",
      icon: Award,
      sections: [
        {
          heading: "Responsibilities",
          items: [
            "Create pixel-perfect layouts from user interface designs and create sophisticated Android applications.",
            "Adding and developing new app features — creating and implementing them.",
            "Update existing features on the current app.",
            "App performance analysis with app profiling.",
            "Discover and repair bugs as well as identify and repair bottlenecks.",
            "Developing with new technologies requires constant adaptation, change, and innovation.",
            "Working with the sales team to generate unique concepts to meet our customers' needs.",
            "Send CV on: softcrowdtech@gmail.com",
          ],
        },
      ],
    },
  ];

  // Dropdown options for "Applying for position" — matches the live application form
  const positionOptions = [
    "WordPress Developer",
    "PHP Developer",
    "Java Trainer - 3+ Years",
    "Android Developer - 1+ Years",
    "CI / Laravel Developer - 1+ Years",
    "Receptionist - Fresher (Female Only)",
  ];

  const [openJob, setOpenJob] = useState(0);
  const [applyPosition, setApplyPosition] = useState("Select Position");
  const [submitted, setSubmitted] = useState(false);
  const formRef = React.useRef(null);

  const handleApplyFor = (title) => {
    const match = positionOptions.find((opt) => opt.startsWith(title));
    setApplyPosition(match || "Select Position");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: this is a static front-end only — wire this up to your
    // email/backend service (e.g. Formspree, EmailJS, or a serverless
    // function) to actually receive applications.
    setSubmitted(true);
  };

  // Perks data
  const perks = [
    {
      icon: Clock,
      title: "Flexible Work Hours",
      description: "Work when you're most productive with flexible scheduling options.",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning, certifications, and clear career progression paths.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented people in a supportive, team-first environment.",
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Health insurance, performance bonuses, and annual retreats.",
    },
  ];

  // Values data
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity First",
      description: "We believe in transparent communication and doing the right thing.",
    },
    {
      icon: Star,
      title: "Excellence Always",
      description: "We strive for the highest quality in everything we deliver.",
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "We embrace diversity and think beyond borders.",
    },
    {
      icon: Headphones,
      title: "Client First",
      description: "We exist to solve problems and create value for our clients.",
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

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-3 pb-16 lg:px-5 lg:pb-20 pt-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-6 bg-sky-500" />
            Join our team
          </div>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] text-slate-50 sm:text-6xl lg:text-7xl">
            Build your career with{' '}
            <span className="text-sky-400">
              SoftCrowd
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Join a team of passionate innovators dedicated to creating world-class 
            digital solutions. We're looking for talented individuals who want to 
            make an impact.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#openings"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900 hover:shadow-2xl hover:shadow-sky-500/30"
            >
              View Openings
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#culture"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900"
            >
              Our Culture
              <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats badges */}
          <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <Users size={20} className="text-sky-400" />
              <div>
                <p className="text-sm font-semibold text-white">15+</p>
                <p className="text-xs text-white/40">Team Members</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-sky-400" />
              <div>
                <p className="text-sm font-semibold text-white">Nashik</p>
                <p className="text-xs text-white/40">Global Reach</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-sky-400" />
              <div>
                <p className="text-sm font-semibold text-white">2017</p>
                <p className="text-xs text-white/40">Founded</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={togglePlay}
          aria-label={playing ? 'Pause video' : 'Play video'}
          className="absolute bottom-8 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:right-8"
        >
          {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/30 lg:flex">
          <span className="tracking-[0.2em]">SCROLL</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ===== WHY JOIN US ===== */}
      <section className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Why join us</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            A workplace where you can{' '}
            <span className="text-sky-400">
              grow and thrive
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="group rounded-3xl bg-slate-50 p-8 transition-all hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                  <perk.icon size={26} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{perk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OPEN POSITIONS ===== */}
      <section id="openings" ref={formRef} className="bg-slate-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Open positions</p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Join our{' '}
                <span className="text-sky-400">
                  growing team
                </span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              <Users size={16} className="text-sky-400" />
              {jobOpenings.length} positions
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Accordion of real openings */}
            <div className="space-y-3">
              {jobOpenings.map((job, index) => {
                const isOpen = openJob === index;
                return (
                  <div
                    key={job.title}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenJob(isOpen ? -1 : index)}
                      className="flex w-full items-center gap-4 px-6 py-5 text-left"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                        <job.icon size={18} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-slate-900">{job.title}</h3>
                        <p className="text-xs text-slate-400">{job.tag}</p>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 bg-slate-950 px-6 py-6 text-white">
                        <h4 className="font-serif text-xl font-semibold">{job.title}</h4>

                        {job.meta && job.meta.length > 0 && (
                          <p className="mt-3 text-sm text-white/70">
                            {job.meta.map((m, i) => (
                              <span key={m.label}>
                                <strong className="text-white">{m.label}:</strong> {m.value}
                                {i < job.meta.length - 1 ? "  •  " : ""}
                              </span>
                            ))}
                          </p>
                        )}

                        {job.intro && (
                          <p className="mt-3 text-sm leading-relaxed text-white/70">{job.intro}</p>
                        )}

                        {job.sections.map((section) => (
                          <div key={section.heading} className="mt-4">
                            <p className="text-sm font-semibold text-sky-300">{section.heading}</p>
                            <ul className="mt-2 space-y-2">
                              {section.items.map((item) => (
                                <li key={item} className="flex gap-2 text-sm leading-relaxed text-white/70">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-400" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={() => handleApplyFor(job.title)}
                          className="group mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
                        >
                          Apply for this role
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Application form — fields match the live site's application form */}
            <div className="rounded-3xl bg-white p-8 shadow-soft">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">Application received</h3>
                  <p className="mt-2 max-w-xs text-sm text-slate-500">
                    Thanks for applying — our team will review your details and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-xl font-semibold text-slate-900">Apply now</h3>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">Current Location</label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">When Can You Start?</label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">Applying For Position</label>
                      <select
                        value={applyPosition}
                        onChange={(e) => setApplyPosition(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white"
                      >
                        <option>Select Position</option>
                        {positionOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Attached Resume <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="file"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500 outline-none transition file:mr-4 file:rounded-md file:border-0 file:bg-sky-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-sky-600 focus:border-sky-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
                  >
                    Submit
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* No positions found? */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              Don't see the right role?{' '}
              <a href="mailto:softcrowdtech@gmail.com" className="text-sky-500 font-semibold hover:underline">
                Send us your resume
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== CAREER AREAS ===== */}
      <section className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Where you could work</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Career{' '}
            <span className="text-sky-400">areas</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <Code2 size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Software Development</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                {["Web Development", "Mobile App Development", "Full Stack Development", "Backend Development"].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-sky-400" /> {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <Sparkles size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Emerging Technologies</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                {["Artificial Intelligence", "Machine Learning", "Data Science", "Cloud Technologies"].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-sky-400" /> {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <Briefcase size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Other Areas</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                {["Software Testing", "Digital Marketing", "UI/UX", "Business & Support Functions"].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-sky-400" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Our values</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            What we{' '}
            <span className="text-sky-400">
              believe in
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:border-sky-200 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                    <value.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CULTURE SECTION ===== */}
      <section id="culture" className="bg-slate-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Our culture</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                A team that{' '}
                <span className="text-sky-400">
                  collaborates and innovates
                </span>
              </h2>
              <p className="mt-6 text-slate-500">
                At SoftCrowd, we believe that great work happens when people feel valued, 
                supported, and inspired. Our culture is built on trust, transparency, and 
                a shared passion for creating exceptional digital experiences.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Work with cutting-edge technologies",
                  "Collaborative and inclusive environment",
                  "Opportunities for professional growth",
                  "Work-life balance with flexible hours",
                  "Annual team retreats and events",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-sky-500 shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#openings"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/25"
              >
                Join Our Team
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-sky-400/30 via-sky-500/20 to-sky-600/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 shadow-xl backdrop-blur-sm">
                      <Sparkles size={18} className="text-sky-400" />
                      <span className="text-sm font-semibold text-slate-900">Great Place to Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-8 py-14 text-center sm:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Ready to make an impact?
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Let's build something{' '}
            <span className="text-sky-400">
              amazing together
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/50">
            We're always looking for talented people who want to grow with us.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#openings"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400 hover:shadow-2xl hover:shadow-sky-500/30"
            >
              View Openings
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
            >
              Send Resume
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <Users size={16} className="text-sky-400" /> 15+ Team Members
            </span>
            <span className="flex items-center gap-2">
              <Globe size={16} className="text-sky-400" /> Global Projects
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-sky-400" /> Est. 2017
            </span>
          </div>
        </div>
      </section>

      {/* footer note */}
      <div className="bg-slate-50 px-6 py-4 text-center text-[11px] text-slate-400">
        SoftCrowd Technologies · Nashik, India
      </div>
    </>
  );
};

export default Careers;