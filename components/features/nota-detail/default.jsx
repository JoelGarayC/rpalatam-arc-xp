import { useAppContext } from 'fusion:context'
import React from 'react'
import './notaDetail.css'

const NotaDetail = (props) => {
  const { globalContent } = useAppContext()

  console.log(globalContent)

  const isoDate = globalContent?.display_date
  const date = isoDate?.substr(0, 10)

  return (
    <div className='nota'>
      <h1>{globalContent?.headlines?.basic}</h1>
      <h2>{globalContent?.subheadlines?.basic}</h2>
      <h3>{date}</h3>
      <section>
        {globalContent?.content_elements?.map((nota) => {
          return (
            <div key={nota?._id} className='item'>
              {nota?.type === 'text' && (
                <p dangerouslySetInnerHTML={{ __html: nota?.content }} />
              )}

              {nota?.type === 'image' && (
                <picture>
                  <img
                    src={nota?.url}
                    alt={nota?.subtitle}
                    width={`${nota?.width}px`}
                  />
                </picture>
              )}
            </div>
          )
        })}
      </section>
    </div>
  )
}

NotaDetail.label = {
  en: 'Details Nota',
  es: 'Detalle de Noticias'
}

export default NotaDetail
