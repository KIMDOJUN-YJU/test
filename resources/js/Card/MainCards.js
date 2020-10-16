import React from 'react'
import {Link} from 'react-router-dom'
import MainCardUI from './MainCardUI'

class MainCards extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Link to='/keepermenu/reservationmanagement' style={{ textDecoration: 'none'}}>
                            <MainCardUI imgsrc="https://postfiles.pstatic.net/MjAyMDA5MDhfMTU2/MDAxNTk5NTI3OTUzMTI4.-WLxUvDU-8K7-VUsMO53T7_aYOjBpkVdrTv4LpmVwpEg.s-mVnkEI4G6N44IWxcr8Esn-8RWRjYBtT7IHYZt0PhQg.JPEG.rlaehwns9698/%EC%98%88%EC%95%BD%EA%B4%80%EB%A6%AC.jpg?type=w773" title="予約管理"
                                text="
                                予約管理ではツアーリストが予約したリストをキャレンダーで確認することができる" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/keepermenu/keepermanagement' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://postfiles.pstatic.net/MjAyMDA5MDhfMTEy/MDAxNTk5NTI3OTUzMTQ1.vHOrM-Y8Md-ICAKPC6MFa9qoFWkCCpS0QZ-yiV74LTog.Pqz35lNLzERMA80Wo2Wgxr_33qHKvkmxRbZdYEVfwCsg.JPEG.rlaehwns9698/%EA%B0%80%EA%B2%8C%EA%B4%80%EB%A6%AC.jpg?type=w773"　title="保管所管理"
                                text="
                                店舗管理では店舗を追加し、店舗の情報を修正することができる" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/keepermenu/reservationlist' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://postfiles.pstatic.net/MjAyMDA5MDhfMiAg/MDAxNTk5NTI3OTUzMTA5.GVubUfYDy_5pdntEN2rV_Po-7NeK1XBN8Y0XkGmAGtAg.OINJSkBixd-Z74POkNilMn8Dmrj9_pwU5Q7i4HNhiRkg.JPEG.rlaehwns9698/%EC%98%88%EC%95%BD%EB%A6%AC%EC%8A%A4%ED%8A%B8.jpg?type=w773"　title="予約リスト"
                                text="
                                予約リストでは予約したツアーリストの情報を見ることができ、予約状況の管理ができる"/>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/keepermenu/paymentlist' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://postfiles.pstatic.net/MjAyMDA5MDhfMjk4/MDAxNTk5NTI3OTUzMDk5.o58M2XAYkMSeKvtrNByFZizHjkBYfhv3XW3smX4H6l8g.t-HfSFXEbU39xQZjXoYz5kqHd_oTEIp0QNxWTCTmcUcg.JPEG.rlaehwns9698/%EA%B2%B0%EC%A0%9C%EB%A6%AC%EC%8A%A4%ED%8A%B8.jpg?type=w773"　title="決済リスト"
                                text="
                                決済リストではこれまで決済したリストを時間帯別に確認することができる" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/keepermenu/profile' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://postfiles.pstatic.net/MjAyMDA5MDhfMjQ4/MDAxNTk5NTI3OTUzMDg3.lv9oRSD3zLKPnihL-2JNU1r1wVDhOWWkIdR5pcMXtHIg.LuarNPDvu9jwOici12CCQWNHfK84gXJba2x9xT55NnIg.JPEG.rlaehwns9698/%ED%94%84%EB%A1%9C%ED%95%84.jpg?type=w773"　title="プロフィール"
                                text="
                                プロフィールでは店舗の情報ではなくキッパーの情報を修正することができる" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/keepermenu/others' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://postfiles.pstatic.net/MjAyMDA5MDhfMTky/MDAxNTk5NTI3OTUzMDc5.Dd_A7EqevyrhJxBRkm8aXxCGcjLzqpw8_KG1W4RzANsg.3fTksWlJyUDLIN00glg35jOWWC469HmwyrRSMcUkUaMg.JPEG.rlaehwns9698/%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80.jpg?type=w773"　title="利用規約"
                                text="
                                利用規約ではスペースを提供するキッパーの利用規約を確認することができる" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainCards;