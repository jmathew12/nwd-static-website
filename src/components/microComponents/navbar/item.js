import * as React from 'react';
import {Link} from "react-router-dom";

export function Item(props) {
    const style = {color: "white", textDecoration: "none", fontSize: "1.3rem", fontWeight: "600"};

    // If external link, use <a> instead of <Link> (minimal change)
    if (props.external) {
        return <a href={props.to} target="_blank" rel="noopener noreferrer" style={style}>{props.name}</a>;
    }

    return <Link style={style} to={"/"+props.name}>{props.name}</Link>;
}
