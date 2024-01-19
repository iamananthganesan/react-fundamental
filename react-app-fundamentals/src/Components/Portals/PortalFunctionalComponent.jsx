import React from "react";

const PortalFunctionalComponent = () =>{
    return ReactDOM.createPortal(
        <h1>From Portal functional component</h1>,
        document.getElementById('poral_id')
    )
}

export default PortalFunctionalComponent