var x = document.getElementsByClassName('icon')
var y = document.getElementsByClassName('button')
var z = document.getElementsByClassName('a')
console.log(y)

y[0].addEventListener('click', ()=>{

    if(z[0].classList.contains('hide')==true){
        z[0].classList.remove('out')
        z[0].classList.toggle('hide')

    }
    else{
     z[0].classList.toggle('out')
     setTimeout(()=>{
     z[0].classList.toggle('hide')
    
     }, 200)
    }


})