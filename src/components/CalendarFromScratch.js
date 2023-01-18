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
        this.setState({
            showDate: true
        })
        console.log(this.state.date);
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
        {/* <p className='paragraphe'>Date choisie : {this.state.date.toLocaleDateString()}</p> */}
        <button className='ReactButton' onClick={this.validation}>Valider</button>
        {this.state.showDate ? (
            <div >
                <p className='DateSelected'>Du : {this.state.date[0].toLocaleDateString()}</p>
                <p className='DateSelected'>Au : {this.state.date[1].toLocaleDateString()}</p>
            </div>
        ): null}
      </div>
    )
  }
}
