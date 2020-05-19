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
                            <MainCardUI imgsrc="https://img.sportsworldi.com/content/image/2019/07/19/20190719509562.jpg" title="예약관리"
                                text="ITZY의 YUNA는 나이가 2003년생이다.
                                세상이 어떻게 돌아가는 것인가 나보다
                                6살이나 어린데 아이돌을 하고 있다니
                                고1이다.. 난 대체 얼마나 늙은 것인가" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/keepermenu/keepermanagement' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://lowpostactive.com/wp-content/uploads/2019/01/Redes-sociales-y-turismo-cuando-gastando-menos-conviertes-m%C3%A1s-1-512x341.jpg"　title="매장관리"
                                text="매장관리를 들어가면 무엇을 할수있나?
                                그것은 바로 가게에 대한 정보를 변경
                                할 수가 있다는 것이다 그 뿐이 아니라
                                가게를 추가로 등록할 수 도 있다는 것" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/keepermenu/reservationlist' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://www.vdbuzz.com/wp-content/uploads/sites/69/2018/01/26073105_292961424560814_1234720591278243840_n-512x341.jpg"　title="예약내역"
                                text="예약내역을 들어가면 무엇을 할수있나?
                                그것은 바로 고객이 예약신청을 한 것
                                에 대한 정보를 보고 수락과 취소를
                                정할 수 있는 화면이지.. 수락과 취소"　/>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/keepermenu/paymentlist' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://www.fws.gov/uploadedImages/Region_4/NWRS/Zone_1/Clarks_River/Images/early%20eera%20512x341.jpg"　title="결제내역"
                                text="결제내역을 들어가면 무엇을 할수있나?
                                그것은 바로 이 때 까지 고객들이 결제
                                한 내역을 날짜순으로 확인 할 수 있지
                                있지..? ITZY는 정말 좋은 그룹인것 같아" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/keepermenu/profile' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwZh8LXQnpUsTUUP9Eczi0XTmmsuTBb1lLVMIyN6nEFeJkZQeP&usqp=CAU"　title="프로필"
                                text="프로필을 들어가면 무엇을 할수있나?
                                그것은 바로 가게가 아닌 나 자신의 
                                정보를 변경하는 것이 가능하지.. 정말
                                귀찮네 이정도만 하면 되지않을까???" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/keepermenu/others' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://www.juliasbali.com/wordpress/wp-content/uploads/2016/01/2_garden_bali_villa-512x341.jpg"　title="기타"
                                text="기타를 들어가면 무엇을 할수있을것같나?
                                그것은 바로 이용약관이나 뭐 그런 애들을
                                볼 수 있지 사실 아무짝에 쓸모없는 메뉴야
                                그런데 그냥 허전해서 만들었지.. 아직 구현중" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainCards;