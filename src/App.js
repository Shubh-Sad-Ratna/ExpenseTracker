import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses=[
    {id:1,date:new Date(2023,7,5), location:'Bengaluru', title:'Insurance', price:'220'},
    {id:2,date:new Date(2024,8,5), location:'Nagpur', title:'Book', price:'10'},
    {id:3,date:new Date(2025,6,5), location:'Mumbai', title:'Pen', price:'5'},
    {id:4,date:new Date(2026,2,5), location:'Delhi', title:'Laptop', price:'4999'},
  ]
  return (
    <div>
      <h1>Lets Get Started</h1>
      {expenses.map((expense,index)=>{
          return <ExpenseItem 
            key={expense.id} 
            date={expense.date} 
            location={expense.location}
            title={expense.title} 
            price={expense.price}/>
      })}
    </div>
  );
}

export default App;
