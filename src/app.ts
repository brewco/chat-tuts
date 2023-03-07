import { Peer } from "./peer"
let myPeer = null
document.querySelector("#connect-button").addEventListener("click", () => {
    const nickname = (document.querySelector("#nickname-input") as HTMLInputElement).value
    myPeer = new Peer({
        serverURL: "http://localhost:3000",
        nickname
    })
    console.log("myPeer:", myPeer)
})

document.querySelector("#send-button").addEventListener("click", () => {
    console.log("Sending message")
    const to = (document.querySelector("#to") as HTMLInputElement).value
    const message = (document.querySelector("#message") as HTMLInputElement).value
    // @ts-ignore
    myPeer.send(to, message)
})