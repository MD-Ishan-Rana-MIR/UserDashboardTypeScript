import axios from "axios";
import { User } from "../type/type";
const url = "https://jsonplaceholder.typicode.com/users"

export const getAllUsers = async (): Promise<User[]> => {
    const response = await axios.get(url);
    return response.data;
};


// export const postUser = async(user:Omit<User,"id">):Promise<User>=>{
//     const response = axios.post(url);
// }


export const postUser = async (user: Omit<User, "id">): Promise<User> => {
    const response = await axios.post(url, user);
    console.log(response)
    return response.data;
};


export const updateUser = async (id: number, userData: Partial<User>): Promise<User> => {
    const response = await axios.put(`${url}/${id}`, userData);
    return response.data;
};