function rmvBottle() {
    var bottlesElement = document.getElementById("bottles");
    var bottles = parseInt(bottlesElement.textContent);

    if (bottles > 0) {
      bottles--;
      bottlesElement.textContent = bottles;
    }
  }