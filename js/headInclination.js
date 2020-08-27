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