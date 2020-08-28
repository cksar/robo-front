function elbowContraction(direction) {
    APIROBO.put("/api/arms/elbow/" + direction + "/CONTRACTED")
        .then(function (response) {
            if (response.data == document.getElementById('elbow-' + direction).innerText) {
                alertify.warning('Impossível contraír mais!!!')
            } else {
                reload()
                alertify.success("Músculo Contraído com sucesso")
            }
        })
        .catch(function (error) {
            // Erro
            alertify.error('Não possível atualizar a posição');
        });
}

function elbowRest(direction) {
    APIROBO.put("/api/arms/elbow/" + direction + "/REST")
        .then(function (response) {
            if (response.data == document.getElementById('elbow-' + direction).innerText) {
                alertify.warning('Impossível relaxar mais!!!')
            } else {
                reload()
                alertify.success("Músculo relaxado com sucesso")
            }
        })
        .catch(function (error) {
            // Erro
            alertify.error('Não possível atualizar a posição');
        });
}

function wristLeft(direction) {
    APIROBO.put("/api/arms/wrist/" + direction + "/1")
        .then(function (response) {
            if (document.getElementById('elbow-' + direction).innerText == "STRONGLY_CONTRACTED") {
                if (response.data == document.getElementById('wrist-' + direction).innerText) {
                    alertify.warning('Impossível rotacionar mais!!!')
                } else {
                    reload()
                    alertify.success("Rotacionado com sucesso")
                }
            } else {
                alertify.warning('Só é possível rotacionar se o músculo estiver fortemente contraído!!!')
            }
            console.log(response)
            reload()
        })
        .catch(function (error) {
            // Erro
            alertify.error('Não possível atualizar a posição');
        });
}

function wristRight(direction) {
    APIROBO.put("/api/arms/wrist/" + direction + "/-1")
        .then(function (response) {
            if (document.getElementById('elbow-' + direction).innerText == "STRONGLY_CONTRACTED") {
                if (response.data == document.getElementById('wrist-' + direction).innerText) {
                    alertify.warning('Impossível rotacionar mais!!!')
                } else {
                    reload()
                    alertify.success("Rotacionado com sucesso")
                }
            } else {
                alertify.warning('Só é possível rotacionar se o músculo estiver fortemente contraído!!!')
            }
            console.log(response)
            reload()
        })
        .catch(function (error) {
            // Erro
            alertify.error('Não possível atualizar a posição');
        });
}