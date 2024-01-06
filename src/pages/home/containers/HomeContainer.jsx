import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
import JobOfferListContainer from "../../job_offers/containers/JobOfferListContainer.jsx";

const HomeContainer = () => {
    return <>
        <Helmet>
            <title>El rincon del vago</title>
        </Helmet>
        <h1>Homepage</h1>
        <Link to="ofertas/crear">Ofrecer trabajo</Link>
        <JobOfferListContainer/>
    </>;
}

export default HomeContainer;