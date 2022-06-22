
var array = []
var array2 = []
var k = -1
for (let i = 100; i > 0; i--) {
    if (i%5 == 0){
        array.push([])
        k++
        array2.push(k)
    }
    array[array2[k]].push(i)
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i].join("    "))
}
