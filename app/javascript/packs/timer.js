
function DomAcquisition(element) {
    return document.querySelector(element)
}
// 変数・定数・配列
const timer = DomAcquisition("#timer")
const start = DomAcquisition("#start")

const reset = DomAcquisition("#reset")
const plusButton = DomAcquisition("#up")
const minusButton = DomAcquisition("#down")
const buttons = [start, reset, plusButton, minusButton]


let startTime;
let remainingTime = 0;
let elapsedTime = 0;
let timeLeft;
let timeId;
let run = false

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
    let m = d.getMinutes()
    let s = d.getSeconds()
    let ms = d.getMilliseconds()
    m = m.toString().padStart(2, "0")
    s = s.toString().padStart(2, "0")
    ms = ms.toString().padStart(3, "0")
    timer.textContent = `${m}:${s}.${ms}`
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
            remainingTime += 1000 * 60
            break;
        case "-":
            remainingTime -= 1000 * 60
            break;
    }
    updateTimer(remainingTime)
}
function startClickEvent() {
    if (remainingTime <= 0) { return }
    if (run === false) {
        startTime = new Date()
        timeCountDown()
        run = true
        InsertText(start, "Stop")
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
const eventNames = ["mouseover", "click"]
eventNames.forEach(eventName => { buttonsEvents(eventName) })