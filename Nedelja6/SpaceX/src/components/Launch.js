export const pastLaunches = (pastLaunch) => {

    const launchDiv = document.createElement('div')
    launchDiv.className = 'launch'

        const innerDiv0 = document.createElement('div')
        innerDiv0.className = 'inner-div-0'
            const image = document.createElement('img')
            image.src = pastLaunch.links.mission_patch
        innerDiv0.appendChild(image)

        const innerDiv1 = document.createElement('div')
        innerDiv1.className = 'inner-div-1'
        innerDiv1.innerHTML = `<span>${pastLaunch.rocket.rocket_name}</span>`

        const innerDiv2 = document.createElement('div')
        innerDiv2.className = 'inner-div-2'
        innerDiv2.innerHTML = `<span>${pastLaunch.launch_year}</span>`

    launchDiv.append(innerDiv0, innerDiv1, innerDiv2)        
    return launchDiv  
}
