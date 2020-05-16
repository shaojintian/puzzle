import "whatwg-fetch"

class Http{
    static async request(method,url,data){
        const param = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if(method==='GET'){
            
        }else{

        }
    }

    static formatQuery(data){

    }

    static isSuccess(res){
        if(res.statusCode>=200&&res.statusCode<300){
            return res
        }else{
            this.requestException(res)
        }
    }

    static requestException(res){
        const error = new Error(res.statusText)
        error.response = res
        throw error
    }
    static get(url,data){
        
    }

    static post(url,data){

    }

    static delete(url,data){

    }

    static patch(url,data){

    }
    
}

export default Http