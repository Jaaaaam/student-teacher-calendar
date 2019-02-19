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
        start: new Date(2019, 1, 17, 14, 0, 0, 0),
        end: new Date(2019, 1, 17, 15, 0, 0, 0),
        status: 'closed'
      },
      {
        id: 9,
        title: 'Class',
        start: new Date(2019, 1, 18, 17, 0, 0, 0),
        end: new Date(2019, 1, 18, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
        status: 'closed'
      },
      {
        id: 10,
        title: 'Class',
        start: new Date(2019, 1, 19, 17, 0, 0, 0),
        end: new Date(2019, 1, 19, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
        status: 'available'
      }
    ]
  }

  handleUserTypeChange = (e) => {
    console.log(e.target.value)
    this.setState({userType: e.target.value});
  }

  handleEventSelectEvent = (event) => {
    console.log(event, 'event')
    const { userType } = this.state
    console.log(userType, 'event')

    if (userType === 'student') {
      alert('class booked!')
    }
  }

  handleEventSelectSlot = ({start, end}) => {
    console.log(start, end, 'PARAMS')
    const { userType, events } = this.state
    console.log(userType, 'type')
    if (userType === 'teacher' || userType === 'admin') {
      const title = window.prompt('New Event name')
      this.setState({
        events: [
          ...events,
          {
            start,
            end,
            title
          }
        ]
      })
      return;
    }

    alert('not a class for this sched yet. contact administrator for a clss request')
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
          eventPropGetter={event => ({
            className: event.status 
          })}
        />
  </div>
    );
  }
}

export default App;
