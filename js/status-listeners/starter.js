export default function StarterListerner(state) {
    switch(state.status) {
        case "waiting_start":
            makeStarterVisible();
            resetWaitingToStartText();
            break;
        case "preparing_to_play":
            makeStarterVisible();
            resetPreparingToPlayText();
            resetCompetitionInterface();
            break;
        default:
            hideStarterArea();
            break;
    }
}

function makeStarterVisible() {
    const starterContainer = document.querySelector("#starter");
    starterContainer.classList.remove("hidden");
}

function resetWaitingToStartText() {
    const actionSpan = document.querySelector("#starter > .action");
    actionSpan.innerHTML = "Iniciar";
}

function resetPreparingToPlayText() {
    const actionSpan = document.querySelector("#starter > .action");
    actionSpan.innerHTML = "Preparando...";
}

function resetCompetitionInterface() {
    const competitionLightSide = document.querySelector("#light-side")
    const competitionDarkSide = document.querySelector("#dark-side")
    competitionLightSide.style.height = '50%'
    competitionDarkSide.style.height = '50%'
}

function hideStarterArea() {
    const starterContainer = document.querySelector("#starter");
    starterContainer.classList.add("hidden");
}