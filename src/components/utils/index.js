

const formatTime = (time) =>{
    if (time <= 60) {
        return time < 10 ? `0${time}s` : `${time}s`;
    } else {
        return Math.floor(time / 60) + `m` + (time % 60) + `s`
    }
}
const formatTime2 = (time) =>{
    if (time <= 60) {
        return time < 10 ? `0:0${time}` : `0:${time}`;
    } else {
        return Math.floor(time / 60) + `:` + (time % 60) 
    }
}


export {
    formatTime,
    formatTime2
}