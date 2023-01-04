const data = {
  "audios":
  [
      {
          "name":"Even" , 
          "audio":"./public/audios/01.mp3",
          "id":"1"
      },
      {
          "name":"Up" , 
          "audio":"./public/audios/02.mp3",
          "id":"2"
      },
      {
          "name":"Sequence" , 
          "audio":"./public/audios/03.mp3",
          "id":"3"
      },
      {
          "name":"Catus" , 
          "audio":"./public/audios/04.mp3",
          "id":"4"
      },
      {
          "name":"Murmuration" , 
          "audio":"./public/audios/05.mp3",
          "id":"5"
      },
      {
          "name":"From a memory" , 
          "audio":"./public/audios/06.mp3",
          "id":"6"
      },
      {
          "name":"Three Parallels 1" , 
          "audio":"./public/audios/07.mp3",
          "id":"7"
      },
      {
          "name":"Three Parallels 2" , 
          "audio":"./public/audios/08.mp3",
          "id":"8"
      },
      {
          "name":"Three Parallels 3" , 
          "audio":"./public/audios/09.mp3",
          "id":"9"
      }
  ]
}

const audios = data.audios;

for(let audio in audios){

  var object = audios[audio];
  var number = object.id;
  var audioName = object.name;
  var src = object.audio;


  document.getElementById('audios').innerHTML +=
  '<div class="audio">'+
      '<p class="number">'+ number +'</p>' +
      '<button onclick=play('+ number +') class="btnPlay"><i name="play-pause" id='+ number +' class="bi bi-play-fill"></i></button>'+
      '<audio id='+ number +' class='+ "OFF" +' src='+ src +'>'+
      '</audio>'+
      '<button id="repetbtn" onclick=repet('+ number +')><i name="repet" id='+ number +' class="bi bi-repeat"></i></button>'+
      '<p class="nameMusic">'+ audioName +'</p>'+
  '</div>'
  }

const audio = document.getElementsByTagName('audio');
const playPause = document.getElementsByName('play-pause');
const repetIcon = document.getElementsByName('repet');

function play(number){

  for(var i = 0 ; i < audio.length ; i++){
    var index = audio[i];
    if(index.id == number){
      if(index.className == 'ON'){
        index.className = 'OFF'
        index.pause();
      }else{
        index.className = 'ON'
        index.play();
      }
    }else{
      index.pause();
    }
  }

  for(var i = 0 ; i < playPause.length ; i++){
    var icon = playPause[i];
    if(icon.id == number){
      if(icon.className=="bi bi-play-fill"){
        icon.className="bi bi-pause-fill"
      }else{
        icon.className="bi bi-play-fill"
      }
    }else{
      icon.className="bi bi-play-fill"
    }
  }
}


function repet(number){

  for(var i = 0 ; i < audio.length ; i++){
    if(audio[i].id == number){
      var index = audio[i];
      if(index.loop === false){
        index.loop = true
      }else{
        index.loop = false
      }
    }
  }

  for(var i = 0 ; i < repetIcon.length ; i++){
    var icon = repetIcon[i];
    if(icon.id == number){
      if(icon.className =="bi bi-repeat"){
        icon.className = "bi bi-repeat-1"
      }else{
        icon.className = "bi bi-repeat"
      }
    }else{

    }
  }
}

setTimeout(loader, 2000);
function loader(){
  document.getElementById('loader').style.display = "none";
  document.getElementById('app').style.display='block'
}