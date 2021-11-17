Webcam.set({
    width : 350 ,
    height : 300 , 
    image_format : 'png' , 
    png_quality : 100 
}) ; 

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() 
{
 Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
 }); 


}

classifier = ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/tJ4rps4qp/',modelLoaded) ;
function modelLoaded()
{
console.log('model has loaded !!');

}