showStatus()

function showStatus() {
    APIROBO.get("/api/head/inclination").then(function (response) {
        let headInclination = document.getElementById('head-inclination')
        headInclination.innerHTML = formatInclination(response.data)
    })
    APIROBO.get("/api/head/rotation").then(function (response) {
        let headRotation = document.getElementById('head-rotation')
        headRotation.innerHTML = formatNumber(response.data)
    })
    APIROBO.get("/api/arms/elbow/left").then(function (response) {
        let elbowLeft = document.getElementById('elbow-left')
        elbowLeft.innerHTML = formatContraction(response.data)
    })
    APIROBO.get("/api/arms/wrist/left").then(function (response) {
        let wristLeft = document.getElementById('wrist-left')
        wristLeft.innerHTML = formatNumber(response.data)
    })
    APIROBO.get("/api/arms/elbow/right").then(function (response) {
        let elbowRight = document.getElementById('elbow-right')
        elbowRight.innerHTML = formatContraction(response.data)
    })
    APIROBO.get("/api/arms/wrist/right").then(function (response) {
        let wristRight = document.getElementById('wrist-right')
        wristRight.innerHTML = formatNumber(response.data)
    })
}

function formatInclination(value) {
    switch (value) {
        case "DOWN":
            return "Para Baixo"
            break;
        case "REST":
            return "Em Repouso"
            break;
        case "UP":
            return "Para Cima"
            break;
    }
}

function formatContraction(value) {
    switch (value) {
        case "REST":
            return "Em Repouso"
            break;
        case "SLIGHTLY_CONTRACTED":
            return "Levemente Contraído"
            break;
        case "CONTRACTED":
            return "Contraído"
            break;
        case "STRONGLY_CONTRACTED":
            return "Fortemente Contraído"
            break;
    }
}

function formatNumber(value) {
    if (value == 0) {
        return "Em Repouso"
    } else {
        return "Rotação para " + value + "º"
    }
}

function reload() {
    showStatus()
}