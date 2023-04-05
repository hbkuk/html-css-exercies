window.onload = function() {
    document.getElementById( "dayBtn").onclick = function() {
       let h1 = document.getElementById( "h1" );
       let BtnColor = document.getElementById( "dayBtn" );
       let BtnImage = document.getElementsByClassName("fa-regular fa-moon");

       if(h1.style.background == "white") {
           h1.style.background = "black";
           h1.style.color = "#808080"

           BtnColor.style.color = "black";
           BtnColor.style.background = "yellow"

           return;
           
       }

       if(h1.style.background == "black") {
           h1.style.background = "white";
           h1.style.color = "black";

           BtnColor.style.color = "#808080";
           BtnColor.style.background = "white";
           return;
       }
    }
}