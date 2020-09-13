import React from 'react'

const Select = ({years, handleSelect}) => {
   
    return (
        <select onChange={handleSelect}>
            <option>Sva lansiranja</option>
            {years.map(year => <option value={year} key={year}>{year}</option>)}
        </select>
    )
}

export default Select