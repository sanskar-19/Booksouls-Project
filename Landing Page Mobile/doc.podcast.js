var c1 = document.querySelector('.b1pod')
var c2 = document.querySelector('.b2pod')
var c3 = document.querySelector('.b3pod')
var c4 = document.querySelector('.b4pod')
var s= document.querySelector('.slidepod')

var x1 = document.querySelector('.bl1')
var x2 = document.querySelector('.bl2')
var x3 = document.querySelector('.bl3')
var x4 = document.querySelector('.bl4')

c1.addEventListener('click',()=>{

    s.classList.remove('a2pod')
    s.classList.remove('a3pod')
    s.classList.remove('a4pod')
    s.classList.toggle('a1pod')

    x2.classList.remove('color')
    x3.classList.remove('color')
    x4.classList.remove('color')
    x1.classList.toggle('color')

})
c2.addEventListener('click',()=>{
    s.classList.remove('a3pod')
    s.classList.remove('a4pod')
    s.classList.remove('a1pod')
    s.classList.toggle('a2pod')

    x1.classList.remove('color')
    x3.classList.remove('color')
    x4.classList.remove('color')
    x2.classList.toggle('color')

})
c3.addEventListener('click',()=>{
    s.classList.remove('a1pod')
    s.classList.remove('a2pod')
    s.classList.remove('a4pod')
    s.classList.toggle('a3pod')

    x1.classList.remove('color')
    x2.classList.remove('color')
    x4.classList.remove('color')
    x3.classList.toggle('color')

})
c4.addEventListener('click',()=>{
    s.classList.remove('a1pod')
    s.classList.remove('a2pod')
    s.classList.remove('a3pod')
    s.classList.toggle('a4pod')

    x1.classList.remove('color')
    x2.classList.remove('color')
    x3.classList.remove('color')
    x4.classList.toggle('color')

})



x4.addEventListener('click',()=>{
    s.classList.remove('a1pod')
    s.classList.remove('a2pod')
    s.classList.remove('a3pod')
    s.classList.toggle('a4pod')

    x1.classList.remove('color')
    x2.classList.remove('color')
    x3.classList.remove('color')
    x4.classList.toggle('color')
})
x1.addEventListener('click',()=>{

    s.classList.remove('a2pod')
    s.classList.remove('a3pod')
    s.classList.remove('a4pod')
    s.classList.toggle('a1pod')


    x2.classList.remove('color')
    x3.classList.remove('color')
    x4.classList.remove('color')
    x1.classList.toggle('color')

})
x2.addEventListener('click',()=>{
    s.classList.remove('a3pod')
    s.classList.remove('a4pod')
    s.classList.remove('a1pod')
    s.classList.toggle('a2pod')

    x1.classList.remove('color')
    x4.classList.remove('color')
    x3.classList.remove('color')
    x2.classList.toggle('color')

})
x3.addEventListener('click',()=>{
    s.classList.remove('a1pod')
    s.classList.remove('a2pod')
    s.classList.remove('a4pod')
    s.classList.toggle('a3pod')

    x1.classList.remove('color')
    x2.classList.remove('color')
    x4.classList.remove('color')
    x3.classList.toggle('color')
    
})