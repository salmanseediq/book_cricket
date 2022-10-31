let team0Select=document.querySelector('.team-0');
let team1Select=document.querySelector('.team-1');
let playBtn=document.querySelector('.play-btn');


team0Select.addEventListener('input',(e)=>{
    console.log(team0Select.value);
})

team1Select.addEventListener('input',(e)=>{
    console.log(team1Select.value);
})


playBtn.addEventListener('click',()=>{
    location.href=`play-cricket.html?team1=${team0Select.value}&team2=${team1Select.value}`;
})


