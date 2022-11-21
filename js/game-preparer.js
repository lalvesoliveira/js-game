import GameState from "./game-state";
var INTERVAL = null

export default class GamePreparer {
    countdown = 3;

    prepare() {
        const state = GameState.getInstance();
        state.changeStatus("preparing_to_play");
        
        return new Promise((resolver) => {
            clearInterval(INTERVAL);
            INTERVAL = setInterval(() => this.onTick(resolver), 1500)
        })
    }

    onTick(resolver) {
        if (this.countdown === 0) resolver()

        const actionSpan = document.querySelector("#starter > .action");
        actionSpan.innerHTML = this.countdown;
        --this.countdown
    }
}