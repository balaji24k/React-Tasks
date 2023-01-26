import './ExpenseItem.css';
function ExpenseItem(props) {
    
    return (
    <div className='expense-item'>
        <div className='expense-item__description'>
            <div>{props.item.date.toISOString()}</div>
            <h2>{props.item.title}</h2>
            <h2>{props.item.locationOfExpenditure}</h2>
            <div className='expense-item__price'> ${props.item.amount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;