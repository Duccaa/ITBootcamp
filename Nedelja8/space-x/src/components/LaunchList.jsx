import React from 'react'
import Launch from './Launch'

const LaunchList = ({launches}) => {
    return (
        <div className="launch-list">
        {launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    )
}
export default LaunchList 