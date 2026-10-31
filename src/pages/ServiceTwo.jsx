// ServiceTwo.jsx - Digital Marketing Solution Provider
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Layout,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Globe,
  Smartphone,
  Search,
  Megaphone,
  Target,
  BarChart3,
  Award,
  Sparkles,
} from "lucide-react";

const ServiceTwo = () => {
  const services = [
    {
      title: "Managed SEO",
      desc: "A thorough analysis of current SEO standing, competitive study, and KW targeting lays the groundwork for a successful managed search engine marketing project.",
      icon: Search,
    },
    {
      title: "Local SEO",
      desc: "This is the most crucial aspect, since a local search engine wants to display the most relevant response in the results that appear.",
      icon: Target,
    },
    {
      title: "Link Building",
      desc: "We advocate carrying out a link profile analysis on a regular basis while attempting to trace down links of poor quality and avoid Google penalties.",
      icon: Link2,
    },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900">
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,_white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 lg:px-6 lg:pb-28 lg:pt-44">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              <span className="h-px w-6 bg-sky-500" />
              Digital Marketing Solution Provider
            </div>

            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Digital Marketing That <br />
              <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                Drives Real Results
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              SoftCrowd Technologies is a digital marketing service provider in Nashik. 
              We employ cutting-edge digital marketing techniques to boost brand awareness 
              and increase website traffic through innovative means.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
              >
                Get Started
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

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-12 sm:grid-cols-4">
            {[
              { label: "SEO Rank Improvements", value: "95%" },
              { label: "Traffic Increase", value: "200%+" },
              { label: "Happy Clients", value: "100+" },
              { label: "Years Experience", value: "8+" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-2xl font-medium leading-snug text-slate-900 sm:text-3xl">
            "Without a doubt, your business may have the greatest goods and services available, but how will they be marketed if no one knows about them?"
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-500">
            That's where we can assist. We provide a wide range of Digital Marketing Services 
            to help your business grow and reach its full potential online.
          </p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-slate-50 px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              What We Offer
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              Wide Variety of <br />
              <span className="text-sky-500">Digital Marketing Services</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-3xl bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {service.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-sky-500 hover:underline"
                  >
                    Show More <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              Why SoftCrowd Technologies <br />
              <span className="text-sky-500">for Digital Marketing</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Proven Track Record",
                desc: "We guarantee that your website gains ranking within 60 days.",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Our team of digital marketing experts stays current with the latest trends.",
              },
              {
                icon: TrendingUp,
                title: "Results-Driven",
                desc: "We focus on delivering measurable results that grow your business.",
              },
              {
                icon: Target,
                title: "Targeted Approach",
                desc: "We create customized strategies tailored to your specific business goals.",
              },
              {
                icon: Sparkles,
                title: "Innovative Techniques",
                desc: "We use cutting-edge digital marketing techniques for maximum impact.",
              },
              {
                icon: Shield,
                title: "Transparent Reporting",
                desc: "Regular updates and detailed reports to track your campaign progress.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 p-7 transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SEO GUARANTEE ===== */}
      <section className="bg-slate-900 px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Our Guarantee
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
              We Guarantee Your Website <br />
              <span className="text-sky-400">Gains Ranking Within 60 Days</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-white/60">
              SoftCrowd Technologies will take care of your Website's SEO so you can focus 
              on what matters most. It's a win-win situation for consumers and businesses 
              since it links searchers to material that is most relevant to them.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Contact Us Now
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-white px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-sky-50 to-sky-100 px-8 py-14 text-center sm:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            Let's Grow Together
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Ready to Boost Your <br />
            <span className="text-sky-500">Digital Presence?</span>
          </h2>
          <p className="mt-4 text-slate-500">
            Contact us today and let's discuss how we can help your business grow online.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Get Started
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
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

// Link2 icon for Link Building
const Link2 = (props) => (
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
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export default ServiceTwo;