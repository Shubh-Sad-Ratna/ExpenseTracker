import "./ExpenseFilter.css"

const ExpenseFilter=(props)=>{
    const dropDownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value)
    }
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By Year</label>
                <select value={props.selectedYear} onChange={dropDownChangeHandler}>
                    <option value={"all"}>all</option>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                    <option value={2026}>2026</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter;