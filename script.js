const hourHand = document.querySelector(".hour-hand")
const minutesHand = document.querySelector(".min-hand")
const secondsHand = document.querySelector(".second-hand")

function setClock(){
    const now = new Date()

    const seconds = now.getSeconds()
    const min = now.getMinutes()
    const hour = now.getHours()

    const secondsDegree = ((seconds /60) * 360)
    const minDegree = ((min /60) * 360 + (seconds/60)*6)
    const hourDegree = ((hour /12) * 360 + (min/60) * 30)
// console.log(minDegree);
// console.log(secondsDegree);
// console.log(hourDegree);
    secondsHand.style.transform = `translateX(-50%) rotate(${secondsDegree}deg)`
    minutesHand.style.transform = `translateX(-50%) rotate(${minDegree}deg)`
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegree}deg)`
}
setInterval(setClock, 1000)
setClock()
