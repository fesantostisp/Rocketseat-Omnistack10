import socketio from 'socket.io-client';

const socket = socketio('http://10.10.10.5:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subcribeFuncition) {
    socket.on('new-dev', subcribeFuncition);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};