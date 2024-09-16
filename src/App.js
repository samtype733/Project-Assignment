import './App.css';
import { useState } from 'react';
import { Typography, styled, Box } from '@mui/material';

// Balance components
import Balance from './components/Balance';
// ExpenseCard
import ExpenseCard from './components/ExpenseCard';
// NewTransaction
import NewTransactions from './components/NewTransactions';
// Transactions
import Transactions from './components/Transactions';

// Renamed the styled Component to StyledContainer
const Header = styled(Typography)`
  margin: 10px 0;
  color: blue;
  font-size: 36px;
  text-transform: uppercase;
`;

const StyledContainer = styled(Box)`
  display: flex;
  background: #fff;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    height: 70vh;
    width: 50%;
    padding: 10px;
  }
`;

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Momos', amount: -20 },
    { id: 2, text: 'Salary', amount: 3000 },
    { id: 3, text: 'Book', amount: -100 },
    { id: 4, text: 'Bonus', amount: -1500 },
  ]);
  // Handler to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <StyledContainer>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransactions addTransaction={addTransaction} />
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>
      </StyledContainer>
    </Box>
  );
}

export default App;
