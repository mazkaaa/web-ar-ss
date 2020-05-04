let tempSsButton = null;
let tempDownloadButton = null;

function makeScreenshot(){
    html2canvas(document.getElementById("camera"), {scale: 2}).then(canvas =>{
        canvas.id = "canvasID";
        var main = document.getElementById("main");
        //while (main.firstChild) { main.removeChild(main.firstChild); }
        main.appendChild(canvas);
    });
}

document.getElementById("a-make").addEventListener('click', function(){
    tempSsButton = document.getElementById("a-make").style.display

    document.getElementById("a-make").style.display = "none";
    makeScreenshot();
    document.getElementById("a-download").style.display = tempSsButton;
}, false);

document.getElementById("a-download").addEventListener('click', function(){
    this.href = document.getElementById("canvasID").toDataURL();
    this.download = "canvas-image.png";
    document.getElementById("a-make").style.display = tempSsButton;
    document.getElementById("a-download").style.display = "none";
}, false);