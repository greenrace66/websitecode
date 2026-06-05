import { ArrowUpRight, BookOpen } from 'lucide-react';
import { blogPosts, profile } from '../constants/portfolio';

const Blog = () => {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Writing</p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">Notes from the bench and terminal</h2>
          </div>
          <a
            href={profile.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-950"
          >
            View all posts
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <BookOpen className="h-4 w-4" />
                <span>{post.date}</span>
                <span>&bull;</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950">{post.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 inline-flex items-center text-sm font-semibold text-slate-950">
                Read more
                <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
