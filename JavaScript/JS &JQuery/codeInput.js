alert("Welkom op deze pagina!");

const button = document.getElementById("btnPrompt");

function toonPrompt() { 
    const code = prompt('Vul uw promotiecode in', 'uw code');
    const tekst = 'De code die u invoerde was: ' + code;
    document.getElementById('divResult').innerHTML = tekst;
}
button.addEventListener("click", toonPrompt);
