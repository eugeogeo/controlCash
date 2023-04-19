import { Box, Typography } from '@mui/material';
import { Transactions } from '../../types/api';

type TableProps = {
     transactions: Transactions[] | undefined;
}

const Table = ({transactions}: TableProps) => {

	return (
		<Box>
			{
				transactions?.map((t)=>(
					<Box
						key={t.id}
						sx={{
							width: '100%',
							backgroundColor:'#29292E',
							margin: '4px 0px',
							color:'#fff',
							display: 'flex',
							justifyContent:'space-between'
						}}
					> 
						<Typography 
							variant='body1' 
							component='h4' 
						> 
							{t.description} 
						</Typography>
						<Typography 
							variant='body1' 
							component='h4'
						> 
							{t.price} 
						</Typography>
						<Typography 
							variant='body1' 
							component='h4' 
						> 
							{t.category} 
						</Typography>
						<Typography 
							variant='body1' 
							component='h4' 
						> 
							{t.createdAt} 
						</Typography>
					</Box>

				))
			}
		</Box>
	);
};

export default Table;