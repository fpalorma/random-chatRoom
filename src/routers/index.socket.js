import { socketServer } from "../../server.js";


let allMessages = [{
    username: "Admin",
    message:"Bienvenido al chat!"
}];

const socketCb = (socket) => {
    //Socket es la variable que corresponde a un socket unico
    //SocketServer es la variable que responde a todos los sockets conectados
    console.log(socket.id)
    socket.emit("all messages", [...allMessages].reverse().slice(0,50))
    socket.on("new message", (data) => {
        allMessages.push(data)
        socketServer.emit("all messages", [...allMessages].reverse().slice(0,50))
    })
};

//Apenas se conecta un usuario el back debe mandar los ultimos mensajes del chat


export default socketCb