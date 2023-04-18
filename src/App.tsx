import axios from 'axios';
import { useEffect } from 'react';

function App() {

	const test = async () => {
		try{
			// const response = await fetch('http://localhost:3334/transaction');
			const response = await axios.get('http://localhost:3334/transaction');
			console.log(response);
		}catch{
			console.log('erro');
		}
	};

	useEffect(()=>{
		test();
	});
	return (
		<div>
			<p>hello word</p>
		</div>
	);
}

export default App;
