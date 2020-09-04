import React from 'react'
import Emoji from './Emoji'
import Description from './Description'

const Card = ({img, dsc}) => {
    return (
        <div>
            <Emoji emoji={img}/>
            <Description description={dsc}/>
        </div>
    )
}

export default Card