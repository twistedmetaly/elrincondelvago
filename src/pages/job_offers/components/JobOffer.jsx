import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {useCreateJobDescription} from "../utils/utils.js";

const JobOffer = ({job}) => {
    const jobDescription = useCreateJobDescription(job);
    return <li>
        <Link to={`ofertas/${job.id}`}>{jobDescription}</Link>
    </li>
};

JobOffer.propTypes = {
    job: PropTypes.object.isRequired
}

export default JobOffer;