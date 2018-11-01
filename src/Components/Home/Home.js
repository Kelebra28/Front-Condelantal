import React, { Component } from 'react'



class Home  extends Component { 

    constructor(){
        super();
        this.state = {
            houses:[]
        }
    }


    render(){
        return(
            <div className="row">
                <h2>Todas las casas</h2>

            </div>
        )
    }
}

export default Home;