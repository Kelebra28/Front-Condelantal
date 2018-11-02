import React, { Component } from 'react';

import FormAddress  from './FormAddress';
import FormFacilities from './FormFacilities';
import Firebase from '../../Firebase';
import FileUploader from 'react-firebase-file-uploader';

import {createHouse} from '../../services'

class FormHouse extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:"",
            type:"H",
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

    handleUploadSuccess = (filename) =>  {
        Firebase
            .storage()
            .ref('houses')
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState(prevState => ({
                    photos:[
                        ...prevState.photos,
                        url
                    ]
                }))
            })
    }

    handleUploadError =  (error) => {
        console.log(error)

    }



    formSubmit = async(e) => {
        e.preventDefault();

        console.log(this.state)
        let data = {
            ...this.state,
            address:{...this.refs.address.getState()},
            facilities:{...this.refs.facilities.getState()}
        }

        let response =  await createHouse(data).catch(e => console.log(e))

        if(response){
            this.props.history.push('/')
        }

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
                        </div >

                        <div className="form-group">
                                <label className="btn btn-info">
                                    Agregar Imagenes
                                    <FileUploader
                                        hidden
                                        accept="image/*"
                                        randomizeFilename
                                        multiple
                                        storageRef={Firebase.storage()
                                            .ref('houses')
                                        }
                                        onUploadError={this.handleUploadError}
                                        onUploadSuccess={this.handleUploadSuccess}
                                    />
                                
                                </label>
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

