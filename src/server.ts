import { createServer } from "http";
import { Server } from "socket.io";

export async function StartServer() {
    console.log("Starting server...")
    const httpServer = createServer();
    const io = new Server(httpServer, {
        // options
        cors: {
            origin: "*",
        }
    });
    const nicknames: {
        [key: string]: string
    } = {}

    io.on("connection", (socket) => {
        setTimeout(() => {
            const nickname = Object.entries(nicknames).find(([nickname, id]) => {
                return id == socket.id
            })
            console.log(`${nickname} baglandi`);

        }, 2000);

        socket.on("NICKNAME", (nickname) => {
            nicknames[nickname] = socket.id
        });
        socket.on("MESAJ", (data) => {
            console.log(`Mesaj geldi    ${data}`)
            const { to, message } = data
            const id = nicknames[to]
            io.to(id).emit("MESAJ", message)
            console.log("message:", data);
        });
    });




    httpServer.listen(3000);
}

StartServer()