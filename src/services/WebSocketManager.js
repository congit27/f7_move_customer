import io from 'socket.io-client';

class WebSocketManager {
    constructor() {
        // Khởi tạo socket là null
        this.socket = null;
    }

    connect() {
        // Kiểm tra nếu đã có kết nối, thì đóng kết nối cũ trước khi tạo kết nối mới
        if (this.socket && this.socket.connected) {
            this.disconnect();
        }

        // Tạo kết nối mới
        this.socket = io('http://192.168.1.13:3000');

        // Bắt sự kiện khi kết nối thành công
        this.socket.on('connect', () => {
            console.log('Connected to the server');
        });

        // Bắt sự kiện khi mất kết nối
        this.socket.on('disconnect', () => {
            console.log('Disconnected from the server');
        });
    }

    disconnect() {
        // Đóng kết nối
        if (this.socket) {
            this.socket.disconnect();
        }
    }

    sendRescueRequest(location) {
        // Kiểm tra xem đã có kết nối chưa
        if (!this.socket || !this.socket.connected) {
            console.log('Not connected. Connecting...');
            this.connect();
        }

        // Gửi yêu cầu cứu hộ
        console.log('Send request, location: ', location);
        this.socket.emit('rescue-request', { message: 'Yêu cầu cứu hộ từ Cong!', location: location });
    }
}

export default WebSocketManager;
