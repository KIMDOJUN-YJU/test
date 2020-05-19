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
                            <MainCardUI imgsrc="https://postfiles.pstatic.net/MjAyMDA1MTFfMjI4/MDAxNTg5MTY4ODM3NDkz.7F07mvKqdL11yN0loBUvwspTFXgwefktsIWz8zRHfQ4g.8xLwL-P0ZlBA3yU9tchaAjtYKUF4yEXXe3xQJ6JmTK4g.PNG.rlaehwns9698/%ED%8C%8C%EB%A6%AC%EB%B0%94%EA%B2%8C%ED%8A%B8.png?type=w773" title="파리바게트 동대구역점"
                                text="매장 정보를 변경하려면 클릭해주세요" />
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <Link to='/keepermenu/kpmanagement/edittwosome' style={{ textDecoration: 'none' }}>
                            <MainCardUI imgsrc="https://postfiles.pstatic.net/MjAyMDA1MTFfMTQg/MDAxNTg5MTY4OTg5Mjcy.rm7i_29hHkehlMr9Jak7pD_YkVj11JrmolhxsrYuseEg.qwtyGw9Twv50Ja_YJJiIY2-qVBbrGRFjv1_rbW6GnT0g.PNG.rlaehwns9698/%EC%8D%AC%EB%8D%94%EC%B9%98%ED%82%A8.png?type=w773 "　title="썬더치킨 동대구역점"
                                text="매장 정보를 변경하려면 클릭해주세요" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MediaCard;