import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default class CalendarFromScratch extends Component {

    state = {
        date : new Date(),
        showDate : false
    }

    onChange = date => [
        this.setState({
            date
        })
    ]

    validation = () => {
        if (this.state.date[0] !== undefined && this.state.date[1] !== undefined) {
        this.setState({
            showDate: true
        })}
        console.log(this.state.date);
        console.log(this.setState);

    }

    reset = () =>{
        this.setState({
            showDate:false
        })
    }
    
  render() {
    return (
      <div className='Calendar'>
        <div onClick={this.reset}>
        <Calendar onChange={this.onChange}
        selectRange={true} 
        value={this.state.date}
        />
        </div>
        <button className='ReactButton' onClick={this.validation}>Valider</button>
        {this.state.showDate ? (
            <div className='DateSelected'>
                <h3>Dates sélectionnées :</h3>
                <p>Du : {this.state.date[0].toLocaleDateString()}‎ 
                Au : {this.state.date[1].toLocaleDateString()}</p>
            </div>
        ):null}
      </div>
    )
  }
}
