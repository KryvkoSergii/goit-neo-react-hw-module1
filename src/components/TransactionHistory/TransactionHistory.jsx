import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({transactions}){
    let transacts = transactions.map(transaction => getRow(transaction));
    return (
        <table className={css.transactions}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
        
            <tbody>
                {transacts}
            </tbody>
        </table>
    );
}

function getRow(transaction){
    return <tr key={transaction.id} id={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
            </tr>;
}

let Transaction = PropTypes.shape(
    {
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }
)

TransactionHistory.propTypes = 
{
    transactions: PropTypes.arrayOf(Transaction)
};
