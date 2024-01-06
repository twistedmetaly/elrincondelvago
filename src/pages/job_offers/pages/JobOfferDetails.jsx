import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const JobOfferDetails = ({job}) => {
    const navigate = useNavigate();

    return <>
        <h1>{job.title}</h1>
        <p>
            {job.description}
        </p>
        <p>{job.address}</p>
        <p>{job.schedule}</p>
        <p>{job.schedule_notes}</p>
        <p>{`${job.salary} ${job.currency}`}</p>
        <p>{job.salary_notes}</p>
        <p>{job.cellphone}</p>
        <p>{job.phone}</p>
        <p>{job.email}</p>
        <a onClick={() => navigate(-1)}>Atras</a>
        <button>Aplicar por este trabajo</button>
    </>
};

JobOfferDetails.propTypes = {
    job: PropTypes.object.isRequired
}

export default JobOfferDetails;