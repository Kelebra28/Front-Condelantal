import React, { Component } from 'react';
import {getRestaurant} from '../../services'


class DetailRestaurant extends  Component{


    constructor(props){
        super(props)
        this.state = {
            restaurant:{},
            id:props.match.params.id,
            isLoading:true,
            types:{
                "A":"Comida Rapida",
                "H":"Comida Mexicana",
                "R":"Comida Vegana"
            }
        }


    }


    componentDidMount(){

        getRestaurant(this.state.id).then(({data}) => {
            this.setState({restaurant:data,isLoading:false})
        }).catch((e) => {
            console.log(e)
        })

    }

    renderRestaurant = () => {
        const {restaurant,types} =  this.state
        return(
            <div className="row">
                <div className="col-md-8 pt-5">
                    <h5 className="mt-3">{restaurant.name}</h5>
                    <span>Tipo:{types[restauranttype]}</span>
                    <p>{restaurant.description}</p>

                    <h6>Precio: {restaurant.price}</h6>
                

                    <h6>Imagenes:</h6>

                        
                        {
                            restaurant.photos.map((photo) => (
                                    <img className="d-block w-100" src={photo} alt=""/>
                            ))
                        }
                        
                  

                </div>
                <div className="col-md-4 mt-5">
                        
                     <a className="btn btn-info mt-5" href={`/checkout/date/${this.state.id}`}>Pedir comida</a>    

                        

                </div>

            </div>

        )

    }


    render(){
        const {isLoading} =  this.state
        return (isLoading) ? <h5>Cargando...</h5>:this.renderHouse()

    }




}

export default DetailRestaurant;
