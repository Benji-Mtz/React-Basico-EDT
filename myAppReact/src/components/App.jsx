// import GridCourses from "./cursos/GridCourses"
import Calculadora from "./Calculadora"
import Header from "./header/Header"

function App() {

  return (
    <>
      <Header />

      <main>
        {/* <h1>Cursos de esta plataforma</h1> */}
        {/* <GridCourses /> */}

        <h1>Calculadora con clases</h1>
        <Calculadora name="Formulario de suma"/>
      </main>
    </>
  )
}

export default App
