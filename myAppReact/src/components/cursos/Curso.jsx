const Curso = (props) => {

  let {image, title, subtitle } = props;

  return (
    <div>
        <img src={image} alt={image} />
        <h2>{ title }</h2>
        <p>{ subtitle }</p>
    </div>
  )
}

export default Curso


/* 

https://edteam-media.s3.amazonaws.com/courses/big/9521c07e-3eb1-4b9a-b1d1-a310d843ece2.png
Curso: React desde cero

Crea interfaces de usuario reutilizables y basadas en componentes con la librería para el desarrollo frontend más usada en el mundo.

¿Qué aprenderás?

    Crear componentes reutilizables.
    Crear y manipular rutas en tus aplicaciones.
    Consumir APIs
    Hooks
*/