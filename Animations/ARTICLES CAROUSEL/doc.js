big1 =document.querySelector('.image1');
big2 =document.querySelector('.image2');
big3 =document.querySelector('.image3');

setInterval(()=>{
    big1.classList.add('fade1');
    console.log('This function executed');
    setInterval(()=>{
        big1.classList.remove('fade1');},10000);
    
    
}, 15000);


// setInterval(()=>{
//     big1.classList.toggle('fade1');
//     console.log('This function executed');
    
    
// }, 8000);


// setInterval(()=>{
//     big1.classList.toggle('fade1');
//     console.log('This function executed');
    
    
// }, 8000);
