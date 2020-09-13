import React from 'react'

const LaunchList = ({launches}) => {
    return (
        <>
        {launches.map(launch => <p key={launch.launch_date_unix}> <img src={launch.links.mission_patch} alt="rocket-img" style={{width: '50px'}}/> {launch.rocket.rocket_name} | {launch.launch_year}</p>)}
        </>
    )
}

export default LaunchList 