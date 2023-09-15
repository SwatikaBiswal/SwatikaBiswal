var x=5// x is a global var
console.log(x)
function show(){
    console.log("inside show function")
    console.log(x)
}
function dispaly(){
    console.log("inside display function")
    console.log(x)
}
show()
dispaly()