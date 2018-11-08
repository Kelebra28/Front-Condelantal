import React, { Component } from 'react';
import CardRestaurant from '../CardRestaurant/CardRestaurants';
import {getRestaurants} from '../../services'



class Home  extends Component { 

    constructor(){
        super();
        this.state = {
            restaurants:[],
            isLoading:true
        }
    }

    componentDidMount(){
     getRestaurants().then((response) => {
        this.setState({
            restaurants:response.data,
            isLoading:false
        })
     }).catch((e) => {
        console.log(e)
     })
    }

    renderRestaurants = () => {
        return this.state.restaurants.map(
            (restaurant) => (
                <CardRestaurant id={restaurant.id} name={restaurant.name} 
                image={restaurant.photos[0]}/>
            )
        )

    }

   
    render(){
        return(
            <div>
                <h2 className="mb-4">Todos los restaurantes</h2>


                
                <div className="row">

                        {
                            (this.state.isLoading) ? (<h4>Cargando...</h4>): this.renderRestaurants()
                        }
                    

                </div>
            </div>
        )
    }
}

export default Home;