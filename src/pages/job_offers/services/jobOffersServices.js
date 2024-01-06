import {action, axiosInstance} from "../../../core/services/api.service.js";

const OFFERS_URL = "ofertas";

export const getJobOffers = () => axiosInstance({
    action: {
        method: action.get,
        url: OFFERS_URL
    }
}).then(conf => conf.data);

export const getJobOffer = (id) => axiosInstance({
    action: {
        method: action.get,
        url: OFFERS_URL,
    },
    payload: {
        id
    }
}).then(console.log);