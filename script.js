

const con = document.querySelector("#container")
const love = document.querySelector("i")

con.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%,-50%) scale(1)';
    love.style.opacity = 0.8

setTimeout(function(){
     love.style.opacity = 0;

},1000)
    
    setTimeout(function(){
     love.style.transform = 'translate(-50%,-50%) scale(0)'
    //  love.transition = "transform ease-in 0.1s";
},2000)
})


