import GameState from "./game-state";
import { runGame } from "./game-script";
import StatusListeners from "./status-listeners";

const state = GameState.getInstance();
state.addListeners(StatusListeners);
state.initialize();

const starterAction = document.querySelector("#starter > .action");
const winnerModal = document.querySelector("#winner-alert > .content-modal");
starterAction.addEventListener("click", runGame)
winnerModal.addEventListener("click", runGame)