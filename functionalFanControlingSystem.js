var fan = document.getElementById("fan")
var controleSwitch = document.getElementById("switch")
var regulator = document.getElementById('regulator')

console.log(regulator)

function switchState(){
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
function changeFanSpeed() {
    var speed = regulator.value
    var maxSpeed = Number(regulator.max)
    var minSpeed = Number(regulator.min)
    var midPoint = (maxSpeed+minSpeed)/2 
    
    if (speed >= midPoint){
        refSpeed = (maxSpeed+minSpeed) - speed
        fan.style.animationDuration = refSpeed+"ms"
        console.log("Upper half speed ratep",refSpeed,regulator.value)
    }
    if(speed < midPoint){
        refSpeed = (maxSpeed+minSpeed) - speed
        fan.style.animationDuration = refSpeed+"ms"
        console.log("Lower half speed rate:",refSpeed,regulator.value)
    } 
}  

controleSwitch.addEventListener('click',function(){
    switchState()
})

regulator.addEventListener('change',function(){
    changeFanSpeed()
})


