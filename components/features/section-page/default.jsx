import { useAppContext } from 'fusion:context'
import React from 'react'
import './sectionPage.css'

const SectionPage = (props) => {
  const { globalContent } = useAppContext()

  console.log(globalContent)

  if (globalContent?.content_elements?.length === 0) {
    return (
      <section className="section">
        <p>No se encontraron noticias en esta sección</p>
      </section>
    )
  }

  return (
    <section className="section">
      <h1>Comunidad Rpa</h1>

      <div className="section__articles">
        {globalContent?.content_elements?.map((item) => {
          return (
            <a
              key={item?._id}
              href={`/pf${item?.canonical_url}?_website=${item?.website}`}
            >
              <div>
                <h2>{item?.headlines?.basic}</h2>
                <p>{item?.subheadlines?.basic}</p>
              </div>
              <picture>
                {item?.content_elements?.map((element) => {
                  if (element?.type === 'image') {
                    return (
                      <img
                        key={element?._id}
                        src={element?.url}
                        alt={element?.subtitle}
                        className="image"
                      />
                    )
                  }
                  return null
                })}
              </picture>
            </a>
          )
        })}
      </div>
    </section>
  )
}

SectionPage.label = {
  en: 'Section Page',
  es: 'Sección de la página'
}

export default SectionPage
