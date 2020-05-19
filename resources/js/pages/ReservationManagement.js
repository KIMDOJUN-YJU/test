import React,{ Component } from 'react';
import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import { Jumbotron } from 'react-bootstrap';
// import FullCalendar from 'fullcalendar-reactwrapper';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import calendarPlugins from '@fullcalendar/google-calendar'
import timeGridPlugin from "@fullcalendar/timegrid";
import jQuery from 'jquery';
import axios from 'axios';
import Tooltip from "tooltip.js";
import moment from 'moment';
import './App.css';
import LeftSideBar from '../animations/LeftSideBar'

// const MyCalendar = ({match}) => {

class ReservationManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        chores : [],
        events : [],
        eventes : []
    };
}

componentWillMount() {
  axios.get('/api/rtshow/1')
  .then(response => {
    this.setState({ 
      chores: response.data 
    })
    this.state.chores.map(chore => {
      this.state.events.push({
        title: chore.tourist_name,
        start: moment(chore.check_in).format("YYYY-MM-DD HH:mm"),
        end: moment(chore.check_out).format("YYYY-MM-DD HH:mm"),
        color: "green",
        textColor: "white"
      })
    })
    this.setState({
      eventes : this.state.events
    })
    console.log(this.state.eventes)
  }).catch(error => {
    console.log(error)
  });
}

eventRender= (info) =>{
  var tooltip = new Tooltip(info.el, {
    title: info.event.extendedProps.title,
    placement: "top",
    trigger: "click",
    container: "body"
  });
}

  calendarRef = React.createRef()
  render(){
    return(
      <div>
        <LeftSideBar />
        <div className="sidebar " style={{ height: '20vh',backgroundColor: '#CED8F6', borderTop: '1px solid #e7e7e7',textAlign:'center'}}>
          <h1 style={{marginLeft: '730px',marginTop: '3.5%'}}>Dokonimo Reservation</h1>
        </div>
        <div className="calendar" style={{marginTop: '3%'}}>
        <FullCalendar 
            defaultView="dayGridMonth"
            dateClick={this.handleDateClick}
            header={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,listWeek"
            }}
            schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
            ref={this.calendarRef}
            plugins={[dayGridPlugin,interactionPlugin,resourceTimelinePlugin,calendarPlugins,timeGridPlugin]}
            editable={true}
            eventDrop={this.handleEventDrop}
            eventClick={this.handleEventClick}
            events={this.state.eventes}
            eventLimit={5}
            eventRender={this.eventRender}
            schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
            nowIndicator='true'
            height='parent'
            // events={this.formatEvents()}
            // events={[
            //   {title:this.props.title,date:this.props.start}
            // ]}
            // // // // // // // events={[
            // // // // // // //   { title: '13시 Bag 3개', date: '2020-05-10' },
            // // // // // // //   { title: '15시 캐리어 2개', date: '2020-05-15' }
            // // // // // // // ]}
          />
          {/* <Jumbotron style={{ background: '#ffffff' }}>
                <FullCalendars {...options} />
        </Jumbotron> */}
         </div>
      </div>
    );
  }
  handleEventClick(arg){ // bind with an arrow function
    alert(arg.dateStr)
  }

  someMethod(){
    let calendarApi = this.calendarRef.current.getApi()
    calendarApi.next()
  }
}
export default ReservationManagement;