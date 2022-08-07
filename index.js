// var age = 16 
// if (age >= 18 ){
//     console.log('adult')
// }else{
//     console.log('Child')
// }

// var isAdult = (age>=18)? "Adult":"child"
// console.log(isAdult)

// var str1 = "i am learning "
// var str2 = "javascript with "
// console.log(str1+str2)



// var number = [3,4,2,6,7,8]
// var order = number[0]
// for (var i = 0; i < number.length; i++) {
//     var j = number[i]
//     if (j<order){
//         order = j
//     }
// }
// for (var i = 0; i < number.length; i++) {
//     var o = order + i
//     console.log(o)
// }

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

// var array = [2,3,5,8,9,12,21,15,20,2.3,9,10,12,13,17,18,15]
// console.log(bubbleSort(array))

var fan = document.getElementById("fan")
var controleSwitch = document.getElementById("switch")

function switchState(state){
    var currentState = state
    if (currentState == 'off') {
        // fan.innerText = 'Fan is on'
        console.log('Fan is turned on...')
        fan.style.animation = "spin 3s infinite linear"
        controleSwitch.value = 'on'
        controleSwitch.className += "far fa-toggle-on"
    }
    else if ( currentState == 'on'){
        // fan.innerText = "Fan is off"
        console.log('Fan is turned off..')
        fan.style.animation = "none"
        controleSwitch.value = 'off'
        controleSwitch.className += "far fa-toggle-off"
    }
}

controleSwitch.addEventListener('click',function(){
    var getState = controleSwitch.value 
    switchState(getState)
})
