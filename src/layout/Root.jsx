import {Suspense} from "react";
import {Outlet} from "react-router-dom";

const Root = () => {
    return <Suspense fallback={<p>loading</p>}>
        <Outlet/>
    </Suspense>
};

export default Root;