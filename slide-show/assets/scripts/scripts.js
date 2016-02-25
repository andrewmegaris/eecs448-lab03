var imageArray = new Array();
imageArray[0] = new Image();
imageArray[0].src = 'assets/img/bombay.jpeg';

imageArray[1] = new Image();
imageArray[1].src = 'assets/img/plaka.jpeg';


imageArray[2] = new Image();
imageArray[2].src = 'assets/img/prague.jpeg';

imageArray[3] = new Image();
imageArray[3].src = 'assets/img/borabora.jpeg';

imageArray[4] = new Image();
imageArray[4].src = 'assets/img/mexico.jpeg';


function nextImage(element){
    var img = document.getElementById(element);
    //alert(element + "next" );
    

    for(var x = 0; x < imageArray.length; x++)
    {
        if(imageArray[x].src == img.src)
        {
            if(x == imageArray.length -1 )
            {
                //alert("true");
                document.getElementById(element).src = imageArray[0].src;
                break;
            }
            else
            {
                //alert("false");
                document.getElementById(element).src = imageArray[x + 1].src;
                break;
            }
        }
    }
}

function prevImage(element){
    var img = document.getElementById(element);
    //alert("prev");
    for(var x = 0; x < imageArray.length; x++)
    {
        if(imageArray[x].src == img.src)
        {
            if( x == 0 )
            {
                //alert("true");
                document.getElementById(element).src = imageArray[imageArray.length -1].src;
                break;
            }
            else
            {
                //alert("false");
                document.getElementById(element).src = imageArray[x - 1].src;
                break;
            }
        }
    }
}
