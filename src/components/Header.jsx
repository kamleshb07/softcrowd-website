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
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

import logoFull from "../assets/images/softcrowd-logo-full.png";
import logoFullWhite from "../assets/images/softcrowd-logo-full-white.png";

const navItems = [
  { label: "Solutions", to: "/solutions" },
  { label: "Tech Stack", to: "/tech-stack" },
  { label: "Case Studies", to: "/case-studies" },
  {
    label: "Dedicated Developers",
    to: "/dedicated-developers",
  },
];

const Logo = ({ dark }) => (
  <img
    src={dark ? logoFull : logoFullWhite}
    alt="SoftCrowd Technologies"
    className="h-8 w-auto object-contain lg:h-9"
  />
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.09 0C5.53 0 .2 5.33.2 11.89c0 2.1.55 4.15 1.6 5.96L.1 24l6.3-1.65a11.87 11.87 0 0 0 5.69 1.45h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.47-8.43ZM12.1 21.8a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.85 9.85 0 0 1-1.51-5.28c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.43 9.89-9.88 9.89Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);
const WHATSAPP_LINK ="https://wa.me/917447444874?text=Hi%20Softcrowd%2C%20I%20have%20an%20Enquiry%20about%20your%20services.%20Please%20share%20more%20details.";

const Header = () => {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const lightHeader = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const navTextClass = lightHeader
    ? "text-slate-800 hover:text-sky-600"
    : "text-white hover:text-sky-300";

  const outlineButtonClass = lightHeader
    ? "border-slate-300 text-slate-800 hover:border-slate-800 hover:bg-slate-50"
    : "border-white/50 text-white hover:border-white hover:bg-white/10";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
          lightHeader
            ? "bg-white shadow-sm"
            : "bg-transparent"
        }`}
        >
        {/* --------------Top Bar - Company Phone Number----------------
          <div className="w-full bg-slate-900 px-5 py-2 text-right text-sm text-white">
            <a href="tel:+917447444874" className="hover:text-sky-300">
              Call Us: +91 7447444874
            </a>
          </div> */}

          <div className="mx-auto flex min-h-[78px] max-w-[1440px] items-center justify-between gap-5 px-5 py-3 xl:px-6">
          {/* Company Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="shrink-0"
            aria-label="SoftCrowd Technologies Home"
          >
            <Logo dark={lightHeader} />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden flex-1 items-center justify-end gap-6 pr-5 2xl:gap-7 xl:flex"
          >
            
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `whitespace-nowrap text-[14px] font-semibold transition-colors 2xl:text-[15px] ${
                    isActive ? "text-sky-600" : navTextClass
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex shrink-0 items-center gap-3 xl:gap-4">


            {/* Schedule Technical Call */}
            <Link
              to="/schedule-call"
              className={`hidden h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border px-5 text-[14px] font-semibold transition-all 2xl:px-6 lg:inline-flex ${outlineButtonClass}`}
            >
              Schedule Technical Call
              <ArrowRight size={16} />
            </Link>

            {/* Hamburger Menu - Visible on Desktop and Mobile */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-lg border transition-colors ${outlineButtonClass}`}
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Navigation Menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[100] flex min-h-screen flex-col overflow-y-auto bg-slate-950 text-white"
        >
          {/* Menu Header */}
          <div className="flex min-h-[78px] items-center justify-between border-b border-white/10 px-5 py-3 xl:px-8">
            <Link to="/" onClick={closeMobileMenu}>
              <Logo dark={false} />
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              <X size={21} />
            </button>
          </div>

          {/* Menu Links */}
          <nav
            aria-label="Expanded navigation"
            className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-2 px-7 py-10 sm:px-12"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMobileMenu}
                className="flex items-center border-b border-white/10 py-5 text-xl font-semibold text-white transition-colors hover:text-sky-400 sm:text-2xl"
              >
                <span className="mr-5 text-sm font-medium text-sky-500">
                  0{index + 1}
                </span>

                {item.label}
              </Link>
            ))}

            <Link
              to="/schedule-call"
              onClick={closeMobileMenu}
              className="mt-6 flex min-h-[52px] items-center justify-center gap-3 rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-slate-950"
            >
              Schedule Technical Call
              <ArrowRight size={17} />
            </Link>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-3 flex min-h-[52px] items-center justify-center gap-3 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </nav>

          {/* Menu Footer */}
          <div className="border-t border-white/10 px-6 py-6">
            <p className="text-center text-sm text-white/50">
              SoftCrowd Technologies
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;