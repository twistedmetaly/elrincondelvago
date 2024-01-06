import {Link} from "react-router-dom";

const CreateProfile = () => {
    return <>
        <h1>Create profile</h1>
        <input type="text" placeholder="Nombre y apellidos"/>
        <Link to='/'>Cancelar</Link>
        <button>Guardar perfil</button>
    </>
};

export default CreateProfile;