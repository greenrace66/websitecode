export type GitHubPinnedProject = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  stars: number;
  forks: number;
};

export const fetchPinnedProjects = async (username: string): Promise<GitHubPinnedProject[]> => {
  const response = await fetch(`/.netlify/functions/pinned-repos?username=${encodeURIComponent(username)}`);

  if (!response.ok) {
    throw new Error(`Unable to load pinned repositories (${response.status})`);
  }

  const projects = (await response.json()) as GitHubPinnedProject[];

  return projects.map((project) => ({
    ...project,
    technologies: project.technologies.length > 0 ? project.technologies : [project.category],
  }));
};
