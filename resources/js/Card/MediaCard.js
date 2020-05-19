import React from 'react'
import {Link} from 'react-router-dom'
import MainCardUI from './MainCardUI'

class MediaCard extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="container-fluid1 d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-5">
                        <Link to='/keepermenu/kpmanagement/editasocafe' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="파리바게트.png" title="파리바게트 동대구역점"
                                text="매장 정보를 변경하려면 클릭해주세요" />
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <Link to='/keepermenu/kpmanagement/edittwosome' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="썬더치킨.png"　title="썬더치킨 동대구역점"
                                text="매장 정보를 변경하려면 클릭해주세요" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MediaCard;