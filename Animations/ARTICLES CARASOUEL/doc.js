var c1 = document.querySelector('.b1art')
var c2 = document.querySelector('.b2art')
var c3 = document.querySelector('.b3art')
var s= document.querySelector('.slideart')


c1.addEventListener('click',()=>{

    s.classList.remove('a2art')
    s.classList.remove('a3art')
    s.classList.toggle('a1art')

})
c2.addEventListener('click',()=>{
    s.classList.remove('a3art')
    s.classList.remove('a1art')
    s.classList.toggle('a2art')



})
c3.addEventListener('click',()=>{
    s.classList.remove('a1art')
    s.classList.remove('a2art')
    s.classList.toggle('a3art')


})


