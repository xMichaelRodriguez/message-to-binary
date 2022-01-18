import React,{ ChangeEvent } from 'react'
interface IProp {
    handleConvert: Function;
    
}
const FormToMessage = (props: IProp) => {
    const [state,setState] = React.useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState(e.currentTarget.value)
    }
    const handlebSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(state.trim()==='')return;
        props.handleConvert(state.trim())

    }

    
    return (
        <form className='' onSubmit={handlebSumit}>
            <textarea rows={6} className='form-control bg-dark text-light mb-3 'placeholder='Write your message to binary' value={state}
                onChange={handleInputChange} ></textarea>
            <div className='d-grid gap-2'>
                <button className='btn btn-primary  m-3'
                    type='submit'>
                    Convert
                </button>
                
            </div>
        </form>
    )
}
export default FormToMessage