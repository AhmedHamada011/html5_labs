var vid = document.getElementById("vid");
var vidRange = document.getElementById("vid_range");
var volumeRange = document.getElementById("volume_range");
var speedRange = document.getElementById("speed_range");
var vidVolume = 0.5;
vid.addEventListener('timeupdate',function(){
    vidRange.value = vid.currentTime;
});


vidRange.addEventListener('change',function(){
    vid.currentTime = vidRange.value;
});

volumeRange.addEventListener('change',function(){
    vid.volume = volumeRange.value;
    vidVolume = vid.volume;
});


speedRange.addEventListener('change',function(){
    vid.playbackRate = speedRange.value;
});


function getBackMore(){
    vid.currentTime -= 5;
}

function getBack(){
    vid.currentTime -= 1;
}

function getForwardMore(){
    vid.currentTime += 5;
}

function getForward(){
    vid.currentTime += 1;
}

function getFullScreen(){
    vid.requestFullscreen();
}

function getVolumeMute(){
    if(vid.volume == 0){
        console.log(vidVolume);
        vid.volume = vidVolume;
        volumeRange.value = vid.volume;
    }else{
        vid.volume = vidVolume;
        volumeRange.value = 0;
        vid.volume = 0;

    }
    
}
