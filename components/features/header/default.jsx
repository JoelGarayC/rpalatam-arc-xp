import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <nav>
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
              Detalle de Película
            </a>
          </li>
          <li>
            <a href='/pf/about-me/subsection/?_website=rpalatam'>Subsección</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.label = {
  en: 'Header',
  es: 'Header'
}

export default Header
