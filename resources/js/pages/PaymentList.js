import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PaymentTable from '../table/PaymentTable'
import LeftSideBar from '../animations/LeftSideBar';
import '../style/Main_image.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(200),
      height: theme.spacing(95),
    },
  },
}));

export default function PaymentList() {
  const classes = useStyles();
  return (
    <div className='Main_image3' style={{width: '100vw',height: '100vh'}}>
      <LeftSideBar />
      <div className={classes.root}>
        <Paper variant="outlined" square>
          <div className="container text-center mb-5" >
              <h1  style={{textAlign:'center'}}>決済リスト</h1>
          </div>
            <PaymentTable/>
        </Paper>
      </div>
    </div>
  );
}
