// var z1= document.getElementsByClassName('h-class')
var z2= document.getElementsByClassName('buttontoggle')
var z3= document.getElementsByClassName('para')
var z4= document.getElementsByClassName('mybutton')

z2[0].addEventListener('click',()=>{
    z3[0].classList.toggle('hide')
    z2[0].classList.toggle('add')
    z2[0].classList.toggle('add1')
    z4[0].classList.toggle('pad')
    z4[0].classList.toggle('add2')
})
z2[1].addEventListener('click',()=>{
    z3[1].classList.toggle('hide')
    z2[1].classList.toggle('add')
    z2[1].classList.toggle('add1')
    z4[1].classList.toggle('pad')

})