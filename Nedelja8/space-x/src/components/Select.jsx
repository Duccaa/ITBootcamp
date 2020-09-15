import React from 'react'

const Select = ({years, setSelect}) => {

    return (
        <div className='select-div'>
            <label>Odaberite godinu lansiranja:</label>
            <select id='select' onChange={(e) => setSelect(e.target.value)}>
                <option value="-1">Sva lansiranja</option>
                {years.map(year => <option value={year} key={year}>{year}</option>)}
            </select>
        </div>
    )
}

export default Select