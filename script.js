//function submit(){
   // var wroteText = document.getElementById("writeArea").value;
    //document.getElementById("notearea").innerHTML= wroteText;
   
//}




//var titleWrite = document.getElementById("writeTitle").value;
//function autoWriteTitle(){
//if(!document.getElementById("writeTitle").value.trim()){
//while(titleWrite===""){
    //console.log("title");
//if(titleWrite.value.length<=0){
   // var typed= document.getElementById("writeArea").value;
   //document.getElementById("writeTitle").value= typed;
    
//}}
//}



/*function autoWriteTitle() {
    const typed = document.querySelector("#writeArea");
    if(!typed.value.length==0){
        const input = document.querySelector("#writeTitle");
        if (input.value.length==0) {
            document.querySelector("#writeTitle").value = typed.value;
       }}}*/





var clear =document.getElementById("clearButton");
clear.addEventListener("click", function(){
document.getElementById("writeArea").value = "";
document.getElementById("writeTitle").value = "";

})


function remove(){
    var note = document.getElementById("firstNote"); 
    note.remove("firstNote");
}

var add = document.querySelector(".submitButton");

add.addEventListener("click", function(){
    
    var areaWrite = document.querySelector("#writeArea").value;
    if(!(areaWrite.length==0)){  //jesli pole do wpisywania notki nie jest puste
    

    var listNote = document.getElementById("list"); 
    var strong = listNote.firstElementChild;
    var note = document.createElement("div");    ///tworzenie diva
    
    note.innerHTML = '<div class="firstNote" id="firstNote"> <header class="headerlist"><nav class="navlist"><div class="titleDiv" id="titleDiv"></div><div class="dateNote" id="dateNote"></div><button type="button" class="edit"><i class="material-icons" style="color:white">edit</i></button><button type="button" class="delete" id = "delete" onclick="remove()"><i class="material-icons" style="color:white;font-size:40px">close</i></button></nav></header><div class="notearea" id="notearea"></div></div>';
  // listNote.appendChild(note);

   listNote.insertBefore(note, strong); //wstawianie przed
   
  var wroteNote = document.getElementById("writeArea").value; 
  document.getElementById("notearea").innerHTML= wroteNote; //wpisanie tekstu z pola area do diva

  var wroteTitle = document.getElementById("writeTitle").value;
  if (wroteTitle.length==0){
      console.log("elo");
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