
import { CalendarDays, Clock, Video, ArrowUpRight } from "lucide-react";

// Add your real Calendly or Cal.com URL here when available.
const BOOKING_URL = "";

const BookingSection = () => {
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

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Schedule a Technical
            <span className="text-blue-600"> Consultation</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Tell us about your project, discuss your technical requirements,
            and explore how our engineering team can help.
          </p>
        </div>

        {/* Booking Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Information Panel */}
          <div className="rounded-2xl bg-slate-950 p-8 text-white lg:col-span-1">
            <h3 className="text-2xl font-bold">
              Let's discuss your next project.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Connect with our team to discuss your idea, project scope,
              technology requirements, and development possibilities.
            </p>

            <div className="mt-9 space-y-6">
              <div className="flex items-start gap-4">
                <CalendarDays className="mt-1 text-sky-400" size={22} />
                <div>
                  <h4 className="font-semibold">Flexible Scheduling</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Choose a suitable meeting time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-sky-400" size={22} />
                <div>
                  <h4 className="font-semibold">Technical Discussion</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Discuss your requirements and goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Video className="mt-1 text-sky-400" size={22} />
                <div>
                  <h4 className="font-semibold">Online Consultation</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Connect remotely with our team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Calendar */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
            {BOOKING_URL ? (
              <iframe
                src={BOOKING_URL}
                title="Schedule a Technical Call"
                width="100%"
                height="650"
                frameBorder="0"
                className="w-full"
              />
            ) : (
              <div className="flex min-h-[450px] flex-col items-center justify-center px-6 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <CalendarDays size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Book Your Technical Consultation
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Our online booking calendar will be available here.
                  Contact our team to discuss your project in the meantime.
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
      </div>
    </section>
  );
};

export default BookingSection;
