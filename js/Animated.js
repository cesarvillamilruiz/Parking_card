//Movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.info h1');
const logo = document.querySelector('.logo img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Movement Animation event





container.addEventListener('mousemove', (e) => {
    let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerWidth / 2 - e.pageY) /25;
    if(screenWidth > 700)
    {   
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
    
})


//Animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(screenWidth > 700)
    {
        //PopOut
    title.style.transform = 'translateZ(150px)';
    logo.style.transform = 'translatez(150px) rotatez(-45deg)';
    purchase.style.transform = 'translatez(150px)';
    description.style.transform = 'translatez(150px)';
    sizes.style.transform = 'translatez(150px)';
    }    
})

//Animate out
container.addEventListener('mouseleave', e => {
    let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(screenWidth > 700)
    {
        card.style.transition = 'all 0.5s ease'
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;

        //PopBack
        title.style.transform = 'translateZ(0px)';
        logo.style.transform = 'translatez(0px) rotatez(0deg)';
        purchase.style.transform = 'translatez(0px)';
        description.style.transform = 'translatez(0px)';
        sizes.style.transform = 'translatez(0px)';
    }    
})
