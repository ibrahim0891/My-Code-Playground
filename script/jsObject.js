

/**
var person = function(name,age){
   
}
var obj = {
    name: "Ibrahim",
    age: 18
}
var me = person("Ibrahim",18)
console.log(obj.name)
**/

class Human{
    constructor(name,gender,age){
        this.name = name
        this.gender = gender
        this.age = age
    }
    intro(){
        console.log("Assalamu alikum, I'm " + this.name)
    }
}
class Robot{
    constructor(model,os,id,cpu){
        this.model = model
        this.os = os
        this.id = id 
        this.cpu = "CPU CORRUPTED"
    }
    intro(){
        console.log("Hi, I'm ",this.model," series",this.os," based AI robot")
    }
    doAMath(n1, n2) {
        console.log("This sum of given number is: " + Number(n1 + n2))
        console.log("Solved by: " + this.model)
    }
}

var person1 = new Human("Rifat","male",18)
var person2 = new Human("Ibrahim","male",18)

//person1.intro()
console.log()

var robot1 = new Robot('AX400','Android','#123')
var robot2 = new Robot('MT500','Linux','#123')

robot1.doAMath(13,49)
person1.intro()

var Rect = function(){
    this.width = width
    this.height = height
    
    this.draw = function(){
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this) 
    }
    this.printProperties = function(){
        console.log('My height is ', this.height)
        console.log('My width is ', this.width)
        
    }
}

class Rect{
    constructor(width,height){
        this.width = width
        this.height = height
    }
    draw(){
        this.displayProperty()
    }
    displayProperty(){
        console.log('My height is ', this.height)
        console.log('My width is ', this.width)
    }
}

var rect1 = new Rect(12,36)
rect1.draw()


function Person(name){
    return this.name = name 
}

var newPerson = new Person("Ibrahim")
var newPerson2 = new Person("Siam")
console.log(newPerson.__proto__ === newPerson2.__proto__)
console.log(newPerson.__proto__)
