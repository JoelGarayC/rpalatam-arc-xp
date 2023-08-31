import { useContent } from 'fusion:content'
import { useAppContext } from 'fusion:context'
// import PropTypes from 'prop-types'
import React from 'react'
import './movieDetail.css'

const MovieDetail = (props) => {
  // const {
  //   customFields: { nameMovie }
  // } = props
  const { globalContent } = useAppContext()
  const [search, setSearch] = React.useState('')
  const [input, setInput] = React.useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(input)

    const newURL = `http://localhost/pf/detail-movie/${input}/?_website=rpalatam`
    window.history.pushState(null, '', newURL)
  }

  const data = useContent({
    source: 'movie-find',
    query: {
      movieTitle: search || globalContent?.Title
    }
  })

  return (
    <div className='movie'>
      <form className='movie__search' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Escribe el nombre de la película'
          value={input}
          onChange={handleChange}
        />
      </form>
      <h1>{data?.Title}</h1>
      <h3>Año: {data?.Year}</h3>
      <p>Género: {data?.Genre}</p>
      <picture>
        <img src={data?.Poster} />
      </picture>
      <p>Pais: {data?.Country}</p>
    </div>
  )
}

// MovieDetail.propTypes = {
//   customFields: PropTypes.shape({
//     nameMovie: PropTypes.string.tag({
//       name: 'Nombre de la pelicula'
//     })
//   })
// }

MovieDetail.label = {
  en: 'Movie Detail',
  es: 'Detalle de pelicula'
}

export default MovieDetail
