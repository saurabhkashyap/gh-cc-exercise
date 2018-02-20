import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dimmer, Header, Icon, Item, Label, List, Loader, Message} from 'semantic-ui-react'
import {HorizontalBar as Bar} from 'react-chartjs-2'
import moment from 'moment'
import {dateTimeFormatStr, makeLowercaseWithUppercaseFirstChar, parsePullReqHtmlUrl, PullReqCounter} from './helpers'

import './mergeList.scss'

class MergeList extends Component {
  render () {
    const {
      maxMerges,
      mergeData,
      mergeDataLoadingStatus,
      mergeDataLoadingErrorStatus
    } = this.props

    // Instantiate a pull request counter, which will accumulate data for the chart.
    const pullReqCounter = new PullReqCounter('Pull Requests')

    const listItems = mergeData.hasOwnProperty('items') ? mergeData.items.slice(0, maxMerges).map((pullReq, index) => {
      const isOwner = (pullReq.author_association === 'OWNER')
      const authorAssociation = makeLowercaseWithUppercaseFirstChar(pullReq.author_association)
      const updatedAtMoment = moment(pullReq.updated_at)
      const {repoHomepage, repoOwner, repoName} = parsePullReqHtmlUrl(pullReq.html_url)
      const repoFullName = `${repoOwner}/${repoName}`
      const pullReqFullName = `#${pullReq.number}: ${pullReq.title}`
      const commentOrComments = (pullReq.comments === 1) ? 'comment' : 'comments'

      pullReqCounter.countOccurrence(repoFullName)

      return (
        <List.Item key={index}>
          <Icon
            name={isOwner ? 'book' : 'fork'}
            title={isOwner ? "User's own repository" : "Someone else's repository"}
          />
          <List.Content>
            <a href={pullReq.html_url} title={`View ${pullReqFullName} on GitHub`}>
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
                <Label basic styleName='Label' title={`${pullReq.comments} ${commentOrComments}`}>
                  <Icon name='discussions' />
                  {pullReq.comments}
                </Label>
                <Label basic styleName='Label' title={`${authorAssociation} role`}>
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
      <Dimmer.Dimmable styleName='MergeList'>
        <Dimmer inverted active={mergeDataLoadingStatus} />

        <Message icon error={mergeDataLoadingErrorStatus} hidden={!mergeDataLoadingErrorStatus}>
          <Message.Content>
            <Message.Header>
              Error
            </Message.Header>
            <p>
              We failed to load the merge data from GitHub.
            </p>
          </Message.Content>
        </Message>

        {!mergeDataLoadingErrorStatus &&
          <div>
            <Loader indeterminate active={mergeDataLoadingStatus}>Loading</Loader>
            {!mergeDataLoadingStatus &&
              <Label basic ribbon styleName='chartLabel'>
                <Header as='h5'>Pull Requests per Repository</Header>
                <Bar
                  data={pullReqCounter}
                  height={200}
                  width={450}
                  options={{
                    legend: {
                      display: false
                    },
                    responsive: false,
                    scales: {
                      xAxes: [{
                        ticks: {
                          beginAtZero: true
                        }
                      }]
                    },
                    tooltips: {
                      enabled: false
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

MergeList.propTypes = {
  maxMerges: PropTypes.number.isRequired,
  mergeData: PropTypes.object.isRequired,
  mergeDataLoadingStatus: PropTypes.bool.isRequired,
  mergeDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default MergeList
