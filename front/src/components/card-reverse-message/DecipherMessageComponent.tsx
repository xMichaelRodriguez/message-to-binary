import React from 'react'

type T = {
    messageDecipher:string
}
 const DecipherMessageComponent = (props:T) => {
    return (
        <div>
            <div className='mb-3'>
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p>{props.messageDecipher}</p>
                    </blockquote>
                   
                </figure>
            </div>
           
        </div>
    )
}
export default DecipherMessageComponent