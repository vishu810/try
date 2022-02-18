
//this funtion is for printing que and ans on clicking save


function printQA() {
  var x = document.getElementById("QTextarea").value;
  var y = document.getElementById("ATextarea").value;
  document.getElementById("QA").innerHTML = x;
  document.getElementById("AQ").innerHTML=y;
  //this func is used to show ,"show hide" link only after we click on submit
  var link =document.getElementById("showhide");
  if (link.style.display === "none") {
    link.style.display = "block";
  }
  else {
    link.style.display = "none";
  }
//document.getElementsByClassName("card").style.display ="block ";
  }
    //this function is to show answer by clicking on link
     function showText(id)
      {
       document.getElementById(id).style.display = "block";
      }
 
    //this function is for showing que ans box after clicking on "add question"
     function showtext(){
		var text = document.getElementById("form");
      if (text.style.display === "none") {
      text.style.display = "block";
      } else {
      text.style.display = "none";
      }

      var grid = document.getElementById ("hide");
        if (grid.style.display === "none") {
        grid.style.display = "block";
        } else {
        grid.style.display = "none";
        }}
