import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dimmer, Grid, Header, Icon, Item, Label, List, Loader, Message, Segment} from 'semantic-ui-react'
import {Doughnut} from 'react-chartjs-2'
import {generateTooltipLabelProcessor, LanguageCounter, mapLanguageToColor, noOp} from './helpers'

import './repositoryList.scss'

class RepositoryList extends Component {
  render () {
    const {
      maxRepos,
      repositoryData,
      repositoryDataLoadingStatus,
      repositoryDataLoadingErrorStatus
    } = this.props

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
      <Dimmer.Dimmable>
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
              <Grid>
                <Grid.Column mobile={16} tablet={16} computer={10} widescreen={6}>
                  <Segment>
                    <Header as='h5' styleName='chartHeader'>Repositories per Language</Header>
                    <Doughnut
                      data={languageCounter}
                      height={200}
                      options={{
                        legend: {
                          labels: {
                            boxWidth: 14,
                            fontFamily: "Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif",
                            fontSize: 13
                          },
                          onClick: noOp,
                          position: 'left'
                        },
                        tooltips: {
                          callbacks: {
                            label: generateTooltipLabelProcessor('repository', 'repositories')
                          }
                        }
                      }}
                    />
                  </Segment>
                </Grid.Column>
              </Grid>
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
