function changeColors(){
    var paragraph = document.getElementById("para")
    var backgroundInputColor = document.getElementById("backgroundInput").value;
    var borderInputColor = document.getElementById("borderInput").value;
    //alert("debug1");
    
    if (backgroundInputColor == "red value")
    { paragraph.style.backgroundColor = "red";}
    else if(backgroundInputColor == "green value")
    {  paragraph.style.backgroundColor = "green";}
    else if(backgroundInputColor == "blue value")
    {  paragraph.style.backgroundColor = "blue";}
    
        if (borderInputColor == "red value")
    { //alert("debug2");
      paragraph.style.borderColor = "red";}
    else if(borderInputColor == "green value")
    {  paragraph.style.borderColor = "green";}
    else if(borderInputColor == "blue value")
    {  paragraph.style.borderColor = "blue";}
}

