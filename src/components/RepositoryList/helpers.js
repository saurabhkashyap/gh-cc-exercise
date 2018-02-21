import {mapLanguageToColor} from 'lib/helpers'

/**
 * Returns a new instance of a language counter, which can be used for
 * arranging language data prior to charting it.
 *
 * @constructor
 */
export const LanguageCounter = function () {
  this.labels = []
  this.datasets = [{
    backgroundColor: [],
    data: []
  }]
}

/**
 * Updates the language counter, based upon the language name passed in.
 *
 * Note: Since I use the `function` keyword, `this` refers to the caller.
 *
 * @param languageName
 */
LanguageCounter.prototype.countOccurrence = function (languageName) {
  const sanitizedLanguageName = languageName || 'Other'
  let indexOfLabel = this.labels.indexOf(sanitizedLanguageName)

  // If no label for this language is found, create one and create an associated counter and background color.
  if (indexOfLabel === -1) {
    indexOfLabel = this.labels.push(sanitizedLanguageName) - 1
    this.datasets[0].data[indexOfLabel] = 0
    this.datasets[0].backgroundColor[indexOfLabel] = mapLanguageToColor(sanitizedLanguageName).hex
  }

  // Increment the counter associated with this language.
  this.datasets[0].data[indexOfLabel] += 1
}

/**
 * Creates a function using the singular and plural nouns passed in.
 * Returns that function, which can be used as a Chart.js tooltip label callback.
 *
 * @param singularNoun
 * @param pluralNoun
 * @return {function}
 */
export const generateTooltipLabelProcessor = (singularNoun, pluralNoun) => (tooltipItem, data) => {
  const numRepos = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
  const noun = numRepos === 1 ? singularNoun : pluralNoun
  const languageName = data.labels[tooltipItem.index]
  return `${numRepos} ${languageName} ${noun}`
}
