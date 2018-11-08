import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPrice} from '../../actions';
import {calculatePrice} from '../../services'


class  PriceForm extends Component {


    constructor(props){
        super(props)
        this.state = {
            price:"",
        }
    }

    componentDidMount(){
        const {orders,match} =  this.props

        let data = {
           //producsts?
            restaurantId:match.params.id
        }
        calculatePrice(data).then(({data}) => {
            this.setState({price:data.price})
        }).catch((e) => {
            console.log(e)
        })


    }


    nextStep = () => {
        const {dispatch,history,match} = this.props
        dispatch(addPrice(this.state))
        //history.push(`/checkout/buy/${match.params.id}`)
    }

    render = () => {
        return(
            <div className="row justify-content-center mt-5">
                <div className="col-md-10 text-center">
                    <h3>Precio:${this.state.price || 0.0 } MXN</h3>
                    <button className="btn btn-info" onClick={this.nextStep} >Aceptar</button>
                </div>
            
            </div>
        )

    }



}

const mapStateToProps =  state => {
    return {orders:{...state}}
}

export default connect(mapStateToProps)(PriceForm);