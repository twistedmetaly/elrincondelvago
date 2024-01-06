import PropTypes from "prop-types";
import JobOffer from "../components/JobOffer.jsx";

const JobList = ({jobs}) => {
    return <ul>
        {jobs.map(job => <JobOffer key={job.id} job={job}/>)}
    </ul>
};

JobList.propTypes = {
    jobs: PropTypes.array.isRequired,
}

export default JobList;