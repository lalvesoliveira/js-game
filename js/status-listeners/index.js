import StarterListerner from "./starter"
import ScoreListerner from "./score"
import WinnerAlertListerner from "./winner-alert"

export default [
    { callback: StarterListerner, event: 'status' },
    { callback: ScoreListerner, event: 'score' },
    { callback: WinnerAlertListerner, event: 'status' },
]