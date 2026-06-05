import { ArrowUpRight, Github, Globe2, Linkedin, Twitter } from 'lucide-react';
import { socialLinks } from '../constants/portfolio';

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
  Portfolio: Globe2,
};

const SocialHub = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Connect</p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-950">Find me online</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.platform as keyof typeof iconMap];
              return (
                <a
                  key={social.platform}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="h-5 w-5 text-slate-950" />
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-950" />
                  </div>
                  <h3 className="mt-5 font-semibold text-slate-950">{social.platform}</h3>
                  <p className="mt-1 break-words text-sm text-slate-500">{social.username}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialHub;
