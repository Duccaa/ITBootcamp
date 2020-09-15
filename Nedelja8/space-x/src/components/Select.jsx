import React from 'react'
import { getPastLunches, getLunchesByYear } from '../services'

const Select = ({years, setLaunches}) => {

    const handleSelect = (e) => {
        e.target.value === "-1" ?
        getPastLunches()
            .then(res => {
                setLaunches(res.data)
        })
        :
        getLunchesByYear(e.target.value)
            .then(res => {
                setLaunches(res.data)
            })    
    }
    return (
        <div className='select-div'>
            <label>Odaberite godinu lansiranja:</label>
            <select id='select' onChange={handleSelect}>   
                <option value="-1">Sva lansiranja</option>
                {years.map(year => <option value={year} key={year}>{year}</option>)}
            </select>
        </div>
    )
}

export default Select