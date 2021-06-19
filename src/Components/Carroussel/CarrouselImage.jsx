import React from 'react';

export default function CarrouselImage(props) {
    return <React.Fragment>
        <img src={props.src} alt={props.alt} />
    </React.Fragment>;
}