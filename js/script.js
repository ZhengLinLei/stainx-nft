var moveCard;
window.addEventListener('load', ()=>{
    // Card move
    // let cardArr = document.querySelectorAll('.card');
    let cardWindow = document.querySelector('.card-window');
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

    // MOBILE DRAG AND MOVE
    let xPos = 0;
    let cardWidth = cardWindow.offsetWidth;

    cardWindow.addEventListener('touchstart', e =>{
        xPos = e.changedTouches[0].pageX;
    });
    cardWindow.addEventListener('touchend', e =>{
        let x = e.changedTouches[0].pageX - xPos;
        if(Math.abs(x) >= cardWidth/3){
            if(x < 0){
                let i = (cardFocusPos == 3)?0:cardFocusPos+1;
                moveCard(i);
            }else{
                let i = (cardFocusPos == 0)?3:cardFocusPos-1;
                moveCard(i);
            }
        }
    });

    // ASSETS
    setInterval(()=>{
        document.querySelector('.asset .num-change').innerHTML = ` ${Math.floor(Math.random() * (20 - 10 + 1)) + 10} `;
    }, 1000);
});