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
export const parsePullReqHtmlUrl = (pullReqHtmlUrlString) => {
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

/**
 * Returns a new instance of a pull request counter, which can be used for
 * arranging pull request data prior to charting it. A pull request counter
 * keeps track of the number of pull requests that are associated with each
 * of a set of repositories.
 *
 * @param dataSetLabel
 * @constructor
 */
export const PullReqCounter = function (dataSetLabel) {
  this.labels = []
  this.datasets = [{
    backgroundColor: [],
    data: [],
    hoverBackgroundColor: [],
    label: dataSetLabel
  }]
}

/**
 * Updates the pull request counter, based upon the repository name passed in.
 *
 * Note: Since I use the `function` keyword, `this` refers to the caller.
 *
 * @param repoName
 */
PullReqCounter.prototype.countOccurrence = function (repoName) {
  let indexOfLabel = this.labels.indexOf(repoName)

  // If no labels for this repository name exists, create one and created an associated counter and background color.
  if (indexOfLabel === -1) {
    indexOfLabel = this.labels.push(repoName) - 1
    this.datasets[0].data[indexOfLabel] = 0
    this.datasets[0].backgroundColor[indexOfLabel] = '#ffbf0d'
    this.datasets[0].hoverBackgroundColor[indexOfLabel] = '#ffbf0d'
  }

  // Increment the counter associated with this repository name.
  this.datasets[0].data[indexOfLabel] += 1
}
