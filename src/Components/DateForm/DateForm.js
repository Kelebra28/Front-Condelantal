import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {addDates} from '../../actions';
import {connect} from 'react-redux';
 

class DateForm  extends Component{


    constructor(props){
        super(props)
        this.state = {
            start_date:"",
            due_date:"",
            date:new Date()
        }
    }

    nextStep = () => {
        // Envia data al store y pasa al siguiente estado
        const {dispatch,history,match} = this.props
        dispatch(addDates(this.state))
        history.push(`/checkout/price/${match.params.id}`)


    }

    onChange =  (dates) => {
        console.log(dates)
        this.setState(
            {
                start_date:dates[0],
                due_date:dates[1]
            }
        )
    }

    render() {
        return(
            <div className="row justify-content-center mt-5">
                <div className="col-md-10 text-center">
                    <Calendar 
                        onChange={this.onChange}
                        value={this.state.date}
                        selectRange={true}
                        className="mx-auto"
                        />

                    
                    <button className="btn btn-info mt-3" onClick={this.nextStep}>Siguiente</button>

                </div>
            </div>
        )
    }


}

export default connect()(DateForm);