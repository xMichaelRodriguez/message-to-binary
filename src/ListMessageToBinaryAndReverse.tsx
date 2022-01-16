import React from 'react'
import ListItemMessage from './ListItemMessage'
interface ICharParsed {
    charParsed: string[]
}
const ListMessageToBinaryAndReverse = (props: ICharParsed) => {
    return (
        <ul className='binaries'>
            {props.charParsed.length > 0 && props.charParsed.map(item => (
                <ListItemMessage key={item} character={item} />
            ))}


        </ul>
    )
}
export default ListMessageToBinaryAndReverse