import {action, axiosInstance} from "../../../core/services/api.service.js";
import {reduceJob} from "../utils/utils.js";

const OFFERS_URL = "ofertas";

export const getJobOffers = () => axiosInstance({
    action: {
        method: action.get,
        url: OFFERS_URL
    }
}).then(({data}) => data.data).then(reduceJob);

export const getJobOffer = (id) => axiosInstance({
    action: {
        method: action.get,
        url: OFFERS_URL,
    },
    payload: {
        id
    }
}).then(console.log);