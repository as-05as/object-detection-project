function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetecter = ml5.objectDetecter('cocossd, modelLoaded');
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
img = "";
status = "";

function preload(){
    img = loadImage('chairs and machine.jpg');
    }

    function modelLoaded() {
        console.log("Model Loaded!")
        status = true;
        objectDetecter.detect (img, gotResult);
    }
    
    function gotResult(error, results) {
        if(error) {
            console.log(error);
        }
        console.log(results);
    }