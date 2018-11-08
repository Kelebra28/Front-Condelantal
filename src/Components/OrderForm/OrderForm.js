import React, { Component } from 'react';
import {addProducts} from '../../actions';
import {connect} from 'react-redux';
 

class OrderForm  extends Component{


    constructor(props){
        super(props)
        this.state = {
            //se agrega producto
        }
    }

    nextStep = () => {
        // Envia data al store y pasa al siguiente estado
        const {dispatch,history,match} = this.props
        dispatch(addProducts(this.state))
        history.push(`/checkout/price/${match.params.id}`)


    }

    onChange =  (orders) => {
        console.log(orders)
        this.setState(
            {
                //productos?
            }
        )
    }

    render() {
        return(
            <div className="row justify-content-center mt-5">
                <div className="col-md-10 text-center">

                    *//tarjeta de producto?
                    
                    <button className="btn btn-info mt-3" onClick={this.nextStep}>Siguiente</button>

                </div>
            </div>
        )
    }


}

export default connect(OrderForm)();