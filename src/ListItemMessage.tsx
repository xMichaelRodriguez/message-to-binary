import React from 'react'
interface IpropChar {
    character: string
}
const ListItemMessage = (props: IpropChar) => {
    return (
        <li style={{ listStyle: 'none', wordWrap:'break-word'}} >
            <span className='badge bg-primary m-2 '>{props.character.toString()}</span>
        </li>
    )
}
export default ListItemMessage