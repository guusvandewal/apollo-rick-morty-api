import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Link from './Link'
import styled from 'styled-components'

const FormHolder = styled.div`
  max-width: 400px;
  background-color: #ccc;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 40px;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 20px;
  label {
    display: block;
  }
  input {
    display: block;
    width: 100%;
    height: 24px;
    line-height: 24px;
    padding: 4px;
  }
  button {
    max-width: 10em;
  }
`

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!, $page: Int!) {
    characters(page: $page, filter: { name: $filter }) {
      info {
        count
        pages
        next
      }
      results {
        name
        image
        status
      }
    }
  }
`
const searchActions = (event, element) => {
  if (event.target.value !== null) {
    element.setState({ filter: event.target.value })
    element._executeSearch()
  } else {
    element.setState({ filter: '' })
    element._executeSearch()
  }
}

class Search extends Component {
  state = {
    links: [],
    count: '',
    page: 1,
    filter: '',
  }

  render() {
    return (
      <div>
        <FormHolder>
          Search for Rick or any character from the episodes and enjoy
          <input
            type="text"
            onChange={(e) => searchActions(e, this)}
            onBlur={(e) => searchActions(e, this)}
          />
        </FormHolder>
        {this.state.links.length > 0 && (
          <div className="count">
            <h2>{this.state.count} items found in total</h2>
          </div>
        )}
        {this.state.links.length === 0 && <h3>No Results</h3>}
        {this.state.links.length > 0 && (
          <div className="grid">
            {this.state.links.map((link, index) => (
              <Link
                key={index}
                image={link.image}
                index={index}
                name={link.name}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  _executeSearch = async () => {
    const { filter, page } = this.state
    const result = await this.props.client.query({
      query: FEED_SEARCH_QUERY,
      variables: { filter, page },
    })
    const links = result.data.characters.results
    const count = result.data.characters.info.count
    this.setState({ links, count })
  }
}

export default withApollo(Search)
