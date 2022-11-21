export default function WinnerAlertListerner(state) {
    const winnerAlertContainer = document.querySelector("#winner-alert")

    switch(state.status) {
        case "announcing_winner":
            winnerAlertContainer.classList.remove("hidden");
            break;
        default:
            winnerAlertContainer.classList.add("hidden");
            break;
    }
}