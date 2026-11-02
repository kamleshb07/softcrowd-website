// import React, { useRef, useState } from "react";
// import {
//   Pause,
//   Play,
//   ArrowRight,
//   Wallet,
//   Clock,
//   Tag,
//   Users,
//   PenTool,
//   CheckCircle2,
//   Code2,
//   Globe,
//   Megaphone,
//   MessageSquareText,
//   Smartphone,
//   Quote,
//   ArrowUpRight,
//   Layers,
//   ShieldCheck,
//   TrendingUp,
//   Headphones,
//   Rocket,
//   Phone,
//   Mail,
//   MapPin,
// } from "lucide-react";

// // Replace these with your actual files inside src/assets
// import heroVideo from "../assets/images/softcrowd-hero-vid.mp4";
// import heroPoster from "../assets/images/why-choose-us.jpg";
// import aboutImage from "../assets/images/why-choose-us.jpg";

// /* --------------------------------- Data --------------------------------- */

// const industries = [
//   "Healthcare",
//   "Real Estate",
//   "Education",
//   "Entertainment",
//   "Finance",
//   "Sports & Play",
//   "Social Networking",
//   "Travel & Tourism",
// ];

// const testimonials = [
//   {
//     quote:
//       "A fast, organized, and detail-oriented team that brought our website vision to life and improved on it with ideas we hadn't considered.",
//     name: "Mangesh Patil",
//     role: "Client",
//   },
//   {
//     quote:
//       "They listened closely to our vision and turned it into a website that's earned nothing but positive feedback since launch.",
//     name: "Kishor Roy",
//     role: "KBR Properties",
//   },
//   {
//     quote:
//       "Delivered on schedule at a fair price, with professional communication throughout — our e-commerce site has performed exactly as we hoped.",
//     name: "Akshay Sharma",
//     role: "Tredmart",
//   },
// ];

// /* ---------------------------------- Hero ---------------------------------- */

// const Hero = () => {
//   const videoRef = useRef(null);
//   const [playing, setPlaying] = useState(true);

//   const togglePlay = () => {
//     if (!videoRef.current) return;
//     if (playing) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setPlaying(!playing);
//   };

//   return (
//     <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-slate-900">
//       <video
//         ref={videoRef}
//         className="absolute inset-0 h-full w-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//         poster={heroPoster}
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />

//       <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-3 pb-16 lg:px-5 lg:pb-20">
//         <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
//           <span className="brkt text-sm">&lt;/&gt;</span>
//           Welcome to SoftCrowd Technologies
//         </div>

//         <h1 className="mt-6 max-w-2xl font-serif text-5xl font-bold leading-[1.05] text-slate-50 sm:text-6xl lg:text-7xl">
//           Instant IT solutions for your business
//         </h1>

//         <p className="mt-6 max-w-lg text-white/70">
//           A Nashik-based web development and digital marketing company
//           offering full-cycle IT solutions for small, medium, and large
//           businesses.
//         </p>

//         <a
//           href="/contact"
//           className="group mt-8 inline-flex w-fit items-center gap-3 border border-white/40 px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-slate-900"
//         >
//           Contact Us
//           <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
//         </a>
//       </div>

//       <button
//         onClick={togglePlay}
//         aria-label={playing ? "Pause video" : "Play video"}
//         className="absolute bottom-8 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:right-8"
//       >
//         {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
//       </button>
//     </section>
//   );
// };

// /* --------------------------- Industries marquee --------------------------- */

// const IndustriesMarquee = () => {
//   const loop = [...industries, ...industries];

//   return (
//     <section className="border-t border-white/5 bg-slate-950 py-16">
//       <style>{`
//         @keyframes marquee-scroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .marquee-track {
//           animation: marquee-scroll 26s linear infinite;
//         }
//       `}</style>

//       <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
//         Industries we serve
//       </p>

//       <div className="overflow-hidden">
//         <div className="marquee-track flex w-max items-center gap-16">
//           {loop.map((name, i) => (
//             <span
//               key={`${name}-${i}`}
//               className="whitespace-nowrap text-2xl font-semibold tracking-tight text-white/50"
//             >
//               {name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* -------------------------------- About -------------------------------- */

// const AboutSnippet = () => {
//   return (
//     <section className="bg-slate-950 px-3 py-24 lg:px-5 lg:py-28">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
//         <div className="overflow-hidden rounded-3xl">
//           <img
//             src={aboutImage}
//             alt="SoftCrowd Technologies team at work"
//             className="h-[380px] w-full object-cover lg:h-[460px]"
//           />
//         </div>

//         <div>
//           <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
//             About SoftCrowd Technologies
//           </p>
//           <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
//             A highly experienced web design and development team based in
//             Nashik, Maharashtra
//           </h2>
//           <p className="mt-6 max-w-lg text-white/60">
//             We offer full-cycle services spanning CRM/ERP solutions, web
//             development, business website design, mobile app development,
//             website redesign and maintenance, SEO, custom software
//             development, and e-commerce solutions.
//           </p>
//           <a
//             href="/about"
//             className="group mt-8 inline-flex w-fit items-center gap-3 border border-white/30 px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-slate-900"
//           >
//             Read more
//             <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ------------------------------ Why choose us ------------------------------ */

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-slate-50 px-3 py-24 lg:px-5 lg:py-28">
//       <div className="mx-auto max-w-7xl">
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
//             Why choose us
//           </p>
//           <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
//             A process-centered team delivering solutions that are simple to
//             use and built to fit your requirements
//           </h2>
//         </div>
 
//         <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
//           {/* Card 1 — Affordable pricing, chart on top */}
//           <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
//             <div className="relative h-64 overflow-hidden bg-gradient-to-b from-sky-50 to-white p-6">
//               <div className="absolute inset-x-6 top-10 bottom-6 flex flex-col justify-between">
//                 {[0, 1, 2].map((i) => (
//                   <div key={i} className="h-px w-full bg-slate-200/70" />
//                 ))}
//               </div>
 
//               <svg
//                 viewBox="0 0 300 160"
//                 preserveAspectRatio="none"
//                 className="absolute inset-x-6 bottom-6 h-[calc(100%-2.5rem)] w-[calc(100%-3rem)]"
//               >
//                 <path
//                   d="M0,140 C40,120 60,60 100,70 C140,80 160,20 200,30 C240,40 260,10 300,20 L300,160 L0,160 Z"
//                   fill="url(#chartGradient)"
//                 />
//                 <path
//                   d="M0,140 C40,120 60,60 100,70 C140,80 160,20 200,30 C240,40 260,10 300,20"
//                   fill="none"
//                   stroke="#0ea5e9"
//                   strokeWidth="2.5"
//                 />
//                 <circle cx="200" cy="30" r="4" fill="#0ea5e9" />
//                 <defs>
//                   <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.6" />
//                     <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
//                   </linearGradient>
//                 </defs>
//               </svg>
 
//               <span className="absolute left-6 top-6 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm">
//                 Nashik-based team
//               </span>
//               <span className="absolute right-6 top-24 rounded-full bg-slate-900 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm">
//                 Est. 2017
//               </span>
//             </div>
 
//             <div className="p-7">
//               <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
//                 <Wallet size={20} />
//               </span>
//               <h3 className="mt-5 text-lg font-semibold text-slate-900">
//                 Affordable, without cutting corners
//               </h3>
//               <p className="mt-2 text-sm leading-relaxed text-slate-500">
//                 Being based in Nashik rather than a big-city agency keeps our
//                 overheads — and your quote — lower, without compromising on
//                 quality.
//               </p>
//             </div>
//           </div>
 
//           {/* Card 2 — Real contact channels, text on top, orbit graphic below */}
//           <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
//             <div className="p-7">
//               <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
//                 <Headphones size={20} />
//               </span>
//               <h3 className="mt-5 text-lg font-semibold text-slate-900">
//                 Reach a real person
//               </h3>
//               <p className="mt-2 text-sm leading-relaxed text-slate-500">
//                 Call, email, or message us on WhatsApp — Mon to Sat,
//                 9 AM to 6 PM. No ticket queue, no bot in between.
//               </p>
//             </div>
 
//             <div className="relative flex h-64 items-center justify-center bg-gradient-to-b from-white to-sky-50">
//               <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-sky-200">
//                 <div className="absolute h-52 w-52 rounded-full border border-dashed border-sky-100" />
//                 <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-200">
//                   <Headphones size={26} />
//                 </div>
//                 <span className="absolute -top-3 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
//                   <Phone size={16} />
//                 </span>
//                 <span className="absolute top-1/2 -right-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
//                   <Mail size={16} />
//                 </span>
//                 <span className="absolute -bottom-3 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
//                   <MessageSquareText size={16} />
//                 </span>
//                 <span className="absolute top-1/2 -left-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
//                   <MapPin size={16} />
//                 </span>
//               </div>
//             </div>
//           </div>
 
//           {/* Card 3 — Transparent pricing, real service list on top */}
//           <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
//             <div className="relative h-64 bg-gradient-to-b from-sky-50 to-white p-6">
//               <div className="mx-auto mt-1 w-full max-w-[240px] rounded-2xl bg-white p-3.5 shadow-md ring-1 ring-slate-100">
//                 {[
//                   { label: "Custom Web App Development" },
//                   { label: "Digital Marketing & SEO" },
//                   { label: "Bulk SMS & Email Marketing" },
//                   { label: "Hire Web & App Developers" },
//                 ].map((row, i, arr) => (
//                   <div
//                     key={row.label}
//                     className={`flex items-center justify-between gap-3 py-2 ${
//                       i !== arr.length - 1 ? "border-b border-slate-100" : ""
//                     }`}
//                   >
//                     <span className="text-xs font-medium text-slate-700">
//                       {row.label}
//                     </span>
//                     <span className="flex shrink-0 items-center gap-1 whitespace-nowrap text-[10px] font-semibold text-sky-600">
//                       <CheckCircle2 size={12} />
//                       Listed
//                     </span>
//                   </div>
//                 ))}
//                 <div className="mt-2 flex justify-end">
//                   <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-white">
//                     <ArrowUpRight size={14} />
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="p-7">
//               <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
//                 <Tag size={20} />
//               </span>
//               <h3 className="mt-5 text-lg font-semibold text-slate-900">
//                 Transparent pricing
//               </h3>
//               <p className="mt-2 text-sm leading-relaxed text-slate-500">
//                 Every service is listed openly on our site, so every client
//                 gets the same fair offer with no hidden costs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ----------------------------- Our services ----------------------------- */

// const scrollingHighlights = [
//   { icon: Layers, label: "End-to-end project ownership" },
//   { icon: ShieldCheck, label: "Transparent performance reporting" },
//   { icon: TrendingUp, label: "SEO-first architecture" },
//   { icon: Headphones, label: "Dedicated support pod" },
//   { icon: Rocket, label: "Fast, reliable deployments" },
// ];

// const OurServices = () => {
//   const loop = [...scrollingHighlights, ...scrollingHighlights];
 
//   return (
//     <section id="services" className="scroll-mt-24 bg-slate-950 px-3 py-24 lg:px-5 lg:py-28">
//       <style>{`
//         @keyframes services-scroll {
//           from { transform: translateY(0); }
//           to { transform: translateY(-50%); }
//         }
//         .services-track {
//           animation: services-scroll 14s linear infinite;
//         }
//         .services-scroll:hover .services-track {
//           animation-play-state: paused;
//         }
//         .services-scroll {
//           -webkit-mask-image: linear-gradient(to bottom, transparent, black 16%, black 84%, transparent);
//           mask-image: linear-gradient(to bottom, transparent, black 16%, black 84%, transparent);
//         }
//       `}</style>
 
//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
//         {/* Left column */}
//         <div>
//           <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
//             Our services
//           </p>
//           <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
//             Full-cycle IT solutions built to grow your visibility, engagement,
//             and revenue
//           </h2>
//           <p className="mt-6 max-w-md text-white/60">
//             From custom web platforms to digital marketing campaigns, we
//             build systems that scale with your business and deliver
//             measurable results across every project.
//           </p>
 
//           <a
//             href="/services"
//             className="group mt-9 inline-flex w-fit items-center gap-3 border border-white/30 px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-slate-900"
//           >
//             Learn more
//             <ArrowRight
//               size={14}
//               className="transition-transform duration-200 group-hover:translate-x-0.5"
//             />
//           </a>
//         </div>
 
//         {/* Right column: image + floating card */}
//         <div className="relative">
//           <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[520px]">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#123249] to-[#0e4a63]" />
//             <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(115deg,transparent_0%,transparent_40%,rgba(255,255,255,0.12)_42%,transparent_46%,transparent_60%,rgba(255,255,255,0.08)_62%,transparent_66%)]" />
//             <div className="absolute inset-0 [background-image:linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
//           </div>
 
//           <div className="absolute -bottom-10 left-1/2 w-[88%] -translate-x-1/2 rounded-3xl bg-white p-5 shadow-2xl sm:-left-10 sm:bottom-10 sm:w-[300px] sm:translate-x-0">
//             <p className="px-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Our services
//             </p>
 
//             <div className="mt-3 flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3.5">
//               <span className="text-sm font-semibold text-white">
//                 Full-cycle solution design
//               </span>
//               <CheckCircle2 size={18} className="shrink-0 text-sky-500" />
//             </div>
 
//             <div className="services-scroll relative mt-3 h-44 overflow-hidden">
//               <div className="services-track flex flex-col">
//                 {loop.map((item, i) => (
//                   <div
//                     key={`${item.label}-${i}`}
//                     className="flex items-center justify-between gap-3 border-b border-slate-100 py-3.5 last:border-b-0"
//                   >
//                     <div className="flex items-center gap-3">
//                       <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
//                         <item.icon size={15} />
//                       </span>
//                       <span className="text-sm text-slate-700">
//                         {item.label}
//                       </span>
//                     </div>
//                     <CheckCircle2
//                       size={16}
//                       className="shrink-0 text-sky-500"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* --------------------------------- Stats --------------------------------- */

// /* --------------------------------- Stats --------------------------------- */

// const StatsGrid = () => {
//   const statsData = [
//     { icon: Users, value: "500+", label: "Happy clients", description: "Across 15+ countries" },
//     { icon: PenTool, value: "700+", label: "Projects designed", description: "UI/UX focused" },
//     { icon: CheckCircle2, value: "650+", label: "Projects delivered", description: "On time & budget" },
//     { icon: Code2, value: "1M+", label: "Lines of code shipped", description: "And counting" },
//   ];

//   return (
//     <section className="bg-slate-950 px-3 py-24 lg:px-5 lg:py-28">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col gap-4 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
//           <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
//             The numbers behind our success
//           </h2>
//           <p className="max-w-xs text-sm text-white/40">
//             Real metrics that reflect our commitment to quality and client
//             satisfaction.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//           {statsData.map((stat, index) => (
//             <div
//               key={stat.label}
//               className={`group border-white/10 py-10 pr-8 transition-colors hover:bg-white/[0.03] sm:border-r ${
//                 index === statsData.length - 1 ? "lg:border-r-0" : ""
//               } ${index % 2 === 1 ? "sm:border-r-0 lg:border-r" : ""}`}
//             >
//               <stat.icon
//                 size={22}
//                 className="text-sky-400 transition-transform duration-300 group-hover:-translate-y-0.5"
//               />
//               <div className="mt-5 font-serif text-4xl font-bold text-white sm:text-5xl">
//                 {stat.value}
//               </div>
//               <p className="mt-2 text-base font-semibold text-white/90">
//                 {stat.label}
//               </p>
//               <p className="mt-1 text-sm text-white/35">{stat.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ------------------------------ Testimonials ------------------------------ */

// const Testimonials = () => {
//   return (
//     <section className="bg-slate-950 px-3 py-24 lg:px-5 lg:py-28">
//       <div className="mx-auto max-w-7xl">
//         <div className="text-center">
//           <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
//             What our clients say
//           </p>
//           <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
//             Trusted by businesses across industries
//           </h2>
//         </div>

//         <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
//           {testimonials.map((item) => (
//             <div
//               key={item.name}
//               className="flex flex-col rounded-3xl bg-white/5 p-7"
//             >
//               <Quote size={26} className="text-sky-500" />
//               <p className="mt-5 flex-1 text-sm leading-relaxed text-white/70">
//                 {item.quote}
//               </p>
//               <div className="mt-6 border-t border-white/10 pt-4">
//                 <p className="text-sm font-semibold text-white">{item.name}</p>
//                 <p className="text-xs text-white/40">{item.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* -------------------------------- CTA band -------------------------------- */

// const CtaBand = () => {
//   return (
//     <section className="bg-slate-50 px-3 py-20 lg:px-5">
//       <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-slate-900 px-8 py-14 sm:flex-row sm:items-center lg:px-16">
//         <div>
//           <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
//             We take care of your technology
//           </p>
//           <h2 className="mt-4 max-w-lg font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
//             Focus on your business — we'll handle the rest
//           </h2>
//         </div>
//         <a
//           href="/contact"
//           className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-sky-500 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-slate-900"
//         >
//           Contact Us
//           <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
//         </a>
//       </div>
//     </section>
//   );
// };

// /* --------------------------------- Home --------------------------------- */

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <IndustriesMarquee />
//       <AboutSnippet />
//       <WhyChooseUs />
//       <OurServices />
//       <StatsGrid />
//       <Testimonials />
//       <CtaBand />
//     </>
//   );
// };

// export default Home;




import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Pause,
  Play,
  ArrowRight,
  Wallet,
  Clock,
  Tag,
  Users,
  PenTool,
  CheckCircle2,
  Code2,
  Globe,
  Megaphone,
  MessageSquareText,
  Smartphone,
  Quote,
  ArrowUpRight,
  Layers,
  ShieldCheck,
  TrendingUp,
  Headphones,
  Rocket,
} from "lucide-react";

// Replace these with your actual files inside src/assets
import heroVideo from "../assets/images/softcrowd-hero-vid.mp4";
import heroPoster from "../assets/images/why-choose-us.jpg";
import aboutImage from "../assets/images/why-choose-us.jpg";

/* --------------------------------- Data --------------------------------- */

const industries = [
  "Healthcare",
  "Real Estate",
  "Education",
  "Entertainment",
  "Finance",
  "Sports & Play",
  "Social Networking",
  "Travel & Tourism",
];

const testimonials = [
  {
    quote:
      "A fast, organized, and detail-oriented team that brought our website vision to life and improved on it with ideas we hadn't considered.",
    name: "Mangesh Patil",
    role: "Client",
  },
  {
    quote:
      "They listened closely to our vision and turned it into a website that's earned nothing but positive feedback since launch.",
    name: "Kishor Roy",
    role: "KBR Properties",
  },
  {
    quote:
      "Delivered on schedule at a fair price, with professional communication throughout — our e-commerce site has performed exactly as we hoped.",
    name: "Akshay Sharma",
    role: "Tredmart",
  },
];

/* ---------------------------------- Hero ---------------------------------- */

const Hero = () => {
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

  const technologies = [
    "React.js",
    "Node.js",
    "Flutter",
    "React Native",
    "MongoDB",
    "PHP / Laravel",
  ];

  return (
    <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-slate-900">
      {/* Existing background video */}
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

      {/* Existing dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-3 pb-16 lg:px-5 lg:pb-20">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          <span className="brkt text-sm">&lt;/&gt;</span>
          Welcome to SoftCrowd Technologies
        </div>

        <h1 className="mt-6 max-w-4xl font-serif text-3xl font-bold leading-[1.12] text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl">
          Full-Stack Web, Mobile & Cloud Application Engineering
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
          Custom software development and dedicated sprint teams.
          Engineering scalable web portals, REST APIs, and
          native/cross-platform mobile apps.
        </p>

        {/* Technology badges */}
        <div className="mt-6 flex max-w-3xl flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Two CTA buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#schedule-call"
            className="group inline-flex w-fit items-center justify-center gap-3 rounded-lg bg-sky-600 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
          >
            Schedule Technical Call
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#tech-stack"
            className="group inline-flex w-fit items-center justify-center gap-3 border border-white/40 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-slate-900"
          >
            View Tech Stack & Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* Existing video play/pause control */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-8 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:right-8"
      >
        {playing ? (
          <Pause size={18} />
        ) : (
          <Play size={18} className="ml-0.5" />
        )}
      </button>
    </section>
  );
};


/* --------------------------- Industries marquee --------------------------- */

const IndustriesMarquee = () => {
  const loop = [...industries, ...industries];

  return (
    <section className="border-t border-white/5 bg-slate-950 py-16">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 26s linear infinite;
        }
      `}</style>

      <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
        Industries we serve
      </p>

      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-2xl font-semibold tracking-tight text-white/50"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------- About -------------------------------- */

const AboutSnippet = () => {
  return (
    <section className="bg-slate-950 px-3 py-24 lg:px-5 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={aboutImage}
            alt="SoftCrowd Technologies team at work"
            className="h-[380px] w-full object-cover lg:h-[460px]"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
            About SoftCrowd Technologies
          </p>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A highly experienced web design and development team based in
            Nashik, Maharashtra
          </h2>
          <p className="mt-6 max-w-lg text-white/60">
            We offer full-cycle services spanning CRM/ERP solutions, web
            development, business website design, mobile app development,
            website redesign and maintenance, SEO, custom software
            development, and e-commerce solutions.
          </p>
          <a
            href="/about"
            className="group mt-8 inline-flex w-fit items-center gap-3 border border-white/30 px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-slate-900"
          >
            Read more
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------- Service highlights --------------------------- */

const ServiceHighlights = () => {
  const items = [
    {
      icon: Code2,
      title: "Website Development",
      description:
        "Custom, responsive websites and web apps built to convert visitors and scale with your business.",
      to: "/web-application",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "SEO, social, and paid campaigns that put your brand in front of the right audience.",
      to: "/digital-marketing-solution-provider",
    },
    {
      icon: MessageSquareText,
      title: "Bulk SMS & Email",
      description:
        "Reach thousands of customers instantly with reliable bulk SMS and email marketing campaigns.",
      to: "/bulk-sms-and-email-marketing",
    },
    {
      icon: Users,
      title: "Hire Developers",
      description:
        "Bring on vetted web and mobile app developers to extend your in-house team on demand.",
      to: "/hire-web-and-mobile-app-developers",
    },
  ];

  return (
    <section className="bg-white px-3 py-24 lg:px-5 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
            What we do
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Services built around what your business actually needs
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group flex flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-sky-600 hover:via-sky-700 hover:to-slate-900 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
                <item.icon size={22} />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-white/70">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors duration-300 group-hover:text-white">
                Learn more
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------ Why choose us ------------------------------ */

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 px-3 py-24 lg:px-5 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
            Why choose us
          </p>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            A process-centered team delivering solutions that are simple to
            use and built to fit your requirements
          </h2>
        </div>
 
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1 — Affordable pricing, chart on top */}
          <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="relative h-64 overflow-hidden bg-gradient-to-b from-sky-50 to-white p-6">
              <div className="absolute inset-x-6 top-10 bottom-6 flex flex-col justify-between">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-px w-full bg-slate-200/70" />
                ))}
              </div>
 
              <svg
                viewBox="0 0 300 160"
                preserveAspectRatio="none"
                className="absolute inset-x-6 bottom-6 h-[calc(100%-2.5rem)] w-[calc(100%-3rem)]"
              >
                <path
                  d="M0,140 C40,120 60,60 100,70 C140,80 160,20 200,30 C240,40 260,10 300,20 L300,160 L0,160 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0,140 C40,120 60,60 100,70 C140,80 160,20 200,30 C240,40 260,10 300,20"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="2.5"
                />
                <circle cx="200" cy="30" r="4" fill="#0ea5e9" />
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
 
              <span className="absolute left-6 top-6 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm">
                Fixed-price quotes
              </span>
              <span className="absolute right-6 top-24 rounded-full bg-slate-900 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm">
                No hidden costs
              </span>
            </div>
 
            <div className="p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <Wallet size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Affordable, without cutting corners
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Straightforward pricing that delivers more value than
                comparable providers, without compromising on quality.
              </p>
            </div>
          </div>
 
          {/* Card 2 — Always available, text on top, orbit graphic below */}
          <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <Clock size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Always available
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Reach out any time, day or night, all year round — you'll
                always get a response from a real person on the team.
              </p>
            </div>
 
            <div className="relative flex h-64 items-center justify-center bg-gradient-to-b from-white to-sky-50">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-sky-200">
                <div className="absolute h-52 w-52 rounded-full border border-dashed border-sky-100" />
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-200">
                  <Clock size={26} />
                </div>
                <span className="absolute -top-3 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
                  <MessageSquareText size={16} />
                </span>
                <span className="absolute top-1/2 -right-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
                  <Globe size={16} />
                </span>
                <span className="absolute -bottom-3 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
                  <Users size={16} />
                </span>
                <span className="absolute top-1/2 -left-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
                  <CheckCircle2 size={16} />
                </span>
              </div>
            </div>
          </div>
 
          {/* Card 3 — Transparent pricing, floating list on top */}
          <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="relative h-64 bg-gradient-to-b from-sky-50 to-white p-6">
              <div className="mx-auto mt-4 w-full max-w-[240px] rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-100">
                {[
                  { label: "Web & App Development" },
                  { label: "Digital Marketing & SEO" },
                  { label: "Student Training Programs" },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between gap-3 py-3 ${
                      i !== arr.length - 1 ? "border-b border-slate-100" : ""
                    }`}
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {row.label}
                    </span>
                    <span className="flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-sky-600">
                      <CheckCircle2 size={13} />
                      Listed
                    </span>
                  </div>
                ))}
                <div className="mt-3 flex justify-end">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>

            <div className="p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <Tag size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Transparent pricing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Every service is listed openly on our site, so every client
                gets the same fair offer with no hidden costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- Our services ----------------------------- */

const scrollingHighlights = [
  { icon: Layers, label: "End-to-end project ownership" },
  { icon: ShieldCheck, label: "Transparent performance reporting" },
  { icon: TrendingUp, label: "SEO-first architecture" },
  { icon: Headphones, label: "Dedicated support pod" },
  { icon: Rocket, label: "Fast, reliable deployments" },
];

const OurServices = () => {
  const loop = [...scrollingHighlights, ...scrollingHighlights];
 
  return (
    <section id="services" className="scroll-mt-24 bg-slate-950 px-3 py-24 lg:px-5 lg:py-28">
      <style>{`
        @keyframes services-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .services-track {
          animation: services-scroll 14s linear infinite;
        }
        .services-scroll:hover .services-track {
          animation-play-state: paused;
        }
        .services-scroll {
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 16%, black 84%, transparent);
          mask-image: linear-gradient(to bottom, transparent, black 16%, black 84%, transparent);
        }
      `}</style>
 
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left column */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
            Our services
          </p>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Full-cycle IT solutions built to grow your visibility, engagement,
            and revenue
          </h2>
          <p className="mt-6 max-w-md text-white/60">
            From custom web platforms to digital marketing campaigns, we
            build systems that scale with your business and deliver
            measurable results across every project.
          </p>
 
          <a
            href="/services"
            className="group mt-9 inline-flex w-fit items-center gap-3 border border-white/30 px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-slate-900"
          >
            Learn more
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </div>
 
        {/* Right column: image + floating card */}
        <div className="relative">
          <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[520px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#123249] to-[#0e4a63]" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(115deg,transparent_0%,transparent_40%,rgba(255,255,255,0.12)_42%,transparent_46%,transparent_60%,rgba(255,255,255,0.08)_62%,transparent_66%)]" />
            <div className="absolute inset-0 [background-image:linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
          </div>
 
          <div className="absolute -bottom-10 left-1/2 w-[88%] -translate-x-1/2 rounded-3xl bg-white p-5 shadow-2xl sm:-left-10 sm:bottom-10 sm:w-[300px] sm:translate-x-0">
            <p className="px-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Our services
            </p>
 
            <div className="mt-3 flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3.5">
              <span className="text-sm font-semibold text-white">
                Full-cycle solution design
              </span>
              <CheckCircle2 size={18} className="shrink-0 text-sky-500" />
            </div>
 
            <div className="services-scroll relative mt-3 h-44 overflow-hidden">
              <div className="services-track flex flex-col">
                {loop.map((item, i) => (
                  <div
                    key={`${item.label}-${i}`}
                    className="flex items-center justify-between gap-3 border-b border-slate-100 py-3.5 last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                        <item.icon size={15} />
                      </span>
                      <span className="text-sm text-slate-700">
                        {item.label}
                      </span>
                    </div>
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-sky-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --------------------------------- Stats --------------------------------- */

/* --------------------------------- Stats --------------------------------- */

const StatsGrid = () => {
  const statsData = [
    { icon: Users, value: "500+", label: "Happy clients", description: "Across 15+ countries" },
    { icon: PenTool, value: "700+", label: "Projects designed", description: "UI/UX focused" },
    { icon: CheckCircle2, value: "650+", label: "Projects delivered", description: "On time & budget" },
    { icon: Code2, value: "1M+", label: "Lines of code shipped", description: "And counting" },
  ];

  return (
    <section className="bg-slate-950 px-3 py-24 lg:px-5 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            The numbers behind our success
          </h2>
          <p className="max-w-xs text-sm text-white/40">
            Real metrics that reflect our commitment to quality and client
            satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className={`group border-white/10 py-10 pr-8 transition-colors hover:bg-white/[0.03] sm:border-r ${
                index === statsData.length - 1 ? "lg:border-r-0" : ""
              } ${index % 2 === 1 ? "sm:border-r-0 lg:border-r" : ""}`}
            >
              <stat.icon
                size={22}
                className="text-sky-400 transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <div className="mt-5 font-serif text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-base font-semibold text-white/90">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-white/35">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------ Testimonials ------------------------------ */

const Testimonials = () => {
  return (
    <section className="bg-slate-950 px-3 py-24 lg:px-5 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
            What our clients say
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Trusted by businesses across industries
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-3xl bg-white/5 p-7"
            >
              <Quote size={26} className="text-sky-500" />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-white/70">
                {item.quote}
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-white/40">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --------------------------------- Home --------------------------------- */

const Home = () => {
  return (
    <>
      <Hero />
      <IndustriesMarquee />
      <AboutSnippet />
      <ServiceHighlights />
      <WhyChooseUs />
      <OurServices />
      <StatsGrid />
      <Testimonials />

    </>
  );
};

export default Home;