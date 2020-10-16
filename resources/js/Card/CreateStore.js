import React, { Component } from 'react'
import { store } from '../register/UserFunctions'
import LeftSideBar from '../animations/LeftSideBar'
import MiniMap from './MiniMap'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import '../style/Main_image.css';
import { size } from 'lodash';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class CreateStore extends Component {
    constructor() {
        super()
        this.state = {
            keeper_id:'',
            keeper_store_name:'',
            keeper_store_address:'',
            keeper_store_tel:'',
            keeper_store_openinghours:'',
            keeper_store_bag_cnt:'',
            keeper_store_car_cnt:'',
            keeper_store_latitude:'',
            keeper_store_longtitude:'',
            keeper_store_imgurl:''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit (e) {
        e.preventDefault()
        const newStore = {
            keeper_id: 1,
            keeper_store_name: this.state.keeper_store_name,
            keeper_store_address: this.state.keeper_store_address,
            keeper_store_tel: this.state.keeper_store_tel,
            keeper_store_openinghours: this.state.keeper_store_openinghours,
            keeper_store_bag_cnt: this.state.keeper_store_bag_cnt,
            keeper_store_car_cnt: this.state.keeper_store_car_cnt,
            keeper_store_latitude: 35.866526916270466,
            keeper_store_longtitude: 128.58999914016712,
            keeper_store_imgurl: this.state.keeper_store_imgurl
        }

        store(newStore).then(res => {
            this.props.history.push(`/keepermenu/keepermanagement`)
        })
    }

    render () {
        
        return (
            <div>
                <div className='Main_image' style={{width: '100vw',height: '140vh'}}>
                    <Header/>
                    <div className="creat_store">
                            <div className="col-md-6 mt-5 mx-auto">
                                <MDBContainer>
                                    <MDBRow >
                                        <MDBCol md="6">
                                        <MDBCard style={{width:'500px',height:'1150px', marginLeft:'50%'}}>
                                            <MDBCardBody className="mx-4">
                                            <form noValidate onSubmit={this.onSubmit}>
                                            <p className="h4 text-center py-4">保管所登録</p>
                                            <MDBInput
                                                label="保管所の名前"
                                                group
                                                type="text"
                                                validate
                                                name="keeper_store_name"
                                                error="wrong"
                                                success="right"
                                                value={this.state.keeper_store_name}
                                                onChange={this.onChange}
                                            />
                                            <MDBInput
                                                label="保管所の住所"
                                                group
                                                type="text"
                                                validate
                                                name="keeper_store_address"
                                                error="wrong"
                                                success="right"
                                                value={this.state.keeper_store_address}
                                                onChange={this.onChange}
                                            />
                                            <MDBInput
                                                label="電話番号"
                                                group
                                                type="text"
                                                validate
                                                name="keeper_store_tel"
                                                error="wrong"
                                                success="right"
                                                value={this.state.keeper_store_tel}
                                                onChange={this.onChange}
                                            />
                                            <MDBInput
                                                label="オープン時間"
                                                group
                                                type="text"
                                                validate
                                                name="keeper_store_openinghours"
                                                error="wrong"
                                                success="right"
                                                value={this.state.keeper_store_openinghours}
                                                onChange={this.onChange}
                                            />
                                            <MDBInput
                                                label="カバン数"
                                                group
                                                type="text"
                                                validate
                                                name="keeper_store_bag_cnt"
                                                error="wrong"
                                                success="right"
                                                value={this.state.keeper_store_bag_cnt}
                                                onChange={this.onChange}
                                            />
                                            <MDBInput
                                                label="スーツケース数"
                                                group
                                                type="text"
                                                validate
                                                name="keeper_store_car_cnt"
                                                error="wrong"
                                                success="right"
                                                value={this.state.keeper_store_car_cnt}
                                                onChange={this.onChange}
                                            />
                                            <MDBInput
                                                label="イメージ"
                                                group
                                                type="text"
                                                validate
                                                name="keeper_store_imgurl"
                                                error="wrong"
                                                success="right"
                                                value={this.state.keeper_store_imgurl}
                                                onChange={this.onChange}
                                            />
                                            <MiniMap google={this.props.google}
                                                center={{lat: 35.87068276769894, lng: 128.5940117248534}}
                                                height='300px'
                                                zoom={15}
                                            />
                                            <div className='save_button' style={{marginTop:'100px'}}>
                                                <MDBBtn
                                                type="submit"
                                                gradient="blue"
                                                rounded
                                                className="btn btn-lg btn-primary btn-block"
                                                >
                                                登録
                                                </MDBBtn>
                                            </div>
                                            </form>
                                            </MDBCardBody>
                                        </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                                    {/* <div className="row col-md-12">
                                        <div className="jumbotron col-md-4" style={{marginLeft:'25%'}}>
                                            <h1 className="h3 mb-3 text-center font-weight-normal">
                                            店舗登録
                                            </h1>
                                            <div className="form-group">
                                                <label htmlFor="keeper_store_name">店舗の名前</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="keeper_store_name"
                                                    placeholder="店舗の名前を入力してください"
                                                    value={this.state.keeper_store_name}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="keeper_store_address">店舗の住所</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="keeper_store_address"
                                                    placeholder="店舗の住所を入力してください"
                                                    value={this.state.keeper_store_address}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="keeper_store_tel">電話番号</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="keeper_store_tel"
                                                    placeholder="電話番号を入力してください"
                                                    value={this.state.keeper_store_tel}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="keeper_store_openinghours">オープン時間</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="keeper_store_openinghours"
                                                    placeholder="00:00~00:00"
                                                    value={this.state.keeper_store_openinghours}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="keeper_store_bag_cnt">カバン数</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="keeper_store_bag_cnt"
                                                    placeholder="0"
                                                    value={this.state.keeper_store_bag_cnt}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="keeper_store_car_cnt">スーツケース数</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="keeper_store_car_cnt"
                                                    placeholder="0"
                                                    value={this.state.keeper_store_car_cnt}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="keeper_store_imgurl">イメージ</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="keeper_store_imgurl"
                                                    placeholder="イメージのURLを入力してください"
                                                    value={this.state.keeper_store_imgurl}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <MiniMap google={this.props.google}
                                        center={{lat: 35.87068276769894, lng: 128.5940117248534}}
                                        height='300px'
                                                zoom={15}
                                                />
                                            <div className='save_button' style={{marginTop:'100px'}}>
                                                <MDBBtn
                                                type="submit"
                                                gradient="blue"
                                                rounded
                                                className="btn btn-lg btn-primary btn-block"
                                                >
                                                登録
                                                </MDBBtn>
                                            </div>
                                            {/* <button
                                                type="submit"
                                                className="btn btn-lg btn-primary btn-block">
                                                登録
                                            </button> */}
                                    

                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default CreateStore