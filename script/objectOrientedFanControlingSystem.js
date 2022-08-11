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
        var controleSwitch =document.getElementById(this.controleSwitch)
        var regulator = document.getElementById(this.regulator)
        var getState = controleSwitch.value
        var currentState = getState
        if (currentState == 'off') {
            // fan.innerText = 'Fan is on'
            console.log('Fan is turned on...')
            fan.style.animation = "spin 1s infinite linear"
            controleSwitch.value = 'on'
            controleSwitch.className += "far fa-toggle-on"
        }
        else if (currentState == 'on') {
            // fan.innerText = "Fan is off"
            console.log('Fan is turned off..')
            fan.style.animation = "none"
            controleSwitch.value = 'off'
            controleSwitch.className += "far fa-toggle-off"
        }
    }
    changeFanSpeed(){
        var fan = document.getElementById(this.fan)
        var controleSwitch = document.getElementById(this.controleSwitch)
        var regulator = document.getElementById(this.regulator)
        var getMaxSpeed = this.maxSpeed
        var getMinSpeed = this.minSpeed
        regulator.max = getMaxSpeed
        regulator.min = getMinSpeed
        
        var speed = regulator.value
        
        var maxSpeed = Number(regulator.max)
        var minSpeed = Number(regulator.min)
        var midPoint = (maxSpeed + minSpeed) / 2
        
        if (speed >= midPoint) {
            var refSpeed = (maxSpeed + minSpeed) - speed
            fan.style.animationDuration = refSpeed + "ms"
            console.log("Upper half speed rate:", refSpeed, regulator.value)
        }
        if (speed < midPoint) {
            var refSpeed = (maxSpeed + minSpeed) - speed
            fan.style.animationDuration = refSpeed + "ms"
            console.log("Lower half speed rate:", refSpeed, regulator.value)
        }
    }
}


//fan regulator switch maxSpeed minSpeed
var fan1 = new CreateFan('fan','regulator','switch',300,50)
var fan2 = new CreateFan('fan2','regulator2','switch2',3000,90)
var fan3 = new CreateFan('fan3','regulator3','switch3',10000,50)
function execute(){
    fan1.switchState()
}
function execute2(){
    fan2.switchState()
}
function execute3() {
    fan3.switchState()
}

function executeRegulator(){
    fan1.changeFanSpeed()
}
function executeRegulator2(){
    fan2.changeFanSpeed()
}
function executeRegulator3(){
    fan3.changeFanSpeed()
}
