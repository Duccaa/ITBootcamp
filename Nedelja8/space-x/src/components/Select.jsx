import React from 'react'

const Select = ({setSelect, years}) => {

    return (
        <div className='select-div'>
            <label>Odaberite godinu lansiranja:</label>
            <select id='select' onChange={(e) => setSelect(e.target.value)}>
                <option>Sva lansiranja</option>
                {years.map(year => <option value={year} key={year}>{year}</option>)}
        </select>
        </div>
    )
}

export default Select