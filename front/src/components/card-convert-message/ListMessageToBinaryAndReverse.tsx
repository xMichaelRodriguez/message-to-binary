import React from 'react'
import ListItemMessage from './ListItemMessage'
interface ICharParsed {
    charParsed: string[]
}
const ListMessageToBinaryAndReverse = (props: ICharParsed) => {
    
    return (
        <ul className='binaries'>
            {props.charParsed.length > 0 && props.charParsed.map((item,index) => (
                <ListItemMessage key={index} character={item} color={Math.round(Math.random() * (8 - 1)) + 1} />
            ))}


        </ul>
    )
}
export default ListMessageToBinaryAndReverse