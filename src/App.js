import Expenses from './components/Expenses/Expenses';
import './App.css';

function App() {

  const expenses=[
    {id:1,date:new Date(2023,7,5), title:'Insurance', price:'220'},
    {id:2,date:new Date(2024,8,5), title:'Book', price:'10'},
    {id:3,date:new Date(2025,6,5), title:'Pen', price:'5'},
    {id:4,date:new Date(2026,2,5),title:'Laptop', price:'4999'},
  ]
  return (
    <div>
      <h1>Lets Get Started</h1>
      <div>
        <Expenses expenses={expenses}/>
      </div>
    </div>
  );
}


export default App;
