// import { useAppContext } from 'fusion:context'
// import getProperties from 'fusion:properties'
import PropTypes from 'prop-types'
import './aboutMe.css'

const AboutMe = ({ customFields: { isEnabled } }) => {
  // const { arcSite } = useAppContext()
  // const { nombre, descripcion } = getProperties(arcSite)
  const firstName = 'Joel'
  const lastName = 'Garay'
  const birthYear = 2000

  return (
    <div className='about-me'>
      {isEnabled && (
        <div>
          <h1>Información Personal - Sobre mi</h1>
          <p>Nombre: {firstName}</p>
          <p>Apellido: {lastName}</p>
          <p>Año de Nacimiento: {birthYear}</p>
        </div>
      )}
    </div>
  )
}

AboutMe.propTypes = {
  customFields: PropTypes.shape({
    isEnabled: PropTypes.bool.tag({
      name: 'Esta activo',
      description: 'Esta activo componente',
      defaultValue: false
    })
  })
}

AboutMe.label = 'Sobre Mi'

export default AboutMe
