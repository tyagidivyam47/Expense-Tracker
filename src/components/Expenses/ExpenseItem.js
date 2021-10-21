import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){

    // let title = props.title;

    const [title, setTitle] = useState(props.title);

    const clickHandler = () =>{
        setTitle('Updated!!!!!!!');
        console.log('Clicked!!!!!!!!');
    }    

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h2>{title}</h2>
                <p className="expense-item__price">${props.amount}</p>
            </div>

            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;