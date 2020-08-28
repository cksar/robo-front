showStatus()

function showStatus(){
    APIROBO.get("/api/head/inclination").then(function (response) {
        let headInclination = document.getElementById('head-inclination')
        headInclination.innerHTML = response.data
    })
    APIROBO.get("/api/head/rotation").then(function (response) {
        let headRotation = document.getElementById('head-rotation')
        headRotation.innerHTML = response.data
    })
    APIROBO.get("/api/arms/elbow/left").then(function (response) {
        let elbowLeft = document.getElementById('elbow-left')
        elbowLeft.innerHTML = response.data
    })
    APIROBO.get("/api/arms/wrist/left").then(function (response) {
        let wristLeft = document.getElementById('wrist-left')
        wristLeft.innerHTML = response.data
    })
    APIROBO.get("/api/arms/elbow/right").then(function (response) {
        let elbowRight = document.getElementById('elbow-right')
        elbowRight.innerHTML = response.data
    })
    APIROBO.get("/api/arms/wrist/right").then(function (response) {
        let wristRight = document.getElementById('wrist-right')
        wristRight.innerHTML = response.data
    })
}

function reload() {
    showStatus()
}