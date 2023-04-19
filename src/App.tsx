import axios from 'axios';
import { useEffect, useState } from 'react';
import { GetTransactions } from './services/api';
import { Box, Typography } from '@mui/material';
import Table from './components/Table';
import { Transactions } from './types/api';

function App() {

	const [transactions, setTransactions] = useState<Transactions[]>([]);

	const test = async () => {
		try{
			
			const response = await GetTransactions({limit: 10, page:1,search:'a' });
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
				height: '100vh',
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
				<Table transactions={transactions} />
			</Box>
		</Box>
	);
}

export default App;
