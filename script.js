

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
    
    note.innerHTML = '<div class="note" id="note"> <header class="note_header"><nav class="note_nav"><div class="note_title" id="title"></div><div class="note_date" id="date"></div><button type="button" class="nav_button nav_button--edit"><i class="material-icons" style="color:white">edit</i></button><button type="button" class="nav_button nav_button--delete" id = "delete" onclick="remove()"><i class="material-icons" style="color:white;font-size:35px">close</i></button></nav></header><div class="note_content" id="noteContent"></div></div>';
  // listNote.appendChild(note);

   listNote.insertBefore(note, strong); //wstawianie przed
   
  var wroteNote = document.getElementById("writeArea").value; 
  document.getElementById("noteContent").innerHTML= wroteNote; //wpisanie tekstu z pola area do diva

  var wroteTitle = document.getElementById("writeTitle").value;
  if (wroteTitle.length==0){
    document.getElementById("title").innerHTML=wroteNote;
    var max=7;
    if(wroteNote.length>max){
        document.getElementById("title").innerHTML=wroteNote.substring(0,7) + "...";
    }
  }
  else{
    document.getElementById("title").innerHTML= wroteTitle ;//wpisanie tekstu z input tytułu do diva
  }

var dt = new Date();
var month = dt.getMonth()+1;
var day = dt.getDate();
var year = dt.getFullYear();
var hour = dt.getHours();
var minutes = dt.getMinutes();

document.getElementById("date").innerHTML =  hour +':' + minutes  +"   "+ month + '-' + day + '-' + year;

document.getElementById('writeArea').value = ""; //puste pole do area
document.getElementById("writeTitle").value = ""; //puste pole do inputa
}
    
}, false)



