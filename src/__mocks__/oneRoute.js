import {status} from './config.js';
import offers from "./data/job_offers.js";

export const URL = "elrincondelvago/macros/echo?user_content_key=bmSunxZdgweXCeDtnofe1T_Envnn3ffDgNmG_If0PzvTZWd2GQ3U1hTowjSHlugeJY2ljqaOTeN6K3mO_JZRPjNiWcj8XVnCm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHftpnjj7WfzuFNzVzaBOePAAt3jA6THLktiZn5gGowdNLszbTtopNQU8JJrATawBNuYwGoHwFY-B83ZLKitr4cGv2zQ53RhJ9z9Jw9Md8uu&lib=MK8A1aakOI-G71KUQ7r7X7n4t46cHPRtg/";

export default [
    {
        method: 'POST',
        path: URL,
        reply: (config) => {
            try {
                console.log({config})
                const {action: {method, url}, payload} = JSON.parse(config.data);
                if (method === "GET" && url === "ofertas") {
                    if (payload?.id) {
                        const resp = offers.find(T => T.id === payload.id);
                        console.log(resp);
                        return [status.ok, resp];
                    }
                    return [status.ok, offers];
                }
                return [status.ok];
            } catch (e) {
                console.log('serverError ', e);
                return [status.serverError];
            }
        },
    },

];
