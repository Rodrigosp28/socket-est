const { io } = require('../server')

io.on('connection',(client)=> {
  console.log('usuario conectado');

  client.emit('enviarMensaje',{
      usuario:'admin',
      mensaje:'bienvenido al servidor'
  });

  client.on('disconnect',()=>{
      console.log('usuario desconectado');
  });

  // escuchar cliente
  client.on('enviarMensaje',(data,callback)=> {
      console.log(data);

      client.broadcast.emit('enviarMensaje',{
        usuario:data.usuario,
        mensaje:data.mensaje
      });

      // if(mensaje.usuario){
      //     callback({
      //         resp:'todo salio bien'
      //     });
      // }else{
      //     callback({
      //         resp:'todo salio mal!!!!!!'
      //     });
      // }

  });

});