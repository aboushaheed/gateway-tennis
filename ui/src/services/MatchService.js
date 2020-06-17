import axios from 'axios';

function serverErrors(error) {
    if (error.code === 'ECONNABORTED') {
        throw new Error("Timeout Error");
    } else if (!error.response) {
        throw new Error("Can not localize server");
    } else if (error.response && error.response.status === 500) {
        throw new Error("Fatal error");
    }
    throw error;
}

function getAllMatches() {
    return axios.get('/api/matchs')
        .then(response => response.data)
        .catch(serverErrors);
}

function getMatch(id) {
    return axios.get(`/api/matchs/${id}`)
        .then(response => response.data)
        .catch(serverErrors);
}

function startMatch(matchConfig) {
    const { playerOneName, playerTwoName, matchName,douceMode, ...properties } = matchConfig;
    console.log(matchConfig);
    return axios.post('/api/matchs',
    { ...properties,
        playerOneName: playerOneName,
        playerTwoName: playerTwoName,
        matchName: matchName,
        douceMode: douceMode
    }).then((response) => {
        return response.data;
    })
        .catch(serverErrors)
        .catch(error => {
            if (error.response && error.response.status === 409) {
                throw new Error(error.response.data.message);
            }
            throw error;
        });
}





export default ({
    startMatch,
    getAllMatches,
    getMatch
})