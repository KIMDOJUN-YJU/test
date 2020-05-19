import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './Main'
import ReservationManagement from './ReservationManagement'
import KeeperManagement from './KeeperManagement'
import ReservationList from './ReservationList'
import PaymentList from './PaymentList'
import Profile from './Profile'
import Others from './Others'
import EditAsoCafe from '../Card/EditAsoCafe'
import EditTwoSome from '../Card/EditTwoSome'



class Matome2 extends React.Component {
    render(){
        return (
          <BrowserRouter>
            <Route path='/keepermenu/main' component={Main}/>
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

export default Matome2;