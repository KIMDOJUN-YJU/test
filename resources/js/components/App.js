import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter,Router, Route, HashRouter} from 'react-router-dom'
import Home from './Home'
import '../style/App.css';
import Maps from './Maps';
import Menu from './Menu'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import ReactNotifications from 'react-notifications-component'
import Matome from '../pages/Matome'
import Matome2 from '../pages/Matome2'
import Register from '../register/Register'
import Login from '../register/Login'
import CreateStore from '../Card/CreateStore'
import ReservationManagement from '../pages/ReservationManagement'
import KeeperManagement from '../pages/KeeperManagement'
import ReservationList from '../pages/ReservationList'
import PaymentList from '../pages/PaymentList'
import Profile from '../pages/Profile'
import Others from '../pages/Others'
import EditAsoCafe from '../Card/EditAsoCafe'
import EditTwoSome from '../Card/EditTwoSome'

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <ReactNotifications/>
                <Route exact path="/" component={Home}/>
                <Route path='/keepermenu/main' component={Matome2}/>
                <Route path='/maps' component={Maps}/>
                <Route path='/keeper_register' component={Register}/>
                <Route path='/keeper_login' component={Login}/>
                <Route exact path='/createstore' component={CreateStore}/>
                <Route path='/keepermenu/reservationmanagement' component={ReservationManagement}/>
                <Route path='/keepermenu/keepermanagement' component={KeeperManagement}/>
                <Route path='/keepermenu/reservationlist' component={ReservationList}/>
                <Route path='/keepermenu/paymentlist' component={PaymentList}/>
                <Route path='/keepermenu/profile' component={Profile}/>
                <Route path='/keepermenu/others' component={Others}/>
                <Route path='/keepermenu/kpmanagement/editasocafe' component={EditAsoCafe}/>
                <Route path='/keepermenu/kpmanagement/edittwosome' component={EditTwoSome}/>
            </BrowserRouter>
          );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

