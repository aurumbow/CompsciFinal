function spawnGuitars(){
  //clear space
  document.getElementById("spawnZone").innerHTML = "";

 var toSpawn = document.getElementById("numToSpawn").value;

 //spawn the count number of guitars, alternating and with 6 on each line
 var spawnedGtars; //holding space
 for (var count = 1; count <= toSpawn; count++){
   spawnedGtars = "";
   if ((count%2)==0){
     //add electric guitar
     spawnedGtars += '<img src="smallGtarE.png">';
   } else {
     //add acoustic guitar
     spawnedGtars += '<img src="smallGtarA.png">';
   }
   //add line break every 6th guitar
   if ((count%6)==0){
     spawnedGtars += "<br>";
   }
   //add to innerHTML
   document.getElementById("spawnZone").innerHTML += spawnedGtars;
 }
}
