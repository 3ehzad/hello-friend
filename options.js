const options = {
    TITLE: "Hello/ Braiins",
    ROOT_FOLDER: /(bookmarks (tool)?bar|favou?rites bar)/i,
    TITLE_COLOR: "#6B50FF",
    BACKGROUND: "#282936",
    SEPARATORS: ["-", ""],
    COLOR_THEME: [
        "#FEDD6F",
        "#F95355",
        "#56D8E0",
        "#fb82a8",
        "#13A454",
        "#4b8aff",
        "#d28df7",
    ],
    MAX_NAME_LENGTH: 30,
};

 // Background switcher
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.background = options.BACKGROUND;
    document.getElementById("welcome").style.color = options.TITLE_COLOR;
    var images = ['bg1.png', 'bg2.jpg', 'bg3.jpg', 'bg4.png', 'bg5.jpg'];
    document.body.style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';

});

var myVar = setInterval(function() {
    myTimer();
  }, 1000);
  
  function myTimer() {
    const cz = new Date(new Date().toLocaleString('en', {timeZone: 'Europe/Prague'}))
    const us = new Date(new Date().toLocaleString('en', {timeZone: 'America/Mexico_City'}))

    document.getElementById("cz").innerHTML = " | CZ "+cz.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById("us").innerHTML = "US "+us.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }

