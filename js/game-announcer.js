import GameState from "./game-state";

export default function AnnounceWinner(result) {
    const state = GameState.getInstance();
    state.changeStatus("announcing_winner");

    const newLightScore = result.winner === "light" ? state.score.light + 1 : state.score.light;
    const newDarkScore = result.winner === "dark" ? state.score.dark + 1 : state.score.dark;
    const newScore = { light: newLightScore, dark: newDarkScore };
    state.changeScore(newScore);
}