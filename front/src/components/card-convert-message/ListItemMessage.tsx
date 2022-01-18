import React from 'react'
interface IpropChar {
    character: string,
    color: number
}
const ListItemMessage = (props: IpropChar): JSX.Element => {
   
    if (props.color === 1) {
        return (<li style={{ listStyle: 'none',wordWrap: 'break-word' }} >
            <span className='badge p-1 m-0   salmon'>{props.character.toString()}</span>
        </li>)
    } else if (props.color === 2) {
        return (<li style={{ listStyle: 'none',wordWrap: 'break-word' }} >
            <span className='badge  p-1 m-1 java'>{props.character.toString()}</span>
        </li>)

    } else if (props.color === 3) {
        return (<li style={{ listStyle: 'none',wordWrap: 'break-word' }} >
            <span className='badge   p-1 m-1 doveGray' >{props.character.toString()}</span>
        </li>)
    } else if (props.color === 4) {
        return (<li style={{ listStyle: 'none',wordWrap: 'break-word' }} >
            <span className='badge   p-1 m-1 lightSeaGreen' >{props.character.toString()}</span>
        </li>)
    } else if (props.color === 5) {
        return (<li style={{ listStyle: 'none',wordWrap: 'break-word' }} >
            <span className='badge   p-1 m-1 redViolet' >{props.character.toString()}</span>
        </li>)
    } else if (props.color === 6) {
        return (<li style={{ listStyle: 'none',wordWrap: 'break-word' }} >
            <span className='badge   p-1 m-1 chelseaCucumber' >{props.character.toString()}</span>
        </li>)
        
    }

    return (<li style={{ listStyle: 'none',wordWrap: 'break-word' }} >
        <span className='badge  p-1 m-1 lochmara' >{props.character.toString()}</span>
    </li>)


}
export default ListItemMessage