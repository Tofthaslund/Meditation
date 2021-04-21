const app = () => {

    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //Sounds
    const sounds = document.querySelectorAll('.sound-picker button');
    //Time Display
    const timeDisplay = document.querySelector('.time-display');
    //Get the lenght of the outline
    const outlineLength = outline.getTotalLength();
    //Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;


    //Play sound
    play.addEventListener('click', () => {
       checkPlaying(song);
    });

    //creat function to stop and play sounds
    const checkPlaying = song => {
        if(song.paused){
            song.play();
            video.play();
            play.src = 'svg/pause.svg';
        }else{
            song.pause();
            video.pause();
            play.src = 'svg/play.svg';
        }
    };

    //animae the circle 
    song.ontimeupdate = function(){
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.florr(elapsed / 60);


    //Animate the circle
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

    //animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`
    };
};

app();