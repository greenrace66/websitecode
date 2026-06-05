import { Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { education, experience, languages, profile } from '../constants/portfolio';

const About = () => {
  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About</p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">
              Biology, Chemistry and Computation
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{profile.summary}</p>

            <div className="mt-10 space-y-4">
              {education.map((item) => (
                <div key={item.institution} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-950">{item.degree}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                      {item.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-slate-200 p-5">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Languages</p>
              <div className="space-y-3">
                {languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-medium text-slate-950">{language.name}</span>
                    <span className="text-right text-slate-500">{language.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Experience</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">Research and build timeline</h3>
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-500 sm:flex">
                <MapPin className="h-4 w-4" />
                India
              </div>
            </div>

            <div className="relative space-y-5 before:absolute before:left-5 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-slate-200">
              {experience.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={`${item.title}-${item.period}`}
                    className="group relative ml-2 rounded-lg border border-slate-200 bg-white p-5 pl-14 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70"
                  >
                    <div className="absolute left-0 top-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-950">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.organization}</p>
                      </div>
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm leading-6 text-slate-600">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
