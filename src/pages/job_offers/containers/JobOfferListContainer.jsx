import JobList from "../pages/JobList.jsx";
import useJobList from "../hooks/useJobList.js";

const JobOfferListContainer = () => {
    const jobs = useJobList();

    return <>
        <JobList jobs={jobs}/>
    </>
};

export default JobOfferListContainer;