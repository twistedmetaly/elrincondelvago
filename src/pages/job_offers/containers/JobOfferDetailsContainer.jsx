import JobOfferDetails from "../pages/JobOfferDetails.jsx";
import useJobOfferDetails from "../hooks/useJobOfferDetails.js";

const JobOfferDetailsContainer = () => {

    const job = useJobOfferDetails();

    return job ? <JobOfferDetails job={job}/> : <p>Cargando</p>
};

export default JobOfferDetailsContainer;