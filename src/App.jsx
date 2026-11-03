// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "./layout/Layout";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Careers from "./pages/Careers";
// import WebApplication from "./pages/WebApplication";
// import ServiceTwo from "./pages/ServiceTwo";
// import ServiceThree from "./pages/ServiceThree";
// import ServiceFour from "./pages/ServiceFour";
// import Blogs from "./pages/Blogs";
// import BlogDetails from "./pages/BlogDetails";  
// import CorporateTraining from "./pages/CorporateTraining";
// import IndustrialTraining from "./pages/IndustrialTraining";
// import CollegeTraining from "./pages/CollegeTraining";
// import Internship from "./pages/Internship";

// const App = () => {
//   return (
//     <BrowserRouter basename="/new-site">
//       <Routes>
//         <Route element={<Layout />}>
//           {/* Existing routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/careers" element={<Careers />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* Service pages */}
//           <Route path="/web-application" element={<WebApplication />} />
//           <Route path="/digital-marketing-solution-provider" element={<ServiceTwo />} />
//           <Route path="/bulk-sms-and-email-marketing" element={<ServiceThree />} />
//           <Route path="/hire-web-and-mobile-app-developers" element={<ServiceFour />} />

//           {/* Blog page */}
//           <Route path="/blogs" element={<Blogs />} />
//           <Route path="/:slug" element={<BlogDetails />} />

//           {/* Training & internship pages */}
//           <Route path="/corporate-training" element={<CorporateTraining />} />
//           <Route path="/industrial-training" element={<IndustrialTraining />} />
//           <Route path="/college-training" element={<CollegeTraining />} />
//           <Route path="/internship" element={<Internship />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

// Main pages
import Home from "./pages/Home";
import Solutions from "./components/Solutions";
import TechStack from "./components/TechStack";
import DedicatedDevelopers from "./components/DedicatedDevelopers";
import BookingSection from "./components/BookingSection";

// Existing pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

// Service pages
import WebApplication from "./pages/WebApplication";
import ServiceTwo from "./pages/ServiceTwo";
import ServiceThree from "./pages/ServiceThree";
import ServiceFour from "./pages/ServiceFour";

// Blog pages
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

// Training and internship pages
import CorporateTraining from "./pages/CorporateTraining";
import IndustrialTraining from "./pages/IndustrialTraining";
import CollegeTraining from "./pages/CollegeTraining";
import Internship from "./pages/Internship";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Main website pages */}
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route
            path="/dedicated-developers"
            element={<DedicatedDevelopers />}
          />
          <Route path="/schedule-call" element={<BookingSection />} />

          {/* Existing pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />

          {/* Service pages */}
          <Route path="/web-application" element={<WebApplication />} />
          <Route
            path="/digital-marketing-solution-provider"
            element={<ServiceTwo />}
          />
          <Route
            path="/bulk-sms-and-email-marketing"
            element={<ServiceThree />}
          />
          <Route
            path="/hire-web-and-mobile-app-developers"
            element={<ServiceFour />}
          />

          {/* Blog pages */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/:slug" element={<BlogDetails />} />

          {/* Training and internship pages */}
          <Route
            path="/corporate-training"
            element={<CorporateTraining />}
          />
          <Route
            path="/industrial-training"
            element={<IndustrialTraining />}
          />
          <Route
            path="/college-training"
            element={<CollegeTraining />}
          />
          <Route path="/internship" element={<Internship />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
