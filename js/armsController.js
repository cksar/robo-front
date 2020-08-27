function elbowContraction(direction) {
    APIROBO.put("/api/arms/elbow/" + direction + "/CONTRACTED").then(function (response) {
        console.log(response)
        reload()
    })
}

function elbowRest(direction) {
    APIROBO.put("/api/arms/elbow/" + direction + "/REST").then(function (response) {
        console.log(response)
        reload()
    })
}

function wristLeft(direction) {
    APIROBO.put("/api/arms/wrist/" + direction + "/1").then(function (response) {
        console.log(response)
        reload()
    })
}

function wristRight(direction) {
    APIROBO.put("/api/arms/wrist/" + direction + "/-1").then(function (response) {
        console.log(response)
        reload()
    })
}