import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getJobOffer} from "../services/jobOffersServices.js";

const useJobOfferDetails = () => {
    const {pathname} = useLocation();
    const urlPieces = pathname.split('/');
    const id = urlPieces[urlPieces.length - 1]

    const [job, setJob] = useState(null);

    useEffect(() => {
        getJobOffer(id).then(resp => setJob(resp));
    }, [id])

    return job;
};

export default useJobOfferDetails;