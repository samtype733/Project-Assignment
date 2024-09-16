import {Box, Typography,Divider,List} from "@mui/material";

import Transaction from "./Transaction";

const Transactions = ({ transactions, setTransactions }) => {
    console.log('Transactions:', transactions);
    console.log('SetTransactions:', setTransactions);
  
    return (
      <Box>
        <Typography variant="h5">Transactions History</Typography>
        <Divider />
        <List>
          {Array.isArray(transactions) && transactions.length > 0 ? (
            transactions.map((transaction) => (
              <Transaction
                key={transaction.id}
                transaction={transaction}
                setTransactions={setTransactions}
                transactions={transactions}
              />
            ))
          ) : (
            <Typography>No transactions available.</Typography>
          )}
        </List>
      </Box>
    );
  };
  
export default Transactions;
