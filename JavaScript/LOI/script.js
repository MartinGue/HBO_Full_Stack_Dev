window.onload = function() {
    alert('Pagina geladen');
    showNamePrompt();
  }

  function showNamePrompt() {
    let name = prompt('Wat is uw naam?');
    if (name) {
      let isNameCorrect = confirm(`Uw naam is ${name}, is dit correct?`);
      if (isNameCorrect) {
        let welcomeText = document.getElementById('welcome-text');
        welcomeText.innerHTML = `Welkom ${name}, een fijne dag gewenst!`;
      } else {
        showNamePrompt();
      }
    } else {
      showNamePrompt();
    }
  }