function InsertText(el,content){
    el.textContent = content 
}


function timeSet(sign){
    switch (sign) {
      case "+":
        remainingTime1 = 1000 * 60 * active
        break;
      case "-":
        remainingTime2 = 1000 * 60 * rest
        break;
    }
    updateTimer(remainingTime)
}


function updateTimer(t){
    let d = new Date(t)
    let m  = d.getMinutes()
    let s  = d.getSeconds()
    let ms = d.getMilliseconds()
    m=m.toString().padStart(2,"0")
    s=s.toString().padStart(2,"0")
    ms=ms.toString().padStart(3,"0")
    timer.textContent = `${m}:${s}.${ms}`
}

function timeCountDown(){
    timerId=setInterval(function(){
        elapsedTime =new Date() -startTime
            timeLeft = remainingTime - elapsedTime
            updateTimer(timeLeft)
            if (timeLeft<=0){
            clearInterval(timerId)
            remainingTime = 0
            timeLeft= 0
            run = false
            InsertText(start,"Start")
            return updateTimer(timeLeft)
        }
    }, 10);
}

$(function(){
    score = $('#user').data('');
    typeof(score);
});
