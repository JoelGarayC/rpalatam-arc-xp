// import { useAppContext } from 'fusion:context'
// import getProperties from 'fusion:properties'
import PropTypes from 'prop-types'
import './aboutMe.css'

const AboutMe = ({ customFields: { isEnabled } }) => {
  // const { arcSite } = useAppContext()
  // const { nombre, descripcion } = getProperties(arcSite)
  const firstName = 'Joel '
  const lastName = 'Garay'
  const birthYear = 2000

  const frasesAleatorias = [
    'El único modo de hacer un gran trabajo es amar lo que haces.',
    'No temas a los cambios, abrázalos.',
    'La creatividad es la inteligencia divirtiéndose.',
    'Cada error te acerca un paso más al éxito.',
    'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
    'Nunca sabes cuán fuerte eres hasta que ser fuerte es la única opción.',
    'No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.',
    'Los programadores son los magos del presente y los arquitectos del futuro.',
    'La paciencia es la clave para el éxito en la programación.',
    'Cada problema es una oportunidad para escribir un algoritmo mejor.',
    'Si lo puedes imaginar, lo puedes programar.',
    'El código es poesía en movimiento.',
    'Programar es como darle instrucciones a una máquina que sigue tus sueños.',
    'La programación es el superpoder que convierte tus ideas en realidad.',
    'El código no miente, los comentarios sí.',
    'No importa cuán lento vayas, siempre y cuando no te detengas.',
    'La resolución de problemas es la esencia de la programación.',
    'La mejor forma de predecir el futuro es programarlo.',
    'Programar es como construir un rompecabezas en cámara lenta, pero mucho más satisfactorio.',
    'Siempre hay una solución, solo tienes que encontrarla.',
    'La curiosidad y el deseo de aprender son las llaves del éxito en la programación.'
  ]

  const [fraseActual, setFraseActual] = React.useState('')

  const mostrarFraseAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * frasesAleatorias.length)
    setFraseActual(frasesAleatorias[indiceAleatorio])
  }

  React.useEffect(() => {
    mostrarFraseAleatoria()
    const intervalId = setInterval(mostrarFraseAleatoria, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className='about-me '>
      <h1>Información Personal</h1>

      {isEnabled && (
        <div className='about-me__info'>
          <div>
            <p>Nombres: {firstName}</p>
            <p>Apellidos: {lastName}</p>
            <p>Año de Nacimiento: {birthYear}</p>
            <p>Pais: Perú</p>
          </div>
          <article
            style={{
              backgroundImage:
                'url(https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/22111038/software-developer-4-500x333.jpg)'
            }}
          >
            <p>{fraseActual}</p>
          </article>
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
