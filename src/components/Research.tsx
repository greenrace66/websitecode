import { BookOpen, Microscope, Target } from 'lucide-react';
import { researchFocus } from '../constants/portfolio';

const Research = () => {
  return (
    <section id="research" className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Research</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">
            Structural computational biology with a builder's bias.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            I work across molecular visualization, simulation, drug design automation, and protein engineering, with a growing focus on AI-driven in silico workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <Microscope className="h-7 w-7 text-slate-950" />
            <h3 className="mt-5 text-xl font-semibold text-slate-950">Current focus</h3>
            <p className="mt-3 leading-7 text-slate-600">
              AI and deep learning applications for in silico drug design and protein binder design.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <Target className="h-7 w-7 text-slate-950" />
            <h3 className="mt-5 text-xl font-semibold text-slate-950">Research direction</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Comutational Biology, Bioinformatics, Structural Biology, Scientific Computing 
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <BookOpen className="h-7 w-7 text-slate-950" />
            <h3 className="mt-5 text-xl font-semibold text-slate-950">Publication</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Structure-Based Drug Design of Novel Inhibitors Targeting the Thiamine Biosynthesis Pathway in Bacteria. Preprint available at bioRxiv.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {researchFocus.map((focus) => (
            <span key={focus} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              {focus}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
