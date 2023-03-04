const keys = document.querySelectorAll(".key");
const showKeys = document.querySelector(".enable-keys");
const switcher = document.querySelector(".switcher");
const keysContainer = document.querySelector(".piano-keys");

// show keys
showKeys.addEventListener("change", ({ target }) => {
  if (target.checked) {
    switcher.classList.add("switcher-active")
    keysContainer.classList.remove("disabled-keys")
    return
  }
  switcher.classList.remove("switcher-active")
  keysContainer.classList.add("disabled-keys")
})

// play the sound of the note
const playNote = note => {
  const audio = new Audio(`../assets/notes/${note}.wav`)
  audio.play()
}

// when clicked, the key get new style and play its note
const mouseDown = (key) => {
  playNote(key.getAttribute("data-note"))

  if (key.className.includes("black")) {
    key.classList.add("black-pressed")
    return
  }
  key.classList.add("white-pressed")
}

// after clicked, the key get its default style
const mouseUp = (key) => {
  if (key.className.includes("black")) {
    key.classList.remove("black-pressed")
    return
  }
  key.classList.remove("white-pressed")
}

keys.forEach((key) => {
  key.addEventListener("mousedown", () => mouseDown(key))

  key.addEventListener("mouseup", () => mouseUp(key))
})

// keys event
const keyDown = {
  "q": () => mouseDown(keys[0]),
  "w": () => mouseDown(keys[1]),
  "e": () => mouseDown(keys[2]),
  "r": () => mouseDown(keys[3]),
  "t": () => mouseDown(keys[4]),
  "a": () => mouseDown(keys[5]),
  "s": () => mouseDown(keys[6]),
  "d": () => mouseDown(keys[7]),
  "f": () => mouseDown(keys[8]),
  "z": () => mouseDown(keys[9]),
  "x": () => mouseDown(keys[10]),
  "c": () => mouseDown(keys[11]),
  "v": () => mouseDown(keys[12]),
  "u": () => mouseDown(keys[13]),
  "i": () => mouseDown(keys[14]),
  "o": () => mouseDown(keys[15]),
  "p": () => mouseDown(keys[16]),
  "j": () => mouseDown(keys[17]),
  "k": () => mouseDown(keys[18]),
  "l": () => mouseDown(keys[19]),
  "ç": () => mouseDown(keys[20]),
  "m": () => mouseDown(keys[21]),
  ",": () => mouseDown(keys[22]),
  ".": () => mouseDown(keys[23]),
}
const keyUp = {
  "q": () => mouseUp(keys[0]),
  "w": () => mouseUp(keys[1]),
  "e": () => mouseUp(keys[2]),
  "r": () => mouseUp(keys[3]),
  "t": () => mouseUp(keys[4]),
  "a": () => mouseUp(keys[5]),
  "s": () => mouseUp(keys[6]),
  "d": () => mouseUp(keys[7]),
  "f": () => mouseUp(keys[8]),
  "z": () => mouseUp(keys[9]),
  "x": () => mouseUp(keys[10]),
  "c": () => mouseUp(keys[11]),
  "v": () => mouseUp(keys[12]),
  "u": () => mouseUp(keys[13]),
  "i": () => mouseUp(keys[14]),
  "o": () => mouseUp(keys[15]),
  "p": () => mouseUp(keys[16]),
  "j": () => mouseUp(keys[17]),
  "k": () => mouseUp(keys[18]),
  "l": () => mouseUp(keys[19]),
  "ç": () => mouseUp(keys[20]),
  "m": () => mouseUp(keys[21]),
  ",": () => mouseUp(keys[22]),
  ".": () => mouseUp(keys[23]),
}

document.addEventListener("keydown", e => {
  keyDown[e.key]()
})
document.addEventListener("keyup", e => {
  keyUp[e.key]()
})