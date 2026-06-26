const DEFAULT_USERNAME = "greenrace666";
const GITHUB_HEADERS = {
  Accept: "application/vnd.github+json",
  "User-Agent": "greenrace666-portfolio",
  "X-GitHub-Api-Version": "2022-11-28",
};

const json = (statusCode, body, extraHeaders = {}) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=900, stale-while-revalidate=3600",
    ...extraHeaders,
  },
  body: JSON.stringify(body),
});

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const decodeHtmlEntity = (value) =>
  value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCharCode(Number.parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, decimal) =>
      String.fromCharCode(Number.parseInt(decimal, 10)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const extractPinnedRepoNames = (html, username) => {
  const escapedUsername = escapeRegExp(username);
  const pinnedItemPattern = new RegExp(
    `<li[^>]*class="[^"]*pinned-item-list-item[^"]*"[\\s\\S]*?<a[^>]+href="/${escapedUsername}/([^"?#]+)"`,
    "gi",
  );

  const repoNames = [];
  let match = pinnedItemPattern.exec(html);

  while (match) {
    repoNames.push(decodeHtmlEntity(match[1]));
    match = pinnedItemPattern.exec(html);
  }

  if (repoNames.length > 0) {
    return [...new Set(repoNames)];
  }

  const pinnedStart = html.search(/>\s*Pinned\s*</i);
  const pinnedSection =
    pinnedStart >= 0 ? html.slice(pinnedStart, pinnedStart + 60_000) : html;
  const hrefPattern = new RegExp(`href="/${escapedUsername}/([^"?#]+)"`, "gi");

  match = hrefPattern.exec(pinnedSection);
  while (match && repoNames.length < 6) {
    repoNames.push(decodeHtmlEntity(match[1]));
    match = hrefPattern.exec(pinnedSection);
  }

  return [...new Set(repoNames)];
};

const getRepoDetails = async (username, repoName) => {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repoName}`,
    {
      headers: GITHUB_HEADERS,
    },
  );

  if (!response.ok) {
    throw new Error(
      `GitHub REST request failed for ${repoName}: ${response.status}`,
    );
  }

  const repo = await response.json();
  const topics = Array.isArray(repo.topics) ? repo.topics.slice(0, 5) : [];

  return {
    id: repo.id,
    title: repo.name,
    category: repo.language || "Repository",
    description: repo.description || "Pinned GitHub repository.",
    technologies: [repo.language, ...topics].filter(Boolean),
    github: repo.html_url,
    demo: repo.homepage || "",
    stars: repo.stargazers_count || 0,
    forks: repo.forks_count || 0,
  };
};

export const handler = async (event) => {
  const username = event.queryStringParameters?.username || DEFAULT_USERNAME;

  try {
    const profileResponse = await fetch(`https://github.com/${username}`, {
      headers: {
        Accept: "text/html",
        "User-Agent": GITHUB_HEADERS["User-Agent"],
      },
    });

    if (!profileResponse.ok) {
      return json(profileResponse.status, {
        message: `GitHub profile request failed: ${profileResponse.status}`,
      });
    }

    const profileHtml = await profileResponse.text();
    const repoNames = extractPinnedRepoNames(profileHtml, username);

    if (repoNames.length === 0) {
      return json(200, []);
    }

    const repos = await Promise.all(
      repoNames.map((repoName) => getRepoDetails(username, repoName)),
    );
    return json(200, repos);
  } catch (error) {
    return json(500, {
      message:
        error instanceof Error
          ? error.message
          : "Unable to load pinned repositories.",
    });
  }
};
