import {useEffect, useState} from "react";
import {getJobOffers} from "../services/jobOffersServices.js";

const useJobList = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        getJobOffers().then(setJobs)
    }, [])

    return jobs;
};

export default useJobList;