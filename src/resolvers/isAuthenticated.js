import payload from './payload';

export default () => {
    let token =  localStorage.getItem('airbnbToken')
   
    return (token == null) ? false : payload(token).iat < new Date() ? true :false
}

