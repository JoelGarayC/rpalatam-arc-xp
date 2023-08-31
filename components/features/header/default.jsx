import React from 'react'
import Theme from '../theme/default'
import './header.css'

const Header = () => {
  const fechaActual = fechaActualLocal()

  return (
    <div className='header'>
      <div className='header__date'>
        <small>{fechaActual}</small>
      </div>
      <section className='header__title'>
        <h1>
          <a href='/pf/about-me/?_website=rpalatam'>Resplandor Urbano</a>
        </h1>
      </section>
      <nav className='header__nav'>
        <ul>
          <li>
            <a href={`/pf/about-me/?_website=rpalatam`}>About Me</a>
          </li>
          <li>
            <a href={`/pf/comunidad-rpa-jg/?_website=rpalatam`}>
              Comunidad RPA
            </a>
          </li>
          <li>
            <a href='/pf/detail-movie/halo/?_website=rpalatam'>
              Buscar Película
            </a>
          </li>

          <li>
            <Theme />
          </li>
        </ul>
      </nav>
    </div>
  )
}

Header.label = {
  en: 'Header',
  es: 'Header'
}

export default Header

function fechaActualLocal() {
  const fechaActual = new Date()

  const diasSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ]

  const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ]

  const diaSemana = diasSemana[fechaActual.getDay()]
  const dia = fechaActual.getDate()
  const mes = meses[fechaActual.getMonth()]
  const año = fechaActual.getFullYear()

  return diaSemana + ', ' + dia + ' de ' + mes + ' de ' + año
}
