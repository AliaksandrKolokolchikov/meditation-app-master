const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //Sounds
    const sounds = document.querySelector('.sound-picker button');
    //Time
    const timeDisplay = document.querySelector('.time-display');

    const outlineLength = outline.getTotalLength();
    //Duration
    let fakeDuration = 600;

    outline.style.strokeDashoffset = outlineLength;
    outline.style.strokeDasharray = outline;

    //play song
    play.addEventListener('click', () => {
        checkPlaying(song)
    });

    const checkPlaying = song => {
        if (song.paused) {
            song.play()
            video.play()
            play.src = './svg/pause.svg';
        } else {
            song.pause()
            video.pause()
            play.src = './svg/play.svg'
        }
    }
};
app()