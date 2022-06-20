var comment = "Do you know how to gt output in various programming language "

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
