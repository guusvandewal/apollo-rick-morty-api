import React, { Component } from 'react'
import Link from './Link'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const FEED_QUERY = gql`
  query {
    characters(page: 1) {
      info {
        count
        next
        prev
      }
      results {
        name
        image
        status
        episode {
          name
        }
        location {
          name
          dimension
        }
      }
    }
    character(id: 1) {
      id
    }
  }
`

class LinkList extends Component {
  render() {
    return (
      <div>
        <Query query={FEED_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching ... </div>
            if (error) return <div>Error</div>
            const linksToRender = data.characters.results
            const totalItems = data.characters.info.count
            //const next = data.characters.info.next

            return (
              <>
                <div className="count">
                  <h2>{totalItems} items found in total</h2>
                </div>
                <select name="" id="">
                  {linksToRender.map((link, index) => (
                    <option key={index} val={index}>
                      {link.name}
                    </option>
                  ))}
                </select>
                <div className="grid">
                  {linksToRender.map((link, index) => (
                    <Link
                      key={index}
                      image={link.image}
                      index={index}
                      name={link.name}
                      episode={link.episode[0].name}
                    />
                  ))}
                </div>
              </>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default LinkList
