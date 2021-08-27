// 変数・定数・配列
function DomAcquisition(element) {
    return document.querySelector(element)
    }



var timer = DomAcquisition("#timer")
var start = DomAcquisition("#start")

var due = document.getElementById("due")
var totaltime = document.getElementById("totaltime")
var totaldid = document.getElementById("totaldid")
var hurry = document.getElementById("hurry")
var hpd = document.getElementById("hpd")
var active = document.getElementById("active")
var rest = document.getElementById("rest")

parseInt(due.innerText)
parseInt(totaltime.innerText)
parseInt(hurry.innerText)

var str_hpd = hpd.toString()
var str_active = active.toString()
var str_rest = rest.toString()

var reset = DomAcquisition("#reset")
var plusButton = DomAcquisition("#up")
var minusButton = DomAcquisition("#down")
var buttons = [start, reset, plusButton, minusButton]


//自分もやってみる

function getSets(sets) {
    sets = str_hpd/(str_active+str_rest)
} 





//以下でタイマーを実装している
var startTime
var remainingTime = parseInt(active.innerText)*60*1000
var elapsedTime = 0
var timeLeft
var timeId
var run = false

//let premerTime = 100000 * 60

//関数
function forlogs(elments) {
    elments.forEach(elment => console.log(elment));
}

function classChange(element, className, num) {
    switch (num) {
        case 1:
            element.classList.add(className);
            break;
        case 2:
            element.classList.remove(className);;
            break;
        case 3:
            element.classList.toggle(className);;
            break;
    }
}
function addEvent(eventTarget, eventName, callBack) {
    eventTarget.addEventListener(eventName, callBack)
}
function InsertText(el, content) {
    el.textContent = content
}
function updateTimer(t) {
    let d = new Date(t)
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    //let ms = d.getMilliseconds()
    h = h.toString().padStart(2, "0")
    m = m.toString().padStart(2, "0")
    s = s.toString().padStart(2, "0")
    //ms = ms.toString().padStart(3, "0")
    timer.textContent = `${h-9}:${m}:${s}`
    //.${ms}
}
function timeCountDown() {
    timerId = setInterval(function () {
        elapsedTime = new Date() - startTime
        timeLeft = remainingTime - elapsedTime
        updateTimer(timeLeft)
        if (timeLeft <= 0) {
            clearInterval(timerId)
            remainingTime = 0
            timeLeft = 0
            run = false
            InsertText(start, "Start")
            return updateTimer(timeLeft)
        }
    }, 10);
    
}
function timeSet(sign) {
    switch (sign) {
        case "+":
            remainingTime += 1000 * 60*5
            break;
        case "-":
            remainingTime -= 1000 * 60*5
            break;
    }
    updateTimer(remainingTime)
}

var day=0;
function keisan(){
    day=new Date()
    hpdall=parseInt(hpd.innerText)
    activeall=parseInt(active.innerText)

    total1 = parseInt(total1.innerText)
    total2 = parseInt(total2.innerText)
    total3 = parseInt(total3.innerText)
    did1 = parseInt(did1.innerText)
    did2 = parseInt(did2.innerText)
    did3 = parseInt(did3.innerText)
    hurry1 = parseInt(hurry1.innerText)
    hurry2 = parseInt(hurry2.innerText)
    hurry3 = parseInt(hurry3.innerText)
    hurryall=hurry1+hurry2+hurry3
    due1 = new Date(document.getElementById('due1').innerText)
    due2 = new Date(document.getElementById('due2').innerText)
    due3 = new Date(document.getElementById('due3').innerText)
    duetime1=Math.ceil((due1-day)/(24*60*60*1000))
    duetime2=Math.ceil((due2-day)/(24*60*60*1000))
    duetime3=Math.ceil((due3-day)/(24*60*60*1000))
    duetimeall=(total1-did1)/duetime1+(total2-did2)/duetime2+(total3-did3)/duetime3
    moto1=(total1-did1)/duetime1+(hpdall-duetimeall)*hurry1/hurryall*60
    moto2=(total2-did2)/duetime2+(hpdall-duetimeall)*hurry2/hurryall*60
    moto3=(total3-did3)/duetime3+(hpdall-duetimeall)*hurry3/hurryall*60
    syou1=Math.floor(moto1/activeall)
    syou2=Math.floor(moto2/activeall)
    syou3=Math.floor(moto3/activeall)
    amari1=moto1%activeall
    amari2=moto2%activeall
    amari3=moto3%activeall

    kei.textContent = `${amari1}+${amari2}+${amari3}`
    
    
}
function startClickEvent() {
    if (remainingTime <= 0) { return }
    if (run === false) {
        startTime = new Date()
        timeCountDown()
        run = true
        InsertText(start, "Stop")
        keisan()
    } else {
        InsertText(start, "Start")
        remainingTime = timeLeft
        console.log(remainingTime);
        clearInterval(timerId)
        updateTimer(timeLeft)
        run = false
    }
}
function resetClickEvent() {
    clearInterval(timerId)
    remainingTime = 0
    timeLeft = 0
    run = false
    InsertText(start, "Start")
    return updateTimer(remainingTime)
}


function plusButtonClickEvent() {
    if (run === false) { timeSet("+") }
}

function minusButtonClickEvent() {
    if (run == false && remainingTime > 0) { timeSet("-") }
}

function MouseoverAndMouseleaveEvent() {
    classChange(this, "active", 1)
    this.addEventListener("mouseleave", () => classChange(this, "active", 2))
}

function buttonsEvents(eventName) {
    buttons.forEach(eventTarget => {
        if (eventName === "mouseover") {
            addEvent(eventTarget, eventName, MouseoverAndMouseleaveEvent)
        } else {

            switch (eventTarget) {
                case start:
                    addEvent(eventTarget, eventName, startClickEvent)
                    break;
                case reset:
                    addEvent(eventTarget, eventName, resetClickEvent)
                    break;
                case plusButton:
                    addEvent(eventTarget, eventName, plusButtonClickEvent)
                    break;
                case minusButton:
                    addEvent(eventTarget, eventName, minusButtonClickEvent)
                    break;
            }
        }
    })
}

// 処理呼び出し
var eventNames = ["mouseover", "click"]
eventNames.forEach(eventName => { buttonsEvents(eventName) })


