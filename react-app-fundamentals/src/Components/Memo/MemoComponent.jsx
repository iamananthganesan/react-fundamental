import React from "react";

const MemoComponent = () => {
    console.log('inside memo functional component')
    return(
        <div>
            <h2>Memo Component</h2>
        </div>
    )
}

export default React.memo(MemoComponent);