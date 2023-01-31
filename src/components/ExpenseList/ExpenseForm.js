
const ExpenseForm = () => {

    const addItem = (e) => {
        const Title = document.getElementById('title').value;
        const Amount = document.getElementById('amount').value;
        const Date = document.getElementById('date').value;

        console.log(Title);
        console.log(Amount);
        console.log(Date);
        

    }

    return (
        <div>
            <form onChange={addItem}>
                <label>Title:</label>
                <input type="text" id="title"></input>
                <label> Amount:</label>
                <input type="number" id="amount"></input>
                <label> Date:</label>
                <input type="date" id="date"></input>
                <input type="submit"></input>
            
            </form>

        </div>
    )
}

export default ExpenseForm;
