const LabelText = (props) => {

    const estilosInput = {
        fontSize: "20px",
        color: props.color
    }

    const estilosParrafo = {
        color: "blue",
        fontSize: "20px"
    }


    return (
        <>
            <label htmlFor="">{props.texto}</label>
            {/* <input type="text" style={{ color: props.color }} /> */}
            <input type="text" style={estilosInput} />
            <input type="password" />
            <hr />

            {props.objetoUsuario ? <p style={estilosParrafo}>Hay usuario y se llama {props.objetoUsuario.nombre}</p> : <p style={estilosParrafo}>No hay usuario</p>}
        </>
    )
}

export default LabelText;
