
import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css'

import SunImg from '../assets/calendar/sun.png';
import MonImg from '../assets/calendar/mon.png';
import TueImg from '../assets/calendar/tue.png';
import WedImg from '../assets/calendar/wed.png';
import ThuImg from '../assets/calendar/thu.png';
import FriImg from '../assets/calendar/fri.png';
import SatImg from '../assets/calendar/sat.png';

console.log('SunImg →', SunImg);


export default class Calendar extends Component {
  constructor() {
    super();

    this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.weekdayImages = {
      Sun: SunImg,
      Mon: MonImg,
      Tue: TueImg,
      Wed: WedImg,
      Thu: ThuImg,
      Fri: FriImg,
      Sat: SatImg,
    };
    this.months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    this.state = {
      currentDay: new Date()
    }
  }

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  }

  render() {
    return (
      <div className="calendar">
        <div className="calendar-header">
          <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              this.weekdays.map((weekday) => (
                <div key={weekday} className="weekday">
                <img
                  src={this.weekdayImages[weekday].src}
                  alt={weekday}
                  className="weekday-icon w-16 h-16 object-contain"

                />
              </div>
              ))
            }
          </div>
          <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay} />
        </div>
      </div>
    )
  }
}
