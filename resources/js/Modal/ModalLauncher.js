import React, { Component } from "react";
import ImageModal from "./ImageModal";
import { MDBBtn } from "mdbreact";
import axios from 'axios';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

class ModalLauncher extends Component {
  constructor(props){
    super(props);
    this.state={
      showModal: false, 
      photos : [],
    };
  }

  componentDidMount(){
    let $this = this;
    axios.get('/api/rphotos/35').then(response => {
      $this.setState({
        photos : response.data
        
      })
      console.log(this.state.photos) 
    }).catch(error => {
      console.log(error)
    });
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {

    return (
      <div>
        {/* <button
          type="button"
          className={classes.modalButton}
          onClick={() => this.handleToggleModal()}
        >
          {buttonLabel}
        </button> */}
        <MDBBtn outline color="danger" size="lg" onClick={() => this.handleToggleModal()} >写真</MDBBtn>

          {this.state.showModal && (
            <ImageModal onCloseRequest={() => this.handleToggleModal()}>
                <div style={{display: 'flex',flexDirection:'row'}}>
                  <img style={{marginLeft: '30%', marginTop:'10%', width:'30%', height:'50%'}} src= 'https://firebasestorage.googleapis.com/v0/b/maptest3-b3603.appspot.com/o/images%2FKakaoTalk_20200617_233223040_03.jpg?alt=media&token=11aa6503-2bff-4b1f-b538-3cb581334d68' />
                  <img style={{marginLeft: '10%', marginTop:'10%', width:'30%', height:'50%'}} src= 'https://firebasestorage.googleapis.com/v0/b/maptest3-b3603.appspot.com/o/images%2FKakaoTalk_20200617_233223040_02.jpg?alt=media&token=35c5b2eb-2c50-4d8c-95f1-612a97d07094' />
                </div>
            </ImageModal>
          )}
      </div>
  );
}
}

export default ModalLauncher