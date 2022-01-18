import { url } from 'inspector'
import React,{ useEffect,useState } from 'react'
import { useHistory,useParams } from 'react-router-dom'
import { Fetching } from '../../helpers/fetching'
import ListMessageToBinaryAndReverse from '../card-convert-message/ListMessageToBinaryAndReverse'
import DecipherMessageComponent from './DecipherMessageComponent'
import FormValidPass from './FormValidPass'
type TUid = {
    uid: string
}

interface IStateBinary {
    message: string[];
    url: {};
    state: boolean;
    pass: string;
    _id?: string;
    statusCode?: number;
}
const BodyCardReverseMessage = () => {
    let { uid }: TUid = useParams();
    const history = useHistory();
    const [pass,setPass] = useState('');

    const [message,setMessage] = useState<IStateBinary>({ message: [],url: {},state: false,pass: '' })
    const [messageDecipher,setMessageDecipher] = useState('');
    const [errorMessage,setErrorMessage] = useState<string>('')
    const controller = new AbortController();

    useEffect(() => {
        async function getMessage() {
            if (!uid) {
                return history.push('/');
            }
            const objFech = new Fetching('GET',`/url/${uid}`,'');

            const resp: Response = await objFech.fetchSync();

            const dataparsed: IStateBinary = await resp.json();

            if (dataparsed.statusCode === 404) {
                setErrorMessage(resp.statusText.toString());
                setTimeout(() => {
                    return history.push('/');
                },500);
            } else {

                if (!dataparsed.state) {
                    setErrorMessage('This message has already been discovered')
                }

                setMessage({ ...dataparsed })
            }

        }
        getMessage()

        return () => {
            console.log('unmounted')
            controller.abort()
        }
    },[]);




    const handleRevertConvertion = () => {

        if (message.message.length === 0) return
        const data = message.message.map(item => item.split(' ').map(char => (
            Number(parseInt(char,2).toString(10))
        )))

        // return convertion of decimal to text

        const toASCII = data.map(char => (
            String.fromCharCode(...char)
        )).join(' ')
        setMessageDecipher(toASCII);

        updateStateToFalse();


    }
    const isValid = async () => {
       
        const objFech = new Fetching('GET',`/${pass}`,'');
        const data: Response = await objFech.fetchSync();
        console.log(pass);

       
        if (data.status === 404 ||data.status === 404) {
            setErrorMessage('Invalid Pass...');
            return false;
        } else {
            if (!message.state) {
                setErrorMessage('This message has already been discovered');
                setTimeout(() => {
                    history.push('/')
                }, 1000);
            } else {
                
                setErrorMessage('')
                handleRevertConvertion()
            }


        }

    }

    const updateStateToFalse = async () => {
        const objFech = new Fetching('PATCH',`/${uid}`,'');
        await objFech.fetchSync().catch(e => console.log(e));

    }


    const handlePassChange = (passInput:string) => {
        setPass(passInput);
    }




    return (
        <>
            <div className='mb-3'>
                <ListMessageToBinaryAndReverse charParsed={message.message} />
            </div>

            {messageDecipher.length > 1 && <DecipherMessageComponent messageDecipher={messageDecipher} />}

            <div className='mb-3'>
                <FormValidPass handlePassChange={handlePassChange}
                    pass={pass}
                    isValid={isValid} />
            </div>

            <div>
                {errorMessage && <h6 className='text-danger'>{errorMessage}</h6>}
            </div>
        </>
    )
}
export default BodyCardReverseMessage