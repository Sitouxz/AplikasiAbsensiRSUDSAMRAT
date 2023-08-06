import api from "../axios.config";
import { Employee } from "./employee.interface";

const getEmployee = async (): Promise<[Employee[] | null, any]> => {
    try {
        const response = await api.get('/employees');
        return response.data;
    } catch(error) {
        console.log(error);
        return [error as null, null];
    }
}

export {getEmployee};