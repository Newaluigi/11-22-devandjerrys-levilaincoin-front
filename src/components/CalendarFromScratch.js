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
      
        <button className='goButton' onClick={this.validation}>GO</button>
        {this.state.showDate ? (
            <div className='Date'>
                Du <p className='DateSelected'>{this.state.date[0].toLocaleDateString()}</p>
                <div className='globalIndicator'>
                    <div className="indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                Au <p className='DateSelected'>{this.state.date[1].toLocaleDateString()}</p>
    <div className='summary'>
    {`${this.props.price.substring(0, this.props.price.length - 1)*
         ( this.state.date[1].getTime() / 86400000 - this.state.date[0].getTime() / 86400000).toFixed(0)}$
         pour ${(this.state.date[1].getTime() / 86400000 - this.state.date[0].getTime() / 86400000).toFixed(0)} jours`}
        </div>
            </div>
        ): null}
  
      </div>
    )
  }
}
