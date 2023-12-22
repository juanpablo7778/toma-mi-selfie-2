var SpeechRecognition=window.webkitSpeechRecognition;    
var recognition=new SpeechRecognition();
var Texto= document.getElementById("textbox");
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function(event)  {
    console.log(event);
    var Content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log (Content); 
    if (Content == "Toma mi selfie")
    {
        console.log("tomando selfie");
        speak();
        
    }
}
function speak() {
    var synth = window.speechSynthesis;
    textocompu = "tomando tu selfie";
    var utterThis = new SpeechSynthesisUtterance(textocompu);
synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        Take_selfie();
        save();
    },5000);


}
camera=document.getElementById("camera");
Webcam.set({width:360, height:250, image_format:'jpeg', jpeg_quality:90 }); 

function Take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});
}
function save() { 
    link = document.getElementById("link");
     image = document.getElementById("selfie_image").src ;
     ink.href = image;
     link.click(); }