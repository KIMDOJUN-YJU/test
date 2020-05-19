import React, { Component,useState,Fragment } from 'react';
import { MDBBtn } from "mdbreact";
import axios from 'axios';
import LeftSideBar from '../animations/LeftSideBar'

class ReservationList extends Component {
  constructor(props){
    super(props);
    this.state={ 
      opened : true,
      reserves : [],
      keeper_keeping : 'keeper_keeping',
      End : 'End'
    };
  }

  componentWillMount(){
    let $this = this;
    axios.get('/api/rtshow/1').then(response => {
      $this.setState({
        reserves : response.data
        
      })
      console.log(this.state.reserves) 
    }).catch(error => {
      console.log(error)
    });
  }

_onGet=(index,id)=>{
  const {opened} = this.state;
  this.setState({
    opened:{
      ...opened,
      [index]:!opened[index]
    }
  })
  alert("짐을 수령했습니다.")
  axios.post(`/api/reserveupdate/${id}`,
  {
    reservation_status : this.state.keeper_keeping
  }).then(res => {
    console.log(res)
  })
}

  



_onSend=(index,id)=>{
  const {opened} = this.state;
  this.setState({
    opened:{
      ...opened,
      [index]:!opened[index]
    }
  })
  alert("짐을 보냈습니다.")
  axios.post(`/api/reserveupdate/${id}`,
  {
    reservation_status : this.state.End
  }).then(res => {
    console.log(res)
  })
}

  _onDelete=(reserve)=>{
    var $this = this;
    axios.delete(`/api/reservedelete/${reserve.reservation_id}`)
    .then(res => {
      console.log(res)
      const newState = $this.state.reserves.slice();
      newState.splice(newState.indexOf(reserve),1)
      $this.setState({
        reserves : newState
      })
    })
    alert("예약이 취소되었습니다.")
    .catch(err => {
      console.log(err)
    })
    console.log(id) 
  }

  render(){
    
    return (
      <div>
        <LeftSideBar />
        <div className="container text-center mb-5" >
          <h1  style={{marginLeft: '430px', marginTop: '20px'}}>Reservation</h1>
        </div>
        <table class="table table-sm" style={{marginLeft:'200px'}}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Phone_Number</th>
              <th scope="col">check_in</th>
              <th scope="col">check_out</th>
              <th scope="col">Bag</th>
              <th scope="col">Car</th>
              <th scope="col" >Button</th>
            </tr>
          </thead>
          {this.state.reserves.map((reserve,index)=>{
            return(
              <tbody key={index}>
                <tr>
                  <th scope="row">{        
                      <td>{reserve.reservation_id}</td>                                                                                                                                                                                                    }</th>
                      <td>{reserve.tourist_name}</td>
                      <td>{reserve.tourist_phonenumber}</td>
                      <td>{reserve.check_in}</td>
                      <td>{reserve.check_out}</td>
                      <td>{reserve.bag_cnt}</td>
                      <td>{reserve.car_cnt}</td>
                      {/* {
                      this.state.opened[index] ? */}
                      {/* <td><MDBBtn outline color="secondary" size="sm" >Confirm</MDBBtn></td> */}
                      {/* : */}
                      <td>
                          <MDBBtn outline color="primary" size="sm" onClick={this._onGet.bind(this,index,reserve.reservation_id)} >Get</MDBBtn>
                          <MDBBtn outline color="danger" size="sm" onClick={this._onSend.bind(this,index,reserve.reservation_id)} >Send</MDBBtn>
                          <MDBBtn outline color="secondary" size="sm" onClick={this._onDelete.bind(this,reserve,index)}>No</MDBBtn>
                      </td> 
                      {/* <td>
                          <button outline color="primary" size="sm" onClick={this._onGet.bind(this,index,reserve.reservation_id)} >Get</button>
                          <button outline color="danger" size="sm" onClick={this._onSend.bind(this,index,reserve.reservation_id)} >Send</button>
                          <button outline color="secondary" size="sm" onClick={this._onDelete.bind(this,reserve,index)}>No</button>
                      </td>   */}
                      {/* } */}
                </tr>
                {/* {opened[index] ? <Button  onClick={() => this.toggleButton(index)}>Hide city description</Button> : <Button variant="outlined" color="primary" size="small" onClick={() => this.toggleButton(index)}>Show city description</Button>} */}
                   
              </tbody> 
            )
          })}
        </table>
      </div>
    );
  }
};



export default ReservationList;