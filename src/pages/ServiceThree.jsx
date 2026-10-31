// ServiceThree.jsx - Bulk SMS and Email Marketing
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Send,
  Mail as MailIcon,
  Users,
  Megaphone,
  BarChart3,
  Clock,
  CheckCircle2,
  Phone,
  MapPin,
  MessageSquare,
  TrendingUp,
  Target,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Download,
  Filter,
  Award,
} from "lucide-react";

const ServiceThree = () => {
  const features = [
    {
      icon: Send,
      title: "Sender ID Delivery",
      desc: "Your SMS messages would be delivered with a sender ID using our bulk SMS services.",
    },
    {
      icon: Download,
      title: "Free SMS Tool & HTTP API",
      desc: "When you buy the SMS software, you receive an online SMS tool and HTTP API for free.",
    },
    {
      icon: Globe,
      title: "CDMA & GSM Coverage",
      desc: "We offer CDMA and GSM coverage for maximum reach and compatibility.",
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      desc: "By selecting us, you may get your messages right away with instant delivery.",
    },
    {
      icon: BarChart3,
      title: "Delivery Status Updates",
      desc: "We also provide the option of receiving delivery status updates for your campaigns.",
    },
    {
      icon: Filter,
      title: "DND Filtering",
      desc: "Our software allows us to automatically filter DND phone numbers before sending the SMS.",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "All Business Sizes",
      desc: "SoftCrowd offers bulk SMS services to enterprises of all sizes, including those in the education sector.",
    },
    {
      icon: Target,
      title: "Versatile Applications",
      desc: "Schools, colleges, clubs, private lessons, finance firms, online businesses - we serve them all.",
    },
    {
      icon: Megaphone,
      title: "Multiple Use Cases",
      desc: "Send notifications about marketing initiatives, news, reservations, birthday greetings, mobile coupons, stock market updates, and more.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Download & Install",
      desc: "Download and install the program on your PC - no phone required.",
    },
    {
      step: "02",
      title: "Create Groups",
      desc: "Create groups for ease of sending SMS and enter the numbers of your clients.",
    },
    {
      step: "03",
      title: "Send Messages",
      desc: "Send as many SMS as you want to a certain group of individuals through the user interface.",
    },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900">
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_center,_white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 lg:px-6 lg:pb-28 lg:pt-44">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                <span className="h-px w-6 bg-sky-500" />
                Bulk SMS & Email Marketing
              </div>

              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">
                We are Best Bulk SMS <br />
                <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                  Service Provider in India
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                SoftCrowd Technologies provides Bulk SMS and Email Marketing services to clients so, 
                they no longer have to worry about card balance. One of the most important aspects 
                of company growth is communication.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
                >
                  Try Out Our Bulk SMS Service
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
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  <span>97% SMS Open Rate</span>
                  <span className="mx-2">•</span>
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  <span>20%+ Email CTR</span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    "✓ 99.9% Delivery Rate",
                    "✓ DND Compliant",
                    "✓ Real-time Analytics",
                    "✓ Easy Integration",
                    "✓ No Card Balance Worries",
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

      {/* ===== WHY SMS MARKETING ===== */}
      <section className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              Why Bulk SMS
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              Why Choose Bulk SMS <br />
              <span className="text-sky-500">Marketing Solution</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-8 transition hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-500">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">97% Read Rate</h3>
                  <p className="text-sm text-slate-500">Almost 97% of marketing SMS are read by recipients</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Email is one of the most popular ways to interact with consumers. Although you can send 
                inexpensive promotional emails, your message is likely to be unopened. Sending text messages 
                via customers' cell phones might be a more effective approach.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 transition hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-500">
                  <Wallet size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Cost Effective</h3>
                  <p className="text-sm text-slate-500">No more worrying about card balance</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Sending mass text messages is a highly successful marketing technique, but going for 
                traditional SMS rates may leave you in debt. SoftCrowd provides bulk SMS services to its 
                clients so you no longer have to worry about running up your credit card balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO SHOULD USE ===== */}
      <section className="bg-slate-50 px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              Who Should Use
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              Who and Why Should You Opt for <br />
              <span className="text-sky-500">Bulk SMS Marketing Solution</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-3xl bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition group-hover:scale-110">
                  <benefit.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              How It Works
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              What Are We Able <br />
              <span className="text-sky-500">To Provide</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-500">
              You can use SoftCrowd Technologies's software to quickly send SMS from your computer. 
              No phone required.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-sky-200">
                    {item.step}
                  </span>
                  <div className="h-px flex-1 bg-sky-100" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-50 p-8 text-center">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-sky-600">Note:</span> We do not charge for the SMS tool or the HTTP API. 
              You will only be charged for the bulk SMS software and SMS credits in total. There are several packages 
              of SMS credits, each suited to a distinct set of circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="bg-slate-50 px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              Features
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              Our Bulk SMS <br />
              <span className="text-sky-500">Service Features</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition group-hover:scale-110">
                  <feature.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-white px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "SMS Delivered", value: "10M+" },
              { label: "Emails Sent", value: "5M+" },
              { label: "Happy Clients", value: "500+" },
              { label: "Campaigns", value: "1000+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-sky-600">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-950 px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Try Out Our Bulk SMS Service
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/60">
            SoftCrowd's bulk SMS service is simple to use, easy to administer, and reasonably priced. 
            Contact us today to get started.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Try Now
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="mailto:softcrowdtech@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
            >
              <MailIcon size={15} /> softcrowdtech@gmail.com
            </a>
          </div>
          <p className="mt-6 text-sm text-white/40">
            <MapPin className="inline mr-2" size={15} />
            2nd Floor, Kaveri Sankul, Wakilwadi Corner, Ashok Stambh, Nashik – 422001
          </p>
        </div>
      </section>
    </>
  );
};

// Wallet icon for the cost section
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

export default ServiceThree;