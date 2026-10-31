// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowUpRight, MapPin } from "lucide-react";
// import logoFullWhite from "../assets/images/softcrowd-logo-full-white.png";

// const OFFICE_ADDRESS =
//   "2nd Floor, Kaveri Sankul, Wakilwadi Corner, Ashok Stambh, Nashik - 422001";
// const MAPS_SEARCH_LINK =
//   "https://www.google.com/maps/search/?api=1&query=" +
//   encodeURIComponent(`SoftCrowd Technologies ${OFFICE_ADDRESS}`);

// const navColumn = [
//   { label: "Home", to: "/" },
//   { label: "About us", to: "/about" },
//   { label: "Services", to: "/#services" },
//   { label: "Case studies", to: "#" },
//   { label: "Blog", to: "/blogs" },
//   { label: "Pricing", to: "#" },
//   { label: "Contact", to: "/contact" },
//   { label: "FAQ", to: "#" },
// ];

// const connectColumn = [
//   { label: "Facebook", href: "https://www.facebook.com/" },
//   { label: "LinkedIn", href: "https://www.linkedin.com/" },
//   { label: "Dribbble", href: "https://dribbble.com/" },
//   { label: "Behance", href: "https://www.behance.net/" },
// ];

// const utilityColumn = [
//   { label: "Licenses", to: "#" },
//   { label: "Style guide", to: "#" },
// ];

// const Footer = () => {
//   return (
//     <footer className="relative overflow-hidden bg-slate-950 text-white">
//       <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-20 lg:px-6 lg:pt-28">
//         {/* Intro + CTA / nav columns */}
//         <div className="grid grid-cols-1 gap-14 border-b border-white/10 pb-16 lg:grid-cols-2">
//           <div>
//             <img
//               src={logoFullWhite}
//               alt="Softcrowd Technologies"
//               className="h-8 w-auto"
//             />
//             <p className="mt-6 max-w-md font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
//               Start your growth journey with Softcrowd
//             </p>
//             <p className="mt-4 max-w-md text-white/60">
//               We partner with organizations to solve complex challenges
//               through strategy, insight, and execution — practical,
//               data-driven, and focused on measurable results.
//             </p>

//             <Link
//               to="/contact"
//               className="group mt-8 inline-flex w-fit items-center gap-2.5 rounded-lg bg-sky-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
//             >
//               Get in touch
//               <ArrowUpRight
//                 size={16}
//                 className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//               />
//             </Link>

//             {/* Clickable map preview — opens Google Maps search for our
//                 office address in a new tab. */}
//             <a
//               href={MAPS_SEARCH_LINK}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group mt-8 flex max-w-md items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-sky-400/40 hover:bg-white/10"
//             >
//               <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
//                 <iframe
//                   title="Softcrowd Technologies office map preview"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.049915826792!2d73.78369321432167!3d20.006419627266617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb12b03b2167%3A0xa2f4b4babd01a24c!2sSoftCrowd%20Technologies!5e0!3m2!1sen!2sin!4v1640838128323!5m2!1sen!2sin"
//                   className="pointer-events-none h-full w-full grayscale invert"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//               <div className="min-w-0">
//                 <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
//                   <MapPin size={14} className="shrink-0 text-sky-400" />
//                   Find us on the map
//                 </p>
//                 <p className="mt-1 truncate text-xs text-white/50">
//                   {OFFICE_ADDRESS}
//                 </p>
//               </div>
//             </a>
//           </div>

//           <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
//             <div>
//               <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
//                 Navigation
//               </p>
//               <ul className="space-y-3">
//                 {navColumn.map((item) => (
//                   <li key={item.label}>
//                     <Link
//                       to={item.to}
//                       className="text-base font-medium text-white/85 transition-colors hover:text-sky-400"
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
//                 Connect
//               </p>
//               <ul className="space-y-3">
//                 {connectColumn.map((item) => (
//                   <li key={item.label}>
//                     <a
//                       href={item.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-base font-medium text-white/85 transition-colors hover:text-sky-400"
//                     >
//                       {item.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
//                 Utility pages
//               </p>
//               <ul className="space-y-3">
//                 {utilityColumn.map((item) => (
//                   <li key={item.label}>
//                     <Link
//                       to={item.to}
//                       className="text-base font-medium text-white/85 transition-colors hover:text-sky-400"
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-8 flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
//           <a
//             href={MAPS_SEARCH_LINK}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transition-colors hover:text-sky-400"
//           >
//             Softcrowd Technologies &middot; Nashik, Maharashtra, India
//           </a>
//           <p>Designed by Softcrowd &middot; Built with React &amp; Tailwind CSS</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

//this the map in big side and special section for contact us and social media links and other important links and services links

// import React from "react";
// import { Link } from "react-router-dom";
// import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
// import logoFullWhite from "../assets/images/softcrowd-logo-full-white.png";

// const OFFICE_ADDRESS =
//   "2nd Floor, Kaveri Sankul, Wakilwadi Corner, Ashok Stambh, Nashik - 422001";
// const MAPS_SEARCH_LINK =
//   "https://www.google.com/maps/search/?api=1&query=" +
//   encodeURIComponent(`SoftCrowd Technologies ${OFFICE_ADDRESS}`);
// const MAPS_EMBED_SRC =
//   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.049915826792!2d73.78369321432167!3d20.006419627266617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb12b03b2167%3A0xa2f4b4babd01a24c!2sSoftCrowd%20Technologies!5e0!3m2!1sen!2sin!4v1640838128323!5m2!1sen!2sin";

// // lucide-react doesn't ship brand/social logos, so these are small inline
// // SVG icons, sized and colored to match the circular badges in the reference.
// const FacebookIcon = ({ size = 16 }) => (
//   <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
//     <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
//   </svg>
// );

// const LinkedInIcon = ({ size = 16 }) => (
//   <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//   </svg>
// );

// const InstagramIcon = ({ size = 16 }) => (
//   <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//   </svg>
// );

// const socialLinks = [
//   { label: "Facebook", href: "https://www.facebook.com/softcrowdtechnologies/", icon: FacebookIcon, bg: "bg-[#1877F2]" },
//   { label: "LinkedIn", href: "https://www.linkedin.com/company/softcrowdtechnologies/posts/", icon: LinkedInIcon, bg: "bg-[#0A66C2]" },
//   { label: "Instagram", href: "https://www.instagram.com/softcrowdtechnologies/?hl=en", icon: InstagramIcon, bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" },
// ];

// // "Important Links" — same set as the reference, minus Terms & Privacy.
// const importantLinks = [
//   { label: "About Us", to: "/about" },
//   { label: "Blogs", to: "/blogs" },
//   { label: "Contact Us", to: "/contact" },
//   { label: "Careers", to: "/careers" },
// ];

// // All services — Development pages + every training program.
// const serviceLinks = [
//   { label: "Website Development", to: "/web-application" },
//   { label: "Digital Marketing", to: "/digital-marketing-solution-provider" },
//   { label: "Bulk SMS & Email", to: "/bulk-sms-and-email-marketing" },
//   { label: "Hire Developers", to: "/hire-web-and-mobile-app-developers" },
//   { label: "Corporate Training", to: "/corporate-training" },
//   { label: "Industrial Training", to: "/industrial-training" },
//   { label: "College Training", to: "/college-training" },
//   { label: "Internship", to: "/internship" },
// ];

// const Footer = () => {
//   return (
//     <footer className="relative overflow-hidden bg-slate-950 text-white">
//       <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-20 lg:px-6 lg:pt-24">
//         <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
//           {/* Brand + description + social */}
//           <div className="sm:col-span-2 lg:col-span-2">
//             <img
//               src={logoFullWhite}
//               alt="Softcrowd Technologies"
//               className="h-8 w-auto"
//             />
//             <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
//               SoftCrowd Technologies team of experts has years of experience
//               and have worked on a wide variety of projects. We're based in
//               Nashik, Maharashtra, India and specialize in Web Designing, Web
//               Development and Digital Marketing.
//             </p>

//             <div className="mt-6 flex items-center gap-3">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-200 hover:-translate-y-0.5 ${social.bg}`}
//                 >
//                   <social.icon size={16} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Important Links */}
//           <div>
//             <p className="mb-5 text-sm font-semibold text-white">
//               Important Links
//             </p>
//             <ul className="space-y-3">
//               {importantLinks.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     to={item.to}
//                     className="text-sm font-medium text-white/70 transition-colors hover:text-sky-400"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <p className="mb-5 text-sm font-semibold text-white">Services</p>
//             <ul className="space-y-3">
//               {serviceLinks.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     to={item.to}
//                     className="text-sm font-medium text-white/70 transition-colors hover:text-sky-400"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us + Our Location */}
//           <div className="sm:col-span-2 lg:col-span-1 lg:space-y-8">
//             <div>
//               <p className="mb-5 text-sm font-semibold text-white">
//                 Contact Us
//               </p>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <MapPin size={16} className="mt-0.5 shrink-0 text-sky-400" />
//                   <span className="text-sm text-white/70">{OFFICE_ADDRESS}</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Phone size={16} className="shrink-0 text-sky-400" />
//                   <a
//                     href="tel:+917447478744"
//                     className="text-sm text-white/70 transition-colors hover:text-sky-400"
//                   >
//                     +91 7447478744
//                   </a>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Mail size={16} className="shrink-0 text-sky-400" />
//                   <a
//                     href="mailto:softcrowdtech@gmail.com"
//                     className="text-sm text-white/70 transition-colors hover:text-sky-400"
//                   >
//                     softcrowdtech@gmail.com
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="mt-8 lg:mt-0">
//               <p className="mb-5 text-sm font-semibold text-white">
//                 Our Location
//               </p>
//               <a
//                 href={MAPS_SEARCH_LINK}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative block h-36 w-full max-w-xs overflow-hidden rounded-xl border border-white/10"
//               >
//                 <iframe
//                   title="Softcrowd Technologies office map"
//                   src={MAPS_EMBED_SRC}
//                   className="pointer-events-none h-full w-full"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//                 <span className="absolute left-2 top-2 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-md transition-colors group-hover:bg-sky-50">
//                   <ExternalLink size={12} />
//                   Open in Maps
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-8 flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
//           <a
//             href={MAPS_SEARCH_LINK}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transition-colors hover:text-sky-400"
//           >
//             Softcrowd Technologies &middot; Nashik, Maharashtra, India
//           </a>
//           <p>
//             &copy; {new Date().getFullYear()}{" "}
//             <a
//               href="https://softcrowdtechnologies.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition-colors hover:text-sky-400"
//             >
//               SoftCrowd Technologies.
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logoFullWhite from "../assets/images/softcrowd-logo-full-white.png";

const OFFICE_ADDRESS =
  "2nd Floor, Kaveri Sankul, Wakilwadi Corner, Ashok Stambh, Nashik - 422001";
const MAPS_SEARCH_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(`SoftCrowd Technologies ${OFFICE_ADDRESS}`);
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.049915826792!2d73.78369321432167!3d20.006419627266617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb12b03b2167%3A0xa2f4b4babd01a24c!2sSoftCrowd%20Technologies!5e0!3m2!1sen!2sin!4v1640838128323!5m2!1sen!2sin";

// lucide-react doesn't ship brand/social logos, so these are small inline
// SVG icons, sized and colored to match the circular badges in the reference.
const FacebookIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/softcrowdtechnologies/", icon: FacebookIcon, bg: "bg-[#1877F2]" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/softcrowdtechnologies/posts/", icon: LinkedInIcon, bg: "bg-[#0A66C2]" },
  { label: "Instagram", href: "https://www.instagram.com/softcrowdtechnologies/?hl=en", icon: InstagramIcon, bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" },
];

// "Important Links" — same set as the reference, minus Terms & Privacy.
const importantLinks = [
  { label: "About Us", to: "/about" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact" },
  { label: "Careers", to: "/careers" },
];

// All services — Development pages + every training program.
const serviceLinks = [
  { label: "Website Development", to: "/web-application" },
  { label: "Digital Marketing", to: "/digital-marketing-solution-provider" },
  { label: "Bulk SMS & Email", to: "/bulk-sms-and-email-marketing" },
  { label: "Hire Developers", to: "/hire-web-and-mobile-app-developers" },
  { label: "Corporate Training", to: "/corporate-training" },
  { label: "Industrial Training", to: "/industrial-training" },
  { label: "College Training", to: "/college-training" },
  { label: "Internship", to: "/internship" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-20 lg:px-6 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand + description + social */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img
              src={logoFullWhite}
              alt="Softcrowd Technologies"
              className="h-8 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              SoftCrowd Technologies team of experts has years of experience
              and have worked on a wide variety of projects. We're based in
              Nashik, Maharashtra, India and specialize in Web Designing, Web
              Development and Digital Marketing.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-200 hover:-translate-y-0.5 ${social.bg}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>

            {/* Clickable map preview — opens Google Maps search for our
                office address in a new tab. */}
            <a
              href={MAPS_SEARCH_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex max-w-md items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-sky-400/40 hover:bg-white/10"
            >
              <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                <iframe
                  title="Softcrowd Technologies office map preview"
                  src={MAPS_EMBED_SRC}
                  className="pointer-events-none h-full w-full grayscale invert"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  <MapPin size={14} className="shrink-0 text-sky-400" />
                  Find us on the map
                </p>
                <p className="mt-1 truncate text-xs text-white/50">
                  {OFFICE_ADDRESS}
                </p>
              </div>
            </a>
          </div>

          {/* Important Links */}
          <div>
            <p className="mb-5 text-sm font-semibold text-white">
              Important Links
            </p>
            <ul className="space-y-3">
              {importantLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm font-medium text-white/70 transition-colors hover:text-sky-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-5 text-sm font-semibold text-white">Services</p>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm font-medium text-white/70 transition-colors hover:text-sky-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-5 text-sm font-semibold text-white">
              Contact Us
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <span className="text-sm text-white/70">{OFFICE_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-sky-400" />
                <a
                  href="tel:+917447478744"
                  className="text-sm text-white/70 transition-colors hover:text-sky-400"
                >
                  +91 7447478744
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-sky-400" />
                <a
                  href="mailto:softcrowdtech@gmail.com"
                  className="text-sm text-white/70 transition-colors hover:text-sky-400"
                >
                  softcrowdtech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={MAPS_SEARCH_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sky-400"
          >
            Softcrowd Technologies &middot; Nashik, Maharashtra, India
          </a>
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://softcrowdtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-sky-400"
            >
              SoftCrowd Technologies.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;