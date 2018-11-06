import React, { Component } from 'react';


class CardHouse extends Component {

    constructor(props){
        super(props)

        this.state = {
            name:props.name || "",
            id:props.id || "",
            image:props.image || ""
        }

    }

    

    render(){

        return(
            <div className="col-md-3" >
                <div className="card" style={{width:"12rem;"}}>
                    <img src={this.state.image} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.name}</h5>

                        <a href={`/house/${this.state.id}`} className="btn btn-info">Ver Casa</a>
                    </div>
                </div>

            </div>

        )


    }

}


export default CardHouse;