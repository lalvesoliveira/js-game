import GameState from "./game-state";

export default class Competition {
    resolver = null
    darkSizePercentage = 50
    lightSizePercentage = 50
    eventListener = this.keyListener.bind(this)

    play() {
        const state = GameState.getInstance();
        state.changeStatus("playing");

        return new Promise((resolver) => {
            this.resolver = resolver;
            document.addEventListener("keyup", this.eventListener)
        })
    }

    keyListener(e) {
        const lightKeyCodes = [83, 40]
        const darkKeyCodes = [87, 38]

        if (lightKeyCodes.includes(e.keyCode)) {
            this.growUpLightSide()
        }

        else if (darkKeyCodes.includes(e.keyCode)) {
            this.growUpDarkSide()
        }

        this.updateInterface()
        this.checkForWinner()
    }

    growUpLightSide() {
        this.lightSizePercentage = this.lightSizePercentage + 5
        this.darkSizePercentage = this.darkSizePercentage - 5
    }

    growUpDarkSide() {
        this.lightSizePercentage = this.lightSizePercentage - 5
        this.darkSizePercentage = this.darkSizePercentage + 5
    }

    updateInterface() {
        const lightSide = document.querySelector("#light-side")
        const darkSide = document.querySelector("#dark-side")
        lightSide.style.height = this.lightSizePercentage + '%'
        darkSide.style.height = this.darkSizePercentage + '%'
    }

    checkForWinner() {
        if (this.lightSizePercentage >= 100) {
            this.finishCompetition({ winner: "light" })
        }

        else if (this.darkSizePercentage >= 100) {
            this.finishCompetition({ winner: "dark" })
        }
    }

    finishCompetition(result) {
        this.resolver(result)
        document.removeEventListener("keyup", this.eventListener)
    }
}