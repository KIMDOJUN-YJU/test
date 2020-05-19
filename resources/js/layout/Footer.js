import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="stylish-color"  className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">DOKONIMO</h5>
            <p style={{color:'white'}}>
            We will be a company that constantly develops for the comfort and comfort of your travels.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">회사 정보</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">회사 홈페이지</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">회사 개요</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">채용 정보</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">기타</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">이용 규약</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">프라이버시 규약</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">문의</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;