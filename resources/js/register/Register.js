import React, { Component } from 'react'
import { register } from './UserFunctions'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '../style/Main_image.css';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phonenumber: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push(`/keeper_login`)
        })
    }

    render () {
            return (
                <div>
                    <div className='Main_image' style={{width: '100vw',height: '100vh'}}>
                        <Header/>
                        <MDBContainer >
                            <MDBRow>
                                <MDBCol md="6">
                                <MDBCard style={{ marginLeft:'150%',marginTop:'30%'}}>
                                    <MDBCardBody className="mx-4">
                                    <form noValidate onSubmit={this.onSubmit}>
                                    <p className="h4 text-center py-4">どこ荷も</p>
                                    <div className="grey-text">
                                    <MDBInput
                                        label="名前"
                                        icon="user"
                                        group
                                        type="text"
                                        name="name"
                                        validate
                                        error="wrong"
                                        success="right"

                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                    <MDBInput
                                        label="電話番号"
                                        icon="phone"
                                        group
                                        type="text"
                                        name="phonenumber"
                                        validate
                                        error="wrong"
                                        success="right"

                                        value={this.state.phonenumber}
                                        onChange={this.onChange}
                                    />
                                    <MDBInput
                                        label="住所"
                                        icon="home"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="イーメール"
                                        icon="envelope"
                                        group
                                        type="email"
                                        name="email"
                                        validate
                                        error="wrong"
                                        success="right"

                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    <MDBInput
                                        label="パスワード"
                                        icon="lock"
                                        group
                                        type="password"
                                        name="password"
                                        validate

                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    <MDBInput
                                        label="パスワード確認"
                                        icon="exclamation-triangle"
                                        group
                                        type="password"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                    <MDBBtn 
                                        type="submit"
                                        gradient="blue"
                                        rounded
                                        className="btn-block z-depth-1a">
                                        キッパー新規取得
                                    </MDBBtn>
                                    </div>
                                    </form>
                                    </MDBCardBody>
                                </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                </div>
                <Footer/>
            </div>

            // <div className="container"style={{marginTop:'80px'}}>
            //     <div className="row">
            //         <div className="col-md-6 mt-5 mx-auto">
            //             <form noValidate onSubmit={this.onSubmit}>
            //                 <h1 className="h3 mb-3 font-weight-normal">
            //                     新規登録
            //                 </h1>
            //                 <div className="form-group">
            //                     <label htmlFor="name">名前</label>
            //                     <input
            //                         type="text"
            //                         className="form-control"
            //                         name="name"
            //                         placeholder="名前を入力してください"
            //                         value={this.state.name}
            //                         onChange={this.onChange}
            //                     />
            //                 </div>
            //                 <div className="form-group">
            //                     <label htmlFor="email">イーメール</label>
            //                     <input
            //                         type="text"
            //                         className="form-control"
            //                         name="email"
            //                         placeholder="メールアドレスを入力してください"
            //                         value={this.state.email}
            //                         onChange={this.onChange}
            //                     />
            //                 </div>
            //                 <div className="form-group">
            //                     <label htmlFor="name">電話番号</label>
            //                     <input
            //                         type="text"
            //                         className="form-control"
            //                         name="phonenumber"
            //                         placeholder="電話番号を入力してください"
            //                         value={this.state.phonenumber}
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
            //                     新規登録
            //                 </button>
            //             </form>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Register