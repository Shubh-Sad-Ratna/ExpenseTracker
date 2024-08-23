import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  return (
    <div>
      <h1>Lets Get Started</h1>
      <ExpenseItem date={new Date(2023,7,5).toISOString()} location='Bengaluru' title='Insurance' price='220'/>
      <ExpenseItem date={new Date(2024,1,25).toISOString()} location='Nagpur' title='Book' price='10'/>
      <ExpenseItem date={new Date(2025,9,19).toISOString()} location='Mumbai' title='Pen' price='5'/>
      <ExpenseItem date={new Date(2026,6,27).toISOString()} location='Delhi' title='Laptop' price='4999'/>
    </div>
  );
}

export default App;
