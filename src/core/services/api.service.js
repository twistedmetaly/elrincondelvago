//import axios from "../../__mocks__/config.js";

import axios from "axios";

export const action = {
    get: "GET",
    post: "POST",
    put: "PUT",
    delete: "DELETE"
}

export const axiosInstance = axios.create({
    baseURL: 'https://script.google.com/macros/s/AKfycbw7tUnpl1n1lhmfxAJfbOY6PYX1vBNdwNlBCiEmDmyBbocZTzCbla46uGrGC8VpmZ3tnQ/exec'
});