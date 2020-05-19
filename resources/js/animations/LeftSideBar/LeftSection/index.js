/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import BurgerButton from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import './style.scss';
import { Link, Router, Route } from 'react-router-dom';

const LeftSection = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${isShowSidebar ? 'show' : 'hide'}`}>
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton
          onClick={() => setIsShowSidebar(false)}
        />  
      </div>
        <ul className="LeftSideBar__LeftSection__menuWrapper" onClick={() => setIsShowSidebar(false)}>
          <li>
            <Link to={'/keepermenu/main'}>메인</Link>
          </li>
          <li>
            <Link to={'/keepermenu/reservationmanagement'}>예약관리</Link>
          </li>
          <li>
            <Link to={'/keepermenu/keepermanagement'}>매장관리</Link>
          </li>
          <li>
            <Link to={'/keepermenu/reservationlist'}>예약내역</Link>
          </li>
          <li>
            <Link to={'/keepermenu/paymentlist'}>결제내역</Link>
          </li>
          <li>
            <Link to={'/keepermenu/profile'}>프로필</Link>
          </li>
          <li>
            <Link to={'/keepermenu/others'}>기타</Link>
          </li>
        </ul>
    </div>
  );
};

export default LeftSection;
