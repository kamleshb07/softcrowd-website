// // Blogs.jsx - Blogs Page
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Calendar,
//   User,
//   Clock,
//   Tag,
//   Search,
//   Filter,
//   BookOpen,
//   TrendingUp,
//   Zap,
//   Shield,
//   Code2,
//   Smartphone,
//   Cloud,
//   Database,
//   Layout,
//   MessageSquare,
// } from "lucide-react";

// const Blogs = () => {
//   const blogPosts = [
//     {
//       title: "User-Centric Design: Creating Intuitive and Engaging Software Interfaces",
//       category: "UI/UX Design",
//       date: "Dec 27, 2021",
//       readTime: "5 min read",
//       excerpt: "In today's fast-paced digital landscape, the success of any software product hinges on its user experience. As technology continues to evolve...",
//       icon: Layout,
//     },
//     {
//       title: "Responsive UI/UX Design for Software Applications",
//       category: "UI/UX Design",
//       date: "Dec 20, 2021",
//       readTime: "4 min read",
//       excerpt: "In the ever-evolving landscape of software development, the importance of a responsive User Interface (UI) and User Experience (UX) design...",
//       icon: Smartphone,
//     },
//     {
//       title: "Protecting Your Data: A Guide to Digital Security",
//       category: "Security",
//       date: "Dec 15, 2021",
//       readTime: "6 min read",
//       excerpt: "In today's digital age, safeguarding your data is of paramount importance. The ever-increasing reliance on technology means that we are...",
//       icon: Shield,
//     },
//     {
//       title: "How to Choose the Right E-commerce Platform",
//       category: "E-commerce",
//       date: "Dec 10, 2021",
//       readTime: "5 min read",
//       excerpt: "In the ever-evolving landscape of online business, selecting the right e-commerce platform is a critical decision that can significantly impact...",
//       icon: ShoppingCart,
//     },
//     {
//       title: "The Future of Artificial Intelligence in Business",
//       category: "AI/ML",
//       date: "Dec 5, 2021",
//       readTime: "7 min read",
//       excerpt: "Artificial Intelligence, once a futuristic concept, is now an integral part of the business ecosystem. From automating mundane tasks to...",
//       icon: Zap,
//     },
//     {
//       title: "Tips for Secure Software Design",
//       category: "Security",
//       date: "Nov 28, 2021",
//       readTime: "5 min read",
//       excerpt: "In today's digital age, the development of secure software is paramount. With cyber threats on the rise and data breaches...",
//       icon: Shield,
//     },
//     {
//       title: "Exploring the World of Custom Software Development",
//       category: "Development",
//       date: "Nov 20, 2021",
//       readTime: "6 min read",
//       excerpt: "In today's digital age, the demand for custom software development has skyrocketed. Businesses and organizations are constantly seeking innovative ways...",
//       icon: Code2,
//     },
//     {
//       title: "The Latest Trends in Software Development",
//       category: "Development",
//       date: "Nov 15, 2021",
//       readTime: "4 min read",
//       excerpt: "In the fast-paced world of technology, staying abreast of the latest trends in software development is crucial for professionals and...",
//       icon: TrendingUp,
//     },
//     {
//       title: "The Benefits of Microservices Architecture",
//       category: "Architecture",
//       date: "Nov 10, 2021",
//       readTime: "5 min read",
//       excerpt: "In the fast-paced world of technology, software development is undergoing a paradigm shift, and at the forefront of this revolution...",
//       icon: Cloud,
//     },
//     {
//       title: "How to Build a Successful E-commerce Website",
//       category: "E-commerce",
//       date: "Nov 5, 2021",
//       readTime: "6 min read",
//       excerpt: "In the ever-evolving digital landscape, establishing a successful e-commerce website is more crucial than ever. Whether you're an entrepreneur venturing...",
//       icon: ShoppingCart,
//     },
//     {
//       title: "User-Centered Design Principles for Exceptional UX",
//       category: "UI/UX Design",
//       date: "Oct 28, 2021",
//       readTime: "5 min read",
//       excerpt: "In today's digital landscape, providing a seamless and enjoyable user experience (UX) is paramount for the success of any product...",
//       icon: Layout,
//     },
//     {
//       title: "Cloud Computing: Leveraging Scalability and Accessibility in Software",
//       category: "Cloud",
//       date: "Oct 20, 2021",
//       readTime: "6 min read",
//       excerpt: "In this fast-paced digital age, where technology is evolving at an unprecedented rate, cloud computing emerges as a game-changer. Imagine...",
//       icon: Cloud,
//     },
//     {
//       title: "Exploring the World of Augmented Reality (AR)",
//       category: "AR/VR",
//       date: "Oct 15, 2021",
//       readTime: "5 min read",
//       excerpt: "In a world dominated by rapid technological advancements, one innovation has been steadily transforming our digital landscape – Augmented Reality...",
//       icon: Smartphone,
//     },
//     {
//       title: "Demystifying Artificial Intelligence: A Beginner's Guide",
//       category: "AI/ML",
//       date: "Oct 10, 2021",
//       readTime: "7 min read",
//       excerpt: "In today's rapidly evolving technological landscape, Artificial Intelligence (AI) has emerged as a transformative force, reshaping industries and influencing our...",
//       icon: Zap,
//     },
//     {
//       title: "The Power of Big Data in Decision-Making",
//       category: "Data",
//       date: "Oct 5, 2021",
//       readTime: "6 min read",
//       excerpt: "In the rapidly evolving landscape of today's business world, the role of data has become more crucial than ever before...",
//       icon: Database,
//     },
//     {
//       title: "Optimizing Software Performance: A Comprehensive Guide",
//       category: "Performance",
//       date: "Sep 28, 2021",
//       readTime: "7 min read",
//       excerpt: "In today's fast-paced digital landscape, software performance is crucial. Slow and inefficient software can lead to frustrated users, decreased productivity...",
//       icon: TrendingUp,
//     },
//     {
//       title: "The Importance of Quality Assurance in Software Development",
//       category: "Quality",
//       date: "Sep 20, 2021",
//       readTime: "5 min read",
//       excerpt: "In the fast-paced realm of software development, Quality Assurance (QA) emerges as a linchpin, ensuring the delivery of robust, reliable...",
//       icon: Shield,
//     },
//     {
//       title: "Agile Development Methodology: Flexibility and Efficiency in Software Projects",
//       category: "Methodology",
//       date: "Sep 15, 2021",
//       readTime: "6 min read",
//       excerpt: "In the ever-evolving landscape of software development, the traditional rigid and linear methodologies have given way to a more dynamic...",
//       icon: Code2,
//     },
//   ];

//   const categories = [
//     "All",
//     "UI/UX Design",
//     "Security",
//     "Development",
//     "AI/ML",
//     "E-commerce",
//     "Cloud",
//     "Architecture",
//     "Data",
//     "Performance",
//   ];

//   return (
//     <>
//       {/* ===== HERO ===== */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900">
//         <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_center,_white_1px,transparent_1px)] [background-size:32px_32px]" />
//         <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 lg:px-6 lg:pb-28 lg:pt-44">
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
//               <span className="h-px w-6 bg-sky-500" />
//               Blog
//               <span className="h-px w-6 bg-sky-500" />
//             </div>

//             <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">
//               Insights & <br />
//               <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
//                 Knowledge Hub
//               </span>
//             </h1>

//             <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/70">
//               Stay updated with the latest trends, insights, and best practices
//               in software development, technology, and digital transformation.
//             </p>

//             <div className="mt-10 flex max-w-xl mx-auto items-center gap-4 rounded-full bg-white/10 p-2 backdrop-blur-sm">
//               <Search size={20} className="ml-3 text-white/40" />
//               <input
//                 type="text"
//                 placeholder="Search articles..."
//                 className="flex-1 bg-transparent px-2 py-2 text-white placeholder-white/40 outline-none"
//               />
//               <button className="rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-sky-400">
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== BLOG GRID ===== */}
//       <section className="bg-white px-4 py-20 lg:px-6">
//         <div className="mx-auto max-w-7xl">
//           {/* Categories */}
//           <div className="mb-12 flex flex-wrap justify-center gap-3">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 className={`rounded-full px-6 py-2 text-sm font-medium transition ${
//                   category === "All"
//                     ? "bg-sky-600 text-white"
//                     : "bg-slate-100 text-slate-600 hover:bg-sky-100 hover:text-sky-600"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Blog Grid */}
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {blogPosts.map((post, index) => (
//               <div
//                 key={index}
//                 className="group rounded-3xl border border-slate-200 overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 text-xs text-sky-600">
//                     <post.icon size={16} />
//                     <span>{post.category}</span>
//                   </div>
//                   <h3 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-sky-600 transition">
//                     {post.title}
//                   </h3>
//                   <p className="mt-3 text-sm text-slate-500 leading-relaxed">
//                     {post.excerpt}
//                   </p>
//                   <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
//                     <div className="flex items-center gap-4">
//                       <span className="flex items-center gap-1">
//                         <Calendar size={14} />
//                         {post.date}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Clock size={14} />
//                         {post.readTime}
//                       </span>
//                     </div>
//                     <Link
//                       to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="inline-flex items-center gap-1 text-sky-600 hover:underline"
//                     >
//                       Read More
//                       <ArrowRight size={14} />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Load More */}
//           <div className="mt-12 text-center">
//             <button className="group inline-flex items-center gap-3 rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50">
//               Load More Articles
//               <ArrowRight
//                 size={16}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ===== NEWSLETTER ===== */}
//       <section className="bg-slate-50 px-4 py-16 lg:px-6">
//         <div className="mx-auto max-w-4xl text-center">
//           <MessageSquare className="mx-auto text-sky-500" size={32} />
//           <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-900 sm:text-3xl">
//             Subscribe to Our Newsletter
//           </h2>
//           <p className="mt-2 text-slate-500">
//             Get the latest insights delivered directly to your inbox.
//           </p>
//           <div className="mt-6 flex max-w-md mx-auto items-center gap-3">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 rounded-full border border-slate-300 px-6 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
//             />
//             <button className="rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// // Add ShoppingCart icon
// const ShoppingCart = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <circle cx="9" cy="21" r="1"></circle>
//     <circle cx="20" cy="21" r="1"></circle>
//     <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//   </svg>
// );

// Blogs.ShoppingCart = ShoppingCart;

// export default Blogs;



//==========================================================new code=======================================================
// src/pages/Blogs.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Calendar,
//   Clock,
//   Search,
//   Layout,
//   Smartphone,
//   Shield,
//   Code2,
//   Zap,
//   Cloud,
//   Database,
//   TrendingUp,
//   MessageSquare,
// } from "lucide-react";

// // inline ShoppingCart icon
// const ShoppingCart = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <circle cx="9" cy="21" r="1"></circle>
//     <circle cx="20" cy="21" r="1"></circle>
//     <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//   </svg>
// );

// // ✅ EXPORTED slug helper
// export const slugify = (text) =>
//   text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

// // ✅ EXPORTED blog posts array (moved OUTSIDE the component)
// export const blogPosts = [
//   {
//     title: "User-Centric Design: Creating Intuitive and Engaging Software Interfaces",
//     category: "UI/UX Design",
//     date: "Dec 27, 2021",
//     readTime: "5 min read",
//     excerpt:
//       "In today's fast-paced digital landscape, the success of any software product hinges on its user experience. As technology continues to evolve...",
//     icon: Layout,
//   },
//   {
//     title: "Responsive UI/UX Design for Software Applications",
//     category: "UI/UX Design",
//     date: "Dec 20, 2021",
//     readTime: "4 min read",
//     excerpt:
//       "In the ever-evolving landscape of software development, the importance of a responsive User Interface (UI) and User Experience (UX) design...",
//     icon: Smartphone,
//   },
//   {
//     title: "Protecting Your Data: A Guide to Digital Security",
//     category: "Security",
//     date: "Dec 15, 2021",
//     readTime: "6 min read",
//     excerpt:
//       "In today's digital age, safeguarding your data is of paramount importance. The ever-increasing reliance on technology means that we are...",
//     icon: Shield,
//   },
//   {
//     title: "How to Choose the Right E-commerce Platform",
//     category: "E-commerce",
//     date: "Dec 10, 2021",
//     readTime: "5 min read",
//     excerpt:
//       "In the ever-evolving landscape of online business, selecting the right e-commerce platform is a critical decision that can significantly impact...",
//     icon: ShoppingCart,
//   },
//   {
//     title: "The Future of Artificial Intelligence in Business",
//     category: "AI/ML",
//     date: "Dec 5, 2021",
//     readTime: "7 min read",
//     excerpt:
//       "Artificial Intelligence, once a futuristic concept, is now an integral part of the business ecosystem. From automating mundane tasks to...",
//     icon: Zap,
//   },
//   {
//     title: "Tips for Secure Software Design",
//     category: "Security",
//     date: "Nov 28, 2021",
//     readTime: "5 min read",
//     excerpt:
//       "In today's digital age, the development of secure software is paramount. With cyber threats on the rise and data breaches...",
//     icon: Shield,
//   },
//   {
//     title: "Exploring the World of Custom Software Development",
//     category: "Development",
//     date: "Nov 20, 2021",
//     readTime: "6 min read",
//     excerpt:
//       "In today's digital age, the demand for custom software development has skyrocketed. Businesses and organizations are constantly seeking innovative ways...",
//     icon: Code2,
//   },
//   {
//     title: "The Latest Trends in Software Development",
//     category: "Development",
//     date: "Nov 15, 2021",
//     readTime: "4 min read",
//     excerpt:
//       "In the fast-paced world of technology, staying abreast of the latest trends in software development is crucial for professionals and...",
//     icon: TrendingUp,
//   },
//   {
//     title: "The Benefits of Microservices Architecture",
//     category: "Architecture",
//     date: "Nov 10, 2021",
//     readTime: "5 min read",
//     excerpt:
//       "In the fast-paced world of technology, software development is undergoing a paradigm shift, and at the forefront of this revolution...",
//     icon: Cloud,
//   },
//   {
//     title: "How to Build a Successful E-commerce Website",
//     category: "E-commerce",
//     date: "Nov 5, 2021",
//     readTime: "6 min read",
//     excerpt:
//       "In the ever-evolving digital landscape, establishing a successful e-commerce website is more crucial than ever. Whether you're an entrepreneur venturing...",
//     icon: ShoppingCart,
//   },
//   {
//     title: "User-Centered Design Principles for Exceptional UX",
//     category: "UI/UX Design",
//     date: "Oct 28, 2021",
//     readTime: "5 min read",
//     excerpt:
//       "In today's digital landscape, providing a seamless and enjoyable user experience (UX) is paramount for the success of any product...",
//     icon: Layout,
//   },
//   {
//     title: "Cloud Computing: Leveraging Scalability and Accessibility in Software",
//     category: "Cloud",
//     date: "Oct 20, 2021",
//     readTime: "6 min read",
//     excerpt:
//       "In this fast-paced digital age, where technology is evolving at an unprecedented rate, cloud computing emerges as a game-changer. Imagine...",
//     icon: Cloud,
//   },
//   {
//     title: "Exploring the World of Augmented Reality (AR)",
//     category: "AR/VR",
//     date: "Oct 15, 2021",
//     readTime: "5 min read",
//     excerpt:
//       "In a world dominated by rapid technological advancements, one innovation has been steadily transforming our digital landscape – Augmented Reality...",
//     icon: Smartphone,
//   },
//   {
//     title: "Demystifying Artificial Intelligence: A Beginner's Guide",
//     category: "AI/ML",
//     date: "Oct 10, 2021",
//     readTime: "7 min read",
//     excerpt:
//       "In today's rapidly evolving technological landscape, Artificial Intelligence (AI) has emerged as a transformative force, reshaping industries and influencing our...",
//     icon: Zap,
//   },
//   {
//     title: "The Power of Big Data in Decision-Making",
//     category: "Data",
//     date: "Oct 5, 2021",
//     readTime: "6 min read",
//     excerpt:
//       "In the rapidly evolving landscape of today's business world, the role of data has become more crucial than ever before...",
//     icon: Database,
//   },
//   {
//     title: "Optimizing Software Performance: A Comprehensive Guide",
//     category: "Performance",
//     date: "Sep 28, 2021",
//     readTime: "7 min read",
//     excerpt:
//       "In today's fast-paced digital landscape, software performance is crucial. Slow and inefficient software can lead to frustrated users, decreased productivity...",
//     icon: TrendingUp,
//   },
//   {
//     title: "The Importance of Quality Assurance in Software Development",
//     category: "Quality",
//     date: "Sep 20, 2021",
//     readTime: "5 min read",
//     excerpt:
//       "In the fast-paced realm of software development, Quality Assurance (QA) emerges as a linchpin, ensuring the delivery of robust, reliable...",
//     icon: Shield,
//   },
//   {
//     title: "Agile Development Methodology: Flexibility and Efficiency in Software Projects",
//     category: "Methodology",
//     date: "Sep 15, 2021",
//     readTime: "6 min read",
//     excerpt:
//       "In the ever-evolving landscape of software development, the traditional rigid and linear methodologies have given way to a more dynamic...",
//     icon: Code2,
//   },
// ];

// const categories = [
//   "All",
//   "UI/UX Design",
//   "Security",
//   "Development",
//   "AI/ML",
//   "E-commerce",
//   "Cloud",
//   "Architecture",
//   "Data",
//   "Performance",
// ];

// const Blogs = () => {
//   return (
//     <>
//       {/* ===== HERO ===== */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900">
//         <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_center,_white_1px,transparent_1px)] [background-size:32px_32px]" />
//         <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 lg:px-6 lg:pb-28 lg:pt-44">
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
//               <span className="h-px w-6 bg-sky-500" />
//               Blog
//               <span className="h-px w-6 bg-sky-500" />
//             </div>

//             <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">
//               Insights & <br />
//               <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
//                 Knowledge Hub
//               </span>
//             </h1>

//             <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/70">
//               Stay updated with the latest trends, insights, and best practices
//               in software development, technology, and digital transformation.
//             </p>

//             <div className="mt-10 flex max-w-xl mx-auto items-center gap-4 rounded-full bg-white/10 p-2 backdrop-blur-sm">
//               <Search size={20} className="ml-3 text-white/40" />
//               <input
//                 type="text"
//                 placeholder="Search articles..."
//                 className="flex-1 bg-transparent px-2 py-2 text-white placeholder-white/40 outline-none"
//               />
//               <button className="rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-sky-400">
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== BLOG GRID ===== */}
//       <section className="bg-white px-4 py-20 lg:px-6">
//         <div className="mx-auto max-w-7xl">
//           {/* Categories */}
//           <div className="mb-12 flex flex-wrap justify-center gap-3">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 className={`rounded-full px-6 py-2 text-sm font-medium transition ${
//                   category === "All"
//                     ? "bg-sky-600 text-white"
//                     : "bg-slate-100 text-slate-600 hover:bg-sky-100 hover:text-sky-600"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Blog Grid — each card is a Link to its slug */}
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {blogPosts.map((post) => (
//               <Link
//                 key={post.title}
//                 to={`/${slugify(post.title)}`}
//                 className="group rounded-3xl border border-slate-200 overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl block"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 text-xs text-sky-600">
//                     <post.icon size={16} />
//                     <span>{post.category}</span>
//                   </div>
//                   <h3 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-sky-600 transition">
//                     {post.title}
//                   </h3>
//                   <p className="mt-3 text-sm text-slate-500 leading-relaxed">
//                     {post.excerpt}
//                   </p>
//                   <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
//                     <div className="flex items-center gap-4">
//                       <span className="flex items-center gap-1">
//                         <Calendar size={14} />
//                         {post.date}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Clock size={14} />
//                         {post.readTime}
//                       </span>
//                     </div>
//                     <span className="inline-flex items-center gap-1 text-sky-600 group-hover:underline">
//                       Read More
//                       <ArrowRight size={14} />
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Load More */}
//           <div className="mt-12 text-center">
//             <button className="group inline-flex items-center gap-3 rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50">
//               Load More Articles
//               <ArrowRight
//                 size={16}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ===== NEWSLETTER ===== */}
//       <section className="bg-slate-50 px-4 py-16 lg:px-6">
//         <div className="mx-auto max-w-4xl text-center">
//           <MessageSquare className="mx-auto text-sky-500" size={32} />
//           <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-900 sm:text-3xl">
//             Subscribe to Our Newsletter
//           </h2>
//           <p className="mt-2 text-slate-500">
//             Get the latest insights delivered directly to your inbox.
//           </p>
//           <div className="mt-6 flex max-w-md mx-auto items-center gap-3">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 rounded-full border border-slate-300 px-6 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
//             />
//             <button className="rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blogs;



// src/pages/Blogs.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  Layout,
  Smartphone,
  Shield,
  Code2,
  Zap,
  Cloud,
  Database,
  TrendingUp,
  MessageSquare,
  Wifi,
  Users,
  Briefcase,
  GitBranch,
  Globe,
  Mail,
  Settings,
  BookOpen,
  Boxes,
  Cpu,
  BarChart3,
  FileText,
  Scale,
  Award,
  Rocket,
} from "lucide-react";

// inline ShoppingCart icon (not in lucide-react by default in this project)
const ShoppingCart = (props) => (
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
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

// ✅ EXPORTED slug helper
export const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

// ✅ EXPORTED blog posts array — all 50 posts, matching softcrowdtechnologies.com/blogs/
export const blogPosts = [
  {
    title: "User-Centric Design: Creating Intuitive and Engaging Software Interfaces",
    category: "UI/UX Design",
    date: "Dec 22, 2022",
    readTime: "5 min read",
    excerpt:
      "In today's fast-paced digital landscape, the success of any software product hinges on its user experience. As technology continues to evolve...",
    icon: Layout,
  },
  {
    title: "Responsive UI/UX Design for Software Applications",
    category: "UI/UX Design",
    date: "Dec 22, 2022",
    readTime: "4 min read",
    excerpt:
      "In the ever-evolving landscape of software development, the importance of a responsive User Interface (UI) and User Experience (UX) design...",
    icon: Smartphone,
  },
  {
    title: "Protecting Your Data: A Guide to Digital Security",
    category: "Security",
    date: "Dec 10, 2022",
    readTime: "6 min read",
    excerpt:
      "In today's digital age, safeguarding your data is of paramount importance. The ever-increasing reliance on technology means that we are...",
    icon: Shield,
  },
  {
    title: "How to Choose the Right E-commerce Platform",
    category: "E-commerce",
    date: "Nov 27, 2022",
    readTime: "5 min read",
    excerpt:
      "In the ever-evolving landscape of online business, selecting the right e-commerce platform is a critical decision that can significantly impact...",
    icon: ShoppingCart,
  },
  {
    title: "The Future of Artificial Intelligence in Business",
    category: "AI/ML",
    date: "Nov 24, 2022",
    readTime: "7 min read",
    excerpt:
      "Artificial Intelligence, once a futuristic concept, is now an integral part of the business ecosystem. From automating mundane tasks to...",
    icon: Zap,
  },
  {
    title: "Tips for Secure Software Design",
    category: "Security",
    date: "Nov 23, 2022",
    readTime: "5 min read",
    excerpt:
      "In today's digital age, the development of secure software is paramount. With cyber threats on the rise and data breaches...",
    icon: Shield,
  },
  {
    title: "Exploring the World of Custom Software Development",
    category: "Development",
    date: "Nov 20, 2022",
    readTime: "6 min read",
    excerpt:
      "In today's digital age, the demand for custom software development has skyrocketed. Businesses and organizations are constantly seeking innovative ways...",
    icon: Code2,
  },
  {
    title: "The Latest Trends in Software Development",
    category: "Development",
    date: "Oct 29, 2022",
    readTime: "4 min read",
    excerpt:
      "In the fast-paced world of technology, staying abreast of the latest trends in software development is crucial for professionals and...",
    icon: TrendingUp,
  },
  {
    title: "The Benefits of Microservices Architecture",
    category: "Architecture",
    date: "Oct 28, 2022",
    readTime: "5 min read",
    excerpt:
      "In the fast-paced world of technology, software development is undergoing a paradigm shift, and at the forefront of this revolution...",
    icon: Cloud,
  },
  {
    title: "How to Build a Successful E-commerce Website",
    category: "E-commerce",
    date: "Oct 25, 2022",
    readTime: "6 min read",
    excerpt:
      "In the ever-evolving digital landscape, establishing a successful e-commerce website is more crucial than ever. Whether you're an entrepreneur venturing...",
    icon: ShoppingCart,
  },
  {
    title: "User-Centered Design Principles for Exceptional UX",
    category: "UI/UX Design",
    date: "Oct 25, 2022",
    readTime: "5 min read",
    excerpt:
      "In today's digital landscape, providing a seamless and enjoyable user experience (UX) is paramount for the success of any product...",
    icon: Layout,
  },
  {
    title: "Cloud Computing: Leveraging Scalability and Accessibility in Software",
    category: "Cloud",
    date: "Oct 22, 2022",
    readTime: "6 min read",
    excerpt:
      "In this fast-paced digital age, where technology is evolving at an unprecedented rate, cloud computing emerges as a game-changer. Imagine...",
    icon: Cloud,
  },
  {
    title: "Exploring the World of Augmented Reality (AR)",
    category: "AR/VR",
    date: "Oct 21, 2022",
    readTime: "5 min read",
    excerpt:
      "In a world dominated by rapid technological advancements, one innovation has been steadily transforming our digital landscape – Augmented Reality...",
    icon: Smartphone,
  },
  {
    title: "Demystifying Artificial Intelligence: A Beginner's Guide",
    category: "AI/ML",
    date: "Oct 17, 2022",
    readTime: "7 min read",
    excerpt:
      "In today's rapidly evolving technological landscape, Artificial Intelligence (AI) has emerged as a transformative force, reshaping industries and influencing our...",
    icon: Zap,
  },
  {
    title: "The Power of Big Data in Decision-Making",
    category: "Data",
    date: "Oct 14, 2022",
    readTime: "6 min read",
    excerpt:
      "In the rapidly evolving landscape of today's business world, the role of data has become more crucial than ever before...",
    icon: Database,
  },
  {
    title: "Optimizing Software Performance: A Comprehensive Guide",
    category: "Performance",
    date: "Oct 13, 2022",
    readTime: "7 min read",
    excerpt:
      "In today's fast-paced digital landscape, software performance is crucial. Slow and inefficient software can lead to frustrated users, decreased productivity...",
    icon: TrendingUp,
  },
  {
    title: "The Importance of Quality Assurance in Software Development",
    category: "Quality",
    date: "Sep 24, 2022",
    readTime: "5 min read",
    excerpt:
      "In the fast-paced realm of software development, Quality Assurance (QA) emerges as a linchpin, ensuring the delivery of robust, reliable...",
    icon: Shield,
  },
  {
    title: "Agile Development Methodology: Flexibility and Efficiency in Software Projects",
    category: "Methodology",
    date: "Sep 22, 2022",
    readTime: "6 min read",
    excerpt:
      "In the ever-evolving landscape of software development, the traditional rigid and linear methodologies have given way to a more dynamic...",
    icon: Code2,
  },
  {
    title: "E-commerce in the Digital Age: Strategies for Success",
    category: "E-commerce",
    date: "Sep 20, 2022",
    readTime: "5 min read",
    excerpt:
      "Welcome to the exciting world of e-commerce in the digital age. In a world where online shopping keeps growing, standing out takes more than just a storefront...",
    icon: ShoppingCart,
  },
  {
    title: "Big Data Analytics: Unlocking Business Insights",
    category: "Data",
    date: "Sep 13, 2022",
    readTime: "6 min read",
    excerpt:
      "In the digital age, data has become the lifeblood of business operations. Every click, every purchase, and every interaction generates information worth analysing...",
    icon: BarChart3,
  },
  {
    title: "Blockchain Technology: Applications and Benefits",
    category: "Blockchain",
    date: "Sep 12, 2022",
    readTime: "6 min read",
    excerpt:
      "In today's rapidly evolving digital landscape, blockchain technology has emerged as a revolutionary force with far-reaching applications and benefits...",
    icon: Boxes,
  },
  {
    title: "Internet of Things (IoT) and Smart Devices",
    category: "IoT",
    date: "Aug 29, 2022",
    readTime: "5 min read",
    excerpt:
      "In an era where technology and connectivity play an increasingly pivotal role in our lives, the Internet of Things (IoT) is quietly reshaping everyday objects...",
    icon: Wifi,
  },
  {
    title: "Nurturing a Positive Work Culture in Tech",
    category: "Culture",
    date: "Aug 27, 2022",
    readTime: "5 min read",
    excerpt:
      "In the ever-evolving landscape of the tech industry, fostering a positive work culture is paramount to unlocking the full potential of a team...",
    icon: Users,
  },
  {
    title: "AI and Machine Learning: Transforming Software Applications",
    category: "AI/ML",
    date: "Aug 22, 2022",
    readTime: "6 min read",
    excerpt:
      "In the digital age, the convergence of artificial intelligence (AI) and machine learning (ML) with software applications has brought about a quiet revolution...",
    icon: Cpu,
  },
  {
    title: "The Power of Mobile Apps: Reaching Your Audience Anytime, Anywhere",
    category: "Mobile",
    date: "Aug 22, 2022",
    readTime: "5 min read",
    excerpt:
      "In the digital era, mobile apps have emerged as an indispensable tool for businesses and individuals alike, putting your product in every pocket...",
    icon: Smartphone,
  },
  {
    title: "From Startup to Success: The Journey Unveiled",
    category: "Startup",
    date: "Aug 22, 2022",
    readTime: "6 min read",
    excerpt:
      "Starting a business is akin to setting sail on a vast, uncharted ocean. The journey is tumultuous, filled with unpredictable challenges and quiet wins...",
    icon: Rocket,
  },
  {
    title: "Open Source Software: Collaboration and Innovation in the Tech Community",
    category: "Development",
    date: "Aug 22, 2022",
    readTime: "5 min read",
    excerpt:
      "In the rapidly evolving landscape of technology, open source software has emerged as a powerful force driving collaboration and innovation...",
    icon: GitBranch,
  },
  {
    title: "Cybersecurity in the Digital Age: Protecting Your Software and Data",
    category: "Security",
    date: "Aug 22, 2022",
    readTime: "6 min read",
    excerpt:
      "In today's rapidly advancing digital landscape, the importance of cybersecurity cannot be overstated. With technology permeating every facet of our lives...",
    icon: Shield,
  },
  {
    title: "Navigating the World of Custom Software Solutions",
    category: "Development",
    date: "Aug 22, 2022",
    readTime: "5 min read",
    excerpt:
      "In today's fast-paced technological landscape, businesses are increasingly recognizing the significance of tailored software solutions to address unique challenges...",
    icon: Code2,
  },
  {
    title: "Case Study: Solving a Real-World Business Challenge with Software",
    category: "Case Study",
    date: "Aug 22, 2022",
    readTime: "6 min read",
    excerpt:
      "In the ever-evolving landscape of modern business, the need to adapt and overcome challenges has become more crucial than ever before...",
    icon: FileText,
  },
  {
    title: "The Future of Software Development: Trends to Watch",
    category: "Development",
    date: "Aug 22, 2022",
    readTime: "5 min read",
    excerpt:
      "In a rapidly evolving technological landscape, the field of software development is undergoing transformative changes that are shaping its future...",
    icon: TrendingUp,
  },
  {
    title: "The Potential of Edge Computing in IoT",
    category: "IoT",
    date: "Jul 27, 2022",
    readTime: "5 min read",
    excerpt:
      "In the ever-evolving landscape of technology, the Internet of Things (IoT) stands as a pivotal force, interconnecting devices to create smarter systems...",
    icon: Wifi,
  },
  {
    title: "Digital Transformation and Its Impact on Business",
    category: "Business",
    date: "Jul 23, 2022",
    readTime: "6 min read",
    excerpt:
      "In today's fast-paced business environment, the concept of digital transformation has become more than just a buzzword — it's a strategic imperative...",
    icon: Globe,
  },
  {
    title: "A Guide to Scaling Your Tech Startup",
    category: "Startup",
    date: "Jul 21, 2022",
    readTime: "6 min read",
    excerpt:
      "In the fast-paced world of technology startups, achieving growth and scalability is both a thrilling and challenging endeavor...",
    icon: Rocket,
  },
  {
    title: "A Guide to Software Licensing and Copyright",
    category: "Legal",
    date: "Jul 19, 2022",
    readTime: "6 min read",
    excerpt:
      "In the fast-paced world of technology, software plays a pivotal role in shaping our digital landscape. As developers and businesses build, protecting that work matters...",
    icon: Scale,
  },
  {
    title: "The Role of Blockchain in Modern Business",
    category: "Blockchain",
    date: "Jun 15, 2022",
    readTime: "5 min read",
    excerpt:
      "In the ever-evolving landscape of modern business, technological advancements play a pivotal role in shaping the way organizations operate. Among them, blockchain stands out...",
    icon: Boxes,
  },
  {
    title: "The Growing Importance of Data Science in Business",
    category: "Data",
    date: "Jun 11, 2022",
    readTime: "6 min read",
    excerpt:
      "In the ever-evolving landscape of the business world, one term has become increasingly ubiquitous: data science. The significance of data-driven thinking...",
    icon: BarChart3,
  },
  {
    title: "The Ethics of AI: Responsible AI Development",
    category: "AI/ML",
    date: "Mar 6, 2022",
    readTime: "6 min read",
    excerpt:
      "In the fast-paced realm of artificial intelligence (AI), the ethical considerations surrounding its development have become paramount as adoption accelerates...",
    icon: Cpu,
  },
  {
    title: "Product Development Stages To Produce A Good Software",
    category: "Development",
    date: "Mar 5, 2022",
    readTime: "5 min read",
    excerpt:
      "The product development life cycle (SDLC) is the period of time it takes for a software product to complete its journey from idea to release...",
    icon: Layout,
  },
  {
    title: "App Development Software and Tools for Android",
    category: "Mobile",
    date: "Mar 5, 2022",
    readTime: "5 min read",
    excerpt:
      "Android is still the most popular operating system in the world. That means Android applications are quite popular, and choosing the right tools matters...",
    icon: Smartphone,
  },
  {
    title: "10 Must Have Android Developer Skills",
    category: "Mobile",
    date: "Mar 5, 2022",
    readTime: "5 min read",
    excerpt:
      "Apps have revolutionized our lives in countless ways, from how we conduct business to how we educate, recreate, and enjoy the world around us...",
    icon: Award,
  },
  {
    title: "The Reasons Why You Should Learn Android Development?",
    category: "Mobile",
    date: "Mar 5, 2022",
    readTime: "4 min read",
    excerpt:
      "Smartphones have revolutionized our world during the previous decade. Consumers are now using their cell phones for more purposes than ever before...",
    icon: Smartphone,
  },
  {
    title: "Building a Strong Online Presence for Your Business",
    category: "Marketing",
    date: "Mar 2, 2022",
    readTime: "5 min read",
    excerpt:
      "In today's digital age, establishing a robust online presence is crucial for the success of any business. With the majority of customers online...",
    icon: Globe,
  },
  {
    title: "The Influence of Social Media on Technology",
    category: "Marketing",
    date: "Feb 14, 2022",
    readTime: "4 min read",
    excerpt:
      "In the ever-evolving landscape of the digital era, the dynamic interplay between social media and technology has become an undeniable force...",
    icon: MessageSquare,
  },
  {
    title: "The Evolution of Web Browsers and Their Impact",
    category: "Web",
    date: "Feb 11, 2022",
    readTime: "5 min read",
    excerpt:
      "The World Wide Web has come a long way since its inception, and at the heart of this digital revolution sits a piece of software we rarely think about...",
    icon: Globe,
  },
  {
    title: "Outlook is Using an Old Copy! How to Fix It",
    category: "How-To",
    date: "Feb 10, 2022",
    readTime: "4 min read",
    excerpt:
      "Do you ever get that message telling you Outlook is using an old copy of your mailbox? It can be frustrating, but the fix is usually simple...",
    icon: Mail,
  },
  {
    title: "How to Track Mobile Keyword Rankings: Mobile Rankings",
    category: "SEO",
    date: "Feb 9, 2022",
    readTime: "5 min read",
    excerpt:
      "If you're running a business, it's important to track mobile keyword rankings. Why? Because more and more people search on their phones than ever before...",
    icon: Search,
  },
  {
    title: "Alternative To Elementor: 5 Options to Consider",
    category: "Web",
    date: "Feb 9, 2022",
    readTime: "5 min read",
    excerpt:
      "If you're looking for an alternative to Elementor, you're in luck. In this article we walk through five page-builder options worth considering...",
    icon: Settings,
  },
  {
    title: "How to Copy a Website Design: The Ultimate Guide",
    category: "Web",
    date: "Feb 4, 2022",
    readTime: "5 min read",
    excerpt:
      "So you want to recreate a website design? Whether you're starting a new business and need a design quickly, or drawing inspiration from a site you admire...",
    icon: Layout,
  },
  {
    title: "Read before diving into the Web Design and Development Course!",
    category: "Career",
    date: "Feb 2, 2022",
    readTime: "4 min read",
    excerpt:
      "These days, most applicants want web design courses, and it is a versatile area that is undoubtedly connected with the future of nearly every business...",
    icon: BookOpen,
  },
];

const categories = [
  "All",
  "UI/UX Design",
  "Security",
  "Development",
  "AI/ML",
  "E-commerce",
  "Cloud",
  "Architecture",
  "Data",
  "Performance",
  "Mobile",
  "Blockchain",
  "IoT",
  "Startup",
  "Web",
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      if (!matchesCategory) return false;
      if (!query) return true;

      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    });
  }, [searchTerm, activeCategory]);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900">
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_center,_white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 lg:px-6 lg:pb-28 lg:pt-44">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              <span className="h-px w-6 bg-sky-500" />
              Blog
              <span className="h-px w-6 bg-sky-500" />
            </div>

            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">
              Insights & <br />
              <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                Knowledge Hub
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/70">
              Stay updated with the latest trends, insights, and best practices
              in software development, technology, and digital transformation.
            </p>

            <div className="mt-10 flex max-w-xl mx-auto items-center gap-4 rounded-full bg-white/10 p-2 backdrop-blur-sm">
              <Search size={20} className="ml-3 text-white/40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 bg-transparent px-2 py-2 text-white placeholder-white/40 outline-none"
              />
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("blog-grid")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG GRID ===== */}
      <section id="blog-grid" className="bg-white px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                  category === activeCategory
                    ? "bg-sky-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-sky-100 hover:text-sky-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid — each card links to its own detail page */}
          {filteredPosts.length === 0 ? (
            <p className="py-16 text-center text-slate-500">
              No articles match your search. Try a different keyword or
              category.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link
                  key={post.title}
                  to={`/${slugify(post.title)}`}
                  className="group rounded-3xl border border-slate-200 overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl block"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-sky-600">
                      <post.icon size={16} />
                      <span>{post.category}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-sky-600 transition">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sky-600 group-hover:underline">
                        Read More
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="bg-slate-50 px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <MessageSquare className="mx-auto text-sky-500" size={32} />
          <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-900 sm:text-3xl">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-2 text-slate-500">
            Get the latest insights delivered directly to your inbox.
          </p>
          <div className="mt-6 flex max-w-md mx-auto items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-slate-300 px-6 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
            <button className="rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;