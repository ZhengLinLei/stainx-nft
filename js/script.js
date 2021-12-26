var moveCard;
window.addEventListener('load', ()=>{
    // Card move
    let cardArr = document.querySelectorAll('.card');
    let cardList = document.querySelector('.card-window > div');
    let pointArr = document.querySelectorAll('.card-img .point');
    let cardFocusPos = 0;

    moveCard = (pos)=>{
        cardFocusPos = pos;
        cardList.style.transform = `translateX(-${300*pos}px)`;

        pointArr.forEach(el =>{
            el.classList.remove('active');
        });
        pointArr[pos].classList.add('active');
    }
    
    // START
    pointArr.forEach((el, index)=>{
        el.addEventListener('click', ()=>{
            moveCard(index);
        });
    });

    setInterval(()=>{
        let i = (cardFocusPos == 3)?0:cardFocusPos+1;
        moveCard(i);
    }, 100000);


    // ASSETS
    setInterval(()=>{
        document.querySelector('.asset .num-change').innerHTML = ` ${Math.floor(Math.random() * (20 - 10 + 1)) + 10} `;
    }, 1000);
});