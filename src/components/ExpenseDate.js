import './components_styles/ExpenseDate.css';
/*
*            received props from ExpenseItem        
*                      ↓
*/   
const ExpenseDate = (props) => {
    const month = props.petsa.toLocaleString('en-US', { month: 'long'});
    const day = props.petsa.toLocaleString('en-US', { day: '2-digit'});
    const year = props.petsa.getFullYear();

    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;