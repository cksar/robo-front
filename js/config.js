// Variáveis globais
const APIROBO = axios.create({
    baseURL: 'https://robot-ndd.herokuapp.com/',
    headers: {
        'X-Custom-Header': 'foobar'
    }
});