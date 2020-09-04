import React from 'react'

const Forma = ({txt}) => {
    return (
        <form>
            <input type="text"/>
            <button>{txt}</button>
        </form>
    )
}
export default Forma