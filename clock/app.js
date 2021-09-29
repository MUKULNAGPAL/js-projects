function displayTime() {

    const d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    let apm = 'am'

    if (hours < 12 && hours > 24) {
        apm = 'AM'
    } else if (hours > 12 && hours < 24) {
        apm = 'PM'
    }


    if (seconds < 10) {
        seconds = '0' + d.getSeconds()
    }
    if (minutes < 10) {
        minutes = '0' + d.getMinutes()
    } if (hours < 10) {
        hours = '0' + d.getHours()
    }
    let time = (`${hours}:${minutes}:${seconds} ${apm}`)

    document.getElementById('container').innerHTML = time
    document.getElementById('container').textContent = time

}
setInterval(displayTime, 1000)


displayTime()