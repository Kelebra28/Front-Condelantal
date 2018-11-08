import payload from './payload';

export default () => {
    let token =  localStorage.getItem('condelantalToken')
   
    return (token == null) ? false : payload(token).iat < new Order() ? true :false
}

