import React,{ useState } from 'react'
import FormToMessage from './FormToMessage';
import HeaderComponent from './HeaderComponent';
import ListMessageToBinaryAndReverse from './ListMessageToBinaryAndReverse';

const MessageToBinary = () => {
    const [charParsed,setCharParsed] = useState<string[]>([]);
    const [chardecoded,setChardecoded] = useState<string>('');

    const handleConvert = (text: string) => {
        if (text.length < 3) return;
        const arrText = text.split(' ');
        const textToBinary = arrText.map(item =>
        (
            item
                .split("")
                .map((char) => char.charCodeAt(0).toString(2))
                .join(" ")
        )
        )
        setCharParsed(textToBinary)
    }

    const handleRevertConvertion = () => {
        if (Object.entries(charParsed).length === 0) return
        const data = charParsed.map(item => item.split(' ').map(char => (
            Number(parseInt(char,2).toString(10))
        )))

        // return convertion of decimal to text

        const toASCII = data.map(char => (
            String.fromCharCode(...char)
        )).join(' ')
        setChardecoded(toASCII)
    }


    return (
        <main className='container-fluid text-center'>
            <div className='card bg-dark' style={{maxWidth:'56rem'}}>
                <div className='card-body '>
                    <HeaderComponent />
                    <section className='container row'>
                        <div className='col-md-6 m-auto'>
                            <FormToMessage handleConvert={handleConvert}
                                handleRevertConvertion={handleRevertConvertion} />
                        </div>
                        <div className='col-md-6 mt-3'>
                            <ListMessageToBinaryAndReverse charParsed={charParsed} />
                        </div>
                        <div className='col-md-12 mt-3'>
                            <h3 className=' bg-dark text-danger m-2'>{chardecoded}</h3>
                        </div>
                    </section>
                </div>
            </div>

        </main>
    )
}


export default MessageToBinary