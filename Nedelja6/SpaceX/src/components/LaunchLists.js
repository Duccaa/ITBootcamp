import {pastLaunches} from "./Launch";

export const launchList = (arr)=> {
    const divLaunchList = document.createElement('div');
     divLaunchList.className = 'launch-list';
    arr.forEach(pastLaunch => {
        divLaunchList.appendChild(pastLaunches(pastLaunch));
    });
    return divLaunchList 
}

