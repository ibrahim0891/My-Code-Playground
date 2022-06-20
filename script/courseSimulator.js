var comment = "fake console course _ response on different condition"

var payment = prompt("Do you've paid the course fee?")
if (payment=="yes"){
   var payment = true
}
else{
   var payment = false
}

function randInt(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}
var mark = randInt(70,90)

var isComplete = prompt("Did you enrolled for the course before?")
if (isComplete == "yes") {
    var isComplete = true
    var pastScore = prompt("What was your score in last course...")
    var mark = pastScore
}
else {
    var isComplete = false
}

function enroll(){
    if (isComplete){
        if (mark>=80){
            console.log("You've already finished the course successfully...")
        }
        else{
            console.log("You have failed in the course that was held before this batch..")
            console.log("You are not eligible for the course...")
        }
    }
    else {
        console.log("Checking payment status...")
        if (payment){
           setTimeout(function(){
               console.log("Payment successfull")
               prograss()
           },3000)
        }
        else{
            console.log('You have not paid your fees yet..')
        }
    }
}

function prograss(){
    console.log("Your course is going on...")
    setTimeout(isCompleteFunc,3000)
}
function isCompleteFunc() {
    var isComplete = true
    if (isComplete) {
        console.log("Course finished successfully...")
        setTimeout(getCertificate,3000)
    } else {
        console.log("You left the course on the way...")
    }
    
}

function getCertificate(){
    console.log("You got",mark,"in the couse..")
    if (mark >= 80){
        setTimeout(function(){
            console.log("Congrates! You are now certified...")
        },3000)
    }
    else{
        console.log('Sorry, You are not eligible for the certificate..')
    }
}

enroll()
