import vite from '/vite.svg';
import {Link} from "react-router-dom";

const ProfileDetails = () => {
    return <>
        <h1>Profile details</h1>
        <h3>Yosvany Nasco Lopez</h3>
        <img src={vite} alt=""/>
        <p>Estudios de Preuniversitario</p>
        <p>35 años</p>
        <p>Provincia Habana. Marianao</p>
        <p>
            2 años de programando en java con Spring boot. 1 año como dependiente en restaurantes y cafeterias. 6 meses
            como recepcionista en el policlinico Nguyen Van Troi.
        </p>
        <p>Soy un muchacho que aprende rapido. Me encanta ayudar a los demas y siempre estoy atento a lo que haga
            falta</p>
        <p>5805 6353</p>
        <p>7272 7908</p>
        <p>ynasco@nauta.cu</p>
        <Link to="/">Atras</Link>
        <button>Guardar perfil</button>
    </>
};

export default ProfileDetails;