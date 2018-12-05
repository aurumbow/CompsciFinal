function showRest(){
   var name = document.getElementById("nameIn").value;
   //add rest of the page to document
   var fullPage; //holding space
   //add name + header
   fullPage = "<h2>Hello, "+name+"! Play a song for us?</h2><br>";
   //create html for guitars and buttons
   var guitarApic = '<img src="gtarA.png">';
   var guitarEpic = '<img src="gtarE.png">';
   var acoButton = '<button onclick="playAcoustic()">Play</button>';
   var eleButton = '<button onclick="playElectric()">Play</button>';

   //add table containing guitars and buttons to string
   fullPage += '<table class="center"><tr><th>Acoustic Guitar</th><th>Electric Guitar</th></tr><tr><td>'+guitarApic+"</td><td>"+guitarEpic+"</td></tr><tr><td>"+acoButton+"</td><td>"+eleButton+"</td></tr></table>";


   document.getElementById("guitars").innerHTML = fullPage;
}

function playAcoustic(){
  //declare array of audio files
  var songList = [new Audio('Agtar1.mp3'), new Audio('Agtar2.mp3'), new Audio('Agtar3.mp3')];
  //randomly pick a song from the list
  var songPick = Math.floor((Math.random() * songList.length) + 1);
  //play it
  songList[songPick].play();
}

function playElectric(){
  //declare array of audio files
  var songList = [new Audio('Egtar1.mp3'), new Audio('Egtar2.mp3'), new Audio('Egtar3.mp3')];
  //randomly pick a song from the list
  var songPick = Math.floor((Math.random() * songList.length) + 1);
  //play it
  songList[songPick].play();
}
