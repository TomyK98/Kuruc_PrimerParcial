const Card = ({ nombre, apellido }) => {
   
    return (
        <div>
            <hr/>
            <h3>Nuevo socio registrado con exito!</h3>
            <h4>Nombre: {nombre}</h4>
            <h4>Apellido: {apellido}</h4>
            <hr/>
        </div>
    );
};

export default Card