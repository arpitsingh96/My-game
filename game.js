document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode);
    if(e.keyCode == 38){
        dino = document.querySelector('.dino'); // Assuming 'dino' is a class
        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino');
        }, 500);
    }

    if(e.keyCode==39){
        dino = document.querySelector('.dino'); // Assum
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + 'px';

    }

    if(e.keyCode==37){
        dino = document.querySelector('.dino'); // Assum
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + 'px';

    }

}    


setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));


    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    if(offsetX< 93 && offsetY<52){
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }
    
    else{

        var score=0;
        score+=1;
        updatescore = score;

    
    }

    function updatescore(score){
       document.scorecontainer(score) = 'Your score' + score;

    }
})


