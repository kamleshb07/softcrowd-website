// ServiceFour.jsx - Hire Web and Mobile App Developers
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Code2,
  Smartphone,
  Award,
  Clock,
  Shield,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  TrendingUp,
  Star,
  Globe,
  MessageCircle,
  Headphones,
  Database,
  Cloud,
  Layout,
} from "lucide-react";

const ServiceFour = () => {
  const benefits = [
    {
      icon: Users,
      title: "Experienced & Skilled Resources",
      desc: "You may engage a team of knowledgeable specialists that is well-versed in the subject.",
    },
    {
      icon: MessageCircle,
      title: "Communication through Skype/Email/Phone",
      desc: "You may talk with your team in real time using any convenient technology.",
    },
    {
      icon: TrendingUp,
      title: "Flexible pricing and operating models",
      desc: "When you hire expert developers, we provide pricing flexibility and scalability.",
    },
    {
      icon: Clock,
      title: "Reports available daily, weekly, or monthly",
      desc: "You can keep up with the project's progress by receiving regular updates from the team.",
    },
    {
      icon: Award,
      title: "On-time delivery and low cost",
      desc: "Hire them as soon as possible. You can have peace of mind knowing that they'll be finished on time.",
    },
    {
      icon: Shield,
      title: "Data Backup and Recovery Management",
      desc: "In the scenario of a disaster, we have stringent code and backup management in place.",
    },
    {
      icon: Wallet,
      title: "No training or retention expenses",
      desc: "Hiring a team of developers can save you money on training and keeping employees.",
    },
    {
      icon: Star,
      title: "Single Point of Contact",
      desc: "As a single point of contact, we provide you with a dedicated lead for your team of developers.",
    },
  ];

  const hiringModels = [
    {
      title: "Hourly",
      desc: "Flexible engagement for specific tasks or short-term needs. Hire on an hourly basis.",
      icon: Clock,
    },
    {
      title: "Monthly",
      desc: "Dedicated resources for ongoing development and maintenance on a monthly basis.",
      icon: Calendar,
    },
    {
      title: "Yearly",
      desc: "Long-term engagement with dedicated developers on an annual basis.",
      icon: Briefcase,
    },
  ];

  const techSkills = [
    "React.js",
    "Next.js",
    "Node.js",
    "Python",
    "PHP",
    "Laravel",
    "Vue.js",
    "Angular",
    "React Native",
    "Flutter",
    "Android",
    "iOS",
    "AWS",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900">
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_center,_white_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 lg:px-6 lg:pb-28 lg:pt-44">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                <span className="h-px w-6 bg-sky-500" />
                Hire Developers
              </div>

              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">
                Hire Dedicated Web & <br />
                <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                  Mobile App Developers
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                You may engage SoftCrowd Technologies professional web and mobile app developers 
                for onsite, offsite on a short-term, long-term, or permanent basis depending on 
                your needs and budget.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
                >
                  Let's Talk
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="tel:7447478744"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
                >
                  <Phone size={15} /> +91 74474 44874
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3 text-white">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-slate-800 bg-gradient-to-br from-sky-500 to-sky-700"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/60">
                    <strong className="text-white">25+</strong> developers available
                  </span>
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    "✓ 8+ Years Experience",
                    "✓ 100+ Projects Delivered",
                    "✓ 24/7 Support",
                    "✓ NDA Protected",
                    "✓ End-to-end Development",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 size={18} className="text-sky-400" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-2xl font-medium leading-snug text-slate-900 sm:text-3xl">
            "Engage Our Experienced Software Developers."
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-500">
            Our team of software, web, and mobile app developers is made up of some of the best in the business. 
            As a result, recruiting committed employees from us is the most cost-effective method to have an 
            impact on your issues and businesses.
          </p>
          <div className="mt-4 text-sm text-slate-500">
            <span className="font-semibold text-sky-600">On an hourly, monthly, and yearly basis,</span> 
            {" "}you may employ our specialized coders. Contact us now.
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-slate-50 px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              Why Should Use SoftCrowd's <br />
              <span className="text-sky-500">Leading App Developers</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-500">
              Through their talents and insights, our specialized developers have given end-to-end web and 
              mobile app development services to start-ups to large enterprises all around the world.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-3xl bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition group-hover:scale-110">
                  <benefit.icon size={22} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900 leading-tight">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE PROVIDE ===== */}
      <section className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              What We Provide
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              We Provide Highly Qualified <br />
              <span className="text-sky-500">IT Professionals</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-500">
              We provide highly qualified IT professionals, experts, and specialists for hire to small businesses, 
              medium-sized organizations, and big enterprises in order to help them reach their business goals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Small Businesses",
                desc: "Get expert developers to help your startup or small business grow.",
              },
              {
                icon: Briefcase,
                title: "Medium Organizations",
                desc: "Scale your team with dedicated developers for your projects.",
              },
              {
                icon: Star,
                title: "Large Enterprises",
                desc: "Enterprise-grade development solutions for complex business needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 p-8 transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition group-hover:scale-110">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HIRING MODELS ===== */}
      <section className="bg-slate-50 px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              Flexible Options
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              Choose Your Hiring Model
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {hiringModels.map((model) => (
              <div
                key={model.title}
                className="group rounded-3xl bg-white p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 text-sky-500 transition group-hover:scale-110">
                  <model.icon size={28} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {model.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{model.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Contact Us Now
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TECH SKILLS ===== */}
      <section className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              Technologies
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              Developer Skills & Expertise
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {techSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-50 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-600 hover:shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-950 px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Ready to Build Your Team?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/60">
            Hire expert developers and start building your project today. On an hourly, monthly, and yearly 
            basis, you may employ our specialized coders.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Hire Developers
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="mailto:softcrowdtech@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
            >
              <Mail size={15} /> softcrowdtech@gmail.com
            </a>
          </div>
          <p className="mt-8 text-sm text-white/40">
            <MapPin className="inline mr-2" size={15} />
            2nd Floor, Kaveri Sankul, Wakilwadi Corner, Ashok Stambh, Nashik – 422001
          </p>
        </div>
      </section>
    </>
  );
};

// Calendar icon
const Calendar = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

// Wallet icon
const Wallet = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
);

export default ServiceFour;