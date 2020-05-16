import Http from './http'

const getData = () =>{
    return Http.get('/users/shaojintian',null)
}

export default getData