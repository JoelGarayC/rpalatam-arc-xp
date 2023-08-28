import { useAppContext } from 'fusion:context'
// import PropTypes from 'prop-types'
import React from 'react'
import './movieDetail.css'

const MovieDetail = (props) => {
  // const {
  //   customFields: { nameMovie }
  // } = props
  const { globalContent } = useAppContext()

  // const data = useContent({
  //   source: 'movie-find',
  //   query: {
  //     movieTitle: globalContent
  //   }
  // })

  const data = {}
  console.log(globalContent)

  return (
    <div className="movie">
      <h1>{globalContent?.Title}</h1>
      <h3>Año: {globalContent?.Year}</h3>
      <p>Género: {globalContent?.Genre}</p>
      <picture>
        <img src={globalContent?.Poster} />
      </picture>
      <p>Pais: {globalContent?.Country}</p>
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
