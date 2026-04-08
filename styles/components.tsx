import React from "react";

export const Flex = ({className, children}) => (
    <div className={className} style={{"display": "flex"}}>
        {children}
    </div>
)