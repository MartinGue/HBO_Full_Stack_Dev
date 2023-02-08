const button = document.getElementById("btnPrompt");

function toonBrowserversie() { 
    const code = navigator.appVersion;
    const tekst = 'De browser die u gebuikt is: ' + code;
    document.getElementById('divResult').innerHTML = tekst;
}
button.addEventListener("click", toonBrowserversie);
