import React from 'react'
import MainCards from '../Card/MainCards'
import LeftSideBar from '../animations/LeftSideBar'
import '../style/Main_image.css'

export default function Main() {

  return (
    <div className='Main_image3' style={{width: '100vw',height: '100vh'}}>
      <LeftSideBar />
      <MainCards />
    </div>
  );
}