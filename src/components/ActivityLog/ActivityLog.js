import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dimmer, Feed, Image, Loader, Message} from 'semantic-ui-react'
import moment from 'moment'

import './activityLog.scss'

class ActivityLog extends Component {
  render () {
    const {activityData, activityDataLoadingStatus, activityDataLoadingErrorStatus} = this.props

    const maxEvents = 9

    // Generate an array of `Feed.Event`s, representing the activity log entries related to Issues and Pull Requests.
    //
    // TODO: Move the filtration to the reducer or to a `reselect` selector, so it only runs once per fetched data set.
    //
    const feedEvents = activityData.filter((entry) => {
      return (
        entry.type === 'IssuesEvent' ||
        entry.type === 'PullRequestEvent'
      )
    }).slice(0, maxEvents).map((entry, index) => {
      const {
        actor,
        created_at,
        payload,
        repo
      } = entry
      const createdAtMoment = moment(created_at)
      const isIssue = payload.hasOwnProperty('issue')
      const issueOrPullRequestUrl = isIssue ? payload.issue.html_url : payload.pull_request.html_url
      const issueOrPullRequestTitle = isIssue ? payload.issue.title : payload.pull_request.title
      const issueOrPullRequestNumber = isIssue ? payload.issue.number : payload.pull_request.number

      return (
        <Feed.Event key={index}>
          <Feed.Label>
            <Image src={actor.avatar_url} styleName='Avatar' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date title={createdAtMoment.format('MMMM D, YYYY [at] h:mm A')}>
              {createdAtMoment.fromNow()}
            </Feed.Date>
            <Feed.Summary styleName='Summary'>
              {`${actor.display_login} ${payload.action} `}
              {isIssue ? 'an ' : 'a '}
              <a href={issueOrPullRequestUrl} title={`#${issueOrPullRequestNumber}: ${issueOrPullRequestTitle}`}>
                {isIssue ? 'issue ' : 'pull request '}
              </a>
              {`in ${repo.name}`}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      )
    })

    return (
      <Dimmer.Dimmable styleName='ActivityLog'>
        <Dimmer inverted active={activityDataLoadingStatus} />

        <Message icon error={activityDataLoadingErrorStatus} hidden={!activityDataLoadingErrorStatus}>
          <Message.Content>
            <Message.Header>
              Error
            </Message.Header>
            <p>
              We failed to load the activity data from GitHub.
            </p>
          </Message.Content>
        </Message>

        {!activityDataLoadingErrorStatus &&
          <Feed>
            <Loader indeterminate active={activityDataLoadingStatus}>Loading</Loader>
            {feedEvents}
          </Feed>
        }

      </Dimmer.Dimmable>
    )
  }
}

ActivityLog.propTypes = {
  activityData: PropTypes.array.isRequired,
  activityDataLoadingStatus: PropTypes.bool.isRequired,
  activityDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default ActivityLog
