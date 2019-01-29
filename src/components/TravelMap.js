import React from 'react';

const TravelMap = (props) => {
    return (
        <iframe src="https://www.google.com/maps/d/embed?mid=1PQW4zPHacHmTH_PrlV_RQsKUpT_Z-MgO" width={props.width} height={props.height}></iframe>
    )

}

export default TravelMap;