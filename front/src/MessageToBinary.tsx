import React,{ useState } from 'react'
import FormToMessage from './components/card-convert-message/FormToMessage';
import HeaderComponent from './components/card-convert-message/HeaderComponent';
import ListMessageToBinaryAndReverse from './components/card-convert-message/ListMessageToBinaryAndReverse';
import { Fetching } from './helpers/fetching';
interface IStateBinary {
    message: string[];
    url: {};
    state?: boolean;
    pass?: string;
    _id?: string;
}

const MessageToBinary = () => {
    const [charParsed,setCharParsed] = useState<IStateBinary>({ message: [],url: '' });

    const handleConvert = async (text: string) => {
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
        const fetchCalls = new Fetching('POST','/',textToBinary)
        const result = await fetchCalls.fetchSync();
        const dataparsed: IStateBinary = await result.json();
        setCharParsed({ ...dataparsed,url: `https://message-to-binary.netlify.app/${dataparsed._id}` });
    }

    


    return (
        <main className='container-fluid text-center'>
            <div className='card bg-dark' style={{ maxWidth: '30rem' }}>
                <div className='card-body '>
                    <HeaderComponent />
                    <section className=' row' >
                        <div className='col-md-12 m-auto '>
                            <div className='w-100'>
                                <FormToMessage handleConvert={handleConvert}
                                />

                            </div>
                        </div>
                        <div className='col-md-12 mt-3 '>
                            <span>Vista Previa del mensaje:</span>
                            <ListMessageToBinaryAndReverse charParsed={charParsed.message} />
                        </div>
                        <div className='col-md-12 mt-3'>
                            {
                                charParsed.pass && <ul className='list-group list-group-flush'>
                                    
                                    <li className='list-group-item bg-dark text-light '>
                                        <span>Link to send to your friend</span>
                                        <a  href={`${charParsed.url}`} style={{}} target='_blank' className='link-info text-break d-block'>{charParsed?.url} </a>
                                    </li>
                                        
                                   
                                    <li className='list-group-item bg-dark text-light'> 
                                        <span>Password to decrypt the message</span>
                                        <p className='badge redViolet  m-2'>{charParsed.pass} </p>
                                    </li>
                                </ul>
                            }
                        </div>
                    </section>
                </div>
            </div>

        </main>
    )
}


export default MessageToBinary