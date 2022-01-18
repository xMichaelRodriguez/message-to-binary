import React,{ ChangeEvent,useState } from 'react'
interface IProps {
    handlePassChange: Function;
    isValid: Function;
    pass: string
}
const FormValidPass = (props: IProps) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        props.handlePassChange(e.currentTarget.value)
    }

    const handleClick = () => {
        props.isValid();
    }


    return (
        <>
            <input
                className='form-control mb-2'
                placeholder='write password to decipher'
                type='text'
                value={props.pass}
                onChange={handleChange}
            />
            <button type='button' className='btn btn-primary' onClick={handleClick}>Decipher Message
            </button>

        </>
    )
}
export default FormValidPass