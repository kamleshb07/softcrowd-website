// import React, { useEffect, useRef, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import {
//   ArrowRight,
//   ChevronRight,
//   ChevronDown,
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Send,
//   Pause,
//   Play,
//   CheckCircle2,
//   Users,
//   PenTool,
//   Code2,
//   Megaphone,
//   Globe,
//   MessageSquareText,
// } from 'lucide-react';

// // Replace with your actual video file
// import heroVideo from "../assets/images/softcrowd-hero-vid.mp4";
// import heroPoster from "../assets/images/why-choose-us.jpg";

// const API_URL = import.meta.env.VITE_API_URL || 'http://192.168.1.7/softcrowd-backend-php';

// const Contact = () => {
//   const videoRef = useRef(null);
//   const [searchParams] = useSearchParams();
//   const [playing, setPlaying] = useState(true);

//   // Enquiry Type options — mirrors the categories in the header's Services menu.
//   // Declared here (above formData) so the initial state can validate against it.
//   const EnquiryTypes = [
//     'Development',
//     'Student Training',
//     'Career',
//     'Corporate Training',
//     'Industrial Training',
//     'College Training',
//     'Internship',
//   ];

//   // Service pages link here with e.g. /contact?type=Development so the
//   // right Enquiry Type is already selected when the visitor lands.
//   const typeFromUrl = searchParams.get('type');
//   const initialEnquiryType = EnquiryTypes.includes(typeFromUrl) ? typeFromUrl : '';

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     EnquiryType: initialEnquiryType,
//     message: '',
//   });

//   // If the visitor is already on the page and clicks another "Contact Us"
//   // link with a different ?type=, keep the dropdown in sync.
//   useEffect(() => {
//     if (typeFromUrl && EnquiryTypes.includes(typeFromUrl)) {
//       setFormData((prev) => ({ ...prev, EnquiryType: typeFromUrl }));
//     }
//   }, [typeFromUrl]);

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');

//   const togglePlay = () => {
//     if (!videoRef.current) return;
//     if (playing) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setPlaying(!playing);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setErrorMsg('');

//     try {
//       const res = await fetch(`${API_URL}/api/contact`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.success) {
//         throw new Error(data.error || 'Something went wrong. Please try again.');
//       }

//       setIsSubmitted(true);
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         EnquiryType: '',
//         message: '',
//       });
//       // Reset success message after 5 seconds
//       setTimeout(() => setIsSubmitted(false), 5000);
//     } catch (err) {
//       setErrorMsg(err.message || 'Failed to send message. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Contact info data
//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: 'Visit Us',
//       details: '2nd Floor, Kaveri Sankul, Wakilwadi Corner, Ashok Stambh, Nashik - 422001',
//       link: 'https://maps.google.com',
//     },
//     {
//       icon: Phone,
//       title: 'Call Us',
//       details: '+91 7447478744',
//       link: 'tel:+917447478744',
//     },
//     {
//       icon: Mail,
//       title: 'Email Us',
//       details: 'softcrowdtech@gmail.com',
//       link: 'mailto:softcrowdtech@gmail.com',
//     },
//     {
//       icon: Clock,
//       title: 'Working Hours',
//       details: 'Mon - Sat: 9:00 AM - 6:00 PM',
//     },
//   ];

//   // Services list for the badge
//   const services = ['Web Designing', 'Digital Marketing', 'Website Development', 'Software Development'];

//   return (
//     <>
//       {/* ===== HERO WITH VIDEO BACKGROUND ===== */}
//       <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-slate-900">
//         <video
//           ref={videoRef}
//           className="absolute inset-0 h-full w-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           poster={heroPoster}
//         >
//           <source src={heroVideo} type="video/mp4" />
//         </video>

//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />

//         {/* Animated grid overlay */}
//         <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px]" />

//         <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-3 pb-16 lg:px-5 lg:pb-20 pt-25">
//           <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
//             <span className="h-px w-6 bg-sky-500" />
//             Get in touch
//           </div>

//           <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] text-slate-50 sm:text-6xl lg:text-7xl">
//             Let's Start{' '}
//             <span className="text-sky-400">
//               Conversation
//             </span>{' '}
//             Here
//           </h1>

//           <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
//             Softcrowd Technologies team of experts has years of experience and have worked on a wide variety of projects. 
//             We're based in Nashik, Maharashtra, India and specialize in Web Designing, Digital Marketing, Website Development & Software Development.
//           </p>

//           <div className="mt-10 flex flex-wrap items-center gap-4">
//             <a
//               href="#contact-form"
//               className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900 hover:shadow-2xl hover:shadow-sky-500/30"
//             >
//               Contact Us
//               <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
//             </a>
//             <a
//               href="#info"
//               className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900"
//             >
//               Our Location
//               <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
//             </a>
//           </div>

//           {/* Services badges */}
//           <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
//             {services.map((service) => (
//               <span
//                 key={service}
//                 className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-sm"
//               >
//                 {service}
//               </span>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={togglePlay}
//           aria-label={playing ? 'Pause video' : 'Play video'}
//           className="absolute bottom-8 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:right-8"
//         >
//           {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
//         </button>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/30 lg:flex">
//           <span className="tracking-[0.2em]">SCROLL</span>
//           <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
//         </div>
//       </section>

//       {/* ===== CONTACT SECTION ===== */}
//       <section id="contact-form" className="bg-white px-6 py-20 lg:px-12">
//         <div className="mx-auto max-w-7xl">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Get in touch</p>
//           <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
//             Let's work{' '}
//             <span className="text-sky-400">
//               together
//             </span>
//           </h2>

//           <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
//             {/* Left: Contact Info */}
//             <div className="lg:col-span-2 space-y-6">
//               {contactInfo.map((info) => (
//                 <a
//                   key={info.title}
//                   href={info.link || '#'}
//                   className="group flex items-start gap-5 rounded-3xl bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:shadow-2xl"
//                 >
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
//                     <info.icon size={22} />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-slate-900">{info.title}</h4>
//                     <p className="mt-1 text-sm text-slate-500">{info.details}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Right: Contact Form */}
//             <div className="lg:col-span-3">
//               <div className="rounded-3xl bg-slate-50 p-8 shadow-soft">
//                 <h3 className="text-xl font-semibold text-slate-900">Send us a message</h3>
//                 <p className="mt-1 text-sm text-slate-500">
//                   We'll get back to you within 24 hours.
//                 </p>

//                 {isSubmitted && (
//                   <div className="mt-4 flex items-center gap-3 rounded-xl bg-sky-50 px-4 py-3 text-sky-600">
//                     <CheckCircle2 size={20} />
//                     <span className="text-sm font-medium">Thank you! We'll contact you soon.</span>
//                   </div>
//                 )}

//                 {errorMsg && (
//                   <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
//                     {errorMsg}
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <div>
//                       <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
//                         First Name <span className="text-sky-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         required
//                         className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
//                         placeholder="John"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
//                         Last Name <span className="text-sky-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         required
//                         className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
//                         placeholder="Doe"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="text-sm font-medium text-slate-700">
//                       Email Address <span className="text-sky-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
//                       placeholder="john@example.com"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="text-sm font-medium text-slate-700">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
//                       placeholder="+91 98765 43210"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="EnquiryType" className="text-sm font-medium text-slate-700">
//                       Enquiry Type <span className="text-sky-500">*</span>
//                     </label>
//                     <div className="relative mt-1.5">
//                       <select
//                         id="EnquiryType"
//                         name="EnquiryType"
//                         value={formData.EnquiryType}
//                         onChange={handleChange}
//                         required
//                         className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
//                       >
//                         <option value="" disabled>
//                           Select an Enquiry type
//                         </option>
//                         {EnquiryTypes.map((type) => (
//                           <option key={type} value={type}>
//                             {type}
//                           </option>
//                         ))}
//                       </select>
//                       <ChevronDown
//                         size={16}
//                         className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="text-sm font-medium text-slate-700">
//                       Message <span className="text-sky-500">*</span>
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows="4"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 resize-none"
//                       placeholder="Tell us about your project..."
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/25 disabled:cursor-not-allowed disabled:opacity-70"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <Send size={16} className="transition-transform group-hover:translate-x-1" />
//                       </>
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== MAP / LOCATION SECTION ===== */}
//       <section id="info" className="bg-slate-50 px-6 py-20 lg:px-12">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Find us</p>
//             <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
//               Visit our{' '}
//               <span className="text-sky-400">
//                 office
//               </span>
//             </h2>
//             <a
//               href="https://www.google.com/maps/search/?api=1&query=SoftCrowd+Technologies+2nd+Floor+Kaveri+Sankul+Wakilwadi+Corner+Ashok+Stambh+Nashik+422001"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mx-auto mt-3 inline-block max-w-md text-sm text-slate-500 transition-colors hover:text-sky-500 hover:underline"
//             >
//               2nd Floor, Kaveri Sankul, Wakilwadi Corner, Ashok Stambh, Nashik - 422001
//             </a>
//           </div>

//           <a
//             href="https://www.google.com/maps/search/?api=1&query=SoftCrowd+Technologies+2nd+Floor+Kaveri+Sankul+Wakilwadi+Corner+Ashok+Stambh+Nashik+422001"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative mt-10 block overflow-hidden rounded-3xl shadow-2xl"
//           >
//             <iframe
//               title="SoftCrowd Technologies office location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.049915826792!2d73.78369321432167!3d20.006419627266617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb12b03b2167%3A0xa2f4b4babd01a24c!2sSoftCrowd%20Technologies!5e0!3m2!1sen!2sin!4v1640838128323!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="aspect-[16/6] w-full pointer-events-none"
//             />
//             {/* Click-through overlay so the whole card opens Maps, with a visible prompt */}
//             <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
//               <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg">
//                 <MapPin size={15} className="text-sky-500" />
//                 Open in Google Maps
//                 <ArrowRight size={14} />
//               </span>
//             </div>
//           </a>
//         </div>
//       </section>

//       {/* ===== FINAL CTA ===== */}
//       <section className="bg-white px-6 py-16 lg:px-12">
//         <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-8 py-14 text-center sm:px-16">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
//             We're here to help
//           </p>
//           <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
//             Ready to start your{' '}
//             <span className="text-sky-400">
//               next project
//             </span>
//             ?
//           </h2>
//           <p className="mx-auto mt-4 max-w-lg text-white/50">
//             Let's discuss how we can bring your vision to life.
//           </p>
//           <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
//             <a
//               href="#contact-form"
//               className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400 hover:shadow-2xl hover:shadow-sky-500/30"
//             >
//               Get in Touch
//               <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
//             </a>
//             <a
//               href="tel:+917447478744"
//               className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
//             >
//               Call Us
//               <Phone size={14} className="transition-transform group-hover:translate-x-1" />
//             </a>
//           </div>
//           <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-sm text-white/40">
//             <span className="flex items-center gap-2">
//               <MapPin size={16} className="text-sky-400" /> Nashik, India
//             </span>
//             <span className="flex items-center gap-2">
//               <Mail size={16} className="text-sky-400" /> softcrowdtech@gmail.com
//             </span>
//             <span className="flex items-center gap-2">
//               <Phone size={16} className="text-sky-400" /> +91 7447478744
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* footer note */}
//       <div className="bg-slate-50 px-6 py-4 text-center text-[11px] text-slate-400">
//         SoftCrowd Technologies · Nashik, India
//       </div>
//     </>
//   );
// };

// export default Contact;

import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Pause,
  Play,
  CheckCircle2,
  Users,
  PenTool,
  Code2,
  Megaphone,
  Globe,
  MessageSquareText,
} from 'lucide-react';

// Replace with your actual video file
import heroVideo from "../assets/images/softcrowd-hero-vid.mp4";
import heroPoster from "../assets/images/why-choose-us.jpg";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const Contact = () => {
  const videoRef = useRef(null);
  const [searchParams] = useSearchParams();
  const [playing, setPlaying] = useState(true);

  // Inquiry Type options — mirrors the categories in the header's Services menu.
  // Declared here (above formData) so the initial state can validate against it.
  const inquiryTypes = [
    'Development',
    'Student Training',
    'Career',
    'Corporate Training',
    'Industrial Training',
    'College Training',
    'Internship',
  ];

  // Service pages link here with e.g. /contact?type=Development so the
  // right Inquiry Type is already selected when the visitor lands.
  const typeFromUrl = searchParams.get('type');
  const initialInquiryType = inquiryTypes.includes(typeFromUrl) ? typeFromUrl : '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: initialInquiryType,
    message: '',
  });

  // If the visitor is already on the page and clicks another "Contact Us"
  // link with a different ?type=, keep the dropdown in sync.
  useEffect(() => {
    if (typeFromUrl && inquiryTypes.includes(typeFromUrl)) {
      setFormData((prev) => ({ ...prev, inquiryType: typeFromUrl }));
    }
  }, [typeFromUrl]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/contact.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact info data
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '2nd Floor, Kaveri Sankul, Wakilwadi Corner, Ashok Stambh, Nashik - 422001',
      link: 'https://maps.google.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 7447478744',
      link: 'tel:+917447478744',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'softcrowdtech@gmail.com',
      link: 'mailto:softcrowdtech@gmail.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9:00 AM - 6:00 PM',
    },
  ];

  // Services list for the badge
  const services = ['Web Designing', 'Digital Marketing', 'Website Development', 'Software Development'];

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

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-3 pb-16 lg:px-5 lg:pb-20 pt-25">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-6 bg-sky-500" />
            Get in touch
          </div>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] text-slate-50 sm:text-6xl lg:text-7xl">
            Let's Start{' '}
            <span className="text-sky-400">
              Conversation
            </span>{' '}
            Here
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Softcrowd Technologies team of experts has years of experience and have worked on a wide variety of projects. 
            We're based in Nashik, Maharashtra, India and specialize in Web Designing, Digital Marketing, Website Development & Software Development.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact-form"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900 hover:shadow-2xl hover:shadow-sky-500/30"
            >
              Contact Us
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#info"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900"
            >
              Our Location
              <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Services badges */}
          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
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

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact-form" className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Get in touch</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Let's work{' '}
            <span className="text-sky-400">
              together
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link || '#'}
                  className="group flex items-start gap-5 rounded-3xl bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{info.title}</h4>
                    <p className="mt-1 text-sm text-slate-500">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-slate-50 p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-slate-900">Send us a message</h3>
                <p className="mt-1 text-sm text-slate-500">
                  We'll get back to you within 24 hours.
                </p>

                {isSubmitted && (
                  <div className="mt-4 flex items-center gap-3 rounded-xl bg-sky-50 px-4 py-3 text-sky-600">
                    <CheckCircle2 size={20} />
                    <span className="text-sm font-medium">Thank you! We'll contact you soon.</span>
                  </div>
                )}

                {errorMsg && (
                  <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                        First Name <span className="text-sky-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                        Last Name <span className="text-sky-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email Address <span className="text-sky-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="text-sm font-medium text-slate-700">
                      Inquiry Type <span className="text-sky-500">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                      >
                        <option value="" disabled>
                          Select an inquiry type
                        </option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Message <span className="text-sky-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/25 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP / LOCATION SECTION ===== */}
      <section id="info" className="bg-slate-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Find us</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Visit our{' '}
              <span className="text-sky-400">
                office
              </span>
            </h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=SoftCrowd+Technologies+2nd+Floor+Kaveri+Sankul+Wakilwadi+Corner+Ashok+Stambh+Nashik+422001"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-3 inline-block max-w-md text-sm text-slate-500 transition-colors hover:text-sky-500 hover:underline"
            >
              2nd Floor, Kaveri Sankul, Wakilwadi Corner, Ashok Stambh, Nashik - 422001
            </a>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=SoftCrowd+Technologies+2nd+Floor+Kaveri+Sankul+Wakilwadi+Corner+Ashok+Stambh+Nashik+422001"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-10 block overflow-hidden rounded-3xl shadow-2xl"
          >
            <iframe
              title="SoftCrowd Technologies office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.049915826792!2d73.78369321432167!3d20.006419627266617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb12b03b2167%3A0xa2f4b4babd01a24c!2sSoftCrowd%20Technologies!5e0!3m2!1sen!2sin!4v1640838128323!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[16/6] w-full pointer-events-none"
            />
            {/* Click-through overlay so the whole card opens Maps, with a visible prompt */}
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg">
                <MapPin size={15} className="text-sky-500" />
                Open in Google Maps
                <ArrowRight size={14} />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-8 py-14 text-center sm:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            We're here to help
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ready to start your{' '}
            <span className="text-sky-400">
              next project
            </span>
            ?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/50">
            Let's discuss how we can bring your vision to life.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact-form"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400 hover:shadow-2xl hover:shadow-sky-500/30"
            >
              Get in Touch
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+917447478744"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
            >
              Call Us
              <Phone size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-sky-400" /> Nashik, India
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-sky-400" /> softcrowdtech@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-sky-400" /> +91 7447478744
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

export default Contact;