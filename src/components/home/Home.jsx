import React, { useState } from 'react'
import api from '../../services/api'

import CardList from '../../components/card-list'
import './style.scss'

function Home() {
  const minLength = 3
  const [searched, setSearched] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [loadedList, setLoadedList] = useState([])

  function handleSearchedChange(event) {
    const { value } = event.target
    setSearched(value.trimLeft())
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    const res = await api.get(`/search/anime?q=${searched}&limit=16`)

    setLoadedList(res.data.results)

    setIsLoading(false)
  }

  return (
    <section className="section home">
      <form onSubmit={handleSubmit}>
        <div className="filed has-addons">
          <div className="control">
            <input
              className="input is-medium"
              name="search"
              type="search"
              placeholder="Type anime name..."
              minLength={minLength}
              value={searched}
              onChange={handleSearchedChange}
            />
            <p className="help is-info">Minimum {minLength}characters</p>
          </div>
          <div className="control">
            <button
              type="submit"
              className={`button is-info is-medium is-outlined ${
                isLoading ? 'isLoading' : ''
              } `}
              disabled={searched.length < minLength}
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <section className="section">
        <CardList list={loadedList} />
      </section>
    </section>
  )
}

export default Home
