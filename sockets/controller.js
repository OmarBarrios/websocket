


const socketController = (socket) => {
    console.log('Cliente conectado', socket.id );    
    
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    })

    socket.on('enviar-mensaje', (payload, callbackId ) =>{
        
        const id = 123456;
        callbackId(id);
        
        socket.broadcast.emit('enviar-mensaje', payload)
        
    })

}

module.exports = {
    socketController
}