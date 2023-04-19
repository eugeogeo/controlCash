import axios from 'axios';
import { DataTransactions, GetTransactions } from '../types/api';


const api = axios.create({
	baseURL:'http://localhost:3334',
});

export async function GetTransactions(data?: GetTransactions) {
	const response = await api.get<DataTransactions>(`/transaction/search?limit=${data?.limit}&page=${data?.page}&search=${data?.search}`);
	// console.log(response.data);

	return response.data;
}