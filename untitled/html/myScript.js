$(document).ready(function() {
});

function fadeInTortas() {
    document.getElementById("tortas").style.display = "none";
    document.getElementById("postres").style.display = "flex";
}

function fadeInPostres() {
    document.getElementById("postres").style.display = "none";
    document.getElementById("tortas").style.display = "flex";
}