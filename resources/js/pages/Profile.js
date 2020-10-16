import React, { Component } from 'react'
import { getProfile } from '../register/UserFunctions'
import LeftSideBar from '../animations/LeftSideBar'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import '../style/Main_image.css';

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
          <div className='Main_image3' style={{width: '100vw',height: '100vh'}}>
            <LeftSideBar/>
            <div className="container" style={{marginTop:'7%',width:'50%'}}>
                <div className="jumbotron mt-5">
                <div className="col-sm-4 mx-auto">
                        <h1 className="text-center">プロフィール</h1>
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <tbody>
                          <div className="form-group">
                              <label htmlFor="name">名前</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  ref="name"
                                  placeholder="名前を入力してください"
                                  value={this.state.name}
                                  onChange={this.handleInputChange}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">イーメール</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  name="email"
                                  ref="email"
                                  placeholder="メールアドレスを入力してください"
                                  value={this.state.email}
                                  onChange={this.handleInputChange}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="phonenumber">電話番号</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  name="phonenumber"
                                  ref="phonenumber"
                                  placeholder="電話番号を入力してください"
                                  value={this.state.phonenumber}
                                  onChange={this.handleInputChange}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="phonenumber">住所</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  name="phonenumber"
                                  ref="phonenumber"
                                  placeholder="住所を入力してください"
                                  value={this.state.phonenumber}
                                  onChange={this.handleInputChange}
                              />
                          </div>
                          {/* <button
                              type="submit"
                              className="btn btn-lg btn-primary btn-block"
                          >
                              修正
                          </button> */}
                          <MDBBtn
                                    type="submit"
                                    gradient="blue"
                                    rounded
                                    className="btn-block z-depth-1a btn-primary mt-6"
                                    >
                                    修正
                          </MDBBtn>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        )
    }
}

export default Profile