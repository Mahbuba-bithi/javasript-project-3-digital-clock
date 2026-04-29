const clock = document.getElementById('clock')
// evabe o use korA jabe
// document.querySelector('#clock')

// jotokhon sript open hobe totokhon run korbo
setInterval(function(){
    
let date = new Date();
console.log (date.toLocaleTimeString());
},1000)

