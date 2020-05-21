 var socket = io();
//var socket = io.connect('http://localhost:3000', { 'forceNew': true });

        socket.on('connect',function(){
            console.log('conectado al servidor');
        });

        socket.on('disconnect',function(){
            console.log('perdimos conexion con el servidor');
        });

        socket.on('enviarMensaje',function(mensaje){
            console.log('servidor: ',mensaje);
        }
        );

        // enviar informacion
        socket.emit('enviarMensaje',{
            usuario:'Rodrigo',
            apellido:'sanchez',
            mensaje: 'hola mundo'
        },function(resp){
            console.log('server: ', resp);
        });