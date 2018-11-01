import React, { Component } from 'react';

import FormAddress  from './FormAddress';
import FormFacilities from './FormFacilities';



class FormHouse extends Component {

    constructor(){
        super();
        this.state = {
            name:"",
            type:"",
            price:"",
            description:"",
            status:"A",
            photos:[]
        }

    }

    onChangeInput =  (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        console.log(this.refs.address.getState())
        console.log(this.refs.facilities.getState())
    }


    render(){

        return(
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Nombre de la publicación:</label>
                            <input type="text" name="name" className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Tipo de propiedad:</label>
                            <select name="type" className="form-control" 
                                value={this.state.type}
                                onChange={this.onChangeInput}
                            >
                                <option value="H">Casa</option>
                                <option value="A">Departamento</option>
                                <option value="R">Cuarto</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Precio:</label>
                            <input type="number" name="price" className="form-control"
                                value={this.state.price}
                                onChange={this.onChangeInput}
                            />
                        </div>

                         <div className="form-group">
                            <label htmlFor="">Descripcion:</label>
                            <textarea cols="10" rows="10" name="description" className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeInput}
                            ></textarea>
                        </div>

                        <FormAddress ref="address"/>
                        <FormFacilities ref="facilities"/>

                        <button type="submit" className="btn btn-success">Guardar</button>

                    </form>
                </div>
            </div>
        )


    }

}

export default FormHouse;

