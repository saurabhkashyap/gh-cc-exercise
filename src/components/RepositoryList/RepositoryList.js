import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dimmer, Icon, Item, Label, List, Loader, Message} from 'semantic-ui-react'
import {Doughnut} from 'react-chartjs-2'
import {LanguageCounter, mapLanguageToColor} from './helpers'

import './repositoryList.scss'

class RepositoryList extends Component {
  render () {
    const {repositoryData, repositoryDataLoadingStatus, repositoryDataLoadingErrorStatus} = this.props

    // Specify the maximum number of repositories we want to consider.
    const maxRepos = 10
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
              <blockquote>
                <Doughnut
                  data={languageCounter}
                  height={200}
                  width={200}
                  options={{
                    legend: {
                      labels: {
                        fontFamily: "Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif",
                        fontSize: 14
                      },
                      onClick: () => {
                      }
                    },
                    responsive: false,
                    title: {
                      display: true,
                      text: 'Repositories by Language',
                      fontFamily: "Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif",
                      fontColor: '#000',
                      fontSize: 14
                    },
                    tooltips: {
                      bodyFontFamily: "Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif",
                      bodyFontSize: 14,
                      callbacks: {
                        label: (tooltipItem, data) => { return `${tooltipItem.yLabel} repositories` },
                        title: (tooltipItems, data) => { return tooltipItems[0].xLabel }
                      }
                    }
                  }}
                />
              </blockquote>
            }
            <List styleName='list'>
              {listItems}
            </List>
          </div>
        }

      </Dimmer.Dimmable>
    )
  }
}

RepositoryList.propTypes = {
  repositoryData: PropTypes.array.isRequired,
  repositoryDataLoadingStatus: PropTypes.bool.isRequired,
  repositoryDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default RepositoryList
