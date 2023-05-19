console.log("welcome to spotify");
let songIndex=0;
let audioElement=new Audio(loseyoutoloveme.mp3);
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Feel me",filePath:"C:\Users\HP\spotify-clone\loseyoutoloveme.mp3",coverPath:"C:\Users\HP\spotify-clone\albumimage1.jpg"},
    {songName:"Look at her now",filePath:"C:\Users\HP\spotify-clone\song2.mp3",coverPath:"C:\Users\HP\spotify-clone\image2.jpg"},
    {songName:"Feel me",filePath:"C:\Users\HP\spotify-clone\loseyoutoloveme.mp3",coverPath:"C:\Users\HP\spotify-clone\albumimage1.jpg"},
    {songName:"Look at her now",filePath:"C:\Users\HP\spotify-clone\song2.mp3",coverPath:"C:\Users\HP\spotify-clone\image2.jpg"},
    {songName:"Feel me",filePath:"C:\Users\HP\spotify-clone\loseyoutoloveme.mp3",coverPath:"C:\Users\HP\spotify-clone\albumimage1.jpg"},
    {songName:"Look at her now",filePath:"C:\Users\HP\spotify-clone\song2.mp3",coverPath:"C:\Users\HP\spotify-clone\image2.jpg"},
    {songName:"Feel me",filePath:"C:\Users\HP\spotify-clone\loseyoutoloveme.mp3",coverPath:"C:\Users\HP\spotify-clone\albumimage1.jpg"},
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
    
masterPlay.addEventListener('click',()=>{
   if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
