import { ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Detail = styled(ListItem)`
  margin-top: 10px;
`;

const Transaction = ({ transaction, setTransactions, transactions }) => {
  // Define the colour variable based on the transaction amount
  const colour = transaction.amount > 0 ? 'Green' : 'Red';

  const deleteTransaction = (id) => {
    if (Array.isArray(transactions)) {
      setTransactions(transactions.filter(transaction => transaction.id !== id));
    } else {
      console.error('Transactions is not an array or is undefined');
    }
  };

  return (
    <Detail style={{ background: `${colour}`, color: '#fff' }}>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
      </ListItemIcon>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
    </Detail>
  );
};

export default Transaction;

