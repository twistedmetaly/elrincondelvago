import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {routes} from "./routes.js";

const mock = new MockAdapter(axios);

const methods = {
    GET: "onGet",
    POST: "onPost",
    PUT: "onPut",
    DELETE: "onDelete",
    ANY: "onAny",
};

export const status = {
    ok: 200,
    error: 400,
    notFound: 404,
    serverError: 500,
};

routes.forEach((route) => {
    const {method, path, reply} = route;
    const mockMethod = methods[method] || "onAny";
    mock[mockMethod](path).reply(reply);
});

export default axios;