import "./ExpenseItem.css"
function ExpenseItem(){
    const expenseDate=new Date(2023,7,15).toISOString();
    const expenseLocation="Bangalore";
    const expenseTitle="Insurance";
    const expensePrice=10;
    return(
        <div className='expense-item'>
            <div>{expenseDate}</div>
            <div className='expense-item__location'>{expenseLocation}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expensePrice}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;