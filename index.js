const containerEmoji = document.getElementById("emoji-container")
const inputEmoji = document.getElementById("emoji-input")
const btnPushEmoji = document.getElementById("push-btn")
const btnUnshiftEmoji = document.getElementById("unshift-btn")
const btnPopEmoji = document.getElementById("pop-btn")
const btnShiftEmoji = document.getElementById("shift-btn")

const myEmojis = ["👨‍💻", "⛷", "🍲"]

function renderEmojis(arr) {
    console.log(myEmojis)
    inputEmoji.value = ``
    containerEmoji.innerHTML = ``
    for ( let i = 0 ; i < arr.length ; i++) {
        // console.log(arr[i])
        const emoji = document.createElement('span')
        emoji.textContent = arr[i]
        containerEmoji.append(emoji)
    }

}

renderEmojis(myEmojis)

// function renderEmojisV2(arr) {
//     let result = ``
//     containerEmoji.innerHTML = ``
//     arr.reduce((acc, item) => {
//         // console.log(item, `item`)
//         result += item
//     }, 0)  
//     const spanEmoji = document.createElement("span")
//     spanEmoji.textContent = result
//     containerEmoji.append(spanEmoji)
// }

// renderEmojisV2(myEmojis)

btnPushEmoji.addEventListener("click", () => {
    if (inputEmoji.value) {
        myEmojis.push(inputEmoji.value) 
        renderEmojis(myEmojis)
        // renderEmojisV2(myEmojis)
    }
})


btnUnshiftEmoji.addEventListener("click", () => {
    if (inputEmoji.value) {
        myEmojis.unshift(inputEmoji.value) 
        renderEmojis(myEmojis)
        // renderEmojisV2(myEmojis)
    }
})

btnPopEmoji.addEventListener("click", () => {
        myEmojis.pop(inputEmoji.value) 
        renderEmojis(myEmojis)
        // renderEmojisV2(myEmojis)
})


btnShiftEmoji.addEventListener("click", () => {
        myEmojis.shift(inputEmoji.value) 
        renderEmojis(myEmojis)
        // renderEmojisV2(myEmojis)
})