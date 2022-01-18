
const baseUrl=  'https://message-to-binary.herokuapp.com'

export class Fetching {
    method: string;
    endPoint: string
    data: any;

    constructor(method: string = 'GET',endPoint: string = '/',data: any = '') {
        this.method = method;
        this.endPoint = endPoint;
        this.data = data;
    }

     fetchSync():Promise<Response> {
        const url = `${baseUrl}${this.endPoint}`;
         if (this.method === 'GET') {
          
            return fetch(url)
        }        
        
        
        
        return fetch(url,{
            method: this.method,
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({message:this.data,state:true})
        }
        )
    }

}