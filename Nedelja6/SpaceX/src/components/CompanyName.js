export const companyName = (object) => {
    const header = document.createElement('header')
    header.id = 'main-header'
    const title = document.createElement('h1')
    title.textContent = object.name
    header.appendChild(title)
    return header
}