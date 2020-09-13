import React from 'react'

const Select = ({years}) => {
   
    return (
        <select>
            <option>Sva lansiranja</option>
            {years.map(year => <option value={year} key={year}>{year}</option>)}
        </select>
    )
}

export default Select