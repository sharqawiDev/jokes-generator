import generateJoke from "./generateJoke";
import './styles/main.scss'
import laugh from "./assets/laugh.png"

const laughImg = document.querySelector('#laughImg')
laughImg.src = laugh

generateJoke()

const jokeBtn = document.querySelector('button')
jokeBtn.onclick = (ev) => {
    ev.preventDefault()
    generateJoke()
}