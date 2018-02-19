import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dimmer, Icon, Item, Label, List, Loader, Message, Segment} from 'semantic-ui-react'

import './repositoryList.scss'

class RepositoryList extends Component {
  /**
   * Returns the name of the color that (arbitrarily) corresponds to the language whose name is passed in.
   *
   * @param languageName
   * @return {string}
   */
  static mapLanguageToColor (languageName) {
    switch (languageName) {
      case 'C++':
        return 'pink'
      case 'HTML':
        return 'red'
      case 'JavaScript':
        return 'yellow'
      case 'Python':
        return 'blue'
      default:
        return 'black'
    }
  }

  render () {
    const {repositoryData, repositoryDataLoadingStatus, repositoryDataLoadingErrorStatus} = this.props

    const maxRepos = 6

    const listItems = repositoryData.slice(0, maxRepos).map((repo, index) => {
      return (
        <List.Item key={index}>
          <Icon
            name={repo.fork ? 'fork' : 'book'}
            size='large'
            title={repo.fork ? 'Fork of another Repository' : 'Source Repository'}
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
                <Label basic styleName='Label'>
                  <Icon name='star' />
                  {repo.stargazers_count}
                </Label>
                <Label basic styleName='Label'>
                  <Icon name='fork' />
                  {repo.forks_count}
                </Label>
                {repo.language &&
                  <Label basic color={RepositoryList.mapLanguageToColor(repo.language)} styleName='Label'>
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
      <div styleName='RepositoryList'>

        <Dimmer.Dimmable>
          <Dimmer inverted active={repositoryDataLoadingStatus || repositoryDataLoadingErrorStatus}>
            <Segment basic>
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
            </Segment>
          </Dimmer>
        </Dimmer.Dimmable>

        {!repositoryDataLoadingErrorStatus &&
        <List>
          <Loader indeterminate active={repositoryDataLoadingStatus}>Loading</Loader>
          {listItems}
        </List>
        }

      </div>
    )
  }
}

RepositoryList.propTypes = {
  repositoryData: PropTypes.array.isRequired,
  repositoryDataLoadingStatus: PropTypes.bool.isRequired,
  repositoryDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default RepositoryList
