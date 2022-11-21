export default class GameState {
    static instance = null

    score = null // { light: 0, dark: 0 }
    status = null // waiting_start | preparing_to_play | playing | announcing_winner
    listeners = [] // { callback, event }

    addListener(listener, event) {
        this.listeners.push({ callback: listener, event })
    }

    addListeners(listeners) {
        this.listeners = [...this.listeners, ...listeners]
    }

    triggerListeners(event) {
        const matchedListeners = this.listeners.filter(entry => entry.event === event)
        const state = { score: this.score, status: this.status }
        matchedListeners.forEach(listener => listener.callback(state))
    }

    changeScore(newScore) {
        this.score = newScore
        this.triggerListeners('all')
        this.triggerListeners('score')
    }

    changeStatus(newStatus) {
        this.status = newStatus
        this.triggerListeners('all')
        this.triggerListeners('status')
    }

    initialize() {
        this.score = { light: 0, dark: 0 }
        this.status = 'waiting_start'
        
        this.triggerListeners('all')
        this.triggerListeners('score')
        this.triggerListeners('status')
    }

    static getInstance() {
        if (GameState.instance) {
            return GameState.instance
        }

        GameState.instance = new GameState();
        return GameState.instance
    }
}