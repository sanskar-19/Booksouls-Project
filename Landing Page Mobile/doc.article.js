

var c1art = document.querySelector('.b1art')
var c2art = document.querySelector('.b2art')
var c3art = document.querySelector('.b3art')
var sart= document.querySelector('.slideart')
var p=0

    c3art.addEventListener('click', ()=>{
        // console.log(p)
        if(p==0){
            // console.log('clicked once!')
            // sart.classList.remove('a1art')
            // sart.classList.remove('a2art')
            // sart.classList.remove('a3art')
            sart.classList.add('a1art')
            // p++;
        }
        if(p==1){
            // console.log('clicked twice!')
            // p++;
            // sart.classList.remove('a1art')
            // sart.classList.remove('a2art')
            // sart.classList.remove('a3art')
            sart.classList.add('a2art')
        }
        if(p==2){
            // console.log('clicked thrice!')
            // p++;
            // sart.classList.remove('a1art')
            // sart.classList.remove('a2art')
            // sart.classList.remove('a3art')
            sart.classList.add('a3art')
        }
        if(p==3){
            // console.log('clicked fourth!')
            // sart.classList.remove('a1art')
            // sart.classList.remove('a2art')
            // sart.classList.remove('a3art')
            sart.classList.add('a4art')
            // p++;
        }
        if(p==4){
            // console.log('clicked fifth!')
            // sart.classList.remove('a1art')
            // sart.classList.remove('a2art')
            // sart.classList.remove('a3art')
            sart.classList.add('a5art')
            // p++;
        }
        if(p==5){
            // console.log('clicked sicth!')
            // sart.classList.remove('a1art')
            // sart.classList.remove('a2art')
            // sart.classList.remove('a3art')
            sart.classList.add('a6art')
            // p++;
        }
        if(p==6){
            // console.log('clicked seven!')
            // sart.classList.remove('a1art')
            // sart.classList.remove('a2art')
            // sart.classList.remove('a3art')
            sart.classList.add('a7art')
            // p++;
        }
        if(p==7){
            // console.log('clicked eigth!')
            // sart.classList.remove('a1art')
            // sart.classList.remove('a2art')
            // sart.classList.remove('a3art')
            sart.classList.add('a8art')
            // p++;
        }
        if(p==8){
            console.log('clicked ninth!')
            // sart.classList.add('a0art')
            sart.classList.remove('a1art')
            sart.classList.remove('a2art')
            sart.classList.remove('a3art')
            sart.classList.remove('a4art')
            sart.classList.remove('a5art')
            sart.classList.remove('a6art')
            sart.classList.remove('a7art')
            sart.classList.remove('a8art')
            // sart.classList.remove('a1art')
            // p=0;
        }
        p++;

        if(p==9){
            // console.log('you have to go back')
            p=0

        }
    })



c1art.addEventListener('click',()=>{

    // sart.classList.remove('a2art')
    // sart.classList.remove('a3art')
    // sart.classList.toggle('a1art')

    if(p==1)
    {
    sart.classList.remove('a1art')    
    }
    if(p==2)
    {
    sart.classList.remove('a2art')    
    }
    if(p==3)
    {
    sart.classList.remove('a3art')    
    }
    if(p==4)
    {
    sart.classList.remove('a4art')    
    }
    if(p==5)
    {
    sart.classList.remove('a5art')    
    }
    if(p==6)
    {
    sart.classList.remove('a6art')    
    }
    if(p==7)
    {
    sart.classList.remove('a7art')    
    }
    if(p==8)
    {
    sart.classList.remove('a8art')    
}

if(p==0){
        // console.log('You are already at the center')
        p++
    }
    p--


})
c2art.addEventListener('click',()=>{
    sart.classList.remove('a1art')
    sart.classList.remove('a2art')
    sart.classList.remove('a3art')
    sart.classList.remove('a4art')
    sart.classList.remove('a5art')
    sart.classList.remove('a6art')
    sart.classList.remove('a7art')
    sart.classList.remove('a8art')
    p=0


})
// c3art.addEventListener('click',()=>{
//     sart.classList.remove('a1art')
//     sart.classList.remove('a2art')
//     sart.classList.toggle('a3art')


// })


