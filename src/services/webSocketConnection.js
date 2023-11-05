import io from 'socket.io-client';
const socket = io('http://192.168.0.102:3000');

export const sendRescueRequest = (location) => {
    console.log('Send request, location: ', location);
    socket.emit('rescue-request', { message: 'Yêu cầu cứu hộ từ Cong!', location: location });
};
