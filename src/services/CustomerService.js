import axios from 'axios';

const handleCustomerLogin = (userName, password) => {
    return axios.post('https://f7movebackend-production.up.railway.app/api/login', userName, password);
};

const handleCustomerRegister = (email, fullName, password, userName, phone) => {
    return axios.post('https://f7movebackend-production.up.railway.app/api/register', {
        email,
        fullName,
        password,
        userName,
        phone,
    });
};

const handleGetAllBrandCar = () => {
    return axios.get('http://192.168.31.138:8080/api/getAllBrandCar');
};
const handleGetAllTypeCar = () => {
    return axios.get('http://192.168.31.138:8080/api/getAllTypeCar');
};
const handleGetAllColorCar = () => {
    return axios.get('http://192.168.31.138:8080/api/getAllColorCar');
};

export default handleCustomerLogin;
export { handleCustomerRegister, handleGetAllBrandCar, handleGetAllTypeCar, handleGetAllColorCar };
