import React from 'react'
import '../styles/App.css'
import LinkList from './LinkList'
import Search from './Search'

function App() {
  return (
    <div className="App">
      <h1>
        Rick & Morty API{' '}
        <span role="img" aria-labelledby="ufo">
          🛸
        </span>
      </h1>
      <Search />
      <LinkList />
    </div>
  )
}

export default App
