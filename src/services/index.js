import axios  from 'axios';

const API_URL = "https://b-b24-airbnb1.herokuapp.com/api/v1";

const createUser = (data) =>  axios.post(`${API_URL}/users/signup`,data)

const loginUser =  (data)  =>  axios.post(`${API_URL}/users/login`,data)


const getHouses =  () => axios.get(`${API_URL}/houses`)

const getHouse =  (id) => axios.get(`${API_URL}/houses/${id}`)

const calculatePrice = (data) => axios.post(`${API_URL}/bookings/calculate`,data)



const createHouse =  (data) => axios.post(`${API_URL}/houses`,data,
{headers:{"Authorization":`JWT ${localStorage.getItem('airbnbToken')}`}})


export  {
    createUser,
    loginUser,
    createHouse,
    getHouses,
    getHouse,
    calculatePrice

}