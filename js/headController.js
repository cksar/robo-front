function headInclinationUp(){
    APIROBO.put("/api/head/inclination/UP").then(function (response) {
        console.log(response)
        reload()
    })
}

function headInclinationDown(){
    APIROBO.put("/api/head/inclination/DOWN").then(function (response) {
        console.log(response)
        reload()
    })
}

function headRotationLeft(){
    APIROBO.put("/api/head/rotation/1").then(function (response) {
        console.log(response)
        reload()
    })
}

function headRotationRight(){
    APIROBO.put("/api/head/rotation/-1").then(function (response) {
        console.log(response)
        reload()
    })
}
