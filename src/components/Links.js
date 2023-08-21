import React from "react";

function Links(props) {
    return (
        <div>
            <h3>Links</h3>
            <a href="{props.links[0]}">https://github.com/liza</a> 
            <a href="{props.linlks[1]}">https://www.linkedin.com/in/liza/</a>
        </div>
    )
}

export default Links