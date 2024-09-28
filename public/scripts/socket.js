const socket = io()

let userName = ""
const input = document.querySelector("#text")
const inputBtn = document.querySelector("#btnSendMessage")
const chatContainer = document.querySelector("#messages")
Swal.fire({
    title: "Enter your name",
    input: "text",
    allowOutsideClick: false,
    inputValidator: (value) => !value && "Please enter your name"
}).then(data => {
    userName = data.value
    document.querySelector("#username").innerHTML = `${userName}:`
});

socket.on("all messages", (data) => {
    data = data.map((each) => `<p class="bg-white p-2 m-1 w-fit rounded-r-lg font-mono"> <span> ${each.username}:</span> ${each.message} </p>`).join("")
    chatContainer.innerHTML = data
})
input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        if(input.value === ""){
            return
        }
        const newMessage = input.value
        socket.emit("new message", { username: userName, message: newMessage })
        event.target.value = "";
    }})

    inputBtn.addEventListener("click", (event) => {
        if(input.value === ""){
            return
        }
        const newMessage = input.value
        socket.emit("new message", { username: userName, message: newMessage })
        input.value = ""
        
    })

chatContainer.scrollTo(0, (chatContainer.scrollHeight))