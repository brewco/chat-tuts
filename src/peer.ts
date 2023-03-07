import { io, Socket } from "socket.io-client"

type PeerOptions = {
    serverURL: string
    nickname: string
}

export class Peer {
    id?: string
    serverURL: string
    socket: Socket
    nickname: string
    constructor(opts: PeerOptions) {
        this.nickname = opts.nickname
        this.serverURL = opts.serverURL
        this.socket = io(this.serverURL)

        this.socket.on("connect", () => {
            this.id = this.socket.id
            this.socket.emit("NICKNAME", this.nickname)
        })
        this.socket.on("error", (err) => {
            console.error(`Error while attempting to connect to ${this.serverURL}`, err)
        })

        this.socket.on("MESAJ", (data) => {
            console.log("message:", data)
        })
    }
    send(to: string, message: string) {
        const data = {
            to,
            message
        }
        this.socket.emit("MESAJ", data)
    }
}