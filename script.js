

var clear =document.getElementById("clearButton");
clear.addEventListener("click", function(){
document.getElementById("writeArea").value = "";
document.getElementById("writeTitle").value = "";

})

function remove(){
    var note = document.getElementById("note"); 
    note.remove("note");
}

var add = document.getElementById("submitButton");

add.addEventListener("click", function(){
    
    var areaWrite = document.getElementById("writeArea").value;
    if(!(areaWrite.length==0)){  //jesli pole do wpisywania notki nie jest puste
    
    var listNote = document.getElementById("list"); 
    var strong = listNote.firstElementChild;
    var note = document.createElement("div");    ///tworzenie diva
    
    note.innerHTML = '<div class="note" id="note"> <header class="note_header"><nav class="note_nav"><div class="titleDiv" id="titleDiv"></div><div class="dateNote" id="dateNote"></div><button type="button" class="edit"><i class="material-icons" style="color:white">edit</i></button><button type="button" class="delete" id = "delete" onclick="remove()"><i class="material-icons" style="color:white;font-size:40px">close</i></button></nav></header><div class="noteArea" id="noteArea"></div></div>';
  // listNote.appendChild(note);

   listNote.insertBefore(note, strong); //wstawianie przed
   
  var wroteNote = document.getElementById("writeArea").value; 
  document.getElementById("noteArea").innerHTML= wroteNote; //wpisanie tekstu z pola area do diva

  var wroteTitle = document.getElementById("writeTitle").value;
  if (wroteTitle.length==0){
    document.getElementById("titleDiv").innerHTML=wroteNote;
    var max=7;
    if(wroteNote.length>max){
        document.getElementById("titleDiv").innerHTML=wroteNote.substring(0,7) + "...";
    }
  }
  else{
    document.getElementById("titleDiv").innerHTML= wroteTitle ;//wpisanie tekstu z input tytułu do diva
  }

var dt = new Date();
var month = dt.getMonth()+1;
var day = dt.getDate();
var year = dt.getFullYear();
var hour = dt.getHours();
var minutes = dt.getMinutes();

document.getElementById("dateNote").innerHTML =  hour +':' + minutes  +"   "+ month + '-' + day + '-' + year;

document.getElementById('writeArea').value = ""; //puste pole do area
document.getElementById("writeTitle").value = ""; //puste pole do inputa
}
    
}, false)

var liczba = document.getElementById("writeArea");
liczba.addEventListener("keydown", function() {
    
    console.log(liczba.value.length);
    var max= 6;


})