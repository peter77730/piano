window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(key);
    if(!audio){
     return;   
    }
    key.classList.toggle("whitePush");
    audio.currentTime = 0;
    audio.play();
    key.addEventListener()
})
