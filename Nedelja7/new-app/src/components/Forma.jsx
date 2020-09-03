import React from 'react'

const Forma = ({string}) => {
    return (
        <form>
            <input type="text"/>
            <button>{string}</button>
        </form>
    )
}
export default Forma