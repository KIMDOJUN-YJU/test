import React, { Component } from 'react'
import { store } from '../register/UserFunctions'
import LeftSideBar from '../animations/LeftSideBar'
import MiniMap from './MiniMap'

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
            keeper_store_latitude: 35.89625645130803,
            keeper_store_longtitude: 128.62188524093625,
            keeper_store_imgurl: this.state.keeper_store_imgurl
        }

        store(newStore).then(res => {
            this.props.history.push(`/keepermenu/keepermanagement`)
        })
    }

    render () {
        
        return (
            <div>
                <LeftSideBar/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal">
                                    매장 등록
                                </h1>
                                <div className="form-group">
                                    <label htmlFor="keeper_store_name">가게 이름</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="keeper_store_name"
                                        placeholder="Enter Keeper Name"
                                        value={this.state.keeper_store_name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="keeper_store_address">가게 주소</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="keeper_store_address"
                                        placeholder="Enter Keeper Address"
                                        value={this.state.keeper_store_address}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="keeper_store_tel">전화번호</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="keeper_store_tel"
                                        placeholder="Enter Keeper PhoneNumber"
                                        value={this.state.keeper_store_tel}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="keeper_store_openinghours">오픈시간</label>
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
                                    <label htmlFor="keeper_store_bag_cnt">가방개수</label>
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
                                    <label htmlFor="keeper_store_car_cnt">캐리어개수</label>
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
                                    <label htmlFor="keeper_store_imgurl">이미지</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="keeper_store_imgurl"
                                        placeholder="Enter Keeper ImgURL"
                                        value={this.state.keeper_store_imgurl}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                <MiniMap google={this.props.google}
					                center={{lat: 35.89625645130803, lng: 128.62188524093625}}
					                height='300px'
                                    zoom={15}
                                    />
                                </div>
                                <br/>
                                <br/>
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-primary btn-block"
                                >
                                    등록
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateStore