import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dimmer, Icon, Item, Label, List, Loader, Message} from 'semantic-ui-react'
import {Bar} from 'react-chartjs-2'
import moment from 'moment'
import {makeLowercaseWithUppercaseFirstChar, parsePullReqHtmlUrl} from './helpers'

import './mergeList.scss'

class MergeList extends Component {
  render () {
    const {maxMerges, mergeData, mergeDataLoadingStatus, mergeDataLoadingErrorStatus} = this.props

    console.log('mergeData', mergeData)

    const listItems = mergeData.hasOwnProperty('items') ? mergeData.items.slice(0, maxMerges).map((pullReq, index) => {
      const isOwner = (pullReq.author_association === 'OWNER')
      const authorAssociation = makeLowercaseWithUppercaseFirstChar(pullReq.author_association)
      const updatedAtMoment = moment(pullReq.updated_at)
      const {repoHomepage, repoOwner, repoName} = parsePullReqHtmlUrl(pullReq.html_url)
      const repoFullName = `${repoOwner}/${repoName}`
      const pullReqFullName = `#${pullReq.number}: ${pullReq.title}`
      const commentOrComments = (pullReq.comments === 1) ? 'comment' : 'comments'

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
            <List.Description title={'Updated ' + updatedAtMoment.format('MMMM D, YYYY [at] h:mm A')}>
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
              <Label basic ribbon>
                <p>Number of Pull Requests per Repository</p>
                <Bar
                  data={{}}
                  height={200}
                  width={260}
                  options={{
                    responsive: false
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
