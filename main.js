var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();


function start()
{
    document.getElementById("text_box").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML=content;
    if(content=="take my selfie")
    {
        console.log("Taking Selfie");
        speak();
    }
    
}


function speak()
{
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 3 seconds";

    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    
    Webcam.attach(camera);
    setTimeout(function(){
    snapshot();
    save();

    },3000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");

function snapshot()
{
  Webcam.snap(function(data_uri){
      document.getElementById("output").innerHTML='<img id="Selfie_image" src="'+data_uri+'">';
  });
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("Selfie_image").src;
    link.href=image;
    link.click();
}
