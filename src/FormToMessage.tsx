import React,{ ChangeEvent } from 'react'
interface IProp {
    handleConvert: Function;
    handleRevertConvertion: Function;
}
const FormToMessage = (props: IProp) => {
    const [state,setState] = React.useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState(e.currentTarget.value)
    }
    const handlebSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.handleConvert(state)

    }

    const revertConvertionBinaryToText = () => {
        props.handleRevertConvertion()
    }
    return (
        <form className='' onSubmit={handlebSumit}>
            <textarea rows={6} className='form-control bg-dark text-light mb-3 'placeholder='Write your message to binary' value={state}
                onChange={handleInputChange} ></textarea>
            <div className='d-grap grap-2'>
                <button className='btn btn-primary  m-3'
                    type='submit'>
                    Convert
                </button>
                <button className='btn btn-success  m-3'
                    type='button'
                    onClick={revertConvertionBinaryToText}
                >Revert Convertion
                </button>
            </div>
        </form>
    )
}
export default FormToMessage