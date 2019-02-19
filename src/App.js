import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style.scss';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

class App extends Component {
  state = {
    userType: 'teacher',
    events: [
      {
        id: 8,
        title: 'Meeting',
        start: new Date(2019, 1, 12, 14, 0, 0, 0),
        end: new Date(2019, 1, 12, 15, 0, 0, 0),
      },
      {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2019, 0, 22, 17, 0, 0, 0),
        end: new Date(2019, 0, 22, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
      },
    ]
  }

  handleUserTypeChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleEventSelectEvent = (event) => {
    console.log(event, 'event')
  }

  handleEventSelectSlot = (slot) => {
    console.log(slot, 'PARAMS')
  }

  render() {
    const { events, userType } = this.state
    return (
      <div>
        <select value={userType} onChange={this.handleUserTypeChange}>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
        <br></br>
        <br></br>
        <BigCalendar
          selectable
          localizer={localizer}
          events={events}
          defaultView={BigCalendar.Views.WEEK}
          defaultDate={new Date()}
          onSelectSlot={this.handleEventSelectSlot}
          onSelectEvent={this.handleEventSelectEvent}
        />
  </div>
    );
  }
}

export default App;
