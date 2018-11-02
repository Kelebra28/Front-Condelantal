import React, { Component } from 'react';
import CardHouse from '../CardHouse/CardHouse';
import {getHouses} from '../../services'



class Home  extends Component { 

    constructor(){
        super();
        this.state = {
            houses:[],
            isLoading:true
        }
    }

    componentDidMount(){
     getHouses().then((response) => {
        this.setState({
            houses:response.data,
            isLoading:false
        })
     }).catch((e) => {
        console.log(e)
     })
    }

    renderHouses = () => {
        return this.state.houses.map(
            (house) => (
                <CardHouse id={house.id} name={house.name} 
                image={house.photos[0]}/>
            )
        )

    }

   
    render(){
        return(
            <div>
                <h2 className="mb-4">Todas las casas</h2>


                
                <div className="row">

                        {
                            (this.state.isLoading) ? (<h4>Cargando...</h4>): this.renderHouses()
                        }
                    

                </div>
            </div>
        )
    }
}

export default Home;