import { useState } from 'react';


import {Box,Typography,TextField,Button,styled} from '@mui/material'
const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px
    }
`;


const NewTransactions = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
  
    const handleAddTransaction = () => {
      const transaction = {
        id: Math.floor(Math.random() * 1000000),
        text: text,
        amount: +amount,
      };
      addTransaction(transaction);
    };
  
    return (
      <Container>
        <Typography variant="h5">New Transaction</Typography>
        <TextField label="Enter expense" onChange={(e) => setText(e.target.value)} />
        <TextField label="Enter amount" onChange={(e) => setAmount(e.target.value)} />
        <Button variant="contained" onClick={handleAddTransaction}>Add Transaction</Button>
      </Container>
    );
  };
  
export default NewTransactions;


