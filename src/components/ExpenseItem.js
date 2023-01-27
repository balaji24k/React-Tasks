import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';


function ExpenseItem(props) {
    return (
    <div className='expense-item'>
        <ExpenseDate date={props.item.date}></ExpenseDate>
        <ExpenseDetails 
            amount={props.item.amount} 
            title ={props.item.title} 
            locationOfExpenditure ={props.item.locationOfExpenditure}>
         </ExpenseDetails>

    </div>
    );
}

export default ExpenseItem;