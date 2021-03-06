import { useFormulario } from "../hooks/useFormulario";
import Swal from 'sweetalert2';

const Formulario = ({setNombrePersonaje}) => {

    const [inputs, handleChange, reset] = useFormulario({
        nombre: ''
    });

    const {nombre} = inputs;


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(nombre)

        if(!nombre.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Ingrese algo por favor!'
              })
        }
        setNombrePersonaje(nombre.trim().toLowerCase());
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Ingrese personaje"
                className="form-control mb-2"
                value={nombre}
                onChange={handleChange} 
                name="nombre"
            />
            <button 
                className="btn btn-dark"
                type="submit"
            >Buscar</button>        
        </form>
    )
}

export default Formulario
