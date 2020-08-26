import {pastLaunches} from "./Launch";

export const launchList = (arr)=> {
    const divLaunchList = document.createElement('div');
     divLaunchList.className = 'launch-list';
    arr.forEach(pastLaunch => {
        divLaunchList.appendChild(pastLaunches(pastLaunch));
    });
    return divLaunchList 
}

export const selectList = (arr) => {
    const selectContainer = document.createElement('div')
    selectContainer.className = 'select-div'
    const label = document.createElement('label') 
    label.textContent = 'Odaberite godinu lansiranja:'
    selectContainer.appendChild(label)
    const selectYear = document.createElement('select')
    selectYear.id = 'select'    
    const option1 = document.createElement('option')
    option1.textContent = '-'
    const option2 = document.createElement('option')
    option2.textContent = 'All'
    selectYear.append(option1, option2)
    let allYears = []
    arr.forEach(element => allYears.push(element.launch_year))
    let launchYears = [... new Set(allYears)]
    launchYears.forEach(year => {
        const option = document.createElement('option')
        option.textContent = year
        selectYear.appendChild(option)
    })
    selectContainer.appendChild(selectYear)   
    return selectContainer
}

export const getSelectedValue = () => {
    const select = document.getElementById('select')
    return select.value
}
