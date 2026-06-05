import { useState } from "react";
import { Download, FileText, Eye, X } from "lucide-react";
import pdf from "/src/cvnew2.pdf";
import { certifications } from "../constants/portfolio";

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="resume" className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-8 shadow-sm justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-950">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">
                    Resume and credentials
                  </h2>
                  <p className="text-sm text-slate-500">
                    Academic & professional overview
                  </p>
                </div>
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                Academic background, Research experience, Technical skills,
                Languages and Certifications.
              </p>

              {/* Interactive PDF Preview Card */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="group relative mt-6 h-[380px] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:border-slate-400 hover:shadow-md cursor-pointer"
              >
                {/* PDF embedment with pointer-events-none */}
                <div className="pointer-events-none h-full w-full select-none overflow-hidden opacity-80 transition-opacity duration-300 group-hover:opacity-50">
                  <iframe
                    src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="h-full w-full border-0"
                    title="Resume Preview"
                    loading="lazy"
                  />
                </div>

                {/* Bottom half covered blur (default view) */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-[1.5px] transition-all duration-500 group-hover:opacity-0" />

                {/* Bottom text banner (default view) */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-6 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
                  <span className="rounded-full bg-slate-950/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 backdrop-blur-sm border border-slate-200/50">
                    View Resume
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 opacity-0 backdrop-blur-[3px] transition-all duration-300 group-hover:opacity-100">
                  <div className="transform scale-90 transition-transform duration-300 group-hover:scale-100 flex flex-col items-center gap-3">
                    <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:bg-slate-50">
                      <Eye className="h-4 w-4" />
                      View Full Resume
                    </button>
                    <a
                      href={pdf}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/50 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-slate-100">
              <a
                href={pdf}
                className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 shadow-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Certifications
            </p>
            <h3 className="mt-3 text-4xl font-semibold text-slate-950">
              Validated learning
            </h3>
            <div className="mt-8 grid gap-4">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <article
                    key={cert.title}
                    className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-950">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold text-slate-950">
                            {cert.title}
                          </h4>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                            {cert.date}
                          </span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-slate-500">
                          {cert.issuer}
                        </p>
                        <p className="mt-3 leading-7 text-slate-600">
                          {cert.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen PDF Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-slate-950/90 backdrop-blur-sm">
          {/* Modal Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-slate-800 bg-slate-900/90 text-white">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-slate-400" />
              <span className="font-semibold text-sm md:text-base">
                Resume / CV
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={pdf}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-semibold transition"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-6 h-[calc(100vh-4rem)]">
            <div className="w-full h-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <iframe
                src={`${pdf}#view=FitH`}
                className="w-full h-full border-0"
                title="Full Resume"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
