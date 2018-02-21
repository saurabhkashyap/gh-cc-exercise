/**
 * Returns a version of the string passed in, in which the first character is uppercase and all others are lowercase.
 *
 * @param str
 * @return {string}
 */
export const makeLowercaseWithUppercaseFirstChar = (str) => {
  const capitalFirstLetter = str.charAt(0).toUpperCase()
  const lowercaseStr = str.toLowerCase()

  return capitalFirstLetter + lowercaseStr.slice(1)
}

/**
 * Returns an object whose property values are elements of the URL string passed in.
 *
 * Example URL string: "https://github.com/octocat/Hello-World/pull/1347"
 *
 * @param pullReqHtmlUrlString
 * @return {{repoHomepage, repoOwner, repoName}}
 */
export const parsePullRequestHtmlUrl = (pullReqHtmlUrlString) => {
  const matches = pullReqHtmlUrlString.match(/(https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+))\//i)
  const repoHomepage = matches[1]
  const repoOwner = matches[2]
  const repoName = matches[3]

  return {
    repoHomepage,
    repoOwner,
    repoName
  }
}

/**
 * A string that describes a date and time format, and which can be passed to moment.format().
 *
 * Reference: https://momentjs.com/docs/#/displaying/format/
 *
 * @type {string}
 */
export const dateTimeFormatStr = 'MMMM D, YYYY [at] h:mm A'
