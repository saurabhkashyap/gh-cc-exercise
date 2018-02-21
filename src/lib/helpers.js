/**
 * Returns an object containing GitHub URLs associated with the username passed in.
 *
 * @param username
 * @return {{followers: string, following: string, gists: string, profile: string, repositories: string}}
 */
export const mapUsernameToGitHubUrls = (username) => {
  const base = 'https://github.com'

  return {
    followers: `${base}/${username}/followers`,
    following: `${base}/${username}/following`,
    gists: `https://gist.github.com/${username}`,
    profile: `${base}/${username}`,
    repositories: `${base}/${username}/repositories`
  }
}
