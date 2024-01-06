import {Link} from "react-router-dom";

const CreateJobOffer = () => {
    return <>
        <h1>Create job offer</h1>
        <label>Oferta de trabajo
            <input type="text" placeholder="Nombre de la oferta"/>
        </label>
        <Link to="/">Atras</Link>
        <button>Publicar oferta de trabajo</button>
    </>
};

export default CreateJobOffer;