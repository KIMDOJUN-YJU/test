import React from 'react'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { MDBBtn } from "mdbreact";
import '../../../node_modules/mdbreact/dist/css/mdb.css'
import CardMatome from '../Card/CardMatome'
import LeftSideBar from '../animations/LeftSideBar';
import CreateStore from '../Card/CreateStore';
import '../style/Main_image.css';

const useStyles = makeStyles((theme) => ({
  plus: {
    marginLeft:"49%",
    marginTop:"70px",
  },
}));

const KeeperManagement = () => {
    const classes = useStyles();

    return (
        <div className='Main_image3' style={{width: '100vw',height: '100vh'}}>
          <LeftSideBar />
          <CardMatome />
          <MDBBtn href="/createstore" gradient="aqua" className={classes.plus}>追加</MDBBtn>
          <Route path='/createstore' component={CreateStore}/>
        </div>
    );
};

export default KeeperManagement;