import React, { Component } from 'react';
import {getHouse} from '../../services'


class DetailHouse extends  Component{


    constructor(props){
        super(props)
        this.state = {
            house:{},
            id:props.match.params.id,
            isLoading:true,
            sizes: {
                "S":"Chico",
                "M":"Mediano",
                "L":"Grande",
                "XL":"Extra Grande"
            },
            types:{
                "A":"Departamento",
                "H":"Casa",
                "R":"Cuarto"
            }
        }


    }


    componentDidMount(){

        getHouse(this.state.id).then(({data}) => {
            this.setState({house:data,isLoading:false})
        }).catch((e) => {
            console.log(e)
        })

    }

    renderHouse = () => {
        const {house,sizes,types} =  this.state
        return(
            <div className="row">
                <div className="col-md-8 pt-5">
                    <h5 className="mt-3">{house.name}</h5>
                    <span>Tipo:{types[house.type]}</span>
                    <p>{house.description}</p>

                    <h6>Precio: {house.price}</h6>
                    
                    <h6>Facilidades:</h6>

                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>Tamaño: {sizes[house.facilities.size]}</li>
                                <li>Numero de Cuartos: {house.facilities.num_rooms}</li>
                                <li>Numero de Baños: {house.facilities.num_bathrooms}</li>
                                <li>Numero de Camas: {house.facilities.num_beds}</li>
                            </ul>
                        
                        </div>
                        <div className="col-md-6">
                            <ul>
                                {(house.facilities.tv) ? <li>Tiene Tv</li> : <div></div>}
                                {(house.facilities.wifi) ? <li>Tiene Wifi</li>:<div></div>}
                                {(house.facilities.pet_friendly) ? <li>Acepta Mascotas</li>:<div></div>}
                                {(house.facilities.smoke_friendly) ?  <li>Acepta Fumadores</li>:<div></div>}
                                {(house.facilities.garage !== 0) ? <li>Tiene {house.facilities.garage} de estacionamiento</li>:<div></div> }
                                {(house.facilities.kitchen) ?  <li>Tiene cocina</li>:<div></div>}
                            </ul>
                        
                        </div>
                    </div>

                    <h6>Imagenes:</h6>

                        
                        {
                            house.photos.map((photo) => (
                                    <img className="d-block w-100" src={photo} alt=""/>
                            ))
                        }
                        
                  

                </div>
                <div className="col-md-4 mt-5">
                     <h6>Pais:{house.address.country}</h6>
                     <h6>Ciudad:{house.address.city}</h6>
                        
                     <a className="btn btn-info mt-5" href="">Reservar Casa</a>    

                        

                </div>

            </div>

        )

    }


    render(){
        const {isLoading} =  this.state
        return (isLoading) ? <h5>Cargando...</h5>:this.renderHouse()

    }




}

export default DetailHouse;
