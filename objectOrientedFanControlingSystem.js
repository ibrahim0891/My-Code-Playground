class CreateFan{
    constructor(fan,regulator,controleSwitch,maxSpeed,minSpeed){
        this.fan = fan 
        this.regulator = regulator
        this.controleSwitch = controleSwitch
        this.maxSpeed = maxSpeed
        this.minSpeed = minSpeed
    }
    switchState(){
        var fan = document.getElementById(this.fan)
        console.log(fan)
    }
}


//fan regulator switch maxSpeed minSpeed
var fan1 = new CreateFan('fan','regulator','switch',3000,50)
// var fan2 = new createFan('fan2','regulator2','switch2',3000,50)

fan1.switchState()