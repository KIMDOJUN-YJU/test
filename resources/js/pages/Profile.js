import React, { Component } from 'react'
import { getProfile } from '../register/UserFunctions'
import LeftSideBar from '../animations/LeftSideBar'

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phonenumber:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getUserDetails();
  }

  getUserDetails(){
    axios.get('/api/users')
    .then(response => {
      this.setState({
        name:response.data.name,
        email:response.data.email,
        phonenumber:response.data.phonenumber,
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

    editProfile(newProfile){
      axios.request({
        method:'put',
        url:'/api/users',
        data: newProfile
      }).then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
    }

    onSubmit(e){
      const newProfile = {
        name:this.refs.name,
        email:this.refs.email,
        phonenumber:this.refs.phonenumber,
      }
      this.editProfile(newProfile);
      e.preventDefault();
    }

    handleInputChange(e){
      const target = e.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    render() {
        return (
          <div>
            <LeftSideBar/>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-4 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <tbody>
                          <div className="form-group">
                              <label htmlFor="name">이름</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  ref="name"
                                  placeholder="Enter Your Name"
                                  value={this.state.name}
                                  onChange={this.handleInputChange}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">이메일</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  name="email"
                                  ref="email"
                                  placeholder="Enter Your Address"
                                  value={this.state.email}
                                  onChange={this.handleInputChange}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="phonenumber">전화번호</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  name="phonenumber"
                                  ref="phonenumber"
                                  placeholder="Enter Your PhoneNumber"
                                  value={this.state.phonenumber}
                                  onChange={this.handleInputChange}
                              />
                          </div>
                          <button
                              type="submit"
                              className="btn btn-lg btn-primary btn-block"
                          >
                              수정
                          </button>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        )
    }
}

export default Profile