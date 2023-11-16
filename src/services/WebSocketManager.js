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
        this.socket = io('https://railwaytest-production-a531.up.railway.app/');

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

    receiveAcceptanceNotification(callback) {
        if (!this.socket || !this.socket.connected) {
            console.log('Not connected. Connecting...');
            this.connect();
        }

        this.socket.on('accepted-request', (data) => {
            callback(data);
        });
    }

    receiveComingNotification(callback) {
        if (!this.socket || !this.socket.connected) {
            console.log('Not connected. Connecting...');
            this.connect();
        }

        this.socket.on('come-notification-partner', (data) => {
            callback(data);
        });
    }

    receiveCostNotice(callback) {
        if (!this.socket || !this.socket.connected) {
            console.log('Not connected. Connecting...');
            this.connect();
        }

        this.socket.on('cost-notice-partner', (data) => {
            callback(data);
        });
    }
}

export default WebSocketManager;
