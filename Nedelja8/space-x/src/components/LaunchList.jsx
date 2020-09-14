import React from 'react'
import Launch from './Launch'

const LaunchList = ({launches}) => {
    return (
        <div className="launch-list">
        {launches.map(launch => <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    )
}
export default LaunchList 