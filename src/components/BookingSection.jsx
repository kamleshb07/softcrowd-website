import { useState } from "react";
import {
  CalendarDays,
  ArrowUpRight,
  ChevronDown,
  Send,
} from "lucide-react";
import TrustBadges from "./TrustBadges";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Add the actual Calendly or Cal.com URL when available.
const BOOKING_URL = "";

const inquiryTypes = [
  "Development",
  "Student Training",
  "Career",
  "Corporate Training",
  "Industrial Training",
  "College Training",
  "Internship",
];

const BookingSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setErrorMsg(err.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="schedule-call"
      className="scroll-mt-28 bg-slate-50 px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            Let's Connect
          </span>
          <h2 className="mt-5 text-3xl font-bold text-blue-500 sm:text-4xl lg:text-5xl">
            Schedule a Technical Scoping Call
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Discuss architecture, tech stack selection, sprint timelines, and estimates.
          </p>
        </div>


        {/* Booking Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Send Us Your Requirements
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Share your project details and our team will get back to you.
            </p>

            {isSubmitted && (
              <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                Thank you! Your message has been sent successfully.
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
                  <label htmlFor="booking-firstName" className="text-sm font-medium text-slate-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="booking-firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="booking-lastName" className="text-sm font-medium text-slate-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="booking-lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-email" className="text-sm font-medium text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="booking-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="booking-phone" className="text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="booking-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="booking-inquiryType" className="text-sm font-medium text-slate-700">
                  Inquiry Type *
                </label>
                <div className="relative mt-1.5">
                  <select
                    id="booking-inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
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
                <label htmlFor="booking-message" className="text-sm font-medium text-slate-700">
                  Message *
                </label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
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

          {/* Booking Calendar */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {BOOKING_URL ? (
              <iframe
                src={BOOKING_URL}
                title="Schedule a Technical Call"
                width="100%"
                height="650"
                loading="lazy"
                className="min-h-[580px] w-full border-0"
              />
            ) : (
              <div className="flex min-h-[580px] flex-col items-center justify-center px-6 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <CalendarDays size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Book Your Technical Consultation
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Our online booking calendar will be available here.
                  You can send your requirements using the contact form.
                </p>

                <a
                  href="https://wa.me/917447444874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Contact Our Team
                  <ArrowUpRight size={17} />
                </a>
              </div>
            )}
          </div>
        </div>
        <TrustBadges placement="booking" className="mt-10" />
      </div>
    </section>
  );
};

export default BookingSection;
