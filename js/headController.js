function headInclination(position) {
    APIROBO.put("/api/head/inclination/" + position)
        .then(function (response) {
            if (formatInclination(response.data) == document.getElementById('head-inclination').innerText) {
                alertify.warning('Impossível inclinar mais!!!')
            } else {
                reload()
                alertify.success("Inclinado com sucesso")
            }
        })
        .catch(function (error) {
            // Erro
            alertify.error('Não possível atualizar a posição');
        });
}

function headRotationLeft() {
    APIROBO.put("/api/head/rotation/1")
        .then(function (response) {
            if (document.getElementById('head-inclination').innerText != "Para Baixo") {
                if (formatNumber(response.data) == document.getElementById('head-rotation').innerText) {
                    alertify.warning('Impossível rotacionar mais!!!')
                } else {
                    reload()
                    alertify.success("Rotacionado com sucesso")
                }
            } else {
                alertify.warning('Impossível rotacionar com a cabeça para baixo!!!')
            }
        })
        .catch(function (error) {
            // Erro
            alertify.error('Não possível atualizar a posição');
        });
}

function headRotationRight() {
    APIROBO.put("/api/head/rotation/-1")
        .then(function (response) {
            if (document.getElementById('head-inclination').innerText != "Para Baixo") {
                if (formatNumber(response.data) == document.getElementById('head-rotation').innerText) {
                    alertify.warning('Impossível rotacionar mais!!!')
                } else {
                    reload()
                    alertify.success("Rotacionado com sucesso")
                }
            } else {
                alertify.warning('Impossível rotacionar com a cabeça para baixo!!!')
            }
        })
        .catch(function (error) {
            // Erro
            alertify.error('Não possível atualizar a posição');
        });
}
