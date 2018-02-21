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
