export default function ScoreListerner(state) {
    const { score } = state
    const lightScoreSpan = document.querySelector("#score > .light-score")
    const darkScoreSpan = document.querySelector("#score > .dark-score")

    lightScoreSpan.innerHTML = `pontuação: ${score.light}`
    darkScoreSpan.innerHTML = `pontuação: ${score.dark}`
}