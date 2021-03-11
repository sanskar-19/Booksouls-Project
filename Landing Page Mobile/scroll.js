var n = 0
var g2=document.getElementById('contain')
var g3=document.getElementsByClassName('card')
var g4=document.getElementById('slidepod')
var g5=document.getElementsByClassName('d')
window.addEventListener('scroll', () => {
    // console.log('Scrolled')
    var g1 = window.scrollY;
    // console.log(n)
    
    
    if (g1 >= 300 & n == 0) {
        
        g3[0].classList.add('greycol');
        g3[1].classList.add('greycol');
        g3[2].classList.add('greycol');
        g3[3].classList.add('greycol');
        g3[4].classList.add('greycol');
        g3[5].classList.add('greycol');
        g3[6].classList.add('greycol');
        g3[7].classList.add('greycol');
        g3[8].classList.add('greycol');
        g3[9].classList.add('greycol');

        // console.log('Hey you have reached inspire me')
        n = 1;
        g2.classList.remove('infinitescroll1')
        g2.classList.add('infinitescroll1')
        
        setTimeout(()=>{
            
            g2.classList.remove('infinitescroll2')
            g2.classList.add('infinitescroll2')

        },5000)
        setTimeout(()=>{
            
            g2.classList.remove('infinitescroll3')
            g2.classList.add('infinitescroll3')

        },10000)

        setTimeout(()=>{
            
            g2.classList.remove('infinitescroll1')
            g2.classList.remove('infinitescroll2')
            g2.classList.remove('infinitescroll3')
            // g2.classList.add('infinitescroll3')


            g3[0].classList.remove('greycol');
            g3[1].classList.remove('greycol');
            g3[2].classList.remove('greycol');
            g3[3].classList.remove('greycol');
            g3[4].classList.remove('greycol');
            g3[5].classList.remove('greycol');
            g3[6].classList.remove('greycol');
            g3[7].classList.remove('greycol');
            g3[8].classList.remove('greycol');
            g3[9].classList.remove('greycol');            


        },15000)


    }
    // console.log(n)

    // console.log(g1);

    if(g1>=800 & n==1)
    {
        n=2;
        g5[0].classList.add('greypod')
        g5[1].classList.add('greypod')
        g5[2].classList.add('greypod')
        g5[3].classList.add('greypod')

        g4.classList.remove('infinitescroll4')
        g4.classList.add('infinitescroll4')

        setTimeout(()=>{
            g4.classList.remove('infinitescroll5')
            g4.classList.add('infinitescroll5')
        },2000)

        setTimeout(()=>{
            g4.classList.remove('infinitescroll4')
            g4.classList.remove('infinitescroll5')
            g5[0].classList.remove('greypod')
            g5[1].classList.remove('greypod')
            g5[2].classList.remove('greypod')
            g5[3].classList.remove('greypod')
        },4000)


        // console.log('Hey you have reached podcasts')
    }




})