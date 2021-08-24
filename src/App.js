//import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Customer_ui from './components/Customer_ui';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';

const styles = theme => ({
  root:{
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  }

})

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/50/50/1',
    'name' : '홍길동',
    'birthday' : '930817',
    'gender' : '남자',
    'job' : '직장인'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/50/50/2',
    'name' : '길동',
    'birthday' : '930817',
    'gender' : '남자',
    'job' : '직장인'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/50/50/any',
    'name' : '홍길',
    'birthday' : '93081',
    'gender' : '남',
    'job' : '직장인'
  }
]
class App extends Component{
  render(){
    const {classes} = this.props; //props 한번에 변수로 선언
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>직업</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {return(<Customer_ui key = {c.id} id = {c.id} image = {c.image} name={c.name} birthday={c.birthday} gender={c.gender} job = {c.job} />) })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
