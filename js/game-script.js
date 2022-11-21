
import GamePreparer from "./game-preparer";
import GameCompetition from "./game-competition";
import announceWinner from "./game-announcer";

export const runGame = async () => {
    // countdown
    const gamePreparer = new GamePreparer();
    await gamePreparer.prepare();

    // competition
    const competition = new GameCompetition();
    const result = await competition.play();

    // announcing winner
    announceWinner(result)
}