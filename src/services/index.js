import axios  from 'axios';

const API_URL = ""; //url de heroku

const createUser = (data) =>  axios.post(`${API_URL}/users/signup`,data)

const loginUser =  (data)  =>  axios.post(`${API_URL}/users/login`,data)


const getRestaurants =  () => axios.get(`${API_URL}/restaurants`)

const getRestaurant =  (id) => axios.get(`${API_URL}/restaurants/${id}`)

const calculatePrice = (data) => axios.post(`${API_URL}/ordes/calculate`,data)



const createRestaurant =  (data) => axios.post(`${API_URL}/restaurants`,data,
{headers:{"Authorization":`JWT ${localStorage.getItem('airbnbToken')}`}})


export  {
    createUser,
    loginUser,
    createRestaurant,
    getRestaurants,
    getRestaurant,
    calculatePrice

}