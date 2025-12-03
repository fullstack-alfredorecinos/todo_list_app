import LabelText from "./componentes/LabelText/LabelText.jsx";
import './styles/index.css';

function App() {

  const clickAqui = () => {
    alert("Click en el boton");
  }

  const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const usuarioObj = {
    nombre: "Juan",
    email: "Juan@gmail.com",
    edad: 25
  }

  return (
    <>
      <LabelText texto="Nombre" color="red" clickAqui={clickAqui} />
      <LabelText texto="Apellido" color="blue" usuarioObj={usuarioObj} />
      <LabelText texto="Edad" color="green" clickAqui={clickAqui} />

      <button onClick={clickAqui}>Enviar</button>
    </>
  )
}

export default App
