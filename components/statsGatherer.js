var counted = false;
if (sessionStorage.getItem("visitCounted")) {
    counted = true;
} else {
    sessionStorage.setItem("visitCounted", "true")
}

var currentYear = new Date(Date.now()).getFullYear()
const defaultLocalStorageData = {}
if (defaultLocalStorageData[currentYear] == undefined) {
    defaultLocalStorageData[currentYear] = {
        sessions: 0
    }
}

var parsed = null
var stats = localStorage.getItem('AvansDirect.StatisticsGatherer')
if (!stats) {
    parsed = {... defaultLocalStorageData}
} else {
    parsed = JSON.parse(stats)
}
if (!counted) {
    parsed[currentYear].sessions += 1
}
localStorage.setItem('AvansDirect.StatisticsGatherer', JSON.stringify(parsed))
        
