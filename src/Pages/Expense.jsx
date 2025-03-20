import Navbar from "../components/Navbar/Navbar";
import { useRef, useState, useEffect } from "react";
import "./css/expense.css";
export default function Expense() {
    const [balance, setBalance] = useState(0);
    const [showInputGrp, setShowInputGrp] = useState(false);
    const [isExpense, setIsExpense] = useState(null);
    const expense = useRef(null);
    const comment = useRef(null);
    const [transactions, setTransactions] = useState([]);

    // Log transactions whenever they are updated
    useEffect(() => {
        console.log("Updated transactions:", transactions);
    }, [transactions]);

    function handleUpdate() {
        const amount = parseInt(expense.current.value);
        const data = {
            amount,
            comment: comment.current.value,
            type: isExpense ? "expense" : "money",
        };

        setTransactions((prevTransactions) => [...prevTransactions, data]);

        if (isExpense) {
            setBalance(balance - amount);
        } else {
            setBalance(balance + amount);
        }

        setShowInputGrp(false);
    }

    return (
        <>
            <Navbar />
            <div className="page-wrapper">
                {/* this is expense status */}
                <div className="expense-status">
                    <div className="expense-balance-holder">Balance: {balance}</div>
                    <div className="expense-status-btn-holder">
                        <button
                            className="expense-btn expense-add-expense "
                            onClick={() => {
                                setIsExpense(true);
                                setShowInputGrp(true);
                                expense.current.value = 0;
                                comment.current.value = "";
                            }}
                        >
                            Add expense
                        </button>
                        <button
                            className="expense-btn expense-add-money "
                            onClick={() => {
                                setIsExpense(false);
                                setShowInputGrp(true);
                                expense.current.value = 0;
                                comment.current.value = "";
                            }}
                        >
                            Add money
                        </button>
                    </div>
                    {showInputGrp && (
                        <div className="expense-input-group">
                            <input
                                type="text"
                                className="expense-input expense-comment"
                                placeholder="Add a comment"
                                ref={comment}
                            />
                            <div className="expense-input-holder">
                                <input
                                    type="number"
                                    className="expense-input"
                                    placeholder="Expense"
                                    ref={expense}
                                />
                                <button className="expense-btn" onClick={handleUpdate}>
                                    Update
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Transactions */}
                <div className="expense-transactions-holder">
                    <h1>Transactions</h1>
                    {transactions.map((transaction, index) => (
                        <div key={index} className="transaction-item">
                            <p >
                                {transaction.type === "expense" ? "-" : "+"}₹{transaction.amount} - {transaction.comment}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
