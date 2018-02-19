import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dimmer, Icon, Item, Label, List, Loader, Message} from 'semantic-ui-react'
import {Doughnut} from 'react-chartjs-2'
import {LanguageCounter, mapLanguageToColor} from './helpers'

import './repositoryList.scss'

class RepositoryList extends Component {
  render () {
    const {maxRepos, repositoryData, repositoryDataLoadingStatus, repositoryDataLoadingErrorStatus} = this.props

    // Reference a limited number of repositories.
    const repos = repositoryData.slice(0, maxRepos)

    // Instantiate a language counter, which will accumulate data for the chart.
    const languageCounter = new LanguageCounter()

    const listItems = repos.map((repo, index) => {
      languageCounter.countOccurrence(repo.language)

      return (
        <List.Item key={index}>
          <Icon
            name={repo.fork ? 'fork' : 'book'}
            title={repo.fork ? 'Fork of another repository' : 'Source repository'}
          />
          <List.Content styleName='Content'>
            <a href={repo.html_url} title={`View ${repo.full_name} on GitHub`}>
              {repo.name}
            </a>
            <List.Description>
              {repo.description}
            </List.Description>
            <Item.Extra>
              <Label.Group>
                <Label basic styleName='Label' title={`${repo.stargazers_count} stars`}>
                  <Icon name='star' />
                  {repo.stargazers_count}
                </Label>
                <Label basic styleName='Label' title={`${repo.forks_count} forks`}>
                  <Icon name='fork' />
                  {repo.forks_count}
                </Label>
                {repo.language &&
                  <Label basic color={mapLanguageToColor(repo.language).name} styleName='Label' title={`Primary language is ${repo.language}`}>
                    <Icon name='circle' />
                    {repo.language}
                  </Label>
                }
              </Label.Group>
            </Item.Extra>
          </List.Content>
        </List.Item>
      )
    })

    return (
      <Dimmer.Dimmable styleName='RepositoryList'>
        <Dimmer inverted active={repositoryDataLoadingStatus} />

        <Message icon error={repositoryDataLoadingErrorStatus} hidden={!repositoryDataLoadingErrorStatus}>
          <Message.Content>
            <Message.Header>
              Error
            </Message.Header>
            <p>
              We failed to load the repository data from GitHub.
            </p>
          </Message.Content>
        </Message>

        {!repositoryDataLoadingErrorStatus &&
          <div>
            <Loader indeterminate active={repositoryDataLoadingStatus}>Loading</Loader>
            {!repositoryDataLoadingStatus &&
              <Label basic ribbon='left'>
                <Doughnut
                  data={languageCounter}
                  height={200}
                  width={260}
                  options={{
                    legend: {
                      labels: {
                        boxWidth: 14,
                        fontFamily: "Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif",
                        fontSize: 13
                      },
                      onClick: () => {},
                      position: 'left'
                    },
                    responsive: false,
                    title: {
                      display: true,
                      fontColor: '#000',
                      fontFamily: "Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif",
                      fontSize: 14,
                      text: 'Repositories by Language'
                    },
                    tooltips: {
                      callbacks: {
                        label: (tooltipItem, data) => {
                          const numRepos = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                          const noun = numRepos === 1 ? 'Repository' : 'Repositories'
                          const languageName = data.labels[tooltipItem.index]
                          return `${numRepos} ${languageName} ${noun}`
                        }
                      }
                    }
                  }}
                />
              </Label>
            }
            <List>
              {listItems}
            </List>
          </div>
        }

      </Dimmer.Dimmable>
    )
  }
}

RepositoryList.propTypes = {
  maxRepos: PropTypes.number.isRequired,
  repositoryData: PropTypes.array.isRequired,
  repositoryDataLoadingStatus: PropTypes.bool.isRequired,
  repositoryDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default RepositoryList
