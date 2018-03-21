export const noOp = () => {}

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

/**
 * Returns an object containing an English and Hexadecimal representation of the color associated with the language
 * whose name is passed in. The English representation is, specifically, a valid Semantic UI class name.
 *
 * Note: The mapping from language to color was chosen by doing the following: checking which color the GitHub website
 * seems to map a given language to, then choosing the most similar color in the Semantic UI default theme.
 *
 * Reference: https://semantic-ui.com/usage/theming.html
 *
 * @param languageName
 * @return {*}
 */
export const mapLanguageToColor = (languageName) => {
  switch (languageName) {
    case 'C++':
      return {
        name: 'pink',
        hex: '#FF1493'
      }
    case 'HTML':
      return {
        name: 'red',
        hex: '#B03060'
      }
    case 'JavaScript':
      return {
        name: 'yellow',
        hex: '#FFD700'
      }
    case 'Python':
      return {
        name: 'blue',
        hex: '#0E6EB8'
      }
    case 'Shell':
      return {
        name: 'green',
        hex: '#21BA45'
      }
    default:
      return {
        name: 'grey',
        hex: '#A0A0A0'
      }
  }
}
