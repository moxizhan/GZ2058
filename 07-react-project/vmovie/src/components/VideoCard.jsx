import React from 'react'

import { Link } from "react-router-dom";

export default function VideoCard({item}) {
    return (
        <li>
            <Link to={"/play/"+ item.postid}>
            <img src={item.image} alt=""/>
            </Link>
        </li>
    )
}
