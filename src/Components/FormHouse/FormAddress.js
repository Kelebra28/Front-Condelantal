import React, { Component } from 'react';



class FormAddress extends Component {

    constructor(){
        super();

        this.state = {
            address_1:"",
            address_2:"",
            zip_code:"",
            country:"",
            city:"",
            references:""
        }

    }
    
    onChangeInput =  (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }


    getState = () =>  this.state


    render(){


        return(
            <div>
                <div className="form-group">
                    <label htmlFor="">Dirección 1:</label>
                    <input type="text" name="address_1" className="form-control"
                        value={this.state.address_1}
                        onChange={this.onChangeInput}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="">Direccion 2:</label>
                    <input type="text" name="address_2" className="form-control"
                        value={this.state.address_2}
                        onChange={this.onChangeInput}
                    />
                
                </div>

                <div className="form-group">
                    <label htmlFor="">Codigo Postal:</label>
                    <input type="text" name="zip_code" className="form-control"
                        value={this.state.zip_code}
                        onChange={this.onChangeInput}
                    />
                </div>

                 <div className="form-group">
                    <label htmlFor="">País:</label>
                    <input type="text" name="country" className="form-control"
                        value={this.state.country}
                        onChange={this.onChangeInput}
                    />
                </div>

                 <div className="form-group">
                    <label htmlFor="">Ciudad/Estado:</label>
                    <input type="text" name="city" className="form-control"
                        value={this.state.city}
                        onChange={this.onChangeInput}
                    />
                </div>

                 <div className="form-group">
                    <label htmlFor="">Referencias:</label>
                    <textarea name="references" className="form-control" cols="30" rows="10"
                        value={this.state.references}
                        onChange={this.onChangeInput}
                    ></textarea>
                </div>




            </div>

        )



    }



}


export default  FormAddress