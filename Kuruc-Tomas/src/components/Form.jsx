import { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [socio, setSocio] = useState({
        nombre: '',
        apellido: ''
    })
    const [err, setError] = useState(false)
    const [show, setShow] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (socio.nombre.length < 3 || socio.nombre.trim().includes(' ') || socio.apellido.length < 6) {
            setError(true)
        }

        setShow(true)
        setError(false)
    };

    return (
        <div>
            <h2>Formulario de nuevos socios</h2>
            
                <form onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input type="text" onChange={(event) => setSocio({...socio, nombre: event.target.value})}/>
                    <label>Apellido:</label>
                    <input type="text" onChange={(event) => setSocio({...socio, apellido: event.target.value})}/>
                    <button>Registrar</button>
                </form>
            
            {show && <Card nombre={socio.nombre} apellido={socio.apellido} />}
            {err && <p>Por favor chequea que la información sea correcta</p>}
        </div>
    )
}

export default Form
