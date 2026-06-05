import { skillGroups } from '../constants/portfolio';

const ResearchDetails = () => {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Skills</p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">Methods, models, and tools</h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-600">
            A practical stack spanning molecular design, docking, dynamics, process simulation, Python, bioinformatics, and scientific computing.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article
                key={group.title}
                className="group rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition group-hover:border-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchDetails;
