import './ExpenseItem.css';
function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    const LocationOfExpenditure = 'Vizag'
    return (
    <div className='expense-item'>
        <div className='expense-item__description'>
            <div>{expenseDate.toISOString()}</div>
            <h2>{expenseTitle}</h2>
            <h2>{LocationOfExpenditure}</h2>
            <div className='expense-item__price'> ${expenseAmount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;