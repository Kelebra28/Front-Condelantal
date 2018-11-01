import React, { Component } from 'react';



class FormFacilities extends Component {


    constructor(){
        super()
        this.state = {
            size:"S",
            num_rooms:0,
            num_bathrooms:0,
            pet_friendly:false,
            smoke_friendly:false,
            tv:false,
            wifi:false,
            num_beds:0,
            kitchen:false,
            garage:0
        }
    }


    onChangeInput =  (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    getState = () =>  this.state



    render() {

        return(
            <div>
                <div className="form-group">
                    <label htmlFor="">Tamaño:</label>
                    <select name="size" className="form-control" 
                    value={this.state.size}  onChange={this.onChangeInput} >
                        <option value="S">Pequeña</option>
                        <option value="M">Mediana</option>
                        <option value="L">Grande</option>
                        <option value="XL">Extra Grande</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Num de Cuartos:</label>
                    <input type="number" name="num_rooms" className="form-control"
                        value={this.state.num_rooms} onChange={this.onChangeInput}
                    />
                </div>

                 <div className="form-group">
                    <label htmlFor="">Num de Baños:</label>
                    <input type="number" name="num_bathrooms" className="form-control"
                        value={this.state.num_bathrooms} onChange={this.onChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">Num de Camas:</label>
                    <input type="number" name="num_beds" className="form-control"
                        value={this.state.num_beds} onChange={this.onChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">Plazas de estacionamiento:</label>
                    <input type="number" name="garage" className="form-control"
                        value={this.state.garage}
                        onChange={this.onChangeInput}
                    />
                </div>

                <h4>Otros Servicios:</h4>

                <div className="form-group">
                    <label htmlFor="">¿Aceptas Mascotas?</label>
                    <input type="checkbox" name="pet_friendly" className="form-control"
                        checked={this.state.pet_friendly}
                        onChange={this.onChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">¿Aceptas Fumadores?</label>
                    <input type="checkbox" name="smoke_friendly" className="form-control"
                        checked={this.state.smoke_friendly}
                        onChange={this.onChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">¿Tienes TV?</label>
                    <input type="checkbox" name="tv" className="form-control"
                        checked={this.state.tv}
                        onChange={this.onChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">¿Tienes Wifi?</label>
                    <input type="checkbox" name="wifi" className="form-control"
                        checked={this.state.wifi}
                        onChange={this.onChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">¿Tienes Cocina?</label>
                    <input type="checkbox" name="kitchen" className="form-control"
                        checked={this.state.kitchen}
                        onChange={this.onChangeInput}
                    />
                </div>


            </div>

        )


    }

}

export default FormFacilities;