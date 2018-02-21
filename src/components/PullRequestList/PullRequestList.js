import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dimmer, Grid, Header, Icon, Item, Label, List, Loader, Message, Segment} from 'semantic-ui-react'
import {HorizontalBar as Bar} from 'react-chartjs-2'
import moment from 'moment'
import {PullRequestCounter} from './lib/PullRequestCounter'
import {dateTimeFormatStr, makeLowercaseWithUppercaseFirstChar, parsePullRequestHtmlUrl} from './lib/helpers'

import './pullRequestList.scss'

class PullRequestList extends Component {
  render () {
    const {
      maxPullRequests,
      pullRequestData,
      pullRequestDataLoadingStatus,
      pullRequestDataLoadingErrorStatus
    } = this.props

    // Instantiate a pull request counter, which will accumulate data for the chart.
    const pullRequestCounter = new PullRequestCounter('Pull Requests')

    const listItems = pullRequestData.hasOwnProperty('items') ? pullRequestData.items.slice(0, maxPullRequests).map((pullRequest, index) => {
      const isOwner = (pullRequest.author_association === 'OWNER')
      const authorAssociation = makeLowercaseWithUppercaseFirstChar(pullRequest.author_association)
      const updatedAtMoment = moment(pullRequest.updated_at)
      const {repoHomepage, repoOwner, repoName} = parsePullRequestHtmlUrl(pullRequest.html_url)
      const repoFullName = `${repoOwner}/${repoName}`
      const pullReqFullName = `#${pullRequest.number}: ${pullRequest.title}`
      const commentOrComments = (pullRequest.comments === 1) ? 'comment' : 'comments'

      pullRequestCounter.countOccurrence(repoFullName)

      return (
        <List.Item key={index}>
          <Icon
            name={isOwner ? 'book' : 'fork'}
            title={isOwner ? "User's own repository" : "Someone else's repository"}
          />
          <List.Content>
            <a href={pullRequest.html_url} title={`View ${pullReqFullName} on GitHub`}>
              {pullReqFullName}
            </a>
            {' in '}
            <a href={repoHomepage} title={`Visit ${repoFullName} on GitHub`}>
              {repoFullName}
            </a>
            <List.Description title={'Updated ' + updatedAtMoment.format(dateTimeFormatStr)}>
              Updated {updatedAtMoment.fromNow()}
            </List.Description>
            <Item.Extra>
              <Label.Group>
                <Label basic styleName='itemLabel' title={`${pullRequest.comments} ${commentOrComments}`}>
                  <Icon name='discussions' />
                  {pullRequest.comments}
                </Label>
                <Label basic styleName='itemLabel' title={`Repository ${authorAssociation.toLowerCase()}`}>
                  <Icon name={isOwner ? 'home' : 'globe'} />
                  {authorAssociation}
                </Label>
              </Label.Group>
            </Item.Extra>
          </List.Content>
        </List.Item>
      )
    }) : []

    return (
      <Dimmer.Dimmable>
        <Dimmer inverted active={pullRequestDataLoadingStatus} />

        <Message icon error={pullRequestDataLoadingErrorStatus} hidden={!pullRequestDataLoadingErrorStatus}>
          <Message.Content>
            <Message.Header>
              Error
            </Message.Header>
            <p>
              We failed to load the Pull Request data.
            </p>
          </Message.Content>
        </Message>

        {!pullRequestDataLoadingErrorStatus &&
          <div>
            <Loader indeterminate active={pullRequestDataLoadingStatus}>Loading</Loader>
            {!pullRequestDataLoadingStatus &&
              <Grid>
                <Grid.Column mobile={16} tablet={16} computer={14} widescreen={16}>
                  <Segment>
                    <Header as='h5' styleName='chartHeader'>
                      Pull Requests per Repository
                    </Header>
                    <div styleName='chartWrapper'>
                      <Bar
                        data={pullRequestCounter}
                        options={{
                          legend: {
                            display: false
                          },
                          maintainAspectRatio: false,
                          scales: {
                            xAxes: [{
                              ticks: {
                                beginAtZero: true,
                                stepSize: 1
                              }
                            }]
                          },
                          tooltips: {
                            enabled: false
                          }
                        }}
                      />
                    </div>
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

PullRequestList.propTypes = {
  maxPullRequests: PropTypes.number.isRequired,
  pullRequestData: PropTypes.object.isRequired,
  pullRequestDataLoadingStatus: PropTypes.bool.isRequired,
  pullRequestDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default PullRequestList
