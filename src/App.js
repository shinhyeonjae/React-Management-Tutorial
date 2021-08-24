//import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '930817',
    'gender' : '남자',
    'job' : '직장인'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '길동',
    'birthday' : '930817',
    'gender' : '남자',
    'job' : '직장인'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '홍길',
    'birthday' : '93081',
    'gender' : '남',
    'job' : '직장인'
  }
]
function App() {
  return (
    <div className="gray-background">
      {customers.map(c => {
          return(
            <Customer
              key = {c.id}
              image = {c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job = {c.job}
            />
          )
      })}
        
    </div>
  );
}

export default App;
