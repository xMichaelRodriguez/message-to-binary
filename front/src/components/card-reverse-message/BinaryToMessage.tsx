import React from 'react'
import BodyCardReverseMessage from './BodyCardReverseMessage'

 const BinaryToMessage = () => {
    return (
        <div className='container'>
            <div className='card bg-dark shadow-none'>
                <div className='card-body none'>
                    <h4 className='card-title'>Convert my binary message to text</h4>
                    <hr />
                    <BodyCardReverseMessage/>
                </div>
            </div>
        </div>
    )
}
export default BinaryToMessage