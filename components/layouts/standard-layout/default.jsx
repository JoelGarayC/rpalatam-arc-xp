import React from 'react'
import './standardLayout.css'

const StandardLayout = (props) => {
  const [circlePosition, setCirclePosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    setCirclePosition({ x: mouseX, y: mouseY })
  }

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <header>{props.children[0]}</header>
      <main>{props.children[1]}</main>
      <footer>{props.children[2]}</footer>
      <div
        className='mouse-circle'
        style={{ left: `${circlePosition.x}px`, top: `${circlePosition.y}px` }}
      ></div>
    </>
  )
}

StandardLayout.sections = ['header', 'main', 'footer']

export default StandardLayout
