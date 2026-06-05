import { ArrowDown, ArrowRight, Download, ExternalLink } from 'lucide-react';
import Image from './nikil.webp';
import pdf from '/src/cvnew2.pdf';
import { highlights, profile, researchFocus } from '../constants/portfolio';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.08),_transparent_34%),linear-gradient(135deg,#ffffff_0%,#f8fafc_48%,#eef2ff_100%)]" />
      <div className="container mx-auto grid min-h-[calc(100vh-6rem)] items-center gap-12 px-6 py-12 lg:grid-cols-[1.06fr_0.94fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {profile.role} at {profile.location}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-slate-950 md:text-7xl">
            Nikil Krishna
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Structural computational biology, drug design automation, molecular dynamics, and protein binder design.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href={pdf}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-950"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="group rounded-lg border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-slate-300">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">{item.value}</p>
                <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200">
            <img
              src={Image}
              alt="Nikil Krishna"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-7 left-7 inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg backdrop-blur transition hover:bg-slate-950 hover:text-white"
            >
              Portfolio
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-semibold text-slate-950">Research focus</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {researchFocus.map((focus) => (
                <a
                  key={focus}
                  href="#research"
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 transition hover:border-slate-950 hover:text-slate-950"
                >
                  {focus}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition hover:-translate-y-1 hover:text-slate-950 md:inline-flex"
      >
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
};

export default Hero;
