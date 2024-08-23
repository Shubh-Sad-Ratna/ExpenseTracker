import "./ExpenseItem.css"
function ExpenseItem(){
    return(
        <div className='expense-item'>
            <div className='expense-item__location'>15 August 2023</div>
            <div className='expense-item__description'>
                <h2>Book</h2>
                <div className='expense-item__price'>$10</div>
                <div>Delhi</div>
            </div>
        </div>
    )
}
export default ExpenseItem;