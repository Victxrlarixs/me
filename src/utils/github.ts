const starsCache = new Map<string, number>();

/**
 * Fetches the number of stars for a given GitHub repository URL.
 * Includes a simple build-time cache to avoid redundant API calls.
 * @param url - The full GitHub repository URL.
 * @returns A promise that resolves to the number of stars.
 */
export const fetchGitHubStars = async (url: string): Promise<number> => {
  if (!url || !url.includes('github.com')) return 0;
  
  const repoPath = url.split('github.com/')[1];
  if (starsCache.has(repoPath)) return starsCache.get(repoPath)!;

  try {
    const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
      headers: { 
        'User-Agent': 'Astro-Portfolio-Victxrlarixs',
        ...(import.meta.env.GITHUB_TOKEN ? { 'Authorization': `token ${import.meta.env.GITHUB_TOKEN}` } : {})
      }
    });

    if (!response.ok) {
      console.warn(`Failed to fetch stars for ${repoPath}: ${response.statusText}`);
      return 0;
    }

    const data = await response.json();
    const stars = data.stargazers_count || 0;
    starsCache.set(repoPath, stars);
    return stars;
  } catch (e) {
    console.error(`Error fetching stars for ${repoPath}:`, e);
    return 0;
  }
};
