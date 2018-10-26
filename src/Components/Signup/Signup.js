import React, { Component } from 'react'



class Signup extends Component{



    render(){

        return(
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <form action="">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="name">Tu Nombre:</label>
                                <input type="text" name="name" className="form-control"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="lastname">Tus Apellidos:</label>
                                <input type="text" name="lastname" className="form-control"/>
                            </div>
                        </div> 
                        <div className="row justify-content-center">
                            <div className="col-md-10 form-group">
                                <label htmlFor="">Tu email:</label>
                                <input type="email" name="email" className="form-control"/>
                            </div>
                            <div className="col-md-10 form-group">
                                <label htmlFor="">Tu Password:</label>
                                <input type="password" name="password" className="form-control"/>
                            </div>
                            <div className="col-md-10 form-group">
                                <label htmlFor="">Confirma tu password:</label>
                                <input type="password" name="confirmpassword" className="form-control"/>
                            </div>
                        </div> 
                        <button type="submit" className="btn btn-success">Registrar</button>  
                    </form>
                </div>
            </div>
        ); 

    }
}

export default Signup;