import {Outlet} from "react-router-dom";

const BasicLayout = () => {
    return <>
        {/* nav */}
        <p>nav</p>
        {/* aside */}
        <Outlet/>
        {/* footer */}
    </>
};

export default BasicLayout;