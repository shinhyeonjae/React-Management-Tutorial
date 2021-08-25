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
import CircularProgress  from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root:{
    width : '100%',
    marginTop : theme.spacing(3),//theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  },
  progress : {
    margin : theme.spacing(2)
  }
})

/* const customers = [
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
] */


class App extends Component{
  state = {
    customers : "",
    completed : 0
  }
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    /* this.callApi()
      .then(res => this.setState({customers : res}))//callApi를 한 후 res라는 곳 안에 return된 body 가 들어가고 그것이 customers에 저장된다.
      .catch(err => console.log(err)); //에러 발생했을경우 console에 로그 출력 */
  }
  //비동기적으로
  callApi = async () => {
    const response = await fetch('/api/customers'); //접속을해서 나오는 response
    const body = await response.json(); //response에 들어있는 데이터를 json 형식으로 받아서 body에 저장
    return body;
  }

  progress = () =>{
    const {completed} = this.state;
    this.setState({completed : completed >= 100 ? 0 : completed + 1});
  }
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
             {this.state.customers ? this.state.customers.map(c => {return(<Customer_ui key = {c.id} id = {c.id} image = {c.image} name={c.name} birthday={c.birthday} gender={c.gender} job = {c.job} />) })
              : 
                <TableRow>
                  <TableCell colSpan = "6" align = "center">
                    <CircularProgress className = {classes.progress} variant = "determinate" value = {this.state.completed}>
                    </CircularProgress>
                  </TableCell>  
                </TableRow>
              }
             </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
