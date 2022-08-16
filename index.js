var numberOfBtns = document.querySelectorAll(".tabla").length;
for (var i = 0; i < numberOfBtns; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var mouseClickBtn = this.innerHTML;
        //console.log(mouseClickBtn);
        // var audio = new Audio("sounds/a.aac");
        // audio.play();
        onSound(mouseClickBtn);
        highLightKeypressed(mouseClickBtn);

    });

}

// identyfying Keyboard key press

document.addEventListener("keypress", function(ifPressed) {
    onSound(ifPressed.key);
    highLightKeypressed(ifPressed.key);
})


function onSound(key) {
    switch (key) {
        case "a":
            var a1tone = new Audio("sounds/a.aac");
            a1tone.play();
            break;
        case "b":
            var b1tone = new Audio("sounds/b.aac");
            b1tone.play();
            break;

        case "c":
            var c1tone = new Audio("sounds/c.aac");
            c1tone.play();
            break;

        case "d":
            var d1tone = new Audio("sounds/d.aac");
            d1tone.play();
            break;

        case "e":
            var e1tone = new Audio("sounds/e.aac");
            e1tone.play();
            break;

        case "f":
            var f1tone = new Audio("sounds/f.aac");
            f1tone.play();
            break;

        case "g":
            var g1tone = new Audio("sounds/g.aac");
            g1tone.play();
            break;

        case "h":
            var h1tone = new Audio("sounds/h.aac");
            h1tone.play();
            break;

        case "j":
            var j1tone = new Audio("sounds/j.aac");
            j1tone.play();
            break;

        case "s":
            var s1tone = new Audio("sounds/s.aac");
            s1tone.play();
            break;

        case "u":
            var u1tone = new Audio("sounds/u.aac");
            u1tone.play();
            break;

        case "v":
            var v1tone = new Audio("sounds/v.aac");
            v1tone.play();
            break;

        case "w":
            var w1tone = new Audio("sounds/w.aac");
            w1tone.play();
            break;

        case "x":
            var x1tone = new Audio("sounds/x.aac");
            x1tone.play();
            break;

        case "y":
            var y1tone = new Audio("sounds/y.aac");
            y1tone.play();
            break;

        default:
            console.log(mouseClickBtn);
            break;
    }
}

function highLightKeypressed(currentKey) {
    var currentBtn = document.querySelector("." + currentKey);

    currentBtn.classList.add("pressed");
    setTimeout(function() {
        currentBtn.classList.remove("pressed");

    }, 100);
}