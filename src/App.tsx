import axios from 'axios';
import { useEffect, useState } from 'react';
import { GetTransactions } from './services/api';
import { Box, Button, TextField, Typography } from '@mui/material';
import Table from './components/Table';
import { Transactions } from './types/api';
import { Search } from '@mui/icons-material';

function App() {

	const [transactions, setTransactions] = useState<Transactions[]>([]);

	const test = async () => {
		try{
			
			const response = await GetTransactions({limit: 10, page:2,search:'' });
			setTransactions(response.transactions);
			console.log(response);
		}catch{
			console.log('erro');
		}
	};

	useEffect(()=>{
		test();
	});
	return (
		<Box
			sx={{
				backgroundColor: '#1E1E1E',
				width: '100vw',
				// height: '100vh',
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<Box
				sx={{
					// backgroundColor: '#1E1E1E',
					width: '80%', 
				}}
			>
				<Box
					sx={{
						paddingTop:'10px'
					}}
					component="form"
				>
					<TextField 
						variant='filled' 
						color='primary' 
						label='Busque uma transação' 
						sx={{ color:'#fff'}}
					/>
					<Button
						variant='outlined'
					>
						
                          Buscar
					</Button>
				</Box>
				<Table transactions={transactions} />
			</Box>
		</Box>
	);
}

export default App;
