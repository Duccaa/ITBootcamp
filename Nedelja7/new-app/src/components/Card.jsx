import React from 'react'
import Emoji from './Emoji'
import Description from './Description'

const Card = ({image}) => {
    return (
        <div>
            <Emoji emoji={image.url}/>
            <Description desc={image.description}/>
        </div>
    )
}

export default Card