// /**
// //reverse a string 
// function reverse(string){
//     let word = string 
//     array = []
//     for (var i = 0 ; i < word.length+1; i++){
//         array.push(word[word.length-i])
//     }
//     var reversedWord = array.join('')
//     console.log("Reversed string is: " + reversedWord)
// }
// var userInput = prompt('Enter a string: ')
// reverse(userInput)

// console.log('JavaScript code terminated')
// **/

// /**
// var person = function(name,age){
   
// }
// var obj = {
//     name: "Ibrahim",
//     age: 18
// }
// var me = person("Ibrahim",18)
// console.log(obj.name)
// **/

// class Human{
//     constructor(name,gender,age){
//         this.name = name
//         this.gender = gender
//         this.age = age
//     }
//     intro(){
//         console.log("Assalamu alikum, I'm " + this.name)
//     }
// }
// class Robot{
//     constructor(model,os,id,cpu){
//         this.model = model
//         this.os = os
//         this.id = id 
//         this.cpu = "CPU CORRUPTED"
//     }
//     intro(){
//         console.log("Hi, I'm ",this.model," series",this.os," based AI robot")
//     }
//     doAMath(n1, n2) {
//         console.log("This sum of given number is: " + Number(n1 + n2))
//         console.log("Solved by: " + this.model)
//     }
// }

// var person1 = new Human("Rifat","male",18)
// var person2 = new Human("Ibrahim","male",18)

// //person1.intro()
// console.log()

// var robot1 = new Robot('AX400','Android','#123')
// var robot2 = new Robot('MT500','Linux','#123')

// robot1.doAMath(13,49)
// person1.intro()

// var Rect = function(){
//     this.width = width
//     this.height = height
    
//     this.draw = function(){
//         console.log('I am a rectangle')
//         this.printProperties()
//         console.log(this) 
//     }
//     this.printProperties = function(){
//         console.log('My height is ', this.height)
//         console.log('My width is ', this.width)
        
//     }
// }

// class Rect{
//     constructor(width,height){
//         this.width = width
//         this.height = height
//     }
//     draw(){
//         this.displayProperty()
//     }
//     displayProperty(){
//         console.log('My height is ', this.height)
//         console.log('My width is ', this.width)
//     }
// }

// var rect1 = new Rect(12,36)
// rect1.draw()

/**
function Person(name){
    return this.name = name 
}

var newPerson = new Person("Ibrahim")
var newPerson2 = new Person("Siam")
console.log(newPerson.__proto__ === newPerson2.__proto__)
console.log(newPerson.__proto__)
**/

var comment = "Do you know how to gt output in various programming language "
/**
class Skill{
    constructor(task,syntax,know){
        this.task = task
        this.syntax = syntax
        this.know = know
    }
}
var skill = [
    {
        task : "output in python",
        syntax: "print()",
        know : true 
    },
    {
        task: "output in javascript",
        syntax: "console.log()",
        know:  true 
    },
    {
        task: "output in Java",
        syntax: "unknown",
        know: false
    },
    new Skill("output in c++","printf()",true),
    new Skill("output in Go Lang","unknown",false),
    new Skill("output in PHP","echo()",true),
]

var captureTrue = []
var captureFalse = []
var i = 0;
for (i; i < skill.length ; i++){
    if(skill[i]['know']){
        captureTrue.push(skill[i])
    }
    else{
        captureFalse.push(skill[i])
    }
}
var showByAbility = false;

if (showByAbility){
    if (captureTrue.length == skill.length){
        console.log("You are a pro.")
    }
    else{
        var k = 0;
        for (k; k < captureTrue.length; k++) {
            let needToKnow = captureTrue[k]['task']
            console.log('You already know how to get ', needToKnow)
        }
    }
}
else {
    if (captureFalse.length == 0){
        console.log("You alredy know how to get output in every language")
    }
    else{
        var j = 0;
        for (j; j < captureFalse.length; j++) {
            let needToKnow = captureFalse[j]['task']
            console.log('You need to learn how to get ', needToKnow)
        }
    }
}
**/

var comment = "fake console course _ response on different condition"
/**
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
**/

// budget = int(input('How much your budget for the tour?: '))
// HOTEL_RENT = 4000

// if budget > 5000:
//     print('Ready for a family tour.')
// balance = budget - HOTEL_RENT
// if balance > 2000:
//     print('Time for BBQ Party!')
// else :
//     print('Have some shopping!')
// else :
//     print('No budget for family tour. Just Sleep.')

var comment = 'family tour budget'

// var budget = prompt("How much budget do you have for the tour?")

// if (budget >= 5000){
//     console.log("You can have a nice family tour.")
//     var hotelRent = 4000
//     balanceLeft = budget - hotelRent
//     if (balanceLeft >= 2000){
//         console.log("Have a nice time in BBQ party.")
//     }
//     else{
//         console.log("You can have do shopping only.")
//     }
// }
// else{
// console.log("Not enough budget for the family tour.You can have nothing but SLEEP.```````")
// }


//With Javascript
/**
var age = 17
var vaccinCount = 2
isVaccinated = false

function sentMessage(type,text){
    var messageType = type
    console.log(text)
}

if ( age >= 20 && vaccinCount ==2 ){
    sentMessage("SMS","You are eligible for going to a forign country")
}
if ((age>= 15 && age <= 20) && (vaccinCount == 0)) {
    sentMessage("SMS","You need to have vaccin soon.")
}
if ((age>= 15 && age <= 20) && (vaccinCount == 2))  {
    var isVaccinated = true
    sentMessage("SMS","You have taken two doses of vaccin successfully")
}
**/
var codeTitle = "Bubble sort"

// function bubbleSort(array){
//     function sortArray(userInput){
//         var array = userInput
//         for (var i = 0; i < array.length; i++) {
//             if (array[i] > array[i+1]) {
//                 var temp1 = array[i+1]
//                 var temp2 = array[i]
//                 array[i] = temp1
//                 array[i+1] = temp2
//             }
//         }
//         return array
//     }
//     function checkError(array){
//         var error = true
//         for (var i = 0; i <array.length; i++) {
//             if(array[i] > array[i+1]){
//                 var error = true
//                 break
//             }
//             else{
//                 var error = false 
//             }
//         }
//         return error
//     }
//     var test = true
//     while (test) {
//         var check = checkError(array)
//         if(check==true){
//             var array = sortArray(array)
//         }
//         else {
//             var test = false
//         }
//     }
//     return array
// }

// var array = [9, 1, -6, 3, 75, 33,-77, 5, 3]
// console.log(bubbleSort(array))

var comment = 'Sub set pf string'

var str = 'dog'

console.log(str.slice(0,2))

for (var i = 0; i < str.length+1; i++) {
   console.log(str.slice(0,i))
}