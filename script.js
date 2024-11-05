// let songname=document.querySelector("#song-name")
// let songsinger=document.querySelector("#song-singer")
// let playpauseimg =document.querySelector("#play-img")
// let volumeRange=document.querySelector("#volume-range")
// let songRange=document.querySelector("#song-range")
// let volsvg=document.querySelector("#vol-svg")
// let musician=document.querySelector("#musician")
// let playist_img=document.querySelector("#playist_img")
// let playist=document.querySelector(".playlist")
// let playlist_song=document.querySelectorAll(".playlist-song")
// let songimg=document.querySelector("#song-img")
// let index=0;
// let playingsongs=false;
// let track=document.createElement("audio")
// let song =[
// {
//     name:"ve kamleya",
//     path:"firstsong.mp3",
//     Image:"s1.jpg",
//     singer:"arjit singh",
// },
// {
//     name:"ve kamleya",
//     path:"firstsong.mp3",
//     Image:"s2.jpg",
//     singer:"arjit singh",
// },
// {
//     name:"ve kamleya",
//     path:"firstsong.mp3",
//     Image:"s3.jpg",
//     singer:"arjit singh",
// },
// {
//     name:"ve kamleya",
//     path:"firstsong.mp3",
//     Image:"s4.jpg",
//     singer:"arjit singh",
// }    
// ]
// function loadTrack(index){
//     track.src=song[index].path;
//     songname.innerHTML=song[index].name;
//     songsinger.innerHTML=song[index].singer;
//     songimg.style='background-image:url("${song[index].img})';
//      volume()
//      duration()
//      setInterval(()=>{
//         songRange.max=track.duration
//         songRange.value=track.currentTime
//      },1000)
//      track.loop=true
//      track.load()
// }
// loadTrack(index);

// function play(){
//     if(playingsongs==false){
//         play()
        
//     }else{
//         pause()
        

//     }
// }
// function playingsongs(){
//     track.play();
//     playingsongs=true;
//     playpauseimg.src="pause.svg"
//     musician.style.dispay="block"
// }
// function pausesongs(){
//     track.pause();
//     playingsongs=flase;
//     playpauseimg.src="play .svg"
//     musician.style.dispay="none"
// }
// function nextsong(){
//     if(index<songs.length-1){
//         index++;
//         loadTrack(index)
//         playingsongs()
//     }else{
//         index=0; 
//         loadTrack(index)
//     playingsong()
//  }
// }

// function pervioussong(){
//     if(index>0){
//         index--;
//         loadTrack(index)
//         playingsong()
//     }else{
//         index=songs.length-1; 
//         loadTrack(index)
//     playingsong()
//  }
// }
// function volume(){
//     track.volume= volumeRange.value/100;
//     if(volumeRange.value==0){
//         volsvg.src="mute.svg"
//     }else{
//         volsvg.src="volume.svg"
//     }

// }
// function duration(){
//     track.currentTime=songRange.value
// }

// playist_img.addEventListener("click",()=>{
//     playist.classList.toggle("playkist-active")
//     if(playist.classList.contains("playist-active")){
//         playist_img.src="cross.svg"
//     }else{
//         playist_img.src="playlist.svg"
//     }

// })
// playlist_song.forEach(song,index)=>{
//     song.addEventListener('click',()=>{
//         loadTrack(index);
//         playingsongs()
//         playist.classList.remove("playlist-active")
//     })
// }

(() => {
    const songName = document.querySelector("#song-name");
    const songSinger = document.querySelector("#song-singer");
    const playPauseImg = document.querySelector("#play-img");
    const volumeRange = document.querySelector("#volume-range");
    const songRange = document.querySelector("#song-duration");
    const volSvg = document.querySelector("#vol-svg");
    const musician = document.querySelector("#musician");
    const playlistImg = document.querySelector("#playist_img");
    const playlist = document.querySelector(".playlist");
    const playlistSongs = document.querySelectorAll(".playlist-song");

    let index = 0;
    let isPlaying = false;
    const track = new Audio();

    const songs = [
        {
            name: "Ve Kamleya",
            path: "firstsong.mp3",
            image: "s1.jpg",
            singer: "Arjit Singh",
        },
        {
            name: "Ve Kamleya",
            path: "firstsong.mp3",
            image: "s2.jpg",
            singer: "Arjit Singh",
        },
        {
            name: "Ve Kamleya",
            path: "firstsong.mp3",
            image: "s3.jpg",
            singer: "Arjit Singh",
        },
        {
            name: "Ve Kamleya",
            path: "firstsong.mp3",
            image: "s4.jpg",
            singer: "Arjit Singh",
        }
    ];

    function loadTrack(index) {
        track.src = songs[index].path;
        songName.innerHTML = songs[index].name;
        songSinger.innerHTML = songs[index].singer;
        musician.style.backgroundImage = `url("${songs[index].image}")`;

        volume();
        duration();

        setInterval(() => {
            songRange.max = track.duration;
            songRange.value = track.currentTime;
        }, 1000);

        track.loop = true;
        track.load();
    }

    function play() {
        if (!isPlaying) {
            track.play();
            isPlaying = true;
            playPauseImg.src = "pause.svg";
            musician.style.display = "block";
        } else {
            pause();
        }
    }

    function pause() {
        track.pause();
        isPlaying = false;
        playPauseImg.src = "play.svg";
        musician.style.display = "none";
    }

    function nextSong() {
        index = index < songs.length - 1 ? index + 1 : 0;
        loadTrack(index);
        play();
    }

    function previousSong() {
        index = index > 0 ? index - 1 : songs.length - 1;
        loadTrack(index);
        play();
    }

    function volume() {
        track.volume = volumeRange.value / 100;
        volSvg.src = volumeRange.value == 0 ? "mute.svg" : "volume.svg";
    }

    function duration() {
        track.currentTime = songRange.value;
    }

    playlistImg.addEventListener("click", () => {
        playlist.classList.toggle("playlist-active");
        playlistImg.src = playlist.classList.contains("playlist-active") ? "cross.svg" : "playlist.svg";
    });

    playlistSongs.forEach((songElement, idx) => {
        songElement.addEventListener('click', () => {
            index = idx;
            loadTrack(index);
            play();
            playlist.classList.remove("playlist-active");
        });
    });

    // Initial load
    loadTrack(index);
})();
