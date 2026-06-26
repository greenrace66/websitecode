import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { profile } from "../constants/portfolio";
import {
  fetchPinnedProjects,
  type GitHubPinnedProject,
} from "../services/github";

const githubUsername =
  profile.github.split("/").filter(Boolean).pop() ?? "greenrace666";

const Projects = () => {
  const [projects, setProjects] = useState<GitHubPinnedProject[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadPinnedProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const pinnedProjects = await fetchPinnedProjects(githubUsername);

        if (isMounted) {
          setProjects(pinnedProjects);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load pinned repositories.",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadPinnedProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(projects.map((project) => project.category))),
    ],
    [projects],
  );

  useEffect(() => {
    if (!categories.includes(activeCategory)) {
      setActiveCategory("All");
    }
  }, [activeCategory, categories]);

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="bg-white py-24 text-slate-950 transition-colors"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Projects
            </p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
              Selected work
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Live projects pulled from the pinned repositories on my GitHub
              profile.
            </p>
          </div>

          {!isLoading && !error && projects.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-300 text-slate-600 hover:border-slate-950 hover:text-slate-950"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {isLoading &&
            Array.from({ length: 6 }).map((_, index) => (
              <article
                key={`loading-project-${index}`}
                className="min-h-[22rem] animate-pulse rounded-lg border border-slate-200 bg-slate-50 p-6"
              >
                <div className="h-6 w-24 rounded-full bg-slate-200" />
                <div className="mt-8 h-8 w-2/3 rounded bg-slate-200" />
                <div className="mt-6 space-y-3">
                  <div className="h-4 rounded bg-slate-200" />
                  <div className="h-4 w-5/6 rounded bg-slate-200" />
                  <div className="h-4 w-3/4 rounded bg-slate-200" />
                </div>
                <div className="mt-10 flex gap-2">
                  <div className="h-7 w-20 rounded-full bg-slate-200" />
                  <div className="h-7 w-24 rounded-full bg-slate-200" />
                </div>
              </article>
            ))}

          {!isLoading && error && (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 md:col-span-2 xl:col-span-3">
              <p className="font-medium text-slate-950">
                Pinned repositories could not be loaded.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{error}</p>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                <Github className="mr-2 h-4 w-4" />
                View GitHub profile
              </a>
            </div>
          )}

          {!isLoading && !error && visibleProjects.length === 0 && (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 md:col-span-2 xl:col-span-3">
              <p className="font-medium text-slate-950">
                No pinned repositories found.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pin repositories on GitHub and they will appear here
                automatically.
              </p>
            </div>
          )}

          {!isLoading &&
            !error &&
            visibleProjects.map((project) => (
              <article
                key={project.id}
                className="group flex min-h-[22rem] flex-col justify-between rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm">
                      {project.category}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-950" />
                  </div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4 text-sm font-medium">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-600 transition hover:text-slate-950"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-600 transition hover:text-slate-950"
                      >
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
