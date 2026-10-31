//------------------------------------------------


// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   ChevronDown, Menu, X, ArrowRight, Code2, Briefcase,
//   Building2, Factory, GraduationCap, Rocket,
// } from "lucide-react";
// import logoFull from "../assets/images/softcrowd-logo-full.png";
// import logoFullWhite from "../assets/images/softcrowd-logo-full-white.png";
// import officePhoto from "../assets/images/about-hero.jpeg";
// import leftPanelImg from "../assets/images/about-hero.jpeg";   // NEW - left dark panel image
// import featuredImg from "../assets/images/about-hero.jpeg";     // NEW - right featured image

// const servicesMenu = [
//   {
//     label: "Development",
//     icon: Code2,
//     items: [
//       { title: "Custom Web Application Development", to: "/web-application" },
//       { title: "Digital Marketing Solution Provider", to: "/digital-marketing-solution-provider" },
//       { title: "Bulk SMS and Email Marketing", to: "/bulk-sms-and-email-marketing" },
//       { title: "Hire Web and Mobile App Developers", to: "/hire-web-and-mobile-app-developers" },
//     ],
//   },
//   {
//     label: "Career",
//     icon: Briefcase,
//     items: [{ title: "View Open Positions", to: "/careers" }],
//   },
//   {
//     label: "Corporate Training",
//     icon: Building2,
//     items: [{ title: "Corporate Training Program", to: "/corporate-training" }],
//   },
//   {
//     label: "Industrial Training",
//     icon: Factory,
//     items: [{ title: "Industrial Training Program", to: "/industrial-training" }],
//   },
//   {
//     label: "College Training",
//     icon: GraduationCap,
//     items: [{ title: "College Training Program", to: "/college-training" }],
//   },
//   {
//     label: "Internship",
//     icon: Rocket,
//     items: [{ title: "Internship Program", to: "/internship" }],
//   },
// ];

// const getNavLinkClass = (scrolled) =>
//   ({ isActive }) =>
//     `whitespace-nowrap text-base font-medium transition-colors hover:text-sky-600 ${
//       isActive ? "text-sky-600" : scrolled ? "text-slate-800" : "text-white"
//     }`;

// const Logo = ({ dark = false }) => (
//   <img
//     src={dark ? logoFull : logoFullWhite}
//     alt="Softcrowd Technologies"
//     className="h-9 w-auto transition-opacity duration-300 lg:h-10"
//   />
// );

// const ServicesMenu = ({ scrolled, openDropdown, setOpenDropdown }) => {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const isOpen = openDropdown === "services";
//   const current = servicesMenu[activeCategory];

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => {
//         setOpenDropdown("services");
//         setActiveCategory(0);
//       }}
//       onMouseLeave={() => setOpenDropdown(null)}
//     >
//       <button
//         className={`flex items-center gap-1.5 whitespace-nowrap text-base font-medium transition-colors hover:text-sky-600 ${
//           scrolled ? "text-slate-800" : "text-white"
//         }`}
//       >
//         Services
//         <ChevronDown
//           size={16}
//           className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute left-1/2 top-full w-[1180px] -translate-x-1/2 pt-4">
//           {/* FIXED HEIGHT = no jump when switching categories */}
//           <div className="flex h-[560px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/15">

//             {/* LEFT: full-bleed dark image panel with category tabs overlaid */}
//             <div className="relative w-72 shrink-0">
//               <img
//                 src={leftPanelImg}
//                 alt=""
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-slate-900/75" />

//               <div className="relative flex h-full flex-col py-6">
//                 {servicesMenu.map((cat, i) => (
//                   <button
//                     key={cat.label}
//                     onMouseEnter={() => setActiveCategory(i)}
//                     className={`flex w-full items-center gap-3 border-l-[3px] px-6 py-3.5 text-left text-[17px] font-medium transition-colors ${
//                       activeCategory === i
//                         ? "border-sky-400 bg-white/10 text-white"
//                         : "border-transparent text-white/70 hover:bg-white/5 hover:text-white"
//                     }`}
//                   >
//                     <cat.icon
//                       size={20}
//                       className={activeCategory === i ? "text-sky-400" : "text-white/50"}
//                     />
//                     {cat.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* MIDDLE: active category's links — flex-1, scrolls if overflow */}
//             <div className="flex-1 overflow-y-auto p-10">
//               <p className="text-xl font-semibold text-slate-900">{current.label}</p>
//               <div className="mt-1.5 h-px w-16 bg-sky-500" />

//               <ul className="mt-6 space-y-1.5">
//                 {current.items.map((item) => (
//                   <li key={item.title}>
//                     <Link
//                       to={item.to}
//                       onClick={() => setOpenDropdown(null)}
//                       className="block rounded-lg px-3 py-3 text-[17px] font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-600"
//                     >
//                       {item.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* RIGHT: fixed-size featured image + caption, identical for every category */}
//             <div className="w-80 shrink-0 border-l border-slate-100 bg-slate-50 p-7">
//               <div className="h-44 w-full overflow-hidden rounded-xl">
//                 <img
//                   src={featuredImg}
//                   alt="Softcrowd Technologies team at our Nashik office"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <p className="mt-5 text-lg font-semibold text-slate-900">Built in Nashik</p>
//               <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
//                 One team behind every service on this menu — from custom builds to training programs.
//               </p>
//               <Link
//                 to="/about"
//                 onClick={() => setOpenDropdown(null)}
//                 className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-sky-600 hover:underline"
//               >
//                 Meet the team
//                 <ArrowRight size={14} />
//               </Link>
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const Header = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navLinkClass = getNavLinkClass(scrolled);

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
//         scrolled ? "bg-white shadow-sm" : "bg-transparent"
//       }`}
//     >
//       <div className="mx-auto flex max-w-7xl items-center px-4 py-4 lg:px-6">
//         <Link to="/" className="flex shrink-0 items-center">
//           <Logo dark={scrolled} />
//         </Link>

//         <nav className="ml-10 hidden items-center gap-8 lg:flex">
//           <NavLink to="/" end className={navLinkClass}>Home</NavLink>
//           <NavLink to="/about" className={navLinkClass}>About us</NavLink>

//           <ServicesMenu
//             scrolled={scrolled}
//             openDropdown={openDropdown}
//             setOpenDropdown={setOpenDropdown}
//           />

//           <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
//           <NavLink to="/contact" className={navLinkClass}>Contact us</NavLink>
//         </nav>

//         <div className="ml-auto flex items-center gap-4">
//           <Link
//             to="/contact"
//             className={`group hidden items-center gap-2 rounded-lg px-6 py-3 text-[15px] font-semibold transition-all lg:inline-flex ${
//               scrolled
//                 ? "bg-slate-900 text-white hover:bg-sky-600"
//                 : "border border-white/40 text-white hover:border-white hover:bg-white/10"
//             }`}
//           >
//             Book a Consultation
//             <ArrowRight
//               size={16}
//               className="transition-transform duration-200 group-hover:translate-x-0.5"
//             />
//           </Link>

//           <button
//             onClick={() => setMobileOpen(true)}
//             aria-label="Open menu"
//             className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-colors lg:h-12 lg:w-12 ${
//               scrolled
//                 ? "border-slate-200 text-slate-800 hover:border-slate-900"
//                 : "border-white/40 text-white hover:border-white"
//             }`}
//           >
//             <Menu size={20} />
//           </button>
//         </div>
//       </div>

//       {mobileOpen && (
//         <div className="fixed inset-0 z-[100] flex flex-col bg-slate-950 text-white">
//           <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
//             <Link to="/" onClick={() => setMobileOpen(false)}>
//               <Logo dark={false} />
//             </Link>
//             <button
//               onClick={() => setMobileOpen(false)}
//               aria-label="Close menu"
//               className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:border-white/40"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           <div className="flex flex-1 flex-col items-start justify-center gap-3 overflow-y-auto px-8 py-10 lg:px-24">
//             {[
//               { label: "Home", to: "/" },
//               { label: "About us", to: "/about" },
//               { label: "Custom Web Development", to: "/web-application" },
//               { label: "Digital Marketing", to: "/digital-marketing-solution-provider" },
//               { label: "Bulk SMS & Email Marketing", to: "/bulk-sms-and-email-marketing" },
//               { label: "Hire Developers", to: "/hire-web-and-mobile-app-developers" },
//               { label: "Careers", to: "/careers" },
//               { label: "Corporate Training", to: "/corporate-training" },
//               { label: "Industrial Training", to: "/industrial-training" },
//               { label: "College Training", to: "/college-training" },
//               { label: "Internship", to: "/internship" },
//               { label: "Blogs", to: "/blogs" },
//               { label: "Contact us", to: "/contact" },
//             ].map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.to}
//                 onClick={() => setMobileOpen(false)}
//                 className="group flex items-baseline gap-4 font-serif text-2xl font-semibold tracking-tight text-white/90 transition-colors hover:text-sky-400 sm:text-3xl"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-white/10 px-4 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-6">
//             <p className="text-sm text-white/50">Nashik, Maharashtra, India</p>
//             <div className="flex gap-6 text-sm text-white/50">
//               <a href="#" className="hover:text-white">Instagram</a>
//               <a href="#" className="hover:text-white">Facebook</a>
//               <a href="#" className="hover:text-white">LinkedIn</a>
//               <a href="#" className="hover:text-white">YouTube</a>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;  

//------------------------------------------------

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown, Menu, X, ArrowRight, Code2, Briefcase,
  Building2, Factory, GraduationCap, Rocket, BookOpen,
} from "lucide-react";
import logoFull from "../assets/images/softcrowd-logo-full.png";
import logoFullWhite from "../assets/images/softcrowd-logo-full-white.png";
import officePhoto from "../assets/images/about-hero.jpeg";
import leftPanelImg from "../assets/images/about-hero.jpeg";   // NEW - left dark panel image
import featuredImg from "../assets/images/about-hero.jpeg";     // NEW - right featured image

// lucide-react has no WhatsApp glyph, so this is a small inline brand icon
// sized/colored the same way as the lucide icons used alongside it.
const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.508 3.63 1.472 5.185L2 22l4.94-1.446A9.94 9.94 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.03c-1.677 0-3.313-.451-4.733-1.303l-.34-.202-3.005.88.895-2.933-.221-.352A8.017 8.017 0 0 1 3.97 12c0-4.43 3.603-8.03 8.031-8.03 4.428 0 8.029 3.6 8.029 8.03 0 4.429-3.601 8.03-8.029 8.03z" />
  </svg>
);

const WHATSAPP_LINK =
  "https://wa.me/917447478744?text=Hi%20Softcrowd%2C%20I%20have%20an%20Enquiry%20about%20your%20services.%20Please%20share%20more%20details.";

const servicesMenu = [
  {
    label: "Development",
    icon: Code2,
    items: [
      { title: "Custom Web Application Development", to: "/web-application" },
      { title: "Digital Marketing Solution Provider", to: "/digital-marketing-solution-provider" },
      { title: "Bulk SMS and Email Marketing", to: "/bulk-sms-and-email-marketing" },
      { title: "Hire Web and Mobile App Developers", to: "/hire-web-and-mobile-app-developers" },
    ],
  },
  {
    label: "Student Training",
    icon: BookOpen,
    items: [
      {
        title: "Student Portal (Jobs Website)",
        href: "https://jobs.softcrowdtechnologies.com/",
        external: true,
      },
    ],
  },
  {
    label: "Career",
    icon: Briefcase,
    items: [{ title: "View Open Positions", to: "/careers" }],
  },
  {
    label: "Corporate Training",
    icon: Building2,
    items: [{ title: "Corporate Training Program", to: "/corporate-training" }],
  },
  {
    label: "Industrial Training",
    icon: Factory,
    items: [{ title: "Industrial Training Program", to: "/industrial-training" }],
  },
  {
    label: "College Training",
    icon: GraduationCap,
    items: [{ title: "College Training Program", to: "/college-training" }],
  },
  {
    label: "Internship",
    icon: Rocket,
    items: [{ title: "Internship Program", to: "/internship" }],
  },
];

const getNavLinkClass = (scrolled) =>
  ({ isActive }) =>
    `whitespace-nowrap text-base font-medium transition-colors hover:text-sky-600 ${
      isActive ? "text-sky-600" : scrolled ? "text-slate-800" : "text-white"
    }`;

const Logo = ({ dark = false }) => (
  <img
    src={dark ? logoFull : logoFullWhite}
    alt="Softcrowd Technologies"
    className="h-9 w-auto transition-opacity duration-300 lg:h-10"
  />
);

// Renders a single menu-item link — an internal <Link> for routed pages,
// or a plain <a target="_blank"> for external destinations (e.g. the
// Jobs portal), keeping identical styling either way.
const MenuItemLink = ({ item, onNavigate, className }) => {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={className}
      >
        {item.title}
      </a>
    );
  }
  return (
    <Link to={item.to} onClick={onNavigate} className={className}>
      {item.title}
    </Link>
  );
};

const ServicesMenu = ({ scrolled, openDropdown, setOpenDropdown }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const isOpen = openDropdown === "services";
  const current = servicesMenu[activeCategory];

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpenDropdown("services");
        setActiveCategory(0);
      }}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className={`flex items-center gap-1.5 whitespace-nowrap text-base font-medium transition-colors hover:text-sky-600 ${
          scrolled ? "text-slate-800" : "text-white"
        }`}
      >
        Services
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full w-[1180px] -translate-x-1/2 pt-4">
          {/* FIXED HEIGHT = no jump when switching categories */}
          <div className="flex h-[560px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/15">

            {/* LEFT: full-bleed dark image panel with category tabs overlaid */}
            <div className="relative w-72 shrink-0">
              <img
                src={leftPanelImg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/75" />

              <div className="relative flex h-full flex-col overflow-y-auto py-6">
                {servicesMenu.map((cat, i) => (
                  <button
                    key={cat.label}
                    onMouseEnter={() => setActiveCategory(i)}
                    className={`flex w-full items-center gap-3 border-l-[3px] px-6 py-3.5 text-left text-[17px] font-medium transition-colors ${
                      activeCategory === i
                        ? "border-sky-400 bg-white/10 text-white"
                        : "border-transparent text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <cat.icon
                      size={20}
                      className={activeCategory === i ? "text-sky-400" : "text-white/50"}
                    />
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* MIDDLE: active category's links — flex-1, scrolls if overflow */}
            <div className="flex-1 overflow-y-auto p-10">
              <p className="text-xl font-semibold text-slate-900">{current.label}</p>
              <div className="mt-1.5 h-px w-16 bg-sky-500" />

              <ul className="mt-6 space-y-1.5">
                {current.items.map((item) => (
                  <li key={item.title}>
                    <MenuItemLink
                      item={item}
                      onNavigate={() => setOpenDropdown(null)}
                      className="block rounded-lg px-3 py-3 text-[17px] font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-600"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: fixed-size featured image + caption, identical for every category */}
            <div className="w-80 shrink-0 border-l border-slate-100 bg-slate-50 p-7">
              <div className="h-44 w-full overflow-hidden rounded-xl">
                <img
                  src={featuredImg}
                  alt="Softcrowd Technologies team at our Nashik office"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-5 text-lg font-semibold text-slate-900">Built in Nashik</p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                One team behind every service on this menu — from custom builds to training programs.
              </p>
              <Link
                to="/about"
                onClick={() => setOpenDropdown(null)}
                className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-sky-600 hover:underline"
              >
                Meet the team
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

const mobileNavItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Custom Web Development", to: "/web-application" },
  { label: "Digital Marketing", to: "/digital-marketing-solution-provider" },
  { label: "Bulk SMS & Email Marketing", to: "/bulk-sms-and-email-marketing" },
  { label: "Hire Developers", to: "/hire-web-and-mobile-app-developers" },
  { label: "Student Portal (Jobs Website)", href: "https://jobs.softcrowdtechnologies.com/", external: true },
  { label: "Careers", to: "/careers" },
  { label: "Corporate Training", to: "/corporate-training" },
  { label: "Industrial Training", to: "/industrial-training" },
  { label: "College Training", to: "/college-training" },
  { label: "Internship", to: "/internship" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact us", to: "/contact" },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = getNavLinkClass(scrolled);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center px-4 py-4 lg:px-6">
        <Link to="/" className="flex shrink-0 items-center">
          <Logo dark={scrolled} />
        </Link>

        <nav className="ml-10 hidden items-center gap-8 lg:flex">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About us</NavLink>

          <ServicesMenu
            scrolled={scrolled}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact us</NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors lg:inline-flex ${
              scrolled
                ? "border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                : "border-white/40 text-white hover:border-white hover:bg-white/10"
            }`}
          >
            <WhatsAppIcon size={16} />
            Chat on WhatsApp
          </a>

          <Link
            to="/contact"
            className={`group hidden items-center gap-2 rounded-lg px-6 py-3 text-[15px] font-semibold transition-all lg:inline-flex ${
              scrolled
                ? "bg-slate-900 text-white hover:bg-sky-600"
                : "border border-white/40 text-white hover:border-white hover:bg-white/10"
            }`}
          >
            Enquiry Now
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-colors lg:h-12 lg:w-12 ${
              scrolled
                ? "border-slate-200 text-slate-800 hover:border-slate-900"
                : "border-white/40 text-white hover:border-white"
            }`}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-slate-950 text-white">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <Logo dark={false} />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:border-white/40"
            >
              <X size={20} />
            </button>
          </div>

          <div className="px-8 pt-6 lg:px-24">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 px-4 py-2 text-sm font-semibold text-emerald-400 transition-colors hover:bg-emerald-400/10"
            >
              <WhatsAppIcon size={16} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-1 flex-col items-start justify-center gap-3 overflow-y-auto px-8 py-10 lg:px-24">
            {mobileNavItems.map((item) => (
              <MenuItemLink
                key={item.label}
                item={{ title: item.label, to: item.to, href: item.href, external: item.external }}
                onNavigate={() => setMobileOpen(false)}
                className="group flex items-baseline gap-4 font-serif text-2xl font-semibold tracking-tight text-white/90 transition-colors hover:text-sky-400 sm:text-3xl"
              />
            ))}
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-white/10 px-4 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-6">
            <p className="text-sm text-white/50">Nashik, Maharashtra, India</p>
            <div className="flex gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">YouTube</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;