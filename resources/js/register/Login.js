import React, { Component } from 'react'
import { login } from './UserFunctions'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import '../style/Main_image.css';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/`)
            }
        })
    }

    render() {
        return (
            <div>
                <div className='Main_image' style={{width: '100vw',height: '100vh'}}>
                    <Header/>
                    <MDBContainer>
                        <MDBRow >
                            <MDBCol md="6">
                            <MDBCard style={{height:'400px',marginLeft:'150%',marginTop:'45%'}}>
                                <MDBCardBody className="mx-4">
                                <form noValidate onSubmit={this.onSubmit}>
                                <p className="h4 text-center py-4">どこ荷も</p>
                                <MDBInput
                                    label="イーメール"
                                    group
                                    type="email"
                                    validate
                                    name="email"
                                    error="wrong"
                                    success="right"

                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                <MDBInput
                                    label="パスワード"
                                    group
                                    type="password"
                                    validate
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    containerClass="mb-0"
                                />
                                <div className="text-center mb-3" style={{marginTop:'30px'}}>
                                    <MDBBtn
                                    type="submit"
                                    gradient="blue"
                                    rounded
                                    className="btn-block z-depth-1a"
                                    >
                                    ログイン
                                    </MDBBtn>
                                </div>
                                </form>
                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Not a member?
                                    <a href="#!" className="blue-text ml-1">
                                    新規登録
                                    </a>
                                </p>
                                </MDBModalFooter>
                            </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
               <Footer/>
            </div>
           
                // <div className="container">
                //     <div className="row">
                //         <div className="col-md-6 mt-5 mx-auto">
                //             <form noValidate onSubmit={this.onSubmit}>
                //                 <h1 className="h3 mb-3 font-weight-normal">
                //                     ログイン
                //                 </h1>
                //                 <div className="form-group">
                //                     <label htmlFor="email">イーメール</label>
                //                     <input
                //                         type="email"
                //                         className="form-control"
                //                         name="email"
                //                         placeholder="メールアドレスを入力してください"
                //                         value={this.state.email}
                //                         onChange={this.onChange}
                //                     />
                //                 </div>
                //                 <div className="form-group">
                //                     <label htmlFor="password">パスワード</label>
                //                     <input
                //                         type="password"
                //                         className="form-control"
                //                         name="password"
                //                         placeholder="パスワードを入力してください"
                //                         value={this.state.password}
                //                         onChange={this.onChange}
                //                     />
                //                 </div>
                //                 <button
                //                     type="submit"
                //                     className="btn btn-lg btn-primary btn-block"
                //                 >
                //                     ログイン
                //                 </button>
                //             </form>
                //         </div>
                //     </div>
                // </div>
           
        )
    }
}

export default Login