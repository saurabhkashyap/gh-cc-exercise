/**
 * Returns a new instance of a pull request counter, which can be used for
 * arranging pull request data prior to charting it. A pull request counter
 * keeps track of the number of pull requests that are associated with each
 * of a set of repositories.
 *
 * @param dataSetLabel
 * @constructor
 */
export const PullRequestCounter = function (dataSetLabel) {
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
PullRequestCounter.prototype.countOccurrence = function (repoName) {
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
