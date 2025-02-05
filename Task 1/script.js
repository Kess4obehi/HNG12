const colorBox = document.querySelector('[data-testid="colorBox"]')
const colorOptions = document.querySelectorAll('[data-testid="colorOption"]')
const gameStatus = document.querySelector('[data-testid="gameStatus"]')
const scoreElement = document.querySelector('[data-testid="score"]')
const newGameButton = document.querySelector('[data-testid="newGameButton"]')

let targetColor
let score = 0

function getRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

function startNewGame() {
  targetColor = getRandomColor()
  colorBox.style.backgroundColor = targetColor

  const colors = [targetColor]
  while (colors.length < 6) {
    const newColor = getRandomColor()
    if (!colors.includes(newColor)) {
      colors.push(newColor)
    }
  }

  colors.sort(() => Math.random() - 0.5)

  colorOptions.forEach((option, index) => {
    option.style.backgroundColor = colors[index]
  })

  gameStatus.textContent = ""
  gameStatus.classList.remove("correct", "wrong")
}

function checkGuess(guessedColor) {
  if (guessedColor === targetColor) {
    gameStatus.textContent = "Correct!"
    gameStatus.classList.add("correct")
    score++
    scoreElement.textContent = score
    setTimeout(startNewGame, 1500)
  } else {
    gameStatus.textContent = "Wrong! Try again."
    gameStatus.classList.add("wrong")
  }
}

colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const guessedColor = option.style.backgroundColor
    checkGuess(guessedColor)
  })
})

newGameButton.addEventListener("click", startNewGame)

startNewGame()

